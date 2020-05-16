import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import PropTypes from "prop-types";
import BetterScroll from 'better-scroll';
import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Scroll = forwardRef((props, ref) => {

  const {
    direction,
    click,
    refresh,
    onScroll,
    pullUp,
    pullDown,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom
  } = props;

  const [betterScroll, setBetterScroll] = useState(null);
  const scrollContainerRef = useRef();

  useEffect(() => {
    const scroll = new BetterScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBetterScroll(scroll);
    return () => { setBetterScroll(null); }
  }, [bounceBottom, bounceTop, click, direction]);

  useEffect(() => {
    if (betterScroll && onScroll) {
      betterScroll.on('scroll', onScroll);
      return () => {
        betterScroll.off('scroll')
      }
    }
  }, [onScroll, betterScroll]);

  useEffect(() => {
    if (!betterScroll || !pullDown) {
      return;
    }
    betterScroll.on('scrollEnd', () => {
      if (betterScroll.y <= betterScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      betterScroll.off('scrollEnd');
    }
  }, [pullUp, betterScroll, pullDown]);

  useEffect(() => {
    if (!betterScroll || !pullDown) {
      return;
    }
    betterScroll.on('touchEnd', (pos) => {
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      betterScroll.off('touchEnd');
    }
  }, [pullDown, betterScroll]);

  useEffect(() => {
    if (refresh && betterScroll) {
      betterScroll.refresh();
    }
  });


  useImperativeHandle(ref, () => ({
    refresh() {
      if (betterScroll) {
        betterScroll.refresh();
        betterScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      return betterScroll;
    }
  }));

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
    </ScrollContainer>
  )
});

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,
  bounceBottom: PropTypes.bool
};

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullUpLoading: false,
  pullDown: null,
  pullDownLoading: false,
  bounceTop: true,
  bounceBottom: true
};

export default React.memo(Scroll);
