import React from 'react';
import './App.css';
import About from './About'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      aboutButtonUsed: false
    }
  }

  navigateToAboutPage = () => this.setState({aboutButtonUsed: !this.state.aboutButtonUsed})

  render() {
    return (
      <div className="App">
        
          <h1>Hi, there !!!</h1>
          <h2>I'm Tulasi Jagan</h2>
          <p> a software programmer.</p>
          <p> On my way to be a developer :)</p>
          <button onClick={this.navigateToAboutPage}> About </button>
          {this.state.aboutButtonUsed ? <About /> : null}
            
      </div>
    );
  }

}

export default App;
