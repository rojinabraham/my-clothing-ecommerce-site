import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, match, linkURL }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkURL}`)}
    >
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
