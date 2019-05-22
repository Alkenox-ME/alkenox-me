import { css } from 'styled-components/macro'

export const MenuFx1 = css`
  display: inline-block;
  width: 55%;
  padding: .75rem 0;
  margin: 0;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }

  li:first-child:hover ~ hr {
    margin-left: 0%;
  }

  li:nth-child(2):hover ~ hr {
    margin-left: 25%;
  }

  li:nth-child(3):hover ~ hr {
    margin-left: 50%;
  }

  li:nth-child(4):hover ~ hr {
    margin-left: 75%;
  }

  hr {
    height: .15rem;
    width: 22%;
    margin: 0;
    border-radius: 10em;
    background: rgba(0,128,255,1);
    transition: .3s ease-in-out;
  }
`

export const underlineCenter = css`
  display: inline-block;
  position: relative;
  :hover {
    transition: color .5s ease;
  }
    :after {
      content: '';
      display: block;
      height: .05em;
      width: 0;
      background: transparent;
      margin: auto;
      transition: all .5s ease;
    }
    :hover:after {
      width: 100%;
      background: rgba(0,128,255,1);
    }
`

export const underlineLtR = css`
  display: inline-block;
  :hover {
    transition: color .5s ease;
  }
  :after {
    content: '';
    display: block;
    height: .05em;
    width: 0;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
  }
  :hover:after {
    width: 100%;
    background: rgba(0,128,255,1);
  }
`

export const underlineRtL = css`
  display: inline-block;
  position: relative;
  :hover {
    transition: color .5s ease;
  }
  :after {
    content: '';
    display: block;
    height: .05em;
    width: 0;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: width .5s ease, background-color .5s ease;
  }
  :hover:after {
    width: 100%;
    background-color: rgba(0,128,255,1);
  }
`

export const underlineTtB = css`
  display: inline-block;
  :hover {
    transition: color .5s ease;
  }
  :after {
    content: '';
    display: block;
    height: 0em;
    width: 100%;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
  }
  :hover:after {
    height: .05em;
    background-color: rgba(0,128,255,1);
  }
`

export const underlineBtT = css`
  display: inline-block;
  position: relative;
  :hover {
    transition: color .5s ease;
  }
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0em;
    width: 100%;
    background: transparent;
    transition: all .5s ease;
  }
  :hover:after {
    height: .05em;
    background-color: rgba(0,128,255,1);
  }
`

export const underlineInOut = css`
  display: inline-block;
  position: relative;
  padding-bottom: .03em;
  :hover {
    transition: color .5s ease;
  }
  :before {
    content:'';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: .05em;
    width: 0;
    transition: width 0s ease, background .5s ease;
  }
  :hover:before {
    width: 100%;
    background: rgba(0,128,255,1);
    transition: width .5s ease;
  }
  :after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: .05em;
    width: 0;
    background: rgba(0,128,255,1);
    transition: width .5s ease;
  }
  :hover:after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }
`

export const underlineInOutInverse = css`
display: inline-block;
position: relative;
padding-bottom: .03em;
:hover {
  transition: color .5s ease;
}
:before {
  content:'';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: .05em;
  width: 100%;
  transition: width 0s ease;
}
:hover:before {
  width: 0%;
  background: rgba(0,128,255,1);
  transition: width .5s ease;
}
:after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: .05em;
  width: 100%;
  background: #000;
  transition: width .5s ease;
}
:hover:after {
  width: 0%;
  background: transparent;
  transition: all 0s ease;
}
`
