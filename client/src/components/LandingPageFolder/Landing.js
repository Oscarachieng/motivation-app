import React from 'react';

export default function Landing() {
    const myStyles = {
        backgroundImage:
          "url('https://photos.google.com/photo/AF1QipMK6bBMfIwyaEtbZ-59nWiGwGEv14X2Ti3S1kcI')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      };
  return (
    <div className="card h-100 ">
        <div className=" card  " id="userbox" style={myStyles}></div>
    </div>
  )
}
