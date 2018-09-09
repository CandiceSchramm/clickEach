import React from "react";
import Tile from "./Tile"

class Board extends React.Component {
    render() {
        return (
            <div className="board container mx-3 my-3">
                {this.props.tiles.map(tile => <Tile img={tile.image}/>)}            
            </div>
        );
    }
}
export default Board;
