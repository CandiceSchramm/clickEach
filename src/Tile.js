import React from "react";

class Tile extends React.Component {
    render() {
        return (
            <div className="tile" onClick={this.props.clickFunction}>
                <div className="card" style={{width: "10rem"}}>
                    <div className="card-body">
                    <img src={this.props.img} alt="" className="img-thumbnail"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tile;
