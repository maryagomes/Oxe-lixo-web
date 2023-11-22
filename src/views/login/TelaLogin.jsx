import React from 'react';
import { Container, Grid, Header, Image, Form, Button ,Segment} from 'semantic-ui-react';

const TelaLogin = () => {
  return (
    <Container fluid>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="write" textAlign="center">
            <Image src="./planta.jpg" size='huge'  /> Login
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Digite seu email"
                type="email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Digite sua senha"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default TelaLogin;
