// import React from "react";
// import "./Popup.css";

// const Popup = ({ props }) => {
//   console.log(props);
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <button className="btn-close">x</button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
