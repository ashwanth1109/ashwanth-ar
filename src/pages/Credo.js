// @flow

import React, { useRef } from "react";
import { connect } from "react-redux";

import { CredoPage } from "./styles";
import productivity from "assets/productivity-graph.png";
import Accordion from "components/Accordion";

type Props = {
  width: number
};

const Credo = ({ width }: Props) => {
  const definingSuccessCriteria: { current: any } = useRef();
  return (
    <CredoPage>
      <h1>CREDO</h1>
      <blockquote>
        The unexamined life is a life not worth living -{" "}
        <span className="highlight">Socrates</span>
      </blockquote>
      <p>
        The word credo originates from Middle English Latin, in which the word
        means 'I believe'. The word creed has similar roots and refers to a
        system of religious beliefs or a faith.{" "}
        <span className="highlight">
          'Credo' refers to a statement of beliefs or aims which guides
          someone's actions.
        </span>
      </p>

      <p>
        While I understand the pivotal role that religion plays in the lives of
        many, stricken by their faiths and gods, I've never been a particularly
        religious person. Perhaps there is a higher entity that governs the
        whims of the universe, but that is beyond the comprehension of us mortal
        beings. So, I leave it at that and that is the extent of my belief in
        the supernatural.
      </p>

      <p>
        But I do have a strong belief system that governs my actions on a daily
        basis. <br />
        This system is my truth.
      </p>
      <p>
        <span className="highlight">It is the way I perceive the world.</span>
      </p>
      <p>
        We each have our own. A system that evolves for each of us over the
        entire course of our lives. Sometimes faster, sometimes slower. Up until
        I was 23, I never had concrete principles of my own and I was heavily
        influenced by the principles of those I hung out with. I consider myself
        fortunate to have met the erudite mentors and peers that I have had in
        life. My beliefs constantly fluctuated, but this was a journey that had
        to pan out in its own time. There would be no rushing it.
      </p>

      <br />
      <hr />
      <h2>The antithesis of my very being</h2>
      <hr />
      <p>
        The year I turned 23 was an interesting year in my life. Alongside
        fluctuating beliefs, I had been incredibly indecisive about my career
        path. I had a degree in Electronics Engineering and a masters in
        Management Studies. But I wanted to do something else.
      </p>

      <p>
        I wanted to be a professional{" "}
        <span className="highlight">programmer</span> and a hobby{" "}
        <span className="highlight">pianist</span>.
      </p>

      <p>
        One could say it might as well have been a flip of the coin that I based
        these choices off of. That's how random it seemed to people in my
        circle. No one knew me as a solid programmer in college, for I was what
        one would classify, a closet programmer. If you'd ask anyone I had gone
        to school with (and that's over 19 years of education mind you), they'd
        say they had never even seen me close to a piano, let alone play it and
        they'd be right.
      </p>

      <p>
        It was like I decided to render all my previous experiences pointless
        and start all over again. It felt like the{" "}
        <span className="highlight">antithesis of my very being</span>. But it
        wasn't.
      </p>

      <p>
        I had accumulated credits for a minor in computer science with my best
        grades in engineering coming from these classes. Logical thinking and
        math was something I felt at home with, and so, programming was
        something I truly enjoyed. I had taken piano, guitar and drumming
        lessons as a kid, a few summers at best. But it was sufficient to help
        me develop a basic foundation in music theory.
      </p>

      <p>
        Now, neither was enough to enable or defend my choices. I knew that this
        path as a self-taught programmer and pianist wouldn't be a cakewalk.
        But, it was enough of a start to know that if I buckle down and put my
        mind to it, I could make good headway. As bizarre as my choices seemed
        to the outside world at the time, it was the only thing I was certain
        about. And this certainty was enough to get me going.
      </p>

      <p>
        It was in January of that year that I decided to forge my beliefs. I
        started reading a few books which granularly coalesced my beliefs into
        principles of concrete substance. Through my readings (and several
        re-readings) of these books, I had put together my core beliefs. Unlike
        the ever fleeting beliefs from my past, these ones remain unchanged, for
        the most part. It has undergone a few natural tweaks stemming from my
        discussions of these beliefs with others. But I'm convinced in my way of
        life for whatever I want to accomplish.
      </p>

      <p>
        This page summarizes{" "}
        <span className="highlight">the bible I live by</span> and is my record
        of continuing to fervently stick to its beliefs. All the while keeping
        an open mind to criticism of my ideas from those around me.
      </p>

      <br />
      <hr />
      <h2>The 10,000 hour goal</h2>
      <hr />
      <p>
        It has been a year and a half (at the time of writing this which is July
        2019) since the formulation of my beliefs. As someone trying to play
        catch up against those with more background than me, I had no choice but
        to spend more time than your average developer (pretty big assumption
        here). More so, because my generation and especially those immersed in
        the startup stew believe wholeheartedly in the hustle. While I do admit
        that the startup culture and its contagious requirement to HUSTLE ALL
        THE FREAKIN TIME has played a part in this, I promise you, it goes
        beyond this.
      </p>

      <p>
        Outliers by Malcolm Gladwell is a book that has played a pivotal role in
        my philosophy. Not all chapters in a book are made equal. While there
        are parts of the book I occasionally skim through to entertain my whims
        and fancies, the 2nd chapter of the book, titled 'The 10,000 hour rule'
        is etched into my memory (well, atleast the principles of it are). Of
        the stories that the author illustrates to make his point, the ones I
        would like to recollect below are that of Bill Joy and that of the
        Beatles.
      </p>
      <Accordion title="Bill Joy: The Edison of the internet">
        Bill Joy was a computer programmer who took on the task of rewriting
        UNIX which is an operating system and his verion of the OS still runs in
        millions of computers. He cofounded Sun Microsystems and was a major
        contributor to Java. Often called the Edison of the internet, he is
        regarded as one of the most influential people in the history of
        computing. <br />
        <br />
        He is an established pioneer but his journey to getting there provides
        some interesting insights to chew on. In the early 1970s, at the time
        when Joy was looking to apply to college, computers were the size of
        rooms and programming was a tedious endeavour. Computer programs were
        written using punch cards with the operator processing one task at a
        time and the tiniest of errors meant you had to rewrite the program and
        resubmit the punch cards. More than being a test of logical reasoning,
        it was a test of your patience as a programmer. <br />
        <br />
        It was exactly at this point of time that computers got powerful enough
        to handle hundreds of tasks in real time through the advent of a concept
        called time sharing. The school that Joy went to, Michigan, was one of
        probably only 3 other schools that had these new computers. Joy found
        his happy place when he accidentally upon a unique opportunity that only
        a handful in the world got. To program on a time sharing computer. While
        student time on these machines was limited to a fixed amount of money
        every student got, he found a bug in the system that let him extend his
        time without ever getting charged. He spent more time in the Computer
        Centre than his classes, staying up all night at the Centre. <br />
        <br />
        At Michigan Joy was programming eight or ten hours a day. Programming in
        earnest by sophomore year. Add in the summers, and his first year at
        Berkley (where he was a graduate student). By the time he had started
        writing proficient code during his 2nd year at Berkley, he had
        accumulated 10,000 hours of practice.
      </Accordion>

      <Accordion title="The Beatles & the Hamburg crucible">
        The Beatles were an English rock band, considered one of the most
        influential bands of all time. In 1960, they were a struggling high
        school rock band without a drummer comprising John Lennon, Paul
        McCartney, George Harrison and Stuart Sutcliffe. <br />
        <br />
        At the time, their booking agent, Allan Williams, a 29 year old
        Liverpool businessman and promoter met with Bruno Koschmider, the owner
        of the Indra club down in Hamburg. Bruno had the idea of bringing in
        bands to play down at his strip club. The format would be a non stop
        show, hour after hour, as the bands tried to catch the passing traffic
        to prompt clientele to lurch in and out. <br />
        <br />
        Williams wanted to send Rory Storm and the Hurricanes (of which Ringo
        Starr was a member before joining the Beatles towards the end of 1962),
        but they were committed to another offer. So, he decided to send the
        Beatles down with the intention of finding a better musical group to
        replace them. Looking for a drummer, they found Pete Best, who was
        regarded as a steady drummer with the capability to play the bass on all
        4 beats. With this new makeshift group, they made the journey to
        Hamburg. <br />
        <br />
        So what was so special about Hamburg that made this ragtag group of
        misfits into the band that started a music revolution with the onset of
        Beatlemania? It wasn't that the acoustics were fantastic, it wasn't. Or
        that the audience was savvy and appreciative, they weren't. It was the
        sheer amount of time the band was forced to play. As Lennon recollects
        their experience in Hamburg, "We got better and got more confidence. We
        couldn't help it with all the experience playing all night long. In
        Hamburg, we had to play for 8 hours." <br />
        <br />
        As their reputation grew and the clubs started packing crowds, they were
        playing 7 nights a week. The Beatles travelled to Hamburg 5 times
        between 1960 and 1962. On the 1st trip, they played a 106 nights, 5 or
        more hours a night. On the 2nd, they played 92 nights and on the 3rd,
        they played 48 nights, gradually increasing the number of hours over
        this period. Their last 2 Hamburg gigs involved another 90 hours over 2
        months. <br />
        <br />
        In a year and a half, they had performed for a total of 270 nights in
        just a year and a half. By the time they had their first commercial
        success in 1964, they had performed live 1200 times. They had not only
        had a significant jump in their stamina, they had also learnt an
        incredible number of covers and were more disciplined on stage after
        their Hamburg crucible. It was the making of them.
      </Accordion>

      <p>
        As is evident from these stories above and the other examples that
        Gladwell presents in his book, most people who get really good at their
        craft, reach this point after having put in 10000 hours roughly. With
        the target number of hours and the fields that I want to put this effort
        into defined, the steps to implementing this became a lot clearer.
      </p>
      <br />
      <hr />
      <h2>Creating your buckets</h2>
      <hr />

      <p>
        Having chosen my craft as a computer scientist and musician, it became a
        lot easier to stop myself from running the wrong race. The most
        important shift in perspective that I have had is the ability to pause
        every day and ask myself how am I spending my hours today. I visualize
        two buckets in my head, one for computer science and one for music. The
        way I see it, these buckets fill up at 10,000 hours and the goal is to
        try and fill up these two buckets as much as possible.
      </p>

      <p>
        There is a tool I use on my code editor called Waka Time. It measures
        (with pretty good accuracy) how much time one spends programming each
        day. It has an algorithm which uses a concept called heartbeat to know
        when the user is actually working versus just keeping the editor open.
      </p>

      <img
        src={productivity}
        alt="productivity graph"
        style={{ objectFit: "contain" }}
      />

      <p>
        The above graph shows two of my most productive weeks. While this
        doesn't show a qualitative understanding of how I used up those hours, I
        found that it was a step in the right direction. I was putting in the
        grind to say the least. I address the qualitative nature of work in the
        section titled,{" "}
        <span
          className="link"
          onClick={() =>
            definingSuccessCriteria.current.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          }
        >
          Defining success criteria
        </span>
        . On a good week, I am able to put in 40 to 45 hours towards programming
        (including work obviously) and 15 to 20 hours towards learning the
        piano. While these long hours spent between these two fields, provide me
        with a sense of accomplishment, the target continually makes me realize
        how important being consistent with the number of hours is.
      </p>

      <p>
        Putting in long hours was easy on some days and it wasn't easy on
        others. But I realized that as I strengthened these habits, my tolerance
        for the number of hours I could focus, picked up radically. This was a
        crucial change to my philosophy. From forcing myself to spend time on
        these activities, I went to losing track of how much time I was spending
        on them. And when this transition happens naturally, it's not effort
        anymore.
      </p>

      <blockquote>
        We have a tendancy to underachieve in the short term and a tendancy to
        overachieve in the long term.
      </blockquote>

      <p>
        Another interesting pattern I noticed while accumulating these hours was
        that I would set harsh time-bound targets to achieve with the intention
        of pushing my limits. I almost always never met them. There were days I
        felt demotivated about constantly underachieving in comparison to what I
        believed was my potential. But at every stretch of the way when I look
        back at how far I've come in comparison to my previous version from two
        years ago, I see tremondous progress. And this is where I derive my
        motivation from. Whenever I've felt the imposter syndrome strike, I
        would take a moment to look back at projects I've worked on and the
        piano pieces I've learnt. This self-appreciation and acknowledgement of
        my own efforts gets me up and at it again.
      </p>

      <br />
      <h3 className="highlight underline">UPCOMING SECTIONS</h3>
      <br />
      <hr />
      <h2 ref={definingSuccessCriteria}>
        Defining success criteria - Where Cal Newport comes in
      </h2>
      <hr />

      <p>Add thoughts about deep work</p>

      <br />
      <hr />
      <h2>Reconciling Malcolm Gladwell with Tim Ferriss</h2>
      <hr />

      <p>Contrasting 10000 hours with the 4 hour work week</p>

      <br />
      <hr />
      <h2>Weekly Goal Setting</h2>
      <hr />

      <p>Thoughts on tracking progress</p>
      <br />
      <hr />
      <h2>The power of iteration</h2>
      <hr />

      <p>
        Extending the principle of iteration from software engineering to life.
      </p>

      <p>
        <span className="highlight">Stay tuned for updates . . .</span>
      </p>
    </CredoPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Credo);
