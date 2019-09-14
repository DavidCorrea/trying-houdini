registerAnimator('sample-animator', class {
    constructor(options) {}
    animate(currentTime, effect) {
      // currentTime - The current time from the defined timeline
      // effect - Group of effects that this animation is working on
      effect.localTime = currentTime * 5000;
    }
});
