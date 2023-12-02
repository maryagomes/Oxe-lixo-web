import React from 'react';
import { Container, Grid, Header, Image, Form, Button } from 'semantic-ui-react';
import MenuCental from "../../MenuCental";

const TelaEmpresa = () => {
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
                    icon="address card"
                    iconPosition="left"
                    label="CNPJ"
                    placeholder="Digite o CNPJ"
                    type="text"
                  />

                  <Form.Input
                  required
                    fluid
                    icon="globe"
                    iconPosition="left"
                    label="Website"
                    placeholder="Digite o site"
                    type="text"
                  />
                    
                    
                  

                  <Form.Input
                  required
                    fluid
                    icon="calendar"
                    iconPosition="left"
                    label="Data de Fundação"
                    placeholder="Digite a Data de Fundação"
                    type="date"
                  />

                  <Button color="teal" fluid size="large">
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