import cx from "classnames";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import authors from "../../authors";
import quotes from "../../quotes";
import { roll } from "../../utils/quote-helpers";
import AppHeader from "../AppHeader";
import Button from "../Button";
import "./Quote.css";
import { generateQuote, setMode } from "./quoteSlice";

function getOppositeMode(mode) {
  return mode === "goofy" ? "serious" : "goofy";
}

const Quote = () => {
  const quoteEl = useRef();
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(false);

  const author = useSelector((state) => state.author);
  const authorIndex = useSelector((state) => state.authorIndex);
  const quote = useSelector((state) => state.quote);
  const quoteIndex = useSelector((state) => state.quoteIndex);
  const mode = useSelector((state) => state.mode);

  const rollAndSetNewQuote = React.useCallback(() => {
    const maxQuoteRange =
      mode === "goofy" ? quotes.goofy.length - 1 : quotes.serious.length - 1;
    const maxAuthorRange =
      mode === "goofy" ? authors.serious.length - 1 : authors.goofy.length - 1;

    const newQuoteIndex = roll({
      max: maxQuoteRange,
      indexToReroll: quoteIndex,
    });
    const newAuthorIndex = roll({
      max: maxAuthorRange,
      indexToReroll: authorIndex,
    });

    dispatch(
      generateQuote({
        quote: quotes[mode][newQuoteIndex],
        quoteIndex: newQuoteIndex,
        author: authors[getOppositeMode(mode)][newAuthorIndex],
        authorIndex: newAuthorIndex,
      })
    );
  }, [authorIndex, dispatch, mode, quoteIndex]);

  const fadeInNewQuote = React.useCallback(
    (e) => {
      const { classList } = e.target;
      // Make sure this only fires after the fadeout animation
      if (classList.contains("o-0")) {
        setHidden(false);
        rollAndSetNewQuote();
      }
    },
    [rollAndSetNewQuote]
  );

  function handleSetMode() {
    dispatch(setMode(mode === "goofy" ? "serious" : "goofy"));
    rollAndSetNewQuote();
  }

  useEffect(() => {
    const quoteElRef = quoteEl.current;

    if (quoteElRef) {
      console.log("adding event listener");
      quoteElRef.addEventListener("transitionend", fadeInNewQuote);
    }

    return () => {
      quoteElRef.removeEventListener("transitionend", fadeInNewQuote);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    console.log("layout effect firing");
    rollAndSetNewQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`quote-body-${mode === "goofy" ? "a" : "b"}`}>
      <AppHeader />
      <div
        id="quote-section"
        ref={quoteEl}
        className={cx("w-80-ns mw-4-ns mv4 pa4 center", {
          "o-0": hidden,
          "o-100": !hidden,
        })}
      >
        <blockquote className="athelas ml0 mt0 pl4 bl bw2 b--light-blue">
          <p className="f4 f3-m f2-l lh-copy mt0 white">{quote}</p>
          <cite className="f5 ttu tracked fs-normal authorName">
            - {author}
          </cite>
        </blockquote>
      </div>
      <div className="pa4 mt2 mb2 sans-serif">
        <Button
          className="mr3"
          onClick={() => {
            setHidden(true);
          }}
        >
          New Quote
        </Button>
        <Button onClick={handleSetMode}>Invert Wisdom</Button>
      </div>
    </main>
  );
};

export default Quote;
