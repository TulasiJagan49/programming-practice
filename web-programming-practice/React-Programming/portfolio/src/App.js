import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Tulasi Jagan",
    }
  }

  render() {
    return (
      <Home title={this.state.title}/>
    );
  }
}

export default App;
