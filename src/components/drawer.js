import React, { Component } from "react";
import { examples } from "../examples";
import {DrawerContext} from "../contexts/drawer-context.js";
import { X } from 'react-feather';

class Drawer extends Component {
  componentWillMount() {
    document.body.classList.add("fixed-body");
  }
  componentWillUnmount() {
    document.body.classList.remove("fixed-body");
  }

render(){
    return (
      <div className="drawer__content">
        <div className="drawer__content-body">
          <div className="drawer-header">
            <span className="drawer-header__title">Example diagrams</span>
            <button
              className="btn btn-link ml-auto"
              onClick={()=>this.context.toggleDrawer()}
            >
            <X/>
            </button>
          </div>
          <div className="drawer-body">
            {examples.map(example => (
              <div className="example-diagram-box" key={example.label}>
                <span className="example-diagram-box__label">
                  {example.label}
                </span>
                <figure className="mt-2">
                  <img className="img-fluid" src={example.png} alt={example.label} />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
}
Drawer.contextType = DrawerContext
export default Drawer;
