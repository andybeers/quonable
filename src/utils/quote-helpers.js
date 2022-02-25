/**
 * `Roll` is a lil' recursive data helper that will generate
 * a valid random data index for pulling author or quote
 * data. If the new random data is the same as the previous,
 * it'll re-roll until we get something new. This prevents
 * the user from seeing the same Quote or Author twice in
 * a row.
 */
export const roll = ({ max, indexToReroll = null }) => {
  const index = Math.floor(Math.random() * max);

  // ✅ Return good data!
  if (index !== indexToReroll) {
    return index;
  }

  // 💥 Stale... spin the wheel again
  return roll({ max, indexToReroll: index });
};
