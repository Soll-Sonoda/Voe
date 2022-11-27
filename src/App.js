import Profissional from './componentes/Profissional';
import './App.css';
import Logo from './Logo.png';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Course from './componentes/Course';
import Rotas from './componentes/Rota';
import Services from './componentes/Services';
import Mo from './componentes/Mo';



function App() {
  return (
    
    <div className="App">
      <Router> 
      <header className="App-header">
        


      <Rotas/>
       
        
        

      </header>

      <body className="App-body">
       
        <Routes>
          <Route exact path='/Services' element= {<Services/>}/>
          <Route path='/Market' element={<Mo/>}/>
          <Route path='/Cursos' element= {<Course/>}/>
        </Routes>
        

      </body>
      
      
      <footer className="App-footer">
      <Profissional/>
      <img className="Logo" src={Logo} alt="logo do voe"/>

      </footer>
      </Router>
    </div>
    
  );
}

export default App;
