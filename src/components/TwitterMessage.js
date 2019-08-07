import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={event => this.setState({message: event.target.value})} type="text" name="message" id="message" />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
