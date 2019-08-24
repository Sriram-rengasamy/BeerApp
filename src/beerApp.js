import React from "react";
import Beer from "./beer";
import styled from "styled-components";
class BeerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers/")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          beers: data
        });
      });
  }

  render() {
    const Button = styled.button``;

    return (
      <div>
        <Button>Styled Button</Button>
        <button>normal button</button>
        {this.state.beers &&
          this.state.beers.length > 0 &&
          this.state.beers.map(beer => <Beer data={beer} />)}
      </div>
    );
  }
}

export default BeerApp;
