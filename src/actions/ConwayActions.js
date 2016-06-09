import AppDispatcher from "../dispatcher/AppDispatcher";
import ConwayConstants from "../constants/ConwayConstants";

export default class ConwayActions {}
ConwayActions.generate = () => {
  AppDispatcher.dispatch({
    actionType: ConwayConstants.CONWAY_GENERATE
  });
}
ConwayActions.tick = () => {
  AppDispatcher.dispatch({
    actionType: ConwayConstants.CONWAY_TICK
  });
}
ConwayActions.stop = () => {
  AppDispatcher.dispatch({
    actionType: ConwayConstants.CONWAY_STOP
  });
}
ConwayActions.complete = () => {
  AppDispatcher.dispatch({
    actionType: ConwayConstants.CONWAY_COMPLETE
  });
}
