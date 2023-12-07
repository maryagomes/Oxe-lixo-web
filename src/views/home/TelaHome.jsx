import React from "react";
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';


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
            </Menu>

           
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                
                {/* Div 1 */}
                <div style={{ width: '100%',  marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />               
                </div>  

             {/* Div 2 */}
<div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>   
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
    
    {/* Coluna 1 */}
    <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>O QUE É LIXO ELETRÔNICO?</h2>
      <img src="lixo eletronico.jpg" alt="Imagem 1" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
      <p>E-lixo, resíduos de equipamento eletroeletrônico (REEE) ou lixo eletrônico.</p>
      <p>Todos esses termos se referem à mesma coisa: produtos elétricos e eletrônicos quebrados,</p>
      <p>danificados ou sem utilidade por algum motivo e pilhas descarregadas que devem ser descartados.</p>
    </div>
    
    {/* Coluna 2 */}
    <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>QUAIS AS CONSEQUENCIAS DO LIXO ELETRÔNICO</h2>
      <img src="Duvida.jpg" alt="Imagem 2" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
      <p>Poluição do solo e da água.</p>
      <p>Riscos para a saúde humana.</p>
     
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

