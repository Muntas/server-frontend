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
    fetch("http://ec2-35-178-211-121.eu-west-2.compute.amazonaws.com/api")
      .then(response => response.json())
      .then(data => this.setState({ placeholder: false, content: data[0] }));
  }

  render() {
    return (
      <div>
        {this.state.placeholder ? (
          <h1>Hello</h1>
        ) : (
          <h1>{this.state.content.title}</h1>
        )}
      </div>
    );
  }
}

export default App;
