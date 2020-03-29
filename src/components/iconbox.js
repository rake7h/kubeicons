import React, { useState } from "react";
import "../styles/app.scss";

const PUBLIC_URL = process.env.PUBLIC_URL;

function IconBox(props) {
  const [hover, setHover] = useState(false);

  async function downloadIcon(icon, name) {
    let url = PUBLIC_URL + "/" + icon;
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div
      className="icon-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={props.svg} className="icon-card-image" alt={props.name} />
      {hover && (
        <div className="icon-block-download">
          <div
            className="download-option"
            role="button"
            onClick={() => downloadIcon(props.png, props.name)}
          >
            <span className="btn-download">
              <img src="download.svg" alt={props.name} />
            </span>
            <span>PNG</span>
          </div>
          <div
            className="download-option"
            role="button"
            onClick={() => downloadIcon(props.svg, props.name)}
          >
            <span className="btn-download">
              <img src="download.svg" alt={props.name} />
            </span>
            <span>SVG</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default IconBox;
