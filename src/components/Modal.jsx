import React, { Component } from "react";

class ModalWin extends Component {
    handleChange = (event) =>{
        console.log(event.target.value)
        this.props.plate(event.target.value);
    }
  render() {
    return (
        <form action="/action_page.php">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Username" id="usr" name="username" />
        </div>
    
        <div class="input-group mb-3">
          <input type="text" class="form-control" onChange={this.handleChange} placeholder="Your Email" id="mail" name="email"/>
          <div class="input-group-append">
            <span class="input-group-text">@example.com</span>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default ModalWin;
