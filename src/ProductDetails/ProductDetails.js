import React from "react";
import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const clsArr = [classes.ProductImage];
    if (pos === props.currentPreviewImagePos) {
      clsArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        className={clsArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        key={pos}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });
  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];
    if (pos === 1 && props.showHeartBeat) {
      classArr.push(classes.selectedFeatureItem);
    }
    else if (pos === 0 && !props.showHeartBeat) {
      classArr.push(classes.selectedFeatureItem);
    }
    return (
      <button
        className={classArr.join(" ")}
        key={pos}
        onClick={() => props.onFeatureItemClick(pos)}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={classes.ProductData}>
      <div className={classes.ProdcutTitle}>
        <h1>{props.data.title}</h1>
      </div>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.selectColor}>Select color</h3>
      <div>{colorOptions}</div>
      <h3 className={classes.selectColor}>Features</h3>
      <div>
        {/* <button className={classes.FeatureItem}>Time</button>
        <button className={classes.FeatureItem}>Heart Rate</button> */}
        {featureList}
      </div>

      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
}
export default ProductDetails;
