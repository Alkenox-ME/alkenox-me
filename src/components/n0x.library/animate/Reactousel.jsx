import React, { PureComponent } from 'react'
import uuid from 'uuid'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components/macro'
import { CaretLeft, CaretRight, Pause, Play } from 'styled-icons/boxicons-regular'
import { carouselContainer1 } from '../animate'
import { border } from '../lib'

export const RSlideItem = styled(
    posed.li(props => props.anim)
  )`
    width: 100%;
`;

export const RSlide = styled(
    posed.ul(props => props.anim)
  )`
    list-style: none;
    display: block;
  `;

export const Reactousel = class extends PureComponent {
  state = { index: 0, uuid: uuid.v4() }

  renderNext = () => {
    if (this.state.index === this.props.children.length - this.props.pageSize)
      return null
    if (this.props.children.length < this.props.pageSize) return null

      let Arrow = styled.div`
        position: absolute;
        top: 30vh;
        width: 100%;
        color: ${props => props.theme.colors.white};
      `

    let Right = styled(CaretRight)`
          position: absolute;
          width: 3em;
          right: 0;
        `
    return (
      <Arrow>
        <Right onClick={() => this.setState({ index: this.state.index + 1 })} />
      </Arrow>
    )
  }

  renderPrev = () => {
    if (this.state.index === 0) return null

      let Arrow = styled.div`
        position: absolute;
        top: 30vh;
        width: 100%;
        color: ${props => props.theme.colors.white};
      `

      let Left = styled(CaretLeft)`
            position: absolute;
            width: 3em;
            left: 0;
          `

    return (

          <Arrow>
            <Left onClick={() => this.setState({ index: this.state.index - 1 })} />
          </Arrow>

    )
  }

  componentDidMount() {
    let value = 0
    // this.props.children.forEach(child => {
    //   const ref = child.props.getRef()
    //   const node = dangerouslyFindDOMNode(ref)
    //   const style = node.currentStyle || getComputedStyle(node)
    //   const margins =
    //     parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10)

    //   const width = node.getBoundingClientRect().width
    //   const size = margins + width
    //   value += size
    // })

    let container = document.getElementById(this.state.uuid)
    container.childNodes.forEach(node => {
      const style = node.currentStyle || getComputedStyle(node)
      const margins =
        parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10)

      const width = node.getBoundingClientRect().width
      const size = margins + width
      value += size
    })

    this.setState({ contentWidth: value })
  }

  render() {

      let AnimatedDiv = styled(
        posed.div(carouselContainer1)
      )`
      display: inline-block;
      margin: auto 0;
      width: 100%;
      `;

      let Carousel = styled.div`
        position: relative;
        display: block;
        ${border}
      `

    const translate = this.state.contentWidth
      ? this.state.index *
        (this.state.contentWidth / this.props.children.length)
      : 0

    return (
      <Carousel>
        <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
          <AnimatedDiv
            id={this.state.uuid}
            style={{
              ...this.props.style,
            transform: `translateX(-${translate}vw)`,
            }}
          >
            {this.props.children}
          </AnimatedDiv>
        </PoseGroup>
        {this.renderNext()}
        {this.renderPrev()}
      </Carousel>
    )
  }
}
