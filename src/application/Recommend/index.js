import React, {useEffect} from "react";
import Slider from "../../components/slider";
import {Content, List, ListItem, ListWrapper} from "./style";
import {getCount} from "../../utils/utils";
import Scroll from "../../components/scroll";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import LazyLoad, {forceCheck} from "react-lazyload";
import Loading from "../../components/loading";


function Recommend(props) {

  let { bannerList, recommendList, enterLoading } = props;
  let { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    console.log(bannerList);
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];
  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
              {recommendListJS.map( item  => (
                <ListItem key={item.id + Math.random()}>
                  <div className="img-wrapper">
                    <div className="decorate"></div>
                    <LazyLoad placeholder={<img src={require('./music.png')} width="200px" height="200px" alt=""/>}>
                      <img src={item.picUrl} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
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
      { enterLoading ? <Loading></Loading> : null }
    </Content>
  )
}

const mapStateToProps = state => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn (['recommend', 'enterLoading'])
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


