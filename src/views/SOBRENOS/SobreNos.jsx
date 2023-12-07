import React from "react";
import { Container, Header, Image, Segment, List, Card } from 'semantic-ui-react';
import MenuCental from "../../MenuCental";

const SobreNos = () => {
  const equipe = [
    { nome: "Membro 1",    
      foto: "maria.jpg",
      descricao: "Maria Dos Prazeres, nossa desenvolvedora de backend.",
    },
    { nome: "Membro 2",   
      foto: "url_da_foto_2.jpg",
      descricao: "Wilson Roberto,nosso desenvolvedor de backend.",
    },
    { nome: "Membro 3",    
      foto: "wesley.jpg",
      descricao: "Wesley Vinicius,nosso desenvolvedor de frontend.",
    },
    { nome: "Membro 4",
      foto: "aluska.jpg",
      descricao: "Aluska Soares,nossa desenvolvedora de frontend.",
    },
  ];

  return (
    <Container fluid style={{ padding: '20px' }}>
         <MenuCental />
         
      <Image src="logo.jpg" size="medium" centered />

      <Segment>
        <Header as="h2">Sobre a Empresa:</Header>
        <p>Em plena terra pernambucana, nasce a Oxe-Lixo, uma empresa comprometida com a preservação do nosso belo estado e, por extensão, do nosso planeta. Nosso nome reflete não apenas a nossa origem, mas também a nossa missão: Oxe, estamos aqui para transformar a maneira como lidamos com o lixo eletrônico.</p>

         <p> Na Oxe-Lixo, acreditamos que a conscientização é o primeiro passo para a mudança. Sabemos que o lixo eletrônico é um desafio crescente e, por isso, dedicamos nossos esforços a educar e inspirar a comunidade. Queremos que cada pernambucano se torne um guardião da natureza, entendendo a importância de descartar eletrônicos de maneira responsável.</p>

         <p>Nossos esforços não se limitam apenas à conscientização. Implementamos práticas sustentáveis e seguras para o descarte de lixo eletrônico, garantindo que cada dispositivo tenha um destino apropriado, sem causar danos ao meio ambiente. Na Oxe-Lixo, transformamos a responsabilidade ambiental em ação tangível.</p>

         <p>Junte-se a nós nesta jornada. Seja parte da mudança, da conscientização e do cuidado com o nosso lar compartilhado. A Oxe-Lixo está aqui para liderar pelo exemplo e criar um impacto positivo duradouro. Porque, afinal, cuidar da natureza é uma responsabilidade de todos nós. Oxe-Lixo: Juntos, preservamos o futuro!</p>
      </Segment>

      <Segment>
        <Header as="h2">Equipe</Header>
        <Card.Group itemsPerRow={4}>
          {equipe.map((membro, index) => (
            <Card key={index}>
              <Image src={membro.foto} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{membro.nome}</Card.Header>              
                <Card.Description>{membro.descricao}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>

      <Segment>
        <Header as="h2">Informações de Contato:</Header>
        <List>
          <List.Item>Endereço: Rua da Empresa, Número, Cidade</List.Item>
          <List.Item>E-mail: contato@empresa.com</List.Item>
          <List.Item>Telefone: (XX) XXXX-XXXX</List.Item>
        </List>
      </Segment>
    </Container>
  );
};

export default SobreNos;
