// @flow

import React, { useReducer, useCallback, useEffect, useState } from "react";

import { Slide, Carousel, LoadingInfo, Dots, Dot } from "./styles";

import starWars1 from "assets/slideshow/starWars1.jpg";
import batman1 from "assets/slideshow/batman1.jpg";
import deadpool1 from "assets/slideshow/deadpool1.jpg";

import Loader from "components/Loader";

import { Container } from "styles";

import { useInterval } from "hooks";

type Props = {
  test: any
};

const slides = [starWars1, batman1, deadpool1];

const initialState = {
  positions: ["0%", "100%"],
  transitions: [true, true],
  slideIds: [0, 1]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "MERGE_STATE":
      return {
        ...state,
        ...payload
      };
    case "TURN_OFF_TRANSITIONS":
      return {
        ...state,
        transitions: [false, false]
      };
    case "TURN_ON_TRANSITIONS":
      return {
        ...state,
        transitions: [true, true]
      };
    default:
      return state;
  }
};

const SlideshowCarousel = ({ test }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { positions, transitions, slideIds } = state;

  const [loadedCount, setLoadedCount] = useState(0);
  const [selectedDot, setSelectedDot] = useState(0);

  useEffect(() => {
    slides.map(slide => {
      const img = new Image();
      img.src = slide;
      img.onload = () => {
        setLoadedCount(prev => prev + 1);
      };
      return null;
    });
  }, []);

  const getNextSlideIds = useCallback(
    () => [slideIds[1], slideIds[1] < slides.length - 1 ? slideIds[1] + 1 : 0],
    [slideIds]
  );

  const changeSlides = useCallback(() => {
    // start slide show here
    // slide 1 moves left out of view
    // slide 2 moves left into view
    dispatch({
      type: "MERGE_STATE",
      payload: {
        positions: ["-100%", "0%"]
      }
    });
    // selected dot changes to next dot
    setSelectedDot(slideIds[1]);
  }, [slideIds]);

  const transitionEnded = useCallback(() => {
    // wait for the sliding transition to end
    // turn off transition animations
    dispatch({
      type: "TURN_OFF_TRANSITIONS",
      payload: {}
    });
    // set timeout to wait for state to update
    setTimeout(() => {
      // once transitions are turned off,
      // move slide 1 back to original position with slide 2's id
      // move slide 2 out of view with the next slide loaded in
      dispatch({
        type: "MERGE_STATE",
        payload: {
          slideIds: getNextSlideIds(),
          positions: ["0%", "100%"]
        }
      });
      // set timeout to wait for state to update
      setTimeout(() => {
        // turn transitions back on for next interval
        dispatch({
          type: "TURN_ON_TRANSITIONS",
          payload: {}
        });
      }, 0);
    }, 0);
  }, [getNextSlideIds]);

  useInterval(() => {
    // if images have been loaded, change slides every 3 seconds
    if (loadedCount === slides.length) {
      changeSlides();
    }
  }, 3000);

  if (loadedCount !== slides.length) {
    return (
      <Carousel>
        <Container flex="column">
          <LoadingInfo>Hold on, we're loading assets</LoadingInfo>
          <Loader />
        </Container>
      </Carousel>
    );
  }

  return (
    <Carousel>
      {/* SLIDE 1 - USUALLY CURRENT SLIDE */}
      <Slide
        src={slides[slideIds[0]]}
        position={positions[0]}
        transition={transitions[0]}
        onTransitionEnd={transitionEnded}
      />
      {/* SLIDE 2 - USUALLY NEXT SLIDE */}
      <Slide
        src={slides[slideIds[1]]}
        position={positions[1]}
        transition={transitions[1]}
      />

      <Dots>
        {slides.map((slide, id) => (
          <Dot selected={selectedDot === id} key={id} />
        ))}
      </Dots>
    </Carousel>
  );
};

export default SlideshowCarousel;
