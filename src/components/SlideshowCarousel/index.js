// @flow

import React, { useReducer, useCallback } from "react";

import { Slide, Carousel } from "./styles";

import starWars1 from "assets/slideshow/starWars1.jpg";
import batman1 from "assets/slideshow/batman1.jpg";

import { useInterval } from "hooks";

type Props = {
  test: any
};

const slides = [starWars1, batman1];

const initialState = {
  positions: ["0%", "100%"],
  transitions: [true, true],
  slideIds: [0, 1]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_POSITION":
    case "SET_TRANSITION":
    case "SET_SLIDE":
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

const SlideshowCarousel = ({ test }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { positions, transitions, slideIds } = state;

  const getNextSlideIds = useCallback(
    () => [slideIds[1], slideIds[1] < slides.length - 1 ? slideIds[1] + 1 : 0],
    [slideIds]
  );

  const changeSlides = useCallback(() => {
    // start slide show here
    dispatch({
      type: "SET_POSITION",
      payload: {
        positions: ["-100%", "0%"]
      }
    });
    setTimeout(() => {
      dispatch({
        type: "SET_TRANSITION",
        payload: {
          transitions: [false, false]
        }
      });
      console.log("slide ids were changed");
      dispatch({
        type: "SET_SLIDE",
        payload: {
          slideIds: getNextSlideIds()
        }
      });
      console.log("position was swapped");
      dispatch({
        type: "SET_POSITION",
        payload: {
          positions: ["0%", "100%"]
        }
      });
      setTimeout(() => {
        console.log("turn on transiitions");
        dispatch({
          type: "SET_TRANSITION",
          payload: {
            transitions: [true, true]
          }
        });
      }, 0);
    }, 1500);
  }, [getNextSlideIds]);

  useInterval(() => {
    changeSlides();
  }, 3000);

  return (
    <Carousel>
      {/* SLIDE 1 - USUALLY CURRENT SLIDE */}
      <Slide
        src={slides[slideIds[0]]}
        position={positions[0]}
        transition={transitions[0]}
      />
      {/* SLIDE 2 - USUALLY NEXT SLIDE */}
      <Slide
        src={slides[slideIds[1]]}
        position={positions[1]}
        transition={transitions[1]}
      />
    </Carousel>
  );
};

export default SlideshowCarousel;
