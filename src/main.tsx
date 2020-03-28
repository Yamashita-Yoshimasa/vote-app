import * as React from 'react';
import * as ReactDOM from 'react-dom';
//screens
import SelectPrefecture from './screens/SelectPrefecture';
import Top from './screens/top';
import Confirm from './screens/confirm';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <Top />
        <Confirm />
        <SelectPrefecture />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));