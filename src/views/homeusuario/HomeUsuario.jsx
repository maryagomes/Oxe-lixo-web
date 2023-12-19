import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Image, Menu, MenuItem, Modal } from 'semantic-ui-react';


import { FaUser } from 'react-icons/fa';

export default function HomeUsuario() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <Menu fixed="top" inverted style={{ background: '#ed9134', display: 'flex', justifyContent: 'space-between' }}>
                <MenuItem position="left">
                <Menu.Item as={Link} to="/">INICIO</Menu.Item>
                <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
                <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
                </MenuItem>
                
                <Menu.Item position='right'>
                <FaUser size='2em' onClick={openModal} style={{ cursor: 'pointer' }} />  
                </Menu.Item>
            </Menu>

            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                {/* Div 1 */}
                <div style={{ width: '100%', marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />
                </div>

                {/* Div 2 */}
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

                    {/* Seção 1 */}
                    <div style={{ width: '50%', padding: '70px' }}>                 
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p style={{ color: 'white' , fontSize: '1.3em'  }}> uso global da informática e o intenso tráfego de informações ocasionadas pela imensa necessidade do ser humano de se comunicar fez com que a humanidade usasse cada vez mais produtos elétricos e eletrônicos. 

Como consequência desse uso exacerbado, os produtos eletrônicos que não são mais úteis ou muitas vezes que se encontram ultrapassados são descartados, seja em lixos comuns ou em pontos de coleta especializados, resultando em um acúmulo imenso de lixo eletrônico. Tal acúmulo é tamanho que segundo dados da Global E-waste Monitor, organização filial da ONU com o intuito de monitorar o lixo eletrônico global, aponta que já foram gerados cerca de 44,7 milhões de metros cúbicos de lixo eletrônico no mundo em 2016. Além do mais, o consumo desses produtos chegou a 60 milhões de toneladas no mesmo ano.
Lixo eletrônico e impacto ambiental
Apesar da presença dos metais pesados no meio ambiente, geralmente eles são encontrados em quantidades mínimas, pois apenas essas pequenas quantidades são essenciais para a manutenção da vida. Além disso, muitos desses minérios encontram-se abaixo do solo em regiões de difícil acesso para a vida. 

Contudo, o elevado incentivo do uso de equipamentos eletrônicos fez o ser humano extrair e descartar cada vez mais esses metais pesados do solo, aumentando exponencialmente a emissão desses metais na vida, o que ao ser usado em excesso, torna-se letal para a vida.

Ao que aponta o Programa das Nações Unidas para o Meio Ambiente (PNUMA), o Brasil é o país emergente que mais gera lixo eletrônico por habitante, ocupando o primeiro lugar na geração de lixo eletrônico, seguido do México, Marrocos, África do Sul, China, Peru, Colômbia e Índia, considerando todo o lixo eletrônico gerado a partir de PC (kg per capita). 
                            <br></br>
                            <br></br>
                            Quais países geram mais lixo eletrônico no mundo?
                            <br></br>
                            <br></br>
                            <Image src="lixodospaises.jpg" fluid />
                            <br></br>                           
                            Os dados, divulgados anualmente pela Universidade das Nações Unidas em parceria com diversos órgãos internacionais, fazem parte do relatório The Global E-waste Monitor 2020.

Segundo o relatório, o Brasil gerou mais de 2 milhões de toneladas de lixo eletrônico em 2019, ficando atrás apenas da China (10,1 milhões de toneladas), EUA (6,9 milhões de toneladas), Índia (3,2 milhões de toneladas) e Japão (2,5 milhões de toneladas). Se considerarmos apenas os países da América Latina, o Brasil é o primeiro no ranking dos geradores.
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '50%', padding: '20px' }}>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Image src="reciclagem.jpg" fluid />
                            <p style={{ color: 'white',fontSize: '1.3em'  }}>Reciclagem de eletrônicos:
                            <br></br>
                            <br></br>
A reciclagem de equipamentos eletroeletrônicos é separada em oito categorias: eletrodomésticos (fogão, geladeira), eletroportáteis (ventilador, liquidificador), monitores, tecnologia da informação e telecomunicações (celulares, computadores), fios e cabos, pilhas e baterias, iluminação e painéis fotovoltaicos. Esse processo começa quando é determinado o fim da vida útil do aparelho eletrônico.

De acordo com o relatório do Projeto DATARE de 2021, coordenado pelo Cetem, se o equipamento fica obsoleto ou sofre algum dano, ele é coletado e transportado até centros de triagem de organizações atuantes em logística reversa, onde são separados por tipologia e seguem para as linhas de tratamento e recuperação de valor.
<br></br>
                            <br></br>
                            <br></br>
Por que reciclar eletrônicos é bom para o meio ambiente?
<br></br>
<br></br>
Muitos dos equipamentos eletrônicos contêm grandes quantidades de metais pesados, como o Cromo, o Cádmio e o Mercúrio, que são danosos ao meio ambiente. Caso esses equipamentos sejam descartados de forma incorreta, eles podem acabar contaminando o solo da região em que são descartados causando uma série de prejuízos à vida animal e vegetal da região. Além do que, o solo da região de descarte incorreto se torna impróprio para o cultivo, uma vez que as plantas poderão acabar se contaminando com tais metais.

Além disso, o descarte incorreto ainda pode gerar a contaminação dos rios, lagos e bacias próximas gerando uma cadeia de contaminação que pode chegar ao ser humano.

Contudo, ao reciclarmos os equipamentos eletrônicos evitamos que toda essa cadeia se forme. Ao descartarmos em pontos de coleta adequados, tais componentes são levados à centros de reciclagem a qual é reciclado todos os componentes que podem ser reciclados.

Com isso, nós podemos evitar a contaminação do ambiente e colaborar com nossas próprias produções diminuindo os resíduos tóxicos absorvidos pelos alimentos e ainda colaborando com a preservação ambiental. 
</p>
                        </div>
                    </div>
                    {/* Seção 3 */}
                    <aside style={{ width: '25%', padding: '20px' }}>
                        <ul>
                           <h2>VEJA MAIS NOTICIAS E MATÉRIAS SOBRE LIXO ELETRÔNICO: </h2>
                           <br></br>
                            <li><Link to="https://greeneletron.org.br/blog/tudo-o-que-voce-precisa-saber-sobre-o-lixo-eletronico/" style={{ color: 'white' }}>LIXO ELETRÔNICO</Link></li>
                            <br></br>
                            <li><Link to="https://www.ecycle.com.br/lixo-eletronico/" style={{ color: 'white' }}>COMO DESCARTAR?</Link></li>
                            <br></br>
                            <li><Link to="https://www.reciclasampa.com.br/artigo/mais-de-80-dos-brasileiros-acumulam-lixo-eletronico#:~:text=Mais%20de%2080%25%20dos%20brasileiros%20acumulam%20lixo%20eletr%C3%B4nico%20em%20casa,reversa%20do%20setor%20no%20pa%C3%ADs." style={{ color: 'white' }}>LIXO ELETRÔNICO E O BRASIL.</Link></li>
                            <br></br>  
                            </ul>                        
                    </aside>
                </div>

                {/* Div 3 */}
                <div style={{ width: '100%', padding: '80px', marginBottom: '20px', background: '#008080', textAlign: 'center' }}>
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

            {/* Modal para perfil */}
            <Modal open={modalOpen} onClose={closeModal} size='mini'>
                <Modal.Header>Perfil do Usuário</Modal.Header>
                <Modal.Content>
                    {/* Adicione as opções de "Editar Perfil" e "Configurações" aqui */}
                    <Button as={Link} to="/editar-perfil" fluid>Editar Perfil</Button>
                    <Button as={Link} to="/configuracoes" fluid>Configurações</Button>
                    <Button as={Link} to="/sair" fluid>Sair</Button>
                </Modal.Content>
            </Modal>
        </div>
    )
}
