import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: true,
      content: undefined
    };
  }

  componentDidMount() {
    fetch("http://ec2-35-178-211-121.eu-west-2.compute.amazonaws.com/api").then(
      response => this.setState({ placeholder: false, content: response })
    );
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
