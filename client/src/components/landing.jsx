import React from 'react';

class Landing extends React.Component {
 constructor(props) {
   super(props);
 }

  render () {
    return (
      <div>
        <div id="cta">
           <div id = 'header'> Memorize IT </div>

            Type in what you'd like to memorize <br /> <br />
            <input type="text"></input>
            <input type="submit"></input> <br /><br /><br />

            Test Yourself!
        </div>


      </div>
    );
  }
}

export default Landing;