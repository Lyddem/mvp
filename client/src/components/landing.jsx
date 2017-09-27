import React from 'react';
import axios from 'axios';

class Landing extends React.Component {
 constructor(props) {
   super(props);

   var state = {
    word: '',
    practice: ''
   };

   this.submitText = this.submitText.bind(this);
   this.checkAnswer = this.checkAnswer.bind(this);
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

checkAnswer(){

  axios.get('/getLastWord')
  .then((response) => { //<-- sends back most recent entry

    //Compare with most recently inputed word in database
    if(response.data[0].word === this.state.practice) {
      alert("YEA!");
    } else {
      alert("Nope, try again!");
    }
  })
  .catch(function(error) {
    console.log(error);
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

            Test Yourself!  <br /> <br />
             <input type="text" placeholder="re-write your text here" onChange={(e)=>{this.setState({practice:e.target.value})}}></input>
            <input type="submit" onClick={this.checkAnswer}></input> <br /><br /><br />
        </div>
      </div>
    );
  }
}

export default Landing;