export const liquidTransition = {
  forwards: {
    old: {
      name: "liquid-out",
      duration: "0.34s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    new: {
      name: "liquid-in",
      duration: "0.46s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  backwards: {
    old: {
      name: "liquid-out",
      duration: "0.34s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    new: {
      name: "liquid-in",
      duration: "0.46s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
} as const;
