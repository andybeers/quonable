import React from "react";
import { useDispatch, useSelector } from "react-redux";

import authors from "../../authors";
import quotes from "../../quotes";
import { roll } from "../../utils/quote-helpers";
import { generateQuote } from "./quoteSlice";

function getOppositeMode(mode) {
  return mode === "goofy" ? "serious" : "goofy";
}

export function useShowNewQuote() {
  const dispatch = useDispatch();

  const authorIndex = useSelector((state) => state.authorIndex);
  const quoteIndex = useSelector((state) => state.quoteIndex);
  const mode = useSelector((state) => state.mode);

  const showNewQuote = React.useCallback(() => {
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

  return {
    showNewQuote,
  };
}
