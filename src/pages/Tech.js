// @flow

import React from "react";

import { TechPage } from "./styles";
import {
  Heading,
  SubHeading,
  Spacer,
  Para,
  Container,
  BlogImage
} from "styles";

import devops from "assets/blog/devops.png";

// type Props = {
//   //
// };

const Tech = () => {
  return (
    <TechPage>
      <Heading>DevOps vs SRE: Competing Standards or Friends?</Heading>
      <Spacer height="24px" />
      <Container flex="column" align="flex-start" margin="0 0 0 16px">
        <Container>
          <BlogImage src={devops} width="60%" />
        </Container>
        {/** INTRODUCTION */}
        <SubHeading>Introduction</SubHeading>
        <Para>
          In most tech companies, there are two important groups that are
          involved in the shipment of software - Developers and Operators. It is
          important that these two groups work in tandem with each other to
          ensure the deployment of bug free software. For a long time, the two
          groups were isolated into organizational silos with developers working
          directly with business owners and operators outsourced from some
          organization somewhere in the world.
        </Para>
        <Para>
          Developers are concerned with agility. They want to build features or
          software and ship it as quickly as possible to get it in the hands of
          the customers or users. Business owners and users too want more
          features quickly. This means that developers tend to be handed a
          roadmap and the team usually sticks to a sprint of some sort to tether
          to the timelines. Personally, I'm not a big fan of the fact that this
          model focuses on outcomes and not output.
        </Para>
        <Para>
          Operators are concerned with stability. They strongly advocate the
          philosophy - its not broken, please dont touch it. It is not difficult
          to understand where they are coming from, given that their role is to
          make sure that the system never goes down.
        </Para>
        <Para>
          As you can clearly see, these are two competing groups with different
          priorities. As is the case with senate houses, two opposing groups
          usually means more friction to progress. However, it is important to
          not measure progress only in terms of features. This is because as we
          introduce new functionality to a system, we also introduce
          instability. Stabilizing the system is also progress.
        </Para>
        {/** THE PROBLEM */}
        <SubHeading>The Problem</SubHeading>
        <Para>
          Developers write code and hand it to operators, ask them to run it for
          them and fuck off. Given that operators unlike developers don't
          traditionally have a software engineering or computer science
          background, they don't have a solid understanding of the code. Heck,
          its difficult even for a developer to follow the line of thought of
          another developer at first glance.
        </Para>
        <Para>
          So now, in addition to their responsibilities of keeping the network
          up and runngin, operators also have to understand the code enough to
          spot bugs in the application. Furthermore, these are never the obvious
          bugs which usually get caught in the testing phase. These are the hard
          to decipher ones that have crept into the application without being
          spotted by the multiple stakeholders involved. Crazy right?
        </Para>
        <Para>
          And when the app crashes, guess who gets the first phone call at the
          middle of the night? Thank god for my priviliged life as a developer,
          whew!
        </Para>
        {/** THE DEVOPS MOVEMENT */}
        <SubHeading>The DevOps Movement</SubHeading>
      </Container>
    </TechPage>
  );
};

export default Tech;
