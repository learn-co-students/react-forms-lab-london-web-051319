import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      charsLeft: 140
    };
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value,
      charsLeft: (140 - e.target.value.length),
    });
  };


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.updateMessage}
        />
      <span>{this.state.charsLeft}</span>
      </div>
    );
  }
}

export default TwitterMessage;
