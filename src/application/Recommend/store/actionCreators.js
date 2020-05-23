import * as actionTypes from './constant'
import {fromJS} from "immutable";
import {getBanner, getPersonalized} from "../../../api/service";

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});

export const changeRecommendList = data => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
});

export const getBannerList = () => {
  return (dispatch) => {
    getBanner().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
};

export const getRecommendList = () => {
  return dispatch => {
    dispatch(changeEnterLoading(true));
    getPersonalized().then(data => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log(('推荐歌单数据传输错误'))
    })
  }
};

export function changeEnterLoading(data) {
  return {
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: fromJS(data)
  }
}
