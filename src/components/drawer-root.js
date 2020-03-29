import React, { Component } from "react";
import Drawer from "./drawer";
import { DrawerContext } from "../contexts/drawer-context.js";

class DrawerRoot extends Component {
  render() {
    let position = this.context.options.position;
    let isOpen = this.context.open;
    let openStyles = isOpen ? "drawer-open" : "";

    return (
      <div className={`drawer drawer-${position} ${openStyles}`}>
        <div className="drawer__backdrop"></div>
        <div className="drawer__content-wrapper">
          {isOpen && <Drawer />}
        </div>
      </div>
    );
  }
}
DrawerRoot.contextType = DrawerContext
export default DrawerRoot;
