import React from "react";

 const ContactCard =(props)=> {

    const { id, name, email } = props.contact;
    return (
        <div className="item">
          <div className="content">
            <div className="header">
                {name}
            </div>
            {email}
          </div>
            <i className="trash alternate outline icon" style={{ color:'red',marginTop:'3px' }}></i>
        </div>
      );

}
export default ContactCard;