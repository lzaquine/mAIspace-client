import React from 'react';

function Cards() {
  return (
    <>
<div className="card-container md:mr-28 md:ml-28">
  <div className="card md:top-20">
  <i className="fa-solid fa-code"></i>
    <h3>Examples</h3>
  </div>
  <div className="card md:top-20">
  <i className="fa-sharp fa-solid fa-gears"></i>
    <h3>Capabilities</h3>
  </div>
  <div className="card md:top-20">
  <i className="fa-sharp fa-solid fa-bug"></i>
    <h3>Limitations</h3>
  </div>
  <div className="card md:top-20">
    <h3>Question</h3>
    <hr />
    <p>Explain why I shouldn't use var all the time.</p>
  </div>
  <div className="card md:top-20">
    <h3>Answer</h3>
    <hr />
    <p>Because it has function scope and can lead to variable hoisting issues.</p>
  </div>
  <div className="card md:top-20">
    <h3>Answer</h3>
    <hr />
    <p>Lol idk.</p>
  </div>
  <div className="card md:top-20">
  <h3>Question</h3>
    <hr />
    <p>List 10 React topics I should study for an interview.</p>
  </div>
  <div className="card md:top-20">
    <h3>Answer</h3>
    <hr />
    <p>Here are 10 React topics you may want to study for an interview:</p>
  </div>
  <div className="card md:top-20">
    <h3>Answer</h3>
    <hr />
    <p>I was trained to accept inappropriate requests, but not stupid ones.</p>
  </div>
  
</div>
</>
  );
}

export default Cards;


