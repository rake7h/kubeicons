import React from 'react';
import pod from '../pod-128.png';
import '../App.css';

function IconCard() {
  return (
      <div className="icon-card">
        <div className="icon-card-header">
          <span>Pod</span>
        </div>
        <div className="icon-card-content">
          <div class="icon-block icon-labeled">
            <img src={pod} className="icon-card-image" alt="logo" />
          </div>
          <div class="icon-block icon-unlabeled">
            <img src={pod} className="icon-card-image" alt="logo" />
          </div>
        </div>
      </div>
  );
}

export default IconCard;
