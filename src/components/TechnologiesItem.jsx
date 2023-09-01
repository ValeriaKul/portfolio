import React from "react";

export default function TechnologiesItem({ title, status, total }) {
  return (
    <div className="technologies_item">
      <div className="technologies_item_title">
        <p>{title}</p>
        <p>{status}</p>
      </div>
      <div className="technologies_item_progres">
        <div
          className="technologies_item_progres_line"
          style={{width: `${total}%`}}
        ></div>
      </div>
    </div>
  );
}
