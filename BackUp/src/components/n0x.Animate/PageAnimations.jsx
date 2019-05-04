import styled, { keyframes } from 'styled-components'

const PageContainer = styled.div `
      position: relative;
      width: 100vw;
      height: 100vh;
    `;

const Page = styled.div `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `;

const slideInRight = keyframes `
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes `
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const slideInLeft = keyframes `
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes `
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const fadeInLeft = keyframes `
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInRight = keyframes `
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  `;

const fadeOutLeft = keyframes `
    from {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  `;

const fadeOutRight = keyframes `
    from {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    `;
const fadeIn = keyframes `
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
      `;

const fadeOut = keyframes `
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      `;

export { PageContainer, Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft, fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight, fadeIn, fadeOut }
