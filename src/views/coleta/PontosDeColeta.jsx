import React, { useState } from 'react';
import { Container, Grid, Input, Image, Segment } from 'semantic-ui-react';

const GoogleMapSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
      const response = await fetch(`URL_DA_API_DO_GOOGLE_MAPS?query=${term}`);
      const data = await response.json();
      setSearchResults(data.results);  // Atualizar com a estrutura real da resposta da API
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  const handleSearchSubmit = () => {
    // Lógica para processar a submissão da pesquisa, se necessário.
    // Atualmente, apenas limpamos o campo de pesquisa.
    setSearchTerm('');
  };

  return (
    <Container fluid>
      <Grid centered style={{ marginTop: '50px' }}>
        <Grid.Column width={8}>
          <Input
            fluid
            icon="search"
            placeholder="Pesquisar cidades e lugares..."
            value={searchTerm}
            onChange={handleSearchChange}
            action={{ icon: 'search', onClick: handleSearchSubmit }}
          />
          
          <Segment>
            {searchResults.map((result) => (
              <div key={result.place_id}>
                {result.name}
                {/* Adicione mais informações conforme necessário */}
              </div>
            ))}
            
          </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
        <Segment style={{ background: 'transparent', border: 'none',  alignItems: 'center',  display: 'flex'}}>
            <Image
              src=".\mascotedecoleta2.jpg"  
               size="small"  // Defina o tamanho como "small" para tornar a imagem menor
               spaced
               style={{ background: 'transparent', boxShadow: 'none' }} 
            />
            <p style={{ background: '#ffffff' }}>
            OLÁ, SOU O MASCOTE DE PONTOS E VOU LHE AJUDAR A ENCONTRAR UM PONTO DE COLETA. 
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default GoogleMapSearch;
