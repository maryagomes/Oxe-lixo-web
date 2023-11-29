import React from "react";
import { Container, Image, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function TelaHome() {
    return (
               
           <div>
            <Menu fixed="top" inverted style={{ background: '#ed9121', display: 'flex', justifyContent: 'center' }}>
                <Menu.Item as={Link} to="/">HOME</Menu.Item>
                <Menu.Item as={Link} to="/tela-usuario">INSCREVER</Menu.Item>
                <Menu.Item as={Link} to="/tela-login">LOGIN</Menu.Item>
                <Menu.Item as={Link} to="/tela-empresa">EMPRESA</Menu.Item>
                <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
            </Menu>

           
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                
                {/* Div 1 */}
                <div style={{ width: '100%',  marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />               
                </div>  

               {/* Div 2 */}
      <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>   
        <div style={{ minWidth: '100%', padding: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <div>
                <h2>QUEM SOMOS?</h2>
                <p>Somos uma empresa preocupada com o meio ambiente e no descarte inadequado de lixo eletrônico.</p>
            </div>
            <br></br>
            <div>
                <h2>OBJETIVO:</h2>
                <p>Nosso objetivo é conscientizar e mostrar opções seguras sobre o descarte de lixo eletrônico.</p>
            </div>
        </div>
    </div>   
    </div>

{/* Div 3 */}
<div style={{ width: '100%',  padding: '80px', marginBottom: '20px', background: '#008080', textAlign: 'center' }}>    
    <h2>EMPRESAS PARCEIRAS:</h2> 
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{}}>
            <Image src='ambipar.jpg' size='medium' centered circular />          
        </div>
        <div>
            <Image src='celpe.jpg' size='small' centered circular bordered/>           
        </div>
        <div>
            <Image src='duraceel.jpg' size='small' centered circular />          
        </div>
        <div>
            <Image src='atacadao.jpg' size="small" centered circular />          
        </div>
    </div>
</div>
            </Container>
       </div>
    )
}

