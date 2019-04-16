import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AniPage = class extends PureComponent {
  render(){

    const { AnimateEnter, AnimateExit, DurationEnter, DirectionEnter, DurationExit, DirectionExit, children } = this.props

    const Page = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `;

    const AnimatePage = styled(Page)`
      &.page-enter {
        animation: ${ AnimateEnter } ${ DurationEnter } ${ DirectionEnter };
      }
      &.page-exit {
        animation: ${ AnimateExit } ${ DurationExit } ${ DirectionExit };
      }
    `;

    return(
      <AnimatePage>{ children }</AnimatePage>
    )
  }
}

export { AniPage }
