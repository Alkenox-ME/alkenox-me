import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components'

const Sidebar = styled(posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 }
})
)`
width: 300px;
height: 100vh;
background: #eee;
padding: 30px;
display: flex;
flex-direction: column;
list-style: none;
margin: 0;
position: absolute;
top: 0;
bottom: 0;
`

const Item = styled(posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
)`
  background: ${props => props.theme.colors.gray[1]};
  border-radius: 5px;
  height: 40px;
  width: 100%;
  opacity: 0;
  margin-bottom: 10px;
  transform-origin-y: 0%;
  color: ${props => props.theme.colors.white};

  &:nth-child(1) {
    background: #f69a9a;
}

  &:nth-child(2) {
    background: #83ae9b;
}

  &:nth-child(3) {
    background: #ef4566;
}

  &:nth-child(4) {
    background: #f9cdae;
}

  &:nth-child(5) {
    background: #c8c8a9;
}
`

class Menu extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar pose={isOpen ? 'open' : 'closed'}>
        <Item />
        <Item />
        <Item />
        <Item />
      </Sidebar>
    );
  }
}

export default Menu
