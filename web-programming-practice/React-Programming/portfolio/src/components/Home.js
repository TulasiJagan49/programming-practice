import React from "react";
import NavigationBar from "./NavigationBar";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
        }
    }

    render() {
        return(
          <NavigationBar title={this.state.title} /> 
        )
    }
}