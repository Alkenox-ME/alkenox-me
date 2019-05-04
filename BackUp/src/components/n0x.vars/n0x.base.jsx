import { n0x } from "./n0x.n0x"; // eslint-disable-line

const base = {
  font: {
    size: {
      t1: n0x.fontSize * 7,
      t2: n0x.fontSize * 6,
      t3: n0x.fontSize * 5,
      t4: n0x.fontSize * 4,
      t5: n0x.fontSize * 3,
      t6: n0x.fontSize * 2,
      t7: n0x.fontSize * 1,
      t8: n0x.fontSize * 0.75
    },
    family: {
      sans:
        '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
      serif: "athelas, georgia, times, serif",
      mono: "Menlo, monospace"
    }
  },
  mediaQuery: {
    mobile: `@media screen and (min-width: ${n0x.breakpoint[0]})`,
    tablet: `@media screen and (min-width: ${n0x.breakpoint[1]})`,
    desktop: `@media screen and (min-width: ${n0x.breakpoint[2]})`,
    tv: `@media screen and (min-width: ${n0x.breakpoint[3]})`
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  shadow: {
    small: `0 0 .25em ${n0x.tint.black}`,
    large: `0 0 1em ${n0x.tint.black}`
  }
};

export { base };
