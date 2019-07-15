import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      maxChars: props.maxChars,
      message: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.maxChars - this.state.message.length} chars remaining </strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
