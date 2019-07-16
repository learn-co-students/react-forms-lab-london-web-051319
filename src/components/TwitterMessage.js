import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message:"",
      charsLeft: 140
    };
  }

  validateMessage = event => {
// debugger
    let charsLeft = this.props.maxChars - event.target.value.length;

    this.setState({
      [event.target.name]:event.target.value,
      charsLeft:charsLeft
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.validateMessage}/>
        <p>{this.state.charsLeft} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
