import React, { Component } from "react";
import { connect } from "react-redux";
import ListGlasses from "./ListGlasses";

class TryGlasses extends Component {
  render() {
    const styleGlass = {
      width: "12rem",
      top: "20%",
      right: "22%",
      opacity: "0.8",
    };

    let { desc, name, url } = this.props.dataTryGlass;

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "937px",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          className=" w-auto h-screen"
        >
          <h1
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            className=" text-xl text-white py-10 uppercase "
          >
            Try Glasses App Online
          </h1>

          <div className="container mx-auto">
            <div className="grid place-content-center grid-flow-col gap-56 pt-16">
              <div style={{ width: "333.33px" }} className="relative	">
                <img
                  className="absolute h-5/6"
                  src="./glassesImage/model.jpg"
                  alt=""
                />
                <img style={styleGlass} className="absolute" src={url} alt="" />
                <div
                  style={{ top: "50%", width: "333.33px", height: "162px" }}
                  className="absolute bg-orange-300 opacity-80 text-left"
                >
                  <h1 className=" text-3xl text-blue-600 pb-3">{name}</h1>
                  <p className="text-white text-lg">{desc}</p>
                </div>
              </div>
              <img className=" h-5/6" src="./glassesImage/model.jpg" alt="" />
            </div>
            <div
              style={{ marginLeft: "220px" }}
              className=" bg-slate-100 py-6 px-6 max-w-screen-lg"
            >
              <ListGlasses />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataTryGlass: state.dataTryGlass,
  };
};

export default connect(mapStateToProps, null)(TryGlasses);
