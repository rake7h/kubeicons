import React, { useState, Component } from "react";
import logo from "../kubeicons.svg";
import Drawer from "./drawer";
import { DrawerContext } from "../contexts/drawer-context.js";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="d-flex">
          <div className="mr-auto">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <button
              className="btn btn-link"
              onClick={() => this.context.toggleDrawer()}
            >
              Example diagrams
            </button>
          </div>
        </div>
      </header>
    );
  }
}
Header.contextType = DrawerContext;

export default Header;
