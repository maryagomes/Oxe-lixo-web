import React from "react";
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Card } from 'semantic-ui-react';


export default function TelaHome() {
    return (
               
           <div>
            <Menu fixed="top" inverted style={{ background: '#ed9121', display: 'flex', justifyContent: 'center' }}>
                <Menu.Item as={Link} to="/">HOME</Menu.Item>
                <Menu.Item as={Link} to="/tela-usuario">INSCREVER</Menu.Item>
                <Menu.Item as={Link} to="/tela-login">LOGIN</Menu.Item>
                <Menu.Item as={Link} to="/tela-empresa">EMPRESA</Menu.Item>
                <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
                <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
                <Menu.Item as={Link} to="/home-usuario">Usuario</Menu.Item>

            </Menu>

           
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                
                {/* Div 1 */}
                <div style={{ width: '100%',  marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />               
                </div>  

            {/* Div 2 */}
            <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    {/* Coluna 1 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='tela1.jpg' style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}>
                            <Card.Content>
                                <Card.Header>Titulo 1</Card.Header>
                                <Card.Meta>
                                    <Link to="/link1">Link 1</Link>
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 2 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='tela2.jpg' style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}>
                            <Card.Content>
                                <Card.Header>Titulo 2</Card.Header>
                                <Card.Meta>
                                    <Link to="/link2">Link 2</Link>
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 3 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='tela3.jpg' style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}>
                            <Card.Content>
                                <Card.Header>Titulo 3</Card.Header>
                                <Card.Meta>
                                    <Link to="/link2">Link 3</Link>
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    </div>
</div>


{/* Div 3 */}
<div style={{ width: '100%',  padding: '80px', marginBottom: '20px', background: '#008080', textAlign: 'center' }}>    
    <h2>EMPRESAS PARCEIRAS:</h2> 
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{}}>
            <Image src='ambipar.png' size='small' centered circular />          
        </div>
        <div>
            <Image src='celpe.png' size='small' centered circular bordered/>           
        </div>
        <div>
            <Image src='duracell.png' size='small' centered circular />          
        </div>
        <div>
            <Image src='atacadao.png' size="small" centered circular />          
        </div>
    </div>
</div>
            </Container>
       </div>
    )
}

