# Automatic Slideshow Carousel using React Hooks

In the past few months of working in React, I like the way one needs to think in terms of components, state, and props. A while back, I worked on an automatic slideshow component, albeit it wasn't a very performant component. This was because I was using set timeouts to manage the asynchronous setting of state.

Since the official release of hooks in the beginning of 2019, they have been this new and shiny way of building components that don't look incredibly bloated. Hooks has certainly been the rage amongst several web developers working with React, however, adoption of hooks in production code has been slow. Veteran devlopers who are well versed with class components are comfortable where they are. There is a learning curve associated with hooks, but I believe once you get past that, you get hooked (wink, wink!!)

I have been excited about hooks since their release. But I must admit, it gets especially tricky when working with useEffects and intervals. [Dan Abromav's article](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) on "making set interval declarative with react hooks" and his [45 minute long guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) (I'd probably call it a chapter at this point), have been instrumental in helping me build a better understanding of this novel way of writing components.

## Show Me The Code

This is the crux (the jsx) of the component. I will explain the hooks as I go long. If you don't need the explanation, you can jump straight to the end of the article to read the full code.

```jsx
const SlideshowCarousel = () => {
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
```

### The Carousel

The slideshow is hoisted inside a carousel styled component. By setting overflow as hidden, we ensure that content outside the container is hidden. We also need to control the position of the slides with relation to the container.

```javascript
export const Carousel = styled.div`
  width: 100%;
  height: 60vh;
  border: 2px solid ${colors.goldenYellow};
  overflow: hidden;
  position: relative;
`;
```

### Loading State - useState & useEFfect Hooks

In order to improve the user experience, we want to show a loading state while the images are being fetched.

```jsx
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
```

Here, loadedCount lets us know if all images in the slides array have loaded. We need to map this information using a number state variable since we have a need for tracking how many images have successfully loaded.

```jsx
const [loadedCount, setLoadedCount] = useState(0);
```

So, how & when do we track which images are loaded and which aren't?

That's where our useEffect hook comes in.

```jsx
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
```

On component mount, we map through our array of images and for each image we create a new Image object, store the slide's source and track the loading progress using the onload event handler.
When loading completes, we increment loading count state variable by 1.

The loading of images can be seen as an effect that needs to be triggered when the component mounts on to the user's screen.

### Changing Slides - useInterval custom hook

Changing slides is primarily what happens in the slideshow carousel and this effect needs to be triggered once every N seconds (3 in this case).

```jsx
useInterval(() => {
  // if images have been loaded, change slides every 3 seconds
  if (loadedCount === slides.length) {
    changeSlides();
  }
}, 3000);
```

We want our custom hook, called useInterval, to trigger the changeSlide effect only once the images have all been loaded.

### The internals of useInterval - useEffect & useRef hooks

```jsx
import { useRef, useEffect } from "react";

const useInterval = (callback: Function, delay: number) => {
  const savedCallback: { current: any } = useRef();

  // update callback on change
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // tick calls current callback (which does stay updated)
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, callback]);
};

export default useInterval;
```

In order to compose the useInterval hook, we need two hooks - useRef, and useEffect. We want our custom hook to trigger an effect once every N seconds (2nd parameter in the function). And the effect we need to trigger is calling the callback function being passed in as the 1st parameter (in this case the change slides function).

We want our callback function to stay the same across multiple renders and multiple intervals unless the parameter changes. To do this, we store a reference to the callback using the useRef hook.

```jsx
const savedCallback: { current: any } = useRef();

// update callback on change
useEffect(() => {
  savedCallback.current = callback;
}, [callback]);
```

Our useEffect hook also takes in a dependency array for callback. This means on mount, the callback is stored in our savedCallback ref. If the callback changes, the above effect will get triggered again and store the new callback in our ref.

```jsx
useEffect(() => {
  // tick calls current callback (which does stay updated)
  const tick = () => {
    savedCallback.current();
  };

  if (delay !== null) {
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }
}, [delay, callback]);
```

Our second useEffect contains our setInterval calls. At each interval tick, we call the callback in our saved ref with a delay of N seconds. The return function cleans up the interval once the effect needs to stop triggering.

### The internals of changeSlides function - useCallback hook

```jsx
const changeSlides = useCallback(() => {
  // enable transition animation
  dispatch({
    type: "TURN_ON_TRANSITIONS",
    payload: {}
  });
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
```

What changeSlides() does is, it transitions SLIDE 1 out of view while simultaneously transitioning SLIDE 2 into view. Before I get into what dispatch does (spoiler: remember redux??), let me first explain why we need the useCallback function.
