import React, { PureComponent } from 'react'
import posed, { PoseGroup } from 'react-pose'

const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

const ItemList = ({ items }) => (
  <PoseGroup>
    {items.map((item) => <Item key={item.id} />)}
  </PoseGroup>
)

export const PosedCarousel = class extends PureComponent{ render(){return(<ItemList />)}}
