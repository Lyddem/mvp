import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


  render () {
    return (
      <div id = 'header'>
        Hello from index.jsx!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));