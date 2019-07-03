// @flow

import React from "react";
import abcjs from "abcjs";

import { Sheet } from "./styles";

type Props = {
  test: any
};

const music1 = `
X: 39
T:Pretty Little Liza
C:Paul Rosen
S:Copyright 2005, Paul Rosen
M:4/4
L:1/8
Q:1/2=106
R:old time
K:Am
"Am"A2AA c2dd|e2eg e2dc|A2AA c2dd|e2cc A2cc|"Em (G)"B2BB B2BB|
B2BB B2BB|"Am"A2AA c2dd|e2eg e2c2|"D"d2dd d2dd|d2dd d2cd|
"Am"e2cc A2c2|"G"BAG2 BAG2|"Am"A2AA A2AA|A2AA A2AA|:"Am"e4 a3e|"G"g2d2- d2eg|
"Am"a2aa ged2|"Em"e2ee e2ee|"Am"e4 a3e|"G"g2d2- d2Bc|"Em"d2e2 dcB2|"Am"A2AA A2AA:|
`;

const music2 = `
X:1
T: Prelude in C Major
C: J S Bach
M:4/4
L:1/16
R: Andante
%%stretchlast .7
Q:1/4
%%staves {(PianoRightHand) (PianoLeftHand)}
V:PianoRightHand clef=treble
V:PianoLeftHand clef=bass
K:C
[V: PianoRightHand] ! ! |
[V: PianoLeftHand] c3e3|
`;

const old = `
[V: PianoRightHand] !mp!e2f2 e2d2 c2B2 A4|!>(!B2d2 g4 c6 !>)!e2|!p![G4e4] z4 A4 G4|c12 z4|[A12f12] [g4d4]|z4 !<(!B4 !<)![A8c8]|
!mf!A4 z4 d8|B8 [G4c4] z4|f2A2 c4 f4 g4|[f12d12] e4|!<(!A4 A4 c2e2 !<)!g4|!f!e8 z8|
[A4d4] z4 A8|BcBA G4 c4 G2B2|A2G2 A2B2 c4 B2G2|c12 z4|]
[V: PianoLeftHand] [E,12C,12] F,4|[G,8D,8] [C,8E,8]|G,4 C,4 C,4 B,,A,,C,B,,|A,,12 z4|A,,4 B,,4 C,2D,2 B,,C,D,E,|C,2E,2 G,4 E,2F,2 G,4|
F,4 A,4 [A,8F,8]|G,2F,2 E,2D,2 [C,4E,4] z4|[F,8A,8] [D,4A,4] z4|F,2G,2 A,2F,2 D,2F,2 C,2B,,2|C,4 F,A,D,F, E,4 z4|C,8 z8|
F,4 E,4 F,4 A,4|[D,8G,8] E,4 z4|C,4 [C,4F,4] z4 G,4|C,12 z4|]
`;

const SheetMusic = ({ test }: Props) => {
  abcjs.renderAbc("sheet1", music2);
  return <Sheet id="sheet1" />;
};

export default SheetMusic;
