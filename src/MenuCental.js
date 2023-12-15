import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
//import { logout } from './views/util/AuthenticationService';




export default function MenuCental() {
  return (
    <Menu fixed="top" inverted style={{ background: '#ed9121', display: 'flex', justifyContent: 'center' }}>
      <Menu.Item as={Link} to="/">HOME</Menu.Item>     
      <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
      <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
      <Menu.Item className='navbar__item--mobile' onClick={this.logout} content='Sair' as={Link} to='/'/>

    </Menu>
  );
}
