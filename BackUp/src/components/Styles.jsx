import React from 'react'
import { Link } from '@reach/router'
import { Block, T, T1, T2, T3, T4, T5, T6, List, Item, Img, Href, HMenu, MenuItem, PT, UTitle, UText, UFX, BTN, Box, Divider, GlobalLayout, PageLayout } from './n0x.library'

const Styles = () => {

  return(
    <PageLayout>
      <T2 fontSize={3} fontWeight={900}><UTitle>Text</UTitle></T2>
      <T1 alignLeft><UTitle>Heading 1</UTitle></T1>
      <T2 lp={2} tv={4}><UTitle>Heading 2</UTitle></T2>
      <T3 lp={2} tv={4}><UTitle>Heading 3</UTitle></T3>
      <T4 lp={2} tv={4}><UTitle>Heading 4</UTitle></T4>
      <T5 lp={2} tv={4}><UTitle>Heading 5</UTitle></T5>
      <T6 lp={2} tv={4}><UTitle>Heading 6</UTitle></T6>
      <T tindent={2}>Do multos cillum hic iudicem, do se quis quem nulla. <UText>Esse admodum</UText> sed voluptate
        sed qui quem adipisicing sed commodo enim nisi se quem se qui ut irure amet
        illum, culpa nostrud despicationes, ut mandaremus eruditionem quo nescius nisi
        summis senserit elit, ita culpa probant coniunctione. <UText>Qui occaecat domesticarum
          ita labore deserunt o velit minim.Eiusmod ab anim proident, incurreret est
        labore quibusdam, te quae vidisse incididunt, ex tempor dolor est senserit.</UText>
        Quibusdam est illum quibusdam, excepteur in tamen, in fugiat nescius
        cohaerescant, tamen id officia. Esse consequat ut anim tamen, velit commodo ut
      aute enim. Sunt possumus et sempiternum, proident quae irure quibusdam aute.</T>
      <Divider />
      <Href m={2}><UFX hover3>Link 1</UFX></Href>
      <Href m={2}><UFX hover1>Link 2</UFX></Href>
      <Href m={2}><UFX hover2>Link 3</UFX></Href>
      <Href m={2}><UFX hover4>Link 4</UFX></Href>
      <Href m={2}><UFX hover5>Link 5</UFX></Href>
      <Href m={2}><UFX hover6>Link 6</UFX></Href>
      <Href m={2}><UFX hover7>Link 7</UFX></Href>
      <Divider />
      <List alignCenter lstyleDisc>
        <Item lpositionInside>Laborum consectetur cupidatat ut do magna cupidatat et nulla exercitation culpa nulla.</Item>
        <Item alignLeft>Commodo esse veniam enim dolore tempor do consequat reprehenderit nisi dolore cillum. Eu sunt enim cillum mollit voluptate reprehenderit do amet. Reprehenderit in mollit esse occaecat amet deserunt laboris consectetur quis anim eu ad id ad do. Et excepteur consequat qui tempor reprehenderit eu ipsum ea.</Item>
        <Item p={5}>Laborum consectetur cupidatat ut do magna cupidatat et nulla exercitation culpa nulla.</Item>
      </List>
      <BTN bRadius={.5} px={1} py={.5}>Button</BTN>
    </PageLayout>
  )
}

export default Styles
