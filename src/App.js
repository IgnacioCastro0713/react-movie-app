import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import { Footer, MenuTop } from './components';
import { Home, NewMovies, Popular, Search, Movie, Error404 } from './pages';

function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router basename={process.env.PUBLIC_URL}>
        <Header style={ { zIndex: 1 } }>
          <MenuTop/>
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={ true }>
              <Home/>
            </Route>
            <Route path="/new-movies" exact={ true }>
              <NewMovies/>
            </Route>
            <Route path="/popular" exact={ true }>
              <Popular/>
            </Route>
            <Route path="/search" exact={ true }>
              <Search/>
            </Route>
            <Route path="/movie/:id" exact={ true }>
              <Movie/>
            </Route>
            <Route path="*">
              <Error404/>
            </Route>
          </Switch>
        </Content>
        <Footer/>
      </Router>
    </Layout>
  );
}

export default App;
