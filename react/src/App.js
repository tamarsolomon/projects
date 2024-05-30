import './App.css';
import { Provider } from 'react-redux';
import { Routing } from './components/routing';
import { Login } from './components/login';
import { MyProvider } from './contex';
import {Nav} from './components/nav';
import {store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const managare={name:"manager",pass:"1234"}
  return <> 
  
  <MyProvider value={managare}>
  <Provider store={store}>
     <BrowserRouter>
      <Nav></Nav>
      <Routing></Routing>
    </BrowserRouter>
  </Provider>
  </MyProvider>
  </>
}

export default App;
