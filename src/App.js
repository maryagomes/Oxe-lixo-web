import './App.css';
import Home from './views/home/Home';
import { Segment } from 'semantic-ui-react';
function App() {

  return (

    <div className="App">
      
      <Home />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto Oxe-lixo - IFPE Jaboatão dos Guararapes, alunos: Maria dos prazeres, Wilson roberto, Wesley vinicius e Aluska
        </Segment>
      </div>

    </div>
  );
}

export default App;

      
