import React, { Component } from "react";
import { connect } from "react-redux";
import { tryGlasses } from "./redux/actions/glassesAction";

class ListGlasses extends Component {
  render() {
    return (
      <div className="grid grid-cols-6 gap-4 place-items-center">
        {this.props.dataGlass.map((item) => {
          return (
            <img
              style={{ width: "120px" }}
              key={item.id}
              src={item.url}
              alt=""
              onClick={() => {
                this.props.tryGlass(item);
              }}
              className=" cursor-pointer border-2 border-gray-400 rounded"
            />
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataGlass: state.dataGlass,
  };
};

let mapDisPatchToProps = (dispatch) => {
  return {
    tryGlass: (value) => {
      dispatch(tryGlasses(value));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(ListGlasses);
