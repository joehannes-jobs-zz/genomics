import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/tiles.css!';

export default class GGrid extends React.Component {

  styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 700,
        height: 700
      },
    };
    tick = 0;
    tilesData = [];

    constructor(props) {
        super(props);
        for (let i=0; i < 10000; i++) {
          this.tilesData.push({ alive: false });
        }
    }

    componentWillMount() {
        ;
    }

    tick() {
        this.tick++;
        console.log("hallo tick");
    }

    render() {
        return <section>
          <article className="grid" syle={this.styles.root}>
            <GridList
              cellHeight={3}
              cellWidth={3}
              cols={100}
              rows={100}
              style={this.styles.gridList}
            >
              {this.tilesData.map((tile, k, arr) => (
                <GridTile
                  key={k}
                  className={"tile " + (tile.alive ? 'alive' : 'dead')}
                />
              ))}
            </GridList>
          </article>
          <article className="play">
            <div>
              <RaisedButton label="Play" secondary={true} />
            </div>
          </article>
        </section>;
    }
}

export default GGrid;
