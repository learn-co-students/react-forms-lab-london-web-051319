import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  // updateMessage = (event) => {
  //   this.setState({
  //     message: event.target.value
  //   });
  // };

  // render() {
  //   return (
  //     <div>
  //       <strong>Your message:</strong>
  //       <input type="text" name="message" id="message" value={this.state.message} onChange={this.updateMessage} />
  //       <br/>
  //       <h3>Remaining characters: {this.props.maxChars - this.state.message.length}</h3>
  //     </div>
  //   );
  // }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} /> {/* remember to name the event the same thing to work on it */}
        <br/>
        <h3>Remaining characters: {this.props.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
