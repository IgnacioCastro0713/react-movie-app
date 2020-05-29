import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, NewMovies, Popular, Search, Movie, Error } from './pages';

function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          header...
        </Header>
        <Content>
          <Switch>
            <Route path="/" exat={ true }>
              <Home/>
            </Route>
            <Route path="/new-movies" exat={ true }>
              <NewMovies/>
            </Route>
            <Route path="/popular" exat={ true }>
              <Popular/>
            </Route>
            <Route path="/search" exat={ true }>
              <Search/>
            </Route>
            <Route path="/movie/:id" exat={ true }>
              <Movie/>
            </Route>
            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
