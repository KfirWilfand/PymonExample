import React from "react";

export default class BackBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    location.href ="/games"
  }

  render() {
    return <div className="back-btn" onClick={this.handleClick}/>;
  }
}
