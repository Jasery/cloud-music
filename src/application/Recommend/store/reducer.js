import { CHANGE_BANNER, CHANGE_RECOMMEND_LIST } from "./constant";
import {fromJS} from "immutable";

const defaultState = fromJS({
  bannerList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_BANNER:
      return state.set('bannerList', action.data);
    case CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    default:
      return state;
  }
}
