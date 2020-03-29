import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//screens

import Top from './screens/top';
import Aichi from './screens/Aichi';
import Mie from './screens/Mie';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="container">
          <Route exact path="/" component={Top} />
          <Route exact path="/愛知" component={Aichi} />
          <Route exact path="/三重" component={Mie} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));