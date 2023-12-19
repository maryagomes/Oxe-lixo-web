import React from "react";
import { Link, } from 'react-router-dom';
import { Menu} from 'semantic-ui-react';


export default function MenuCental() {
  
  return (
    <Menu fixed="top" inverted style={{ background: '#ed9121', display: 'flex', justifyContent: 'center' }}>
      <Menu.Item as={Link} to="/">HOME</Menu.Item>     
      <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
      <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
      
 
    </Menu>
    
  );
}
