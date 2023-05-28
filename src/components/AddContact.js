import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Last Name" />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
