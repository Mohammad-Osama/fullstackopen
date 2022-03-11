import ReactDOM from 'react-dom';
/* import { BrowserRouter } from 'react-router-dom'
import { Route , Routes } from 'react-router'; */
import App from './App';

//<BrowserRouter>
 //   <Routes>
 //        <Route exact path='/' element={<App />} />  
  //       <Route exact path='/country/:name' element={<App />} />  
 //  </Routes>
 // </BrowserRouter>

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);
