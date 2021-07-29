import React, { Component } from "react";
import { CONTACTS } from "../../constant";
import "./index.css";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts" id="contact">
        <h1>Contact Info</h1>
        <div className="contacts_list">
          {CONTACTS.map((data) => {
            const { name, detail, Icon, color } = data;
            return (
              <div className="contact_box">
                <Icon className="contact_icon" color={color} />
                <div className="contact_text">
                  <h3>{name}</h3>
                  <h4>{detail}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contacts;
