import React from 'react';
import { Route, Routes } from "react-router-dom";

import TelaHome from './views/home/TelaHome';
import TelaEmpresa from './views/empresa/TelaEmpresa';
import TelaUsuario from './views/usuario/TelaUsuario';
import TelaLogin from './views/login/TelaLogin';
import PontosDeColeta from './views/coleta/PontosDeColeta'
import SobreNos from './views/SOBRENOS/SobreNos';
import HomeUsuario from './views/homeusuario/HomeUsuario';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <TelaHome/> } />             
                <Route path="tela-empresa" element={ <TelaEmpresa/> } />
                <Route path="tela-usuario" element={ <TelaUsuario/> } />
                <Route path="tela-login" element={ <TelaLogin/> } />
                <Route path="pontos-de-coleta" element={ <PontosDeColeta/> } />
                <Route path="sobre-nos" element={ <SobreNos/> } />
                <Route path="home-usuario" element={ <HomeUsuario/> } />


            </Routes>
        </>
    )
}

export default Rotas
