import React , { useState } from 'react';
import { Container, Grid, Header, Image, Form, Button, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuCental from "../../MenuCental";


const TelaUsuario = () => {
 

  const [nome, setNome] = useState();
  const [email, seteEmail] = useState();
  const [senha, setSenha] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  
  ;

  function cadastrar() {

		let usuarioRequest = {
		     nome: nome,
		     email: email,
         senha:senha,
		     dataNascimento: dataNascimento     
		     
		}
	
		axios.post("http://localhost:8082/api/usuario", usuarioRequest)
		.then((response) => {
		     console.log(' cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao cadastrar.')
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
			onChange={e => seteEmail(e.target.value)}

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
                    placeholder="Digite Sua Data de Nascimento"
                    type="date"
                    value={dataNascimento}
			onChange={e => setDataNascimento(e.target.value)}

                  />

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
};

export default TelaUsuario;