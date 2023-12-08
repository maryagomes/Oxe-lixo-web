import React from "react";
import { Container, Image, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function HomeUsuario() {
    return (
               
           <div>
            <Menu fixed="top" inverted style={{ background: '#ed9134', display: 'flex', justifyContent: 'center' }}>
                <Menu.Item as={Link} to="/">INICIO</Menu.Item>
                <Menu.Item as={Link} to="/tela-home">HOME</Menu.Item>
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
      <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>   
        <div style={{ minWidth: '100%', padding: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <div>
               
            </div>
           
            <div>
               
            </div>
        </div>
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