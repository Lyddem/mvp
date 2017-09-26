import React from 'react';
import axios from 'axios';

class Landing extends React.Component {
 constructor(props) {
   super(props);

   var state = {
    word: ''
   };

   this.handleChange = this.handleChange.bind(this)
   this.submitText = this.submitText.bind(this)
 }

handleChange() {
  alert(this.state.word);
  console.log(this.state.word);
}

submitText(phrase){
  // axios.post('/submitText', this.state.word);
  // .then(function(res) {
  //   console.log('client: posted successfully');
  // });
};

  render () {
    return (
      <div>
        <div id="cta">
           <div id = 'header'> Memorize IT </div>

            Type in what you'd like to memorize <br /> <br />
            <input type="text" onChange={(e)=>{this.setState({word: e.target.value})}}></input>
            <input type="submit" onClick={this.handleChange}></input> <br /><br /><br />

            Test Yourself!
        </div>


      </div>
    );
  }
}

export default Landing;