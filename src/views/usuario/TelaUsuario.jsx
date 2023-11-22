import React from 'react';
import { Container, Grid, Header, Image, Form, Button } from 'semantic-ui-react';

const TelaUsuario = () => {
  return (
    <Container fluid>
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
                  />
                  <Form.Input
                  required
                    fluid
                    icon="mail"
                    iconPosition="left"
                    label="E-mail"
                    placeholder="Digite Seu E-mail"
                    type="email"
                  />
                  <Form.Input
                  required
                    fluid
                    icon="lock"
                    iconPosition="left"
                    label="Senha"
                    placeholder="Digite Sua Senha"
                    type="password"
                  />
                  <Form.Input
                  required
                    fluid
                    icon="calendar"
                    iconPosition="left"
                    label="Data de Nascimento"
                    placeholder="Digite Sua Data de Nascimento"
                    type="date"
                  />

                  <Button color="teal" fluid size="large">
                    Cadastrar
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