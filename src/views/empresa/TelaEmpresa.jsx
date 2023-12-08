import React, { useEffect, useState }from 'react';
import { Container, Grid, Header, Image, Form, Button} from 'semantic-ui-react';
import { /*Link*/useLocation } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/Util';
import InputMask from 'react-input-mask';
import MenuCental from "../../MenuCental";

const TelaEmpresa = () => {
  
  const { state } = useLocation();
  const [idEmpresa, setIdEmpresa] = useState();

  useEffect(() => {
      if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/empresa/" + state.id)
.then((response) => {
                         setIdEmpresa(response.data.id)
                         setNomeEmpresa(response.data.nomeEmpresa)
                         setSenha(response.data.senha)
                         setDataFundacao(formatarData(response.data.dataFundacao))
                         setEmail(response.data.email)
                         setSite(response.data.site)
                         setCnpj(response.data.cnpj)
          })
      }
}, [state])

  const [nomeEmpresa, setNomeEmpresa] = useState();
  const [senha, setSenha] = useState();
  const [cnpj, setCnpj] = useState();
  const [dataFundacao, setDataFundacao] = useState();
  const [email, setEmail] = useState();
  const [site, setSite] = useState();


  function formatarData(dataParam) {

    if (dataParam === null || dataParam === '' || dataParam === undefined) {
        return ''
    }

    //let arrayData = dataParam.split('-');
    return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0];
}


  function cadastrar() {

		let empresaRequest = {
		     nomeEmpresa: nomeEmpresa,
		     email: email,
         senha:senha,
		     dataFundacao: dataFundacao,
         site:site,
         cnpj:cnpj,
		     
		}

		axios.post("http://localhost:8080/api/empresa", empresaRequest)
		.then((response) => {
      notifySuccess(' cadastrado com sucesso.')
		})
		.catch((error) => {
      if (error.response) {
      notifyError(error.response.data.errors[0].defaultMessage)
      } else {
      notifyError(mensagemErro)
      } 
      })
	}

 

  return (
    <Container fluid>
       <MenuCental />
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" color="write" textAlign="center">
            Cadastre sua empresa
          </Header>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form size="large">
                  <Form.Input
                  required
                    fluid
                    icon="user"
                    iconPosition="left"
                    label="Nome da Empresa"
                    placeholder="Digite o Nome da Empresa"
                    type="text"
                    value={nomeEmpresa}
				            onChange={e => setNomeEmpresa(e.target.value)} 
                  />
                  <Form.Input
                  required
                    fluid
                    icon="mail"
                    iconPosition="left"
                    label="E-mail"
                    placeholder="Digite Seu E-mail"
                    type="email"
                    value={email}
				           onChange={e => setEmail(e.target.value)} 
                  />
                  <Form.Input
                  required
                    fluid
                    icon="lock"
                    iconPosition="left"
                    label="Senha"
                    placeholder="Digite Sua Senha"
                    type="password"
                    value={senha}
				            onChange={e => setSenha(e.target.value)} 
                  />

                  <Form.Input
                  required
                    fluid
                    icon="address card"
                    iconPosition="left"
                    label="CNPJ"
                    placeholder="Digite o CNPJ"
                    type="text"
                    value={cnpj}
			              onChange={e => setCnpj(e.target.value)}

                  />

                  <Form.Input
                  required
                    fluid
                    icon="globe"
                    iconPosition="left"
                    label="Website"
                    placeholder="Digite o site"
                    type="text"
                    value={site}
				onChange={e => setSite(e.target.value)} 
                  />
                    
                    
                  

                  <Form.Input
                  required
                    fluid
                    icon="calendar"
                    iconPosition="left"
                    label="Data de Fundação">
                    
                    <InputMask 
                    mask="99/99/9999" 
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataFundacao}
            onChange={e => setDataFundacao(e.target.value)}
                /> 
                  </Form.Input>

                  <Button color="teal" fluid size="large" onClick={() => cadastrar()}>
                    Cadastrar
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Image src="./mascotedepontos.jpg" size="large" rounded 
                style={{ width: '5000px', height: '500px'}}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default TelaEmpresa;