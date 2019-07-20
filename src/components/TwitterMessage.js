import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleSubmit = () => {
    console.log('hi from submit')

  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }



  render() {
    return (
     <div>
      <form onSubmit={e => this.handleSubmit(e)}>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>

      <div>Characters Remaining: {this.props.maxChars - this.state.value.length}</div>
     </div>
    );
  }
}

export default TwitterMessage;
