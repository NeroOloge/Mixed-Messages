const messages = {
  inspirational: [
    "The greatest love is self-love.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
    "You can make your own happiness.",
  ],
  prediction: [
    "A short stranger will soon enter your life with blessings to share.",
    "You will be called in to fulfill a position of high honor and responsibility.",
    "You will conquer obstacles to achieve success.",
    "You will marry your lover.",
  ],
  truth: [
    "It is now, and in this world, that we must live.",
    "You must try, or hate yourself for not trying.",
    "It's better to be alone sometimes.",
    "The greatest risk is not taking one.",
    "You already know the answer to the questions lingering inside your head.",
  ],
};

for (const key in messages) {
  const msg = messages[key][Math.floor(Math.random() * messages[key].length)];
  console.log(msg);
}
