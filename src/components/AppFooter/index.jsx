import React from 'react'

import './AppFooter.css'

function AppFooter() {
  return (
    <footer className="sans-serif bg-dark-gray">
      <div className="pv3 center w-80 mw7">
        <h3 className="f5">quone</h3>
        <p className="moon-gray">
          verb <br />
          1. A neologism coined in "The Stakeout" episode of the television series
          "Seinfeld", "quone" was a word used by Mrs. Seinfeld in a Scrabble game.
          It was found by Jerry to not be a real word, but Kramer insists that it
          means "to sedate".
        </p>
        <p className="moon-gray">
          <i>
            "This dictionary's no good, we need a medical dictionary! When a patient
            is difficult, you quone him." - Kramer
          </i>
        </p>
        <br />
        <p className="moon-gray copy">
          ANDY BEERS &copy; 2017
          <a href="https://github.com/andybeers/quonable" className="ml2 link dim">
            GITHUB
          </a>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
