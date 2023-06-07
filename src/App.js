import './App.css';
import FirstPage from "./routes/FirstPage"
import SecondPage from './routes/SecondPage';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/ingredient' element={<SecondPage />} />
      </Routes>
      </BrowserRouter>

    
  );
}

export default App;
