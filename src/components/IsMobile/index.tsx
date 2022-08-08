import React from "react";

function IsMobile() {
  return (
    <div className="grid-device-mobile">
      <h1 className="title-device-mobile">¡Oh no!</h1>
      <br />
      <p className="text-device-mobile">
        This app is not compatible with your device
      </p>
    </div>
  );
}

export default IsMobile;
