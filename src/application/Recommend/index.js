import React, {useEffect} from "react";
import Slider from "../../components/slider";
import {Content, List, ListItem, ListWrapper} from "./style";
import {getCount} from "../../utils/utils";
import Scroll from "../../components/scroll";
import {connect} from "react-redux";
import {actionCreators} from "./store";


function Recommend(props) {

  let { bannerList, recommendList } = props;
  let { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  }, []);

  bannerList = bannerList ? bannerList.toJS () : [];
  recommendList = recommendList ? recommendList.toJS () :[];
  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
              {recommendList.map( item  => (
                <ListItem key={item.id + Math.random()}>
                  <div className="img-wrapper">
                    <div className="decorate"></div>
                    <img src={item.picUrl} width="100%" height="100%" alt="music"/>
                  </div>
                  <div className="play-count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                  <div className="desc">{item.name}</div>
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = state => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
});

const mapDispatchToProps = dispatch => ({
  getBannerDataDispatch() {
    dispatch(actionCreators.getBannerList())
  },

  getRecommendListDataDispatch() {
    dispatch(actionCreators.getRecommendList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))


