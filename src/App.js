import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




function App() {

  return (

    <div className="App">
       <ToastContainer />
      <Rotas />


      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto Oxe-lixo- contato:(81)0000-0000
        </Segment>
      </div>

    </div>
  );
}

export default App;

      
