import React from 'react';
import axios from 'axios';

class Landing extends React.Component {
 constructor(props) {
   super(props);

   var state = {
    word: ''
   };

   this.submitText = this.submitText.bind(this);
 }



submitText() {
  axios.post('/submitText', {data: this.state.word})
  .then(function(response){
    console.log('RESPONSE', response);
  })
  .catch(function(err){
    console.log(err);
  })
}

  render () {
    return (
      <div>
        <div id="cta">
           <div id = 'header'> Memorize IT! </div>

            Type in what you'd like to memorize <br /> <br />
            <input type="text" onChange={(e)=>{this.setState({word: e.target.value})}}></input>
            <input type="submit" onClick={this.submitText}></input> <br /><br /><br />

            Test Yourself!
        </div>


      </div>
    );
  }
}

export default Landing;