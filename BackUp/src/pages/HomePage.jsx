// Core
import React from "react";
import { Link } from "@reach/router";

// Styling
import { n0x, image, data } from "../components/n0x.vars";

// Components
import {
  PageLayout,
  LabelBlock,
  SoundBlock,
  MxBlock,
  BGimg,
  BGcolor,
  PhotoBlock,
  VxBlock,
  GxBlock,
  WebBlock,
  RxBlock,
  Box,
  T,
  T2,
  PT,
  Button2
} from "../components/n0x.library";

// Variables
const tint = props => props.theme.colors.blacktint[1];
const ht = 26;
const radius = 1;
const clr = props => props.theme.colors.link[0];
const pad = 0.5;

// Actual Page
const HomePage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.blacktint[3]}
    >
      <SoundBlock lp={2} tv={2} p={pad}>
        <Button2>
          <Link to="/sound-design">
            <BGimg bgImage={image.bg.sound} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Sound Design</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </SoundBlock>

      <MxBlock lp={2} tv={2} p={pad}>
        <Button2>
          <Link to="/music-production">
            <BGimg bgImage={image.bg.mx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Music Production</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </MxBlock>

      <PhotoBlock lp={4} tv={4} p={pad}>
        <Button2>
          <Link to="/web-design">
            <BGimg bgImage={image.bg.photo} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Photography</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </PhotoBlock>

      <VxBlock lp={2} tv={2} p={pad}>
        <Button2>
          <Link to="/video-production">
            <BGimg bgImage={image.bg.vx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Video Production</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </VxBlock>

      <GxBlock lp={4} tv={4} p={pad}>
        <Button2>
          <Link to="/graphic-design">
            <BGimg bgImage={image.bg.gx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Graphic Design</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </GxBlock>

      <WebBlock lp={2} tv={2} p={pad}>
        <Button2>
          <Link to="/photography">
            <BGimg bgImage={image.bg.web} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Fullstack Web Development</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </WebBlock>

      <RxBlock lp={2} tv={2} p={pad}>
        <Button2>
          <Link to="/digital-media-repair">
            <BGimg bgImage={image.bg.rx} bRadius={radius}>
              <BGcolor height={ht} bgColor={tint} bRadius={radius}>
                <PT color={clr}>Digital Media Repair</PT>
              </BGcolor>
            </BGimg>
          </Link>
        </Button2>
      </RxBlock>
    </PageLayout>
  );
};

export default HomePage;
