import React , { useEffect,useState } from 'react';
import { Container, Grid, Header, Image, Form, Button, Icon } from 'semantic-ui-react';
import { /*Link*/useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/Util';
import MenuCental from "../../MenuCental";


const TelaUsuario = () => {
 
  const { state } = useLocation();
  const [idUsuario, setIdUsuario] = useState();

  useEffect(() => {
      if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/usuario/" + state.id)
.then((response) => {
                         setIdUsuario(response.data.id)
                         setNome(response.data.nome)
                         setSenha(response.data.senha)
                         setFoneCelular(response.data.foneCelular)
                         setDataNascimento(formatarData(response.data.dataNascimento))
                         setEmail(response.data.email)
                         

                       
          })
      }
}, [state])

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [foneCelular,setFoneCelular]=useState();
  const [dataNascimento, setDataNascimento] = useState();


  function formatarData(dataParam) {

    if (dataParam === null || dataParam === '' || dataParam === undefined) {
        return ''
    }

    let arrayData = dataParam.split('-');
    return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
}
  
  function cadastrar() {

		let usuarioRequest = {
		     nome: nome,
		     email: email,
         senha:senha,
		     dataNascimento: dataNascimento     
		     
		}
	
		axios.post("http://localhost:8080/api/usuario", usuarioRequest)
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
            Cadastro de Usuário
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
                    label="Nome"
                    placeholder="Digite Seu Nome"
                    type="text"
                    value={nome}
			onChange={e => setNome(e.target.value)}

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
                    icon="calendar"
                    iconPosition="left"
                    label="Data de Nascimento" 
                    >
                    
                    <InputMask 
                    mask="99/99/9999" 
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
            onChange={e => setDataNascimento(e.target.value)}
                /> 
                  </Form.Input>
                  
                  <Form.Input
                  required
                    fluid
                    icon="phone"
                    iconPosition="left"
                    label="Número" 
                    >
                    
                    <InputMask 
                    mask="(99) 99999-9999" 
                    maskChar={null}
                    placeholder="Ex: (81) 98875-5544"
                    value={foneCelular}
            onChange={e => setFoneCelular(e.target.value)}
                /> 
                  </Form.Input>
                  

                  <Button color="teal" fluid size="large"                   
                   
                    onClick={() => cadastrar()}
                    >
				<Icon name='cadastrar' />
				cadastrar


                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Image src="./mascotedepontos.jpg" size="large" rounded />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );

}
export default TelaUsuario;