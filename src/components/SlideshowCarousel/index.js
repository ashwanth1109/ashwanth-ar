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
    dispatch({
      type: "SET_POSITION",
      payload: {
        positions: ["-100%", "0%"]
      }
    });

    setSelectedDot(slideIds[1]);

    setTimeout(() => {
      dispatch({
        type: "SET_TRANSITION",
        payload: {
          transitions: [false, false]
        }
      });
      dispatch({
        type: "SET_SLIDE",
        payload: {
          slideIds: getNextSlideIds()
        }
      });
      dispatch({
        type: "SET_POSITION",
        payload: {
          positions: ["0%", "100%"]
        }
      });
      setTimeout(() => {
        dispatch({
          type: "SET_TRANSITION",
          payload: {
            transitions: [true, true]
          }
        });
      }, 0);
    }, 1500);
  }, [getNextSlideIds, slideIds]);

  useInterval(() => {
    console.log("use interval triggered");
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
      />
      {/* SLIDE 2 - USUALLY NEXT SLIDE */}
      <Slide
        src={slides[slideIds[1]]}
        position={positions[1]}
        transition={transitions[1]}
      />

      <Dots>
        {slides.map((slide, id) => (
          <Dot selected={selectedDot === id} />
        ))}
      </Dots>
    </Carousel>
  );
};

export default SlideshowCarousel;
