import React from 'react';
import axios from 'axios';

class Landing extends React.Component {
 constructor(props) {
   super(props);

   var state = {
    word: '',
    practice: '',
    lastWord: ''
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
  var practice = this.state.practice; //word to compare with last word from database!
  console.log(practice, '<--PRACTICE')
  axios.get('/getLastWord')
  .then((response) => {
    console.log('response FROM CHECKANSWER', response.data[0].word)
    this.setState({lastWord: response.data[0].word})

    if(response.data[0].word === this.state.practice) {
      alert("YEA!");
    } else {
      alert("Nope, try again!");
    }

  })
  .catch(function(error) {
    console.log(error);
  })

  // console.log('last word')
  // if(this.state.practice === this.state.lastWord) {
  //   console.log('TRUE');
  // }
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