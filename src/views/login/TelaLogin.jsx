import React from 'react';
import { Container, Grid, Image, Form, Button ,Segment} from 'semantic-ui-react';
import MenuCental from "../../MenuCental";


const TelaLogin = () => {
  
  return (
    
    <Container fluid>
      <MenuCental />
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="./logosemfundo.jpg" size='large'  />

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
