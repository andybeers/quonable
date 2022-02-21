/**
 * `Roll` is a lil' recursive data helper that will generate
 * a valid random data index for pulling author or quote
 * data. If the new random data is the same as the previous,
 * it'll re-roll until we get something new. This prevents
 * the user from seeing the same Quote or Author twice in
 * a row.
 *
 * @param {Number} maxRange Data array member length
 * @param {Number} prevIndex Previous index to blacklist
 */
export const roll = (maxRange, prevIndex = null) => {
  const result = Math.floor(Math.random() * maxRange);

  // ✅ Return good data!
  if (result !== prevIndex) {
    return result;
  }

  // 💥 Stale... spin the wheel again
  return roll(maxRange, result);
};
