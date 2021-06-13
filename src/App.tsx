
import React, {  useState } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Card, { CardVar } from './components/Card';
import EventsExample from './components/EventsExample';
import Profile from './components/Profile';
import TodoPage from './components/TodoPage';
import UserPage from './components/UserPage';
import WebSocketData from './components/WebSocketData';

function App() {

  let [variant, setVar] = useState(CardVar.outlined)

  const toggleVar = ()=>{
    variant === CardVar.outlined?setVar(CardVar.primary):setVar(CardVar.outlined)
  }

  return (
    <BrowserRouter>
    <NavLink to={'/ws'}>WS</NavLink>
    <NavLink to={'/user'}>Users</NavLink>
    <NavLink to={'/todo'}>Todos</NavLink>
    <NavLink to={'/'}>Main</NavLink>
    <div>test
    <Card onClick ={toggleVar} variant = {variant} width ='100px' height='50px'>
      <button>none</button>
    </Card>
    <EventsExample/>
    <Route path={'/user'} exact>
      <UserPage/>
    </Route>
    <Route path={'/todo'} exact>
      <TodoPage/>
    </Route>
    <Route path={'/user/:id'}>
      <Profile/>
    </Route>
    <Route path={'/ws'} exact>
      <WebSocketData/>
    </Route>
    
    </div></BrowserRouter>
  );
}

export default App;
