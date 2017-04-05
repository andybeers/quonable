import React from 'react';
import './AppFooter.css';

const AppFooter = () => {
  return (
    <footer>
      <div>
        <h3>quone</h3>
        <p>
          verb <br/>
          1. A neologism coined in "The Stakeout" episode of the television series "Seinfeld", "quone" was a word used by Mrs. Seinfeld in a Scrabble game. It was found by Jerry to not be a real word, but Kramer insists that it means "to sedate".
        </p>
        <p><i>"This dictionary's no good, we need a medical dictionary! When a patient is difficult, you quone him." - Kramer</i></p> 
      </div>
      <p className='copy'>Andy Beers &copy; 2017 <a href=''>GITHUB</a></p>
    </footer>
  );
};

export default AppFooter;
