import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Tries</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Conversions</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Penalties</h3>
        <div className="ballOn__value">2</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Half</h3>
        <div className="quarter__value">1</div>
      </div>
    </div>
  );
};

export default BottomRow;
