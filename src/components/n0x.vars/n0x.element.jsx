import { n0x } from './n0x.n0x' // eslint-disable-line
import { brand } from './n0x.brand' // eslint-disable-line
import { base } from './n0x.base' // eslint-disable-line

const element = {
  link: {
    color: {
      base: brand.color.light,
      hover: brand.color.lighter
    }
  },
  button: {
    primary: {
      color: n0x.color.white,
      backgroundColor: n0x.color.blue
    },
    secondary: {
      color: n0x.color.white,
      backgroundColor: n0x.color.green
    },
    danger: {
      color: n0x.color.white,
      backgroundColor: n0x.color.red
    }
  }
}


export { element }
