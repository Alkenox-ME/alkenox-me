import { n0x } from "./n0x.n0x";

const brand = {
  color: {
    dkblue: "rgba(0, 120, 244, 1)",
    light: "rgba(52,152,255,1)",
    lighter: "rgba(149,182,255,1)",
    offwhite: "rgba(244, 244, 244, 1)",
    babyblue: "rgba(133, 173, 249, 1)",
    red: "rgba(254, 3, 3, 1)",
    black: "rgba(0, 0, 0, 1)"
  },
  font: {
    size: {
      heading: {
        desktop: [
          n0x.fontSize * 8,
          n0x.fontSize * 5.5,
          n0x.fontSize * 3.5,
          n0x.fontSize * 2.5
        ],
        mobile: [n0x.fontSize * 3.5, n0x.fontSize * 2.5],
        tags: n0x.fontSize * 1.5
      },
      text: {
        desktop: [n0x.fontSize * 2, n0x.fontSize * 1.75],
        mobile: [n0x.fontSize * 1.75, n0x.fontSize],
        footer: [n0x.fontSize * 2.5, n0x.fontSize * 2],
        list: n0x.fontSize * 1.75,
        price: n0x.fontSize * 1.85
      }
    },

    family: {
      sans: "system-ui, sans-serif",
      mono: "Menlo, monospace"
    }
  }
};

const deskH1 = brand.font.size.heading.desktop[0];
const deskH2 = brand.font.size.heading.desktop[1];
const deskH3 = brand.font.size.heading.desktop[2];
const deskH4 = brand.font.size.heading.desktop[3];
const mobileH1 = brand.font.size.heading.mobile[0];
const mobileH2 = brand.font.size.heading.mobile[1];
const deskT1 = brand.font.size.text.desktop[0];
const deskT2 = brand.font.size.text.desktop[1];
const mobileT1 = brand.font.size.text.mobile[0];
const mobileT2 = brand.font.size.text.mobile[1];
const deskFoot = brand.font.size.text.footer[0];
const mobileFoot = brand.font.size.text.footer[1];

export {
  brand,
  deskH1,
  deskH2,
  deskH3,
  deskH4,
  mobileH1,
  mobileH2,
  deskT1,
  deskT2,
  mobileT1,
  mobileT2,
  deskFoot,
  mobileFoot
};
