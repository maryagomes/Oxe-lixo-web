import React from "react";
import { Link } from 'react-router-dom';
import { Card, Container, Image, Menu } from 'semantic-ui-react';


export default function TelaHome() {
    
    return (
               
           <div>
            <Menu fixed="top" inverted style={{ background: '#ed8321', display: 'flex', justifyContent: 'center' }}>
                <Menu.Item as={Link} to="/">HOME</Menu.Item>
                <Menu.Item as={Link} to="/tela-usuario">INSCREVER</Menu.Item>
                <Menu.Item as={Link} to="/tela-login">LOGIN</Menu.Item>
                <Menu.Item as={Link} to="/tela-empresa">EMPRESA</Menu.Item>
                <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
                <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
                
            </Menu>

           
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                
                {/* Div 1 */}
                <div style={{ width: '100%',  marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />               
                </div>  

            {/* Div 2 */}
            <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30, }}>
                 {/* Div 3 */}
            <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '0px', margintop:'50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30, background: '#F0F8FF' }}>
                    {/* Coluna 1 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='causas.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4em'  }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header>Causas do lixo eletronico</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 2 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='coleta.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:'5em' }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header>Como fazer o descarte</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 3 */}
                    <div style={{ width: '30%', position: 'relative', background:'' }}>
                        <Image src='pontuacoes.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5em' }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header>Pontuações</Card.Header>
                            </Card.Content>
                        </Card>
                        </div>
                    </div>
</div>



{/* Div 4 */}
<div >
    

    {/* Div 5 */}
    <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '0px', margintop:'50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30 }}> 
    <div  style={{ borderRadius:'5em', width: '40em', height:'30em',  padding: '80px', marginBottom: '20px', background: '#ffffff70', textAlign: 'center' }}>    
    <h2>Olá, sou o mascote OxE-lixo</h2> 
    <p>Fui criado em 2023, para ajudar você a encontrar o seu ponto de coleta.
    <p>venha comigo nessa incrível viagem!</p>
    </p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{}}>
            <Image src='mascotedecoleta.jpg' size="medium" centered circular />          
        </div>
        </div>
</div>
</div>

{/* Div 6 */}
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

