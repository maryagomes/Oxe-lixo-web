import React from 'react';
import { Route, Routes } from "react-router-dom";

import TelaHome from './views/home/TelaHome';
import TelaEmpresa from './views/empresa/TelaEmpresa';
import TelaUsuario from './views/usuario/TelaUsuario';
import TelaLogin from './views/login/TelaLogin';
import PontosDeColeta from './views/coleta/PontosDeColeta'

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <TelaHome/> } />             
                <Route path="tela-empresa" element={ <TelaEmpresa/> } />
                <Route path="tela-usuario" element={ <TelaUsuario/> } />
                <Route path="tela-login" element={ <TelaLogin/> } />
                <Route path="pontos-de-coleta" element={ <PontosDeColeta/> } />

            </Routes>
        </>
    )
}

export default Rotas
