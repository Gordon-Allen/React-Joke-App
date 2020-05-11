import React from 'react';
import ReactDOM from "react-dom"

import Joke from './Joke';
import jokesData from './jokesdata';

// class App extends React.Component {
//   jokeComponents = jokesData.map((joke) => (
//     <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
//   ));
//   render() {
//     return (
//       <div className="App">
//         <h1><em>Looking For a Laugh? </em>Here's A Few Office-Friendly Knee-Slappers For Ya:</h1>
//           {this.jokeComponents}
//       </div>
//     );
//   }}
  
  // const jokeComponents = jokesData.map((joke) => (
  //   <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  // ));

export class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoggedIn: true};
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  toggleLogin() {
    this.setState(() => {return {isLoggedIn: true}})
  }

  render = () => {
    return (
      <div>
        You are currently logged {this.state.isLoggedIn ? "in" : "out"}
        <button onClick={this.toggleLogin}>Switch</button>
      </div>
    );
  };

}

export default App;