import React from "react";
import classes from "./ProductPreview.module.css";
function ProductPreview(props) {
  
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinutes =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.previewImage} alt="Preview" />
      {props.showHeartBeat ? (
        <div className={classes.HeartBeatSection}>
          <div className={classes.HeartIcon}>
            <i className="fas fa-heartbeat"></i>
          </div>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currentHour}:${currentMinutes}`}</p>
        </div>
      )}
    </div>
  );
}
export default ProductPreview;
