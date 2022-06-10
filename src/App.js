import './App.css';
import { Redirect, Route } from 'wouter';
import Home from './Paginas/Home/Home';
import Registro from './Paginas/Auth/Registro';
import Login from './Paginas/Auth/Login';
import Profile from './Paginas/Profile/Profile';
import axios from 'axios';
import Entrenamientos from './Paginas/Entrenamientos/Entrenamientos';
import SobreNosotros from './Paginas/SobreNosotros/SobreNosotros';
import Pistas from './Componentes/Pistas/Pistas';
import Torneos from './Paginas/Torneos/Torneos';
import Dashboard from './Paginas/Dashboard/Dashboard';
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className='contenido'>
      <Route
        component={Dashboard}
        path="/Dashboard">
      </Route>
      <Route
        component={Home}
        path="/">
      </Route>
      <Route
        path="/reservas">
        {!localStorage.getItem('auth_token') ? <Login /> : <Pistas />}
      </Route>
      <Route
        path="/Login">
        {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
      </Route>
      <Route
        path="/register">
        {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Registro />}
      </Route>
      <Route
        path="/profile">
        {!localStorage.getItem('auth_token') ? <Login /> : <Profile />}
      </Route>
      <Route
        component={Entrenamientos}
        path="/entrenamientos">
      </Route>
      <Route
        component={SobreNosotros}
        path="/SobreNosotros">
      </Route>
      <Route
        component={Torneos}
        path="/Torneos">
      </Route>
    </div >
  );
}

export default App;