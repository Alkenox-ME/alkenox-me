// Core
import React from "react";
import { Link } from '@reach/router';

// Styling
import { image, data } from "../components/n0x.vars";

// Components
import { PageLayout, SoundBlock, MxBlock, BGimg, BGcolor, PhotoBlock, VxBlock, GxBlock, WebBlock, RxBlock, PT, Button2, colors } from "../components/n0x.library";

// Variables
const tint = props => props.theme.colors.tint.black[1];
const ht = '26vh';
const radius = '1em';
const clr = props => props.theme.colors.link[0];
const pad = '0.5%';

// Actual Page
const Home = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={colors.tint.black[3]}
    >
      <SoundBlock lp={2} tv={2} p={pad} id='1' key='Sound'>
          <Link to="/sound-design">
            <Button2>
            <BGimg bgImage={image.bg.sound} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Sound Design</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </SoundBlock>

      <MxBlock lp={2} tv={2} p={pad} id='2' key='Mx'>
          <Link to="/music-production">
            <Button2>
            <BGimg bgImage={image.bg.mx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Music Production</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </MxBlock>

      <PhotoBlock lp={4} tv={4} p={pad} id='3' key='Photo'>
          <Link to="/photography">
            <Button2>
            <BGimg bgImage={image.bg.photo} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Photography</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </PhotoBlock>

      <VxBlock lp={2} tv={2} p={pad} id='4' key='Vx'>
          <Link to="/video-production">
            <Button2>
            <BGimg bgImage={image.bg.vx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Video Production</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </VxBlock>

      <GxBlock lp={4} tv={4} p={pad} id='5' key='Gx'>
          <Link to="/graphic-design">
            <Button2>
            <BGimg bgImage={image.bg.gx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Graphic Design</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </GxBlock>

      <WebBlock lp={2} tv={2} p={pad} id='6' key='Web'>
          <Link to="/web-design">
            <Button2>
            <BGimg bgImage={image.bg.web} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Fullstack Web Development</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </WebBlock>

      <RxBlock lp={2} tv={2} p={pad} id='7' key='Rx'>
          <Link to="/digital-media-repair">
            <Button2>
            <BGimg bgImage={image.bg.rx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Digital Media Repair</PT>
              </BGcolor>
            </BGimg>
          </Button2>
          </Link>
      </RxBlock>
    </PageLayout>
  );
};

export default Home;
