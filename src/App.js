import { Segment } from 'semantic-ui-react';
import './App.css';
import TelaUsuario from './views/usuario/TelaUsuario';
//import TelaLogin from './views/login/TelaLogin';
//import TelaHome from './views/home/TelaHome';


function App() {

  return (

    <div className="App">
      
      <TelaUsuario/>

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto Oxe-lixo- contato:(81)0000-0000
        </Segment>
      </div>

    </div>
  );
}

export default App;

      
