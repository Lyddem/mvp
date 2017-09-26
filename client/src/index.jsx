import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx'

class App extends React.Component {

  render () {
    return (
      <Landing />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));