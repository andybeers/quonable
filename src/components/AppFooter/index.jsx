import React from 'react';
import './AppFooter.css';

function AppFooter() {
  return (
    <footer>
      <div>
        <h3>quone</h3>
        <p>
          verb <br/>
          1. A neologism coined in "The Stakeout" episode of the television series "Seinfeld", "quone" was a word used by Mrs. Seinfeld in a Scrabble game. It was found by Jerry to not be a real word, but Kramer insists that it means "to sedate".
        </p>
        <p><i>"This dictionary's no good, we need a medical dictionary! When a patient is difficult, you quone him." - Kramer</i></p> 
        <br />
        <p className='copy'>Andy Beers &copy; 2017 <a href='https://github.com/andybeers/quonable'>GITHUB</a></p>
      </div>
    </footer>
  );
};

export default AppFooter;