import React from 'react'
// import Popup from 'reactjs-popup';

function Popup(props) {
  return ( props.trigger) ? (
    <div>Popup
        <div className='popss'>
            Popupin reactsjs
            {props.children}
            <button onClick={()=> props.setTrigger(false)}>close</button>
        </div>
    </div>
  ): "";
}

export default Popup;