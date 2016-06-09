import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ConwayActions from '../actions/ConwayActions';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/tiles.css!';

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

    constructor(props) {
        super(props);
        ConwayActions.generate();
    }

    play () {
      this.intervalID = setInterval(ConwayActions.tick, 1000);
    }

    stop () {
      clearInterval(this.intervalID);
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
              {this.props.board.map((tile, k, arr) => (
                <GridTile
                  key={k}
                  className={"tile " + (tile ? 'alive' : 'dead')}
                />
              ))}
            </GridList>
          </article>
          <article className="play">
            <div>
              <RaisedButton
                label="Play"
                secondary={true}
                onMouseUp={this.play}
              />
              <RaisedButton
                label="Stop"
                onMouseUp={this.stop}
              />
            </div>
          </article>
        </section>;
    }
}

export default GGrid;
