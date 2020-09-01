import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "TulasiJagan",
    }
  }

  render() {
    return (
      <div>
        <Home title={this.state.title} />
      </div>
    );
  }
}

export default App;
