// @flow

import React, { useEffect, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import "abcjs/abcjs-midi.css";
import abcjs from "abcjs/midi";

import { colors } from "styles/constants";
import { Sheet } from "./styles";

type Props = {
  test: any
};

const music1 = `
X:1
T: Prelude in C Major
T: as interpreted by Ashwanth A R (prone to mistakes, read at your own risk)
C: J S Bach
Q:70
M:4/4
L:1/16
R: Andante
K: C
C E Gce Gce C E Gce Gce | C D Adf Adf C D Adf Adf |
M: 4/4
B, D Gdf Gdf B, D Gdf Gdf | C E Gce Gce C E Gce Gce |
M: 4/4
C E Aea Aea C E Aea Aea | C D ^FAd ^FAd C D ^FAd ^FAd |
M: 4/4
G, B, DGB DGB G, B, DGB DGB | B, C EGc EGc B, C EGc EGc |
`;

const music2 = `
X:1
T: Prelude in C Major
T: as interpreted by Ashwanth A R (prone to mistakes, read at your own risk)
C: J S Bach
Q:70
M:4/4
L:1/16
R: Andante
K: C
"C"C E Gce Gce C E Gce Gce | "Dm7"C D Adf Adf C D Adf Adf |
M: 4/4
"G7"B, D Gdf Gdf B, D Gdf Gdf | "C"C E Gce Gce C E Gce Gce |
M: 4/4
"Am"C E Aea Aea C E Aea Aea | "D7"C D ^FAd ^FAd C D ^FAd ^FAd |
M: 4/4
"G"G, B, DGB DGB G, B, DGB DGB | "C7"B, C EGc EGc B, C EGc EGc |
`;

const SheetMusic = ({ test }: Props) => {
  const sheet1 = useRef();
  // const tunes = new abcjs.TuneBook(music2);
  const tunes = abcjs.renderAbc("sheet1", music2, {
    responsive: "resize",
    add_classes: true
  });

  console.log(colors);
  abcjs.renderMidi("midi", music1, {
    animate: {
      listener: function(abcjsElement, currentEvent, context) {
        // console.log(currentEvent);
        const { elements: newElements } = currentEvent || { elements: [] };
        const { elements: oldElements } = abcjsElement || { elements: [] };
        if (oldElements && oldElements.length > 0 && oldElements[0]) {
          if (oldElements[0].length > 0) {
            oldElements[0].forEach(element => {
              if (element && element.nodeName === "path") {
                element.classList.add("abcjs-note");
                element.classList.remove("abcjs-note-highlight");
                // element.setAttribute("fill", "#000");
              }
            });
          }
        }
        if (newElements && newElements.length > 0 && newElements[0]) {
          // console.log(newElements);
          if (newElements[0].length > 0) {
            newElements[0].forEach(element => {
              // console.log(element.nodeName);
              if (element && element.nodeName === "path") {
                console.log(element);
                element.classList.remove("abcjs-note");
                element.classList.add("abcjs-note-highlight");
                // console.log(element.getAttribute("fill"));

                // element.setAttribute("fill", "#fff");
              }
            });
          }
        }
      },
      target: tunes[0],
      qpm: 70
    }
  });

  // abcjs.renderMidi("midi-id", music2, {
  //   animate: {
  //     listener: function(abcjsElement, currentEvent, context) {},
  //     target: music2,
  //     qpm: 120
  //   }
  // });

  // abcjs.midi.startPlaying(document.querySelector("#midi"));
  return (
    <div>
      <div id="midi" />
      <Sheet id="sheet1" ref={sheet1} />
    </div>
  );
};

export default SheetMusic;
