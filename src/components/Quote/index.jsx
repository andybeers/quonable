import cx from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AppHeader from "../AppHeader";
import Button from "../Button";
import "./Quote.css";
import { setMode } from "./quoteSlice";
import { useShowNewQuote } from "./useShowNewQuote";

const Quote = () => {
  const quoteEl = React.useRef();
  const dispatch = useDispatch();
  const author = useSelector((state) => state.author);
  const quote = useSelector((state) => state.quote);
  const mode = useSelector((state) => state.mode);

  const [hidden, setHidden] = React.useState(false);
  const { showNewQuote } = useShowNewQuote();

  const fadeInNewQuote = React.useCallback(
    (e) => {
      const { classList } = e.target;
      // Make sure this only fires after the fadeout animation
      if (classList.contains("o-0")) {
        setHidden(false);
        showNewQuote();
      }
    },
    [showNewQuote]
  );

  function handleSetMode() {
    dispatch(setMode(mode === "goofy" ? "serious" : "goofy"));
    showNewQuote();
  }

  // Add transition listener
  React.useEffect(() => {
    const quoteElRef = quoteEl.current;
    if (quoteElRef) {
      quoteElRef.addEventListener("transitionend", fadeInNewQuote);
    }
    return () => {
      quoteElRef.removeEventListener("transitionend", fadeInNewQuote);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate initial quote
  React.useEffect(() => {
    showNewQuote();
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
