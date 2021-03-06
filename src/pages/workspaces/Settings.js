import React, { Component } from "react";
import Account from "./Settings/Account.js";
import Profile from "./Settings/Profile.js";
import Claim from "./Settings/Claim.js";

class Settings extends Component {
  _mount = false;
  constructor(props) {
    super(props);
    this.state = { active: "account" };
  }

  componentDidMount() {
    this._mount = true;
  }

  componentWillUnmount() {
    this._mount = false;
  }

  switchSettings(e, active) {
    e.preventDefault();
    this.setState({ active: active });
  }

  render() {
    return (
      <div className="row no-gutters h-100">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <h1 className="h4 font-600 pt-3 pt-md-4 px-3">Settings</h1>
          <ul className="c-tab-nav --column nav flex-column">
            <a
              className={
                "nav-link font-600 " +
                (this.state.active === "account" ? "active" : "")
              }
              href="#account"
              onClick={(e) => this.switchSettings(e, "account")}
            >
              Account settings
            </a>
            <a
              className={
                "nav-link font-600 " +
                (this.state.active === "profile" ? "active" : "")
              }
              href="#profile"
              onClick={(e) => this.switchSettings(e, "profile")}
            >
              Edit Profile
            </a>
            <a
              className={
                "nav-link font-600 " +
                (this.state.active === "claim" ? "active" : "")
              }
              href="#claim"
              onClick={(e) => this.switchSettings(e, "claim")}
            >
              Claim ConAx
            </a>
            <a
              className={
                "nav-link font-600 " +
                (this.state.active === "notification" ? "active" : "")
              }
              href="#notification"
              onClick={(e) => this.switchSettings(e, "notification")}
            >
              Notification inbox
            </a>
          </ul>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 pt-3 pt-md-4 px-3 px-md-0">
          {this.state.active === "account" && <Account />}
          {this.state.active === "profile" && <Profile />}
          {this.state.active === "claim" && <Claim />}
          {this.state.active === "notification" && (
            <>
              <div className="px-md-3">
                <h1 className="h4 font-600 mb-3">Notification Inbox</h1>
                <p className="mb-2">On ConAx</p>
                <p className="mb-2">Connect with Creative Networks</p>
                <p className="mb-2">Integrate your social networks</p>
              </div>
            </>
          )}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12"></div>
      </div>
    );
  }
}

export default Settings;
