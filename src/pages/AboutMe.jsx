import React from "react";

export default function AboutMe() {
  return (
    <div className="rounded-lg mx-auto px-8 w-fit max-w-2xl flex flex-col text-center align-items-center mt-8">
      <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
        <h1 className="text-cyan-300 text-center my-4 lemb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl ">
          About Me
        </h1>

        <p className="mb-3 font-light ">
          My name is Corrie Stroup and I'm a Web Developer from the United
          States, though I'm based in Vietnam. I began coding when I was in my
          early 20's -- I started with Python and didn't progess very far. I got
          far enough that I was familiar with a number of libraries, and I'd
          thrown together a couple of web-scrapers using Selenium. But around
          that time, I moved to Asia and focused more on my teaching career.
        </p>

        <p className="mb-3 font-light  ">
          I dipped back into Python a couple of times, each time relearning the
          basics and expanding on my knowledge base a little further. I played
          around with VBA, introduced myself to SQL, and in general maintained a
          hobby-level exposure for a couple of years.
        </p>

        <p className="mb-3 font-light  ">
          Around the time COVID hit, I began burning out with teaching. For a
          number of reasons, teaching just wasn't doing it for me. I managed to
          snag a couple of really nice gigs, but even in ideal situations,
          teaching was just draining for me. I started looking back into
          programming as a way to change my career and once again picked up
          Python, but got stuck in tutorial hell.
        </p>
        <p className="mb-3 font-light  ">
          Towards the end of the pandemic (at least here in Asia), I happened
          across a reference to The Odin Project and started checking it out.
          Now, I'd gone a couple of years just living the meme of "Haha! Python
          easy! Haha! Javascript bad!" so, I'm ashamed to admit it, I was a
          little hesitant.
        </p>

        <p className="mb-3 font-light  ">
          But after pushing through Foundations, I realized how badly I'd been
          missing working with code. Javascript took a little getting used to,
          but by the end of Foundations, I felt like I had translated every
          single drop of Pythonic knowledge I'd accumulated into Javascript. I
          also found that, despite not having an artistic bone in my body, I was
          able to create things that were aesthetically pleasing and
          interesting.
        </p>

        <p className="mb-3 font-light  ">
          I got hooked on Frontend Development.
        </p>

        <p className="mb-3 font-light  ">
          Now, I've been pushing into the backend lately, and while I'm not sure
          that's entirely my bag, my first complete fullstack application was
          this very blog. It started out as an answer to a simple question I
          had: "HTML templating on the backend just feels bad compared to
          React... How can I use React on the frontend and the rest of the MEN
          on the back?"{" "}
        </p>

        <p className="mb-3 font-light  ">
          A few days later and this bad boy was up and running!
        </p>

        <p className="mb-3 font-light  ">
          Needless to say, I've done a lot of growing, just getting this project
          off the ground. I can see what kind of a pain-in-the-neck fullstack
          development could be... But it's got its charms.
        </p>

        <p className="mb-3 font-light  ">
          You know Rubber Duck Debugging? Where you explain your problems to a
          rubber duck and by walking through the problem step-by-step you end up
          figuring things out? Yeah. This blog is my rubber duck.
        </p>

        <p className="mb-3 font-light  ">
          To any who are actually reading this, welcome my dear rubber ducks.
          Thank you for your service.
        </p>
      </div>
    </div>
  );
}
