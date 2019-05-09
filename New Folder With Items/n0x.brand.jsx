import { n0x } from "./n0x.n0x";

const brand = {
  color: {
    light: "rgba(52,152,255,1)",
    lighter: "rgba(149,182,255,1)",
    white: "rgba(255, 255, 255, 1)"
  },
  font: {
    size: {
      heading: {
        main: n0x.fontSize * 8,
        sub1: n0x.fontSize * 5.5,
        tags: n0x.fontSize * 1.5
      },
      text: {
        body: n0x.fontSize * 1.75
      }
    },

    family: {
      sans: "system-ui, sans-serif",
      mono: "Menlo, monospace"
    }
  }
};

export { brand };
