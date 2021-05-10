import classes from "./App.module.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import React, { Component } from "react";
import ProductData from "./Utils/ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    previewImagePos: 0,
    showHeartBeat: false,
  };
  onColorOptionClick = (pos) => {
   
    this.setState({ previewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({
      showHeartBeat: updatedState,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            ></img>
          </nav>
        </header>
        <div className={classes.MainContainer}>
          <ProductPreview
            previewImage={
              this.state.productData.colorOptions[this.state.previewImagePos]
                .imageUrl
            }
            showHeartBeat={this.state.showHeartBeat}
          />
          <ProductDetails
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.previewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            showHeartBeat={this.state.showHeartBeat}
          />
        </div>
      </div>
    );
  }
}

export default App;
