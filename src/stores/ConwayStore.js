import AppDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";
//var EventEmitter = Events.EventEmitter;
import ConwayConstants from "../constants/ConwayConstants";
import assign from "object-assign";

var CHANGE_EVENT = 'change';

var _gameBoard = [];
var _internalBoard = [];

var generate = () => {
  for (let i = 0; i < 10000; i++) {
    _gameBoard[i] = (((+new Date() + (Math.random() * 999999)) % 5 - 4) > 0);
  }
}

var compute = () => {
  if (_gameBoard.length !== 10000) {
    generate();
    return;
    //throw new Error("GameBoard not initialized, cannot compute tick!");
  }

  let adjacentIndices = (i) => {
    return [i - 11, i - 10, i - 9, i + 1, i + 11, i + 10, i + 9, i - 1];
  };

  let livelyhood = (matrix, index) => {
    let count = 0;
    matrix.forEach((index, c, arr) => {
      if (index > 0 && index < 10000) {
        if (_gameBoard[index] === 1) {
          count++;
        }
      }
    });
    if ((count === 2 && _gameBoard[index] === 1) || count === 3) {
        return true;
    }
    else if (count < 2) {
      return false;
    }
    else if (count > 3) {
      return false;
    }
  };

  _gameBoard.forEach((el, i, arr) => {
    _internalBoard[i] = livelyhood(adjacentIndices(i), i);
  });
  _gameBoard = _internalBoard.slice(0);
};

var ConwayStore = assign({}, EventEmitter.prototype, {
  fetchNext: () => {
    compute();
    return _gameBoard.slice(0);
  },
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: (callback) => {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: (callback) => {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

export default ConwayStore;

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case ConwayConstants.CONWAY_GENERATE:
      generate();
      ConwayStore.emitChange();
      break;
    case ConwayConstants.CONWAY_TICK:
      compute();
      ConwayStore.emitChange();
      break;
    case ConwayConstants.CONWAY_COMPLETE:
  }
});
