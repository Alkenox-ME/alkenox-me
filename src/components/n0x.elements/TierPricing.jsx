import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Tier } from "./Tier";
import { Flex, Text, Heading } from "../n0x.Bass";

const TierPricing = class extends PureComponent {
  render() {
    const {
      titleSz,
      title,
      title1,
      price1,
      length1,
      desc1,
      width1,
      bg1,
      align1,
      bm1,
      bmx1,
      bmy1,
      bmt1,
      bmb1,
      bp1,
      bpx1,
      bpy1,
      bpt1,
      bpb1,
      textAlign1,
      titleSz1,
      titleWeight1,
      titleColor1,
      tm1,
      tmx1,
      tmy1,
      tp1,
      tpx1,
      tpy1,
      tpt1,
      tpb1,
      priceSize1,
      priceWeight1,
      priceColor1,
      pm1,
      pmx1,
      pmy1,
      pp1,
      ppx1,
      ppy1,
      ppt1,
      ppb1,
      lengthSize1,
      lengthWeight1,
      lengthColor1,
      lm1,
      lmx1,
      lmy1,
      lp1,
      lpx1,
      lpy1,
      lpt1,
      lpb1,
      descSize1,
      descWeight1,
      descColor1,
      dm1,
      dmx1,
      dmy1,
      dp1,
      dpx1,
      dpy1,
      dpt1,
      dpb1,
      title2,
      price2,
      length2,
      desc2,
      width2,
      bg2,
      align2,
      bm2,
      bmx2,
      bmy2,
      bmt2,
      bmb2,
      bp2,
      bpx2,
      bpy2,
      bpt2,
      bpb2,
      textAlign2,
      titleSz2,
      titleWeight2,
      titleColor2,
      tm2,
      tmx2,
      tmy2,
      tp2,
      tpx2,
      tpy2,
      tpt2,
      tpb2,
      priceSize2,
      priceWeight2,
      priceColor2,
      pm2,
      pmx2,
      pmy2,
      pp2,
      ppx2,
      ppy2,
      ppt2,
      ppb2,
      lengthSize2,
      lengthWeight2,
      lengthColor2,
      lm2,
      lmx2,
      lmy2,
      lp2,
      lpx2,
      lpy2,
      lpt2,
      lpb2,
      descSize2,
      descWeight2,
      descColor2,
      dm2,
      dmx2,
      dmy2,
      dp2,
      dpx2,
      dpy2,
      dpt2,
      dpb2,
      title3,
      price3,
      length3,
      desc3,
      width3,
      bg3,
      align3,
      bm3,
      bmx3,
      bmy3,
      bmt3,
      bmb3,
      bp3,
      bpx3,
      bpy3,
      bpt3,
      bpb3,
      textAlign3,
      titleSz3,
      titleWeight3,
      titleColor3,
      tm3,
      tmx3,
      tmy3,
      tp3,
      tpx3,
      tpy3,
      tpt3,
      tpb3,
      priceSize3,
      priceWeight3,
      priceColor3,
      pm3,
      pmx3,
      pmy3,
      pp3,
      ppx3,
      ppy3,
      ppt3,
      ppb3,
      lengthSize3,
      lengthWeight3,
      lengthColor3,
      lm3,
      lmx3,
      lmy3,
      lp3,
      lpx3,
      lpy3,
      lpt3,
      lpb3,
      descSize3,
      descWeight3,
      descColor3,
      dm3,
      dmx3,
      dmy3,
      dp3,
      dpx3,
      dpy3,
      dpt3,
      dpb3,
      title4,
      price4,
      length4,
      desc4,
      width4,
      bg4,
      align4,
      bm4,
      bmx4,
      bmy4,
      bmt4,
      bmb4,
      bp4,
      bpx4,
      bpy4,
      bpt4,
      bpb4,
      textAlign4,
      titleSz4,
      titleWeight4,
      titleColor4,
      tm4,
      tmx4,
      tmy4,
      tp4,
      tpx4,
      tpy4,
      tpt4,
      tpb4,
      priceSize4,
      priceWeight4,
      priceColor4,
      pm4,
      pmx4,
      pmy4,
      pp4,
      ppx4,
      ppy4,
      ppt4,
      ppb4,
      lengthSize4,
      lengthWeight4,
      lengthColor4,
      lm4,
      lmx4,
      lmy4,
      lp4,
      lpx4,
      lpy4,
      lpt4,
      lpb4,
      descSize4,
      descWeight4,
      descColor4,
      dm4,
      dmx4,
      dmy4,
      dp4,
      dpx4,
      dpy4,
      dpt4,
      dpb4,
      footerSz,
      footerColor,
      footer,
      bgimage,
      tint
    } = this.props;

    const Bg = styled.div `
      background-image: url(${bgimage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;

    const Tint = styled.div `
      background-color: ${tint};
    `;
    return (
      <Bg>
        <Tint>
          <Flex>
            <Heading width={1} fontSize={titleSz} p={4}>
              {title}
            </Heading>
            <Tier
              title={ title1 }
              price={ price1 }
              length={ length1 }
              desc={ desc1 }
              boxWidth={ width1 }
              boxBg={ bg1 }
              boxAlign={ align1 }
              boxMargin={ bm1 }
              boxMarginX={ bmx1 }
              boxMarginY={ bmy1 }
              boxMarginT={ bmt1 }
              boxMarginB={ bmb1 }
              boxPad={ bp1 }
              boxPadX={ bpx1 }
              boxPadY={ bpy1 }
              boxPadT={ bpt1 }
              boxPadB={ bpb1 }
              textAlign={ textAlign1 }
              titleSize={ titleSz1 }
              titleWeight={ titleWeight1 }
              titleColor={ titleColor1 }
              titleMargin={ tm1 }
              titleMarginX={ tmx1 }
              titleMarginY={ tmy1 }
              titlePad={ tp1 }
              titlePadX={ tpx1 }
              titlePadY={ tpy1 }
              titlePadT={ tpt1 }
              titlePadB={ tpb1 }
              priceSize={ priceSize1 }
              priceWeight={ priceWeight1 }
              priceColor={ priceColor1 }
              priceMargin={ pm1 }
              priceMarginX={ pmx1 }
              priceMarginY={ pmy1 }
              pricePad={ pp1 }
              pricePadX={ ppx1 }
              pricePadY={ ppy1 }
              pricePadT={ ppt1 }
              pricePadB={ ppb1 }
              lengthSize={ lengthSize1 }
              lengthWeight={ lengthWeight1 }
              lengthColor={ lengthColor1 }
              lengthMargin={ lm1 }
              lengthMarginX={ lmx1 }
              lengthMarginY={ lmy1 }
              lengthPad={ lp1 }
              lengthPadX={ lpx1 }
              lengthPadY={ lpy1 }
              lengthPadT={ lpt1 }
              lengthPadB={ lpb1 }
              descSize={ descSize1 }
              descWeight={ descWeight1 }
              descColor={ descColor1 }
              descMargin={ dm1 }
              descMarginX={ dmx1 }
              descMarginY={ dmy1 }
              descPad={ dp1 }
              descPadX={ dpx1 }
              descPadY={ dpy1 }
              descPadT={ dpt1 }
              descPadB={ dpb1 }
            />
            <Tier
              title={ title2 }
              price={ price2 }
              length={ length2 }
              desc={ desc2 }
              boxWidth={ width2 }
              boxBg={ bg2 }
              boxAlign={ align2 }
              boxMargin={ bm2 }
              boxMarginX={ bmx2 }
              boxMarginY={ bmy2 }
              boxMarginT={ bmt2 }
              boxMarginB={ bmb2 }
              boxPad={ bp2 }
              boxPadX={ bpx2 }
              boxPadY={ bpy2 }
              boxPadT={ bpt2 }
              boxPadB={ bpb2 }
              textAlign={ textAlign2 }
              titleSize={ titleSz2 }
              titleWeight={ titleWeight2 }
              titleColor={ titleColor2 }
              titleMargin={ tm2 }
              titleMarginX={ tmx2 }
              titleMarginY={ tmy2 }
              titlePad={ tp2 }
              titlePadX={ tpx2 }
              titlePadY={ tpy2 }
              titlePadT={ tpt2 }
              titlePadB={ tpb2 }
              priceSize={ priceSize2 }
              priceWeight={ priceWeight2 }
              priceColor={ priceColor2 }
              priceMargin={ pm2 }
              priceMarginX={ pmx2 }
              priceMarginY={ pmy2 }
              pricePad={ pp2 }
              pricePadX={ ppx2 }
              pricePadY={ ppy2 }
              pricePadT={ ppt2 }
              pricePadB={ ppb2 }
              lengthSize={ lengthSize2 }
              lengthWeight={ lengthWeight2 }
              lengthColor={ lengthColor2 }
              lengthMargin={ lm2 }
              lengthMarginX={ lmx2 }
              lengthMarginY={ lmy2 }
              lengthPad={ lp2 }
              lengthPadX={ lpx2 }
              lengthPadY={ lpy2 }
              lengthPadT={ lpt2 }
              lengthPadB={ lpb2 }
              descSize={ descSize2 }
              descWeight={ descWeight2 }
              descColor={ descColor2 }
              descMargin={ dm2 }
              descMarginX={ dmx2 }
              descMarginY={ dmy2 }
              descPad={ dp2 }
              descPadX={ dpx2 }
              descPadY={ dpy2 }
              descPadT={ dpt2 }
              descPadB={ dpb2 }
            />
            <Tier
              title={ title3 }
              price={ price3 }
              length={ length3 }
              desc={ desc3 }
              boxWidth={ width3 }
              boxBg={ bg3 }
              boxAlign={ align3 }
              boxMargin={ bm3 }
              boxMarginX={ bmx3 }
              boxMarginY={ bmy3 }
              boxMarginT={ bmt3 }
              boxMarginB={ bmb3 }
              boxPad={ bp3 }
              boxPadX={ bpx3 }
              boxPadY={ bpy3 }
              boxPadT={ bpt3 }
              boxPadB={ bpb3 }
              textAlign={ textAlign3 }
              titleSize={ titleSz3 }
              titleWeight={ titleWeight3 }
              titleColor={ titleColor3 }
              titleMargin={ tm3 }
              titleMarginX={ tmx3 }
              titleMarginY={ tmy3 }
              titlePad={ tp3 }
              titlePadX={ tpx3 }
              titlePadY={ tpy3 }
              titlePadT={ tpt3 }
              titlePadB={ tpb3 }
              priceSize={ priceSize3 }
              priceWeight={ priceWeight3 }
              priceColor={ priceColor3 }
              priceMargin={ pm3 }
              priceMarginX={ pmx3 }
              priceMarginY={ pmy3 }
              pricePad={ pp3 }
              pricePadX={ ppx3 }
              pricePadY={ ppy3 }
              pricePadT={ ppt3 }
              pricePadB={ ppb3 }
              lengthSize={ lengthSize3 }
              lengthWeight={ lengthWeight3 }
              lengthColor={ lengthColor3 }
              lengthMargin={ lm3 }
              lengthMarginX={ lmx3 }
              lengthMarginY={ lmy3 }
              lengthPad={ lp3 }
              lengthPadX={ lpx3 }
              lengthPadY={ lpy3 }
              lengthPadT={ lpt3 }
              lengthPadB={ lpb3 }
              descSize={ descSize3 }
              descWeight={ descWeight3 }
              descColor={ descColor3 }
              descMargin={ dm3 }
              descMarginX={ dmx3 }
              descMarginY={ dmy3 }
              descPad={ dp3 }
              descPadX={ dpx3 }
              descPadY={ dpy3 }
              descPadT={ dpt3 }
              descPadB={ dpb3 }
            />
            <Tier
              title={ title4 }
              price={ price4 }
              length={ length4 }
              desc={ desc4 }
              boxWidth={ width4 }
              boxBg={ bg4 }
              boxAlign={ align4 }
              boxMargin={ bm4 }
              boxMarginX={ bmx4 }
              boxMarginY={ bmy4 }
              boxMarginT={ bmt4 }
              boxMarginB={ bmb4 }
              boxPad={ bp4 }
              boxPadX={ bpx4 }
              boxPadY={ bpy4 }
              boxPadT={ bpt4 }
              boxPadB={ bpb4 }
              textAlign={ textAlign4 }
              titleSize={ titleSz4 }
              titleWeight={ titleWeight4 }
              titleColor={ titleColor4 }
              titleMargin={ tm4 }
              titleMarginX={ tmx4 }
              titleMarginY={ tmy4 }
              titlePad={ tp4 }
              titlePadX={ tpx4 }
              titlePadY={ tpy4 }
              titlePadT={ tpt4 }
              titlePadB={ tpb4 }
              priceSize={ priceSize4 }
              priceWeight={ priceWeight4 }
              priceColor={ priceColor4 }
              priceMargin={ pm4 }
              priceMarginX={ pmx4 }
              priceMarginY={ pmy4 }
              pricePad={ pp4 }
              pricePadX={ ppx4 }
              pricePadY={ ppy4 }
              pricePadT={ ppt4 }
              pricePadB={ ppb4 }
              lengthSize={ lengthSize4 }
              lengthWeight={ lengthWeight4 }
              lengthColor={ lengthColor4 }
              lengthMargin={ lm4 }
              lengthMarginX={ lmx4 }
              lengthMarginY={ lmy4 }
              lengthPad={ lp4 }
              lengthPadX={ lpx4 }
              lengthPadY={ lpy4 }
              lengthPadT={ lpt4 }
              lengthPadB={ lpb4 }
              descSize={ descSize4 }
              descWeight={ descWeight4 }
              descColor={ descColor4 }
              descMargin={ dm4 }
              descMarginX={ dmx4 }
              descMarginY={ dmy4 }
              descPad={ dp4 }
              descPadX={ dpx4 }
              descPadY={ dpy4 }
              descPadT={ dpt4 }
              descPadB={ dpb4 }
            />
            <Text
              width={1}
              textAlign="center"
              fontSize={footerSz}
              p={5}
              color={footerColor}
            >
              {footer}
            </Text>
          </Flex>
        </Tint>
      </Bg>
    );
  }
};

TierPricing.propTypes = {
  titleSz: PropTypes.string,
  title: PropTypes.string,
  title1: PropTypes.string,
  price1: PropTypes.string,
  length1: PropTypes.string,
  desc1: PropTypes.string,
  width1: PropTypes.arrayOf( PropTypes.number ),
  bg1: PropTypes.string,
  align1: PropTypes.string,
  bm1: PropTypes.arrayOf( PropTypes.number ),
  bmx1: PropTypes.arrayOf( PropTypes.number ),
  bmy1: PropTypes.arrayOf( PropTypes.number ),
  bmt1: PropTypes.arrayOf( PropTypes.number ),
  bmb1: PropTypes.arrayOf( PropTypes.number ),
  bp1: PropTypes.arrayOf( PropTypes.number ),
  bpx1: PropTypes.arrayOf( PropTypes.number ),
  bpy1: PropTypes.arrayOf( PropTypes.number ),
  bpt1: PropTypes.arrayOf( PropTypes.number ),
  bpb1: PropTypes.arrayOf( PropTypes.number ),
  textAlign1: PropTypes.string,
  titleSz1: PropTypes.arrayOf( PropTypes.number ),
  titleWeight1: PropTypes.string,
  titleColor1: PropTypes.string,
  tm1: PropTypes.arrayOf( PropTypes.number ),
  tmx1: PropTypes.arrayOf( PropTypes.number ),
  tmy1: PropTypes.arrayOf( PropTypes.number ),
  tp1: PropTypes.arrayOf( PropTypes.number ),
  tpx1: PropTypes.arrayOf( PropTypes.number ),
  tpy1: PropTypes.arrayOf( PropTypes.number ),
  tpt1: PropTypes.arrayOf( PropTypes.number ),
  tpb1: PropTypes.arrayOf( PropTypes.number ),
  priceSize1: PropTypes.string,
  priceWeight1: PropTypes.string,
  priceColor1: PropTypes.string,
  pm1: PropTypes.arrayOf( PropTypes.number ),
  pmx1: PropTypes.arrayOf( PropTypes.number ),
  pmy1: PropTypes.arrayOf( PropTypes.number ),
  pp1: PropTypes.arrayOf( PropTypes.number ),
  ppx1: PropTypes.arrayOf( PropTypes.number ),
  ppy1: PropTypes.arrayOf( PropTypes.number ),
  ppt1: PropTypes.arrayOf( PropTypes.number ),
  ppb1: PropTypes.arrayOf( PropTypes.number ),
  lengthSize1: PropTypes.string,
  lengthWeight1: PropTypes.string,
  lengthColor1: PropTypes.string,
  lm1: PropTypes.arrayOf( PropTypes.number ),
  lmx1: PropTypes.arrayOf( PropTypes.number ),
  lmy1: PropTypes.arrayOf( PropTypes.number ),
  lp1: PropTypes.arrayOf( PropTypes.number ),
  lpx1: PropTypes.arrayOf( PropTypes.number ),
  lpy1: PropTypes.arrayOf( PropTypes.number ),
  lpt1: PropTypes.arrayOf( PropTypes.number ),
  lpb1: PropTypes.arrayOf( PropTypes.number ),
  descSize1: PropTypes.string,
  descWeight1: PropTypes.string,
  descColor1: PropTypes.string,
  dm1: PropTypes.arrayOf( PropTypes.number ),
  dmx1: PropTypes.arrayOf( PropTypes.number ),
  dmy1: PropTypes.arrayOf( PropTypes.number ),
  dp1: PropTypes.arrayOf( PropTypes.number ),
  dpx1: PropTypes.arrayOf( PropTypes.number ),
  dpy1: PropTypes.arrayOf( PropTypes.number ),
  dpt1: PropTypes.arrayOf( PropTypes.number ),
  dpb1: PropTypes.arrayOf( PropTypes.number ),

  title2: PropTypes.string,
  price2: PropTypes.string,
  length2: PropTypes.string,
  desc2: PropTypes.string,
  width2: PropTypes.arrayOf( PropTypes.number ),
  bg2: PropTypes.string,
  align2: PropTypes.string,
  bm2: PropTypes.arrayOf( PropTypes.number ),
  bmx2: PropTypes.arrayOf( PropTypes.number ),
  bmy2: PropTypes.arrayOf( PropTypes.number ),
  bmt2: PropTypes.arrayOf( PropTypes.number ),
  bmb2: PropTypes.arrayOf( PropTypes.number ),
  bp2: PropTypes.arrayOf( PropTypes.number ),
  bpx2: PropTypes.arrayOf( PropTypes.number ),
  bpy2: PropTypes.arrayOf( PropTypes.number ),
  bpt2: PropTypes.arrayOf( PropTypes.number ),
  bpb2: PropTypes.arrayOf( PropTypes.number ),
  textAlign2: PropTypes.string,
  titleSz2: PropTypes.arrayOf( PropTypes.number ),
  titleWeight2: PropTypes.string,
  titleColor2: PropTypes.string,
  tm2: PropTypes.arrayOf( PropTypes.number ),
  tmx2: PropTypes.arrayOf( PropTypes.number ),
  tmy2: PropTypes.arrayOf( PropTypes.number ),
  tp2: PropTypes.arrayOf( PropTypes.number ),
  tpx2: PropTypes.arrayOf( PropTypes.number ),
  tpy2: PropTypes.arrayOf( PropTypes.number ),
  tpt2: PropTypes.arrayOf( PropTypes.number ),
  tpb2: PropTypes.arrayOf( PropTypes.number ),
  priceSize2: PropTypes.string,
  priceWeight2: PropTypes.string,
  priceColor2: PropTypes.string,
  pm2: PropTypes.arrayOf( PropTypes.number ),
  pmx2: PropTypes.arrayOf( PropTypes.number ),
  pmy2: PropTypes.arrayOf( PropTypes.number ),
  pp2: PropTypes.arrayOf( PropTypes.number ),
  ppx2: PropTypes.arrayOf( PropTypes.number ),
  ppy2: PropTypes.arrayOf( PropTypes.number ),
  ppt2: PropTypes.arrayOf( PropTypes.number ),
  ppb2: PropTypes.arrayOf( PropTypes.number ),
  lengthSize2: PropTypes.string,
  lengthWeight2: PropTypes.string,
  lengthColor2: PropTypes.string,
  lm2: PropTypes.arrayOf( PropTypes.number ),
  lmx2: PropTypes.arrayOf( PropTypes.number ),
  lmy2: PropTypes.arrayOf( PropTypes.number ),
  lp2: PropTypes.arrayOf( PropTypes.number ),
  lpx2: PropTypes.arrayOf( PropTypes.number ),
  lpy2: PropTypes.arrayOf( PropTypes.number ),
  lpt2: PropTypes.arrayOf( PropTypes.number ),
  lpb2: PropTypes.arrayOf( PropTypes.number ),
  descSize2: PropTypes.string,
  descWeight2: PropTypes.string,
  descColor2: PropTypes.string,
  dm2: PropTypes.arrayOf( PropTypes.number ),
  dmx2: PropTypes.arrayOf( PropTypes.number ),
  dmy2: PropTypes.arrayOf( PropTypes.number ),
  dp2: PropTypes.arrayOf( PropTypes.number ),
  dpx2: PropTypes.arrayOf( PropTypes.number ),
  dpy2: PropTypes.arrayOf( PropTypes.number ),
  dpt2: PropTypes.arrayOf( PropTypes.number ),
  dpb2: PropTypes.arrayOf( PropTypes.number ),

  title3: PropTypes.string,
  price3: PropTypes.string,
  length3: PropTypes.string,
  desc3: PropTypes.string,
  width3: PropTypes.arrayOf( PropTypes.number ),
  bg3: PropTypes.string,
  align3: PropTypes.string,
  bm3: PropTypes.arrayOf( PropTypes.number ),
  bmx3: PropTypes.arrayOf( PropTypes.number ),
  bmy3: PropTypes.arrayOf( PropTypes.number ),
  bmt3: PropTypes.arrayOf( PropTypes.number ),
  bmb3: PropTypes.arrayOf( PropTypes.number ),
  bp3: PropTypes.arrayOf( PropTypes.number ),
  bpx3: PropTypes.arrayOf( PropTypes.number ),
  bpy3: PropTypes.arrayOf( PropTypes.number ),
  bpt3: PropTypes.arrayOf( PropTypes.number ),
  bpb3: PropTypes.arrayOf( PropTypes.number ),
  textAlign3: PropTypes.string,
  titleSz3: PropTypes.arrayOf( PropTypes.number ),
  titleWeight3: PropTypes.string,
  titleColor3: PropTypes.string,
  tm3: PropTypes.arrayOf( PropTypes.number ),
  tmx3: PropTypes.arrayOf( PropTypes.number ),
  tmy3: PropTypes.arrayOf( PropTypes.number ),
  tp3: PropTypes.arrayOf( PropTypes.number ),
  tpx3: PropTypes.arrayOf( PropTypes.number ),
  tpy3: PropTypes.arrayOf( PropTypes.number ),
  tpt3: PropTypes.arrayOf( PropTypes.number ),
  tpb3: PropTypes.arrayOf( PropTypes.number ),
  priceSize3: PropTypes.string,
  priceWeight3: PropTypes.string,
  priceColor3: PropTypes.string,
  pm3: PropTypes.arrayOf( PropTypes.number ),
  pmx3: PropTypes.arrayOf( PropTypes.number ),
  pmy3: PropTypes.arrayOf( PropTypes.number ),
  pp3: PropTypes.arrayOf( PropTypes.number ),
  ppx3: PropTypes.arrayOf( PropTypes.number ),
  ppy3: PropTypes.arrayOf( PropTypes.number ),
  ppt3: PropTypes.arrayOf( PropTypes.number ),
  ppb3: PropTypes.arrayOf( PropTypes.number ),
  lengthSize3: PropTypes.string,
  lengthWeight3: PropTypes.string,
  lengthColor3: PropTypes.string,
  lm3: PropTypes.arrayOf( PropTypes.number ),
  lmx3: PropTypes.arrayOf( PropTypes.number ),
  lmy3: PropTypes.arrayOf( PropTypes.number ),
  lp3: PropTypes.arrayOf( PropTypes.number ),
  lpx3: PropTypes.arrayOf( PropTypes.number ),
  lpy3: PropTypes.arrayOf( PropTypes.number ),
  lpt3: PropTypes.arrayOf( PropTypes.number ),
  lpb3: PropTypes.arrayOf( PropTypes.number ),
  descSize3: PropTypes.string,
  descWeight3: PropTypes.string,
  descColor3: PropTypes.string,
  dm3: PropTypes.arrayOf( PropTypes.number ),
  dmx3: PropTypes.arrayOf( PropTypes.number ),
  dmy3: PropTypes.arrayOf( PropTypes.number ),
  dp3: PropTypes.arrayOf( PropTypes.number ),
  dpx3: PropTypes.arrayOf( PropTypes.number ),
  dpy3: PropTypes.arrayOf( PropTypes.number ),
  dpt3: PropTypes.arrayOf( PropTypes.number ),
  dpb3: PropTypes.arrayOf( PropTypes.number ),

  title4: PropTypes.string,
  price4: PropTypes.string,
  length4: PropTypes.string,
  desc4: PropTypes.string,
  width4: PropTypes.arrayOf( PropTypes.number ),
  bg4: PropTypes.string,
  align4: PropTypes.string,
  bm4: PropTypes.arrayOf( PropTypes.number ),
  bmx4: PropTypes.arrayOf( PropTypes.number ),
  bmy4: PropTypes.arrayOf( PropTypes.number ),
  bmt4: PropTypes.arrayOf( PropTypes.number ),
  bmb4: PropTypes.arrayOf( PropTypes.number ),
  bp4: PropTypes.arrayOf( PropTypes.number ),
  bpx4: PropTypes.arrayOf( PropTypes.number ),
  bpy4: PropTypes.arrayOf( PropTypes.number ),
  bpt4: PropTypes.arrayOf( PropTypes.number ),
  bpb4: PropTypes.arrayOf( PropTypes.number ),
  textAlign4: PropTypes.string,
  titleSz4: PropTypes.arrayOf( PropTypes.number ),
  titleWeight4: PropTypes.string,
  titleColor4: PropTypes.string,
  tm4: PropTypes.arrayOf( PropTypes.number ),
  tmx4: PropTypes.arrayOf( PropTypes.number ),
  tmy4: PropTypes.arrayOf( PropTypes.number ),
  tp4: PropTypes.arrayOf( PropTypes.number ),
  tpx4: PropTypes.arrayOf( PropTypes.number ),
  tpy4: PropTypes.arrayOf( PropTypes.number ),
  tpt4: PropTypes.arrayOf( PropTypes.number ),
  tpb4: PropTypes.arrayOf( PropTypes.number ),
  priceSize4: PropTypes.string,
  priceWeight4: PropTypes.string,
  priceColor4: PropTypes.string,
  pm4: PropTypes.arrayOf( PropTypes.number ),
  pmx4: PropTypes.arrayOf( PropTypes.number ),
  pmy4: PropTypes.arrayOf( PropTypes.number ),
  pp4: PropTypes.arrayOf( PropTypes.number ),
  ppx4: PropTypes.arrayOf( PropTypes.number ),
  ppy4: PropTypes.arrayOf( PropTypes.number ),
  ppt4: PropTypes.arrayOf( PropTypes.number ),
  ppb4: PropTypes.arrayOf( PropTypes.number ),
  lengthSize4: PropTypes.string,
  lengthWeight4: PropTypes.string,
  lengthColor4: PropTypes.string,
  lm4: PropTypes.arrayOf( PropTypes.number ),
  lmx4: PropTypes.arrayOf( PropTypes.number ),
  lmy4: PropTypes.arrayOf( PropTypes.number ),
  lp4: PropTypes.arrayOf( PropTypes.number ),
  lpx4: PropTypes.arrayOf( PropTypes.number ),
  lpy4: PropTypes.arrayOf( PropTypes.number ),
  lpt4: PropTypes.arrayOf( PropTypes.number ),
  lpb4: PropTypes.arrayOf( PropTypes.number ),
  descSize4: PropTypes.string,
  descWeight4: PropTypes.string,
  descColor4: PropTypes.string,
  dm4: PropTypes.arrayOf( PropTypes.number ),
  dmx4: PropTypes.arrayOf( PropTypes.number ),
  dmy4: PropTypes.arrayOf( PropTypes.number ),
  dp4: PropTypes.arrayOf( PropTypes.number ),
  dpx4: PropTypes.arrayOf( PropTypes.number ),
  dpy4: PropTypes.arrayOf( PropTypes.number ),
  dpt4: PropTypes.arrayOf( PropTypes.number ),
  dpb4: PropTypes.arrayOf( PropTypes.number ),

  footerSz: PropTypes.string,
  footerColor: PropTypes.string,
  footer: PropTypes.string,
  bgimage: PropTypes.string,
  tint: PropTypes.string
};

TierPricing.defaultProps = {
  titleSz: '',
  title: '',
  title1: '',
  price1: '',
  length1: '',
  desc1: '',
  width1: '',
  bg1: '',
  align1: '',
  bm1: '',
  bmx1: '',
  bmy1: '',
  bmt1: '',
  bmb1: '',
  bp1: '',
  bpx1: '',
  bpy1: '',
  bpt1: '',
  bpb1: '',
  textAlign1: '',
  titleSz1: '',
  titleWeight1: '',
  titleColor1: '',
  tm1: '',
  tmx1: '',
  tmy1: '',
  tp1: '',
  tpx1: '',
  tpy1: '',
  tpt1: '',
  tpb1: '',
  priceSize1: '',
  priceWeight1: '',
  priceColor1: '',
  pm1: '',
  pmx1: '',
  pmy1: '',
  pp1: '',
  ppx1: '',
  ppy1: '',
  ppt1: '',
  ppb1: '',
  lengthSize1: '',
  lengthWeight1: '',
  lengthColor1: '',
  lm1: '',
  lmx1: '',
  lmy1: '',
  lp1: '',
  lpx1: '',
  lpy1: '',
  lpt1: '',
  lpb1: '',
  descSize1: '',
  descWeight1: '',
  descColor1: '',
  dm1: '',
  dmx1: '',
  dmy1: '',
  dp1: '',
  dpx1: '',
  dpy1: '',
  dpt1: '',
  dpb1: '',
  title2: '',
  price2: '',
  length2: '',
  desc2: '',
  width2: '',
  bg2: '',
  align2: '',
  bm2: '',
  bmx2: '',
  bmy2: '',
  bmt2: '',
  bmb2: '',
  bp2: '',
  bpx2: '',
  bpy2: '',
  bpt2: '',
  bpb2: '',
  textAlign2: '',
  titleSz2: '',
  titleWeight2: '',
  titleColor2: '',
  tm2: '',
  tmx2: '',
  tmy2: '',
  tp2: '',
  tpx2: '',
  tpy2: '',
  tpt2: '',
  tpb2: '',
  priceSize2: '',
  priceWeight2: '',
  priceColor2: '',
  pm2: '',
  pmx2: '',
  pmy2: '',
  pp2: '',
  ppx2: '',
  ppy2: '',
  ppt2: '',
  ppb2: '',
  lengthSize2: '',
  lengthWeight2: '',
  lengthColor2: '',
  lm2: '',
  lmx2: '',
  lmy2: '',
  lp2: '',
  lpx2: '',
  lpy2: '',
  lpt2: '',
  lpb2: '',
  descSize2: '',
  descWeight2: '',
  descColor2: '',
  dm2: '',
  dmx2: '',
  dmy2: '',
  dp2: '',
  dpx2: '',
  dpy2: '',
  dpt2: '',
  dpb2: '',
  title3: '',
  price3: '',
  length3: '',
  desc3: '',
  width3: '',
  bg3: '',
  align3: '',
  bm3: '',
  bmx3: '',
  bmy3: '',
  bmt3: '',
  bmb3: '',
  bp3: '',
  bpx3: '',
  bpy3: '',
  bpt3: '',
  bpb3: '',
  textAlign3: '',
  titleSz3: '',
  titleWeight3: '',
  titleColor3: '',
  tm3: '',
  tmx3: '',
  tmy3: '',
  tp3: '',
  tpx3: '',
  tpy3: '',
  tpt3: '',
  tpb3: '',
  priceSize3: '',
  priceWeight3: '',
  priceColor3: '',
  pm3: '',
  pmx3: '',
  pmy3: '',
  pp3: '',
  ppx3: '',
  ppy3: '',
  ppt3: '',
  ppb3: '',
  lengthSize3: '',
  lengthWeight3: '',
  lengthColor3: '',
  lm3: '',
  lmx3: '',
  lmy3: '',
  lp3: '',
  lpx3: '',
  lpy3: '',
  lpt3: '',
  lpb3: '',
  descSize3: '',
  descWeight3: '',
  descColor3: '',
  dm3: '',
  dmx3: '',
  dmy3: '',
  dp3: '',
  dpx3: '',
  dpy3: '',
  dpt3: '',
  dpb3: '',
  title4: '',
  price4: '',
  length4: '',
  desc4: '',
  width4: '',
  bg4: '',
  align4: '',
  bm4: '',
  bmx4: '',
  bmy4: '',
  bmt4: '',
  bmb4: '',
  bp4: '',
  bpx4: '',
  bpy4: '',
  bpt4: '',
  bpb4: '',
  textAlign4: '',
  titleSz4: '',
  titleWeight4: '',
  titleColor4: '',
  tm4: '',
  tmx4: '',
  tmy4: '',
  tp4: '',
  tpx4: '',
  tpy4: '',
  tpt4: '',
  tpb4: '',
  priceSize4: '',
  priceWeight4: '',
  priceColor4: '',
  pm4: '',
  pmx4: '',
  pmy4: '',
  pp4: '',
  ppx4: '',
  ppy4: '',
  ppt4: '',
  ppb4: '',
  lengthSize4: '',
  lengthWeight4: '',
  lengthColor4: '',
  lm4: '',
  lmx4: '',
  lmy4: '',
  lp4: '',
  lpx4: '',
  lpy4: '',
  lpt4: '',
  lpb4: '',
  descSize4: '',
  descWeight4: '',
  descColor4: '',
  dm4: '',
  dmx4: '',
  dmy4: '',
  dp4: '',
  dpx4: '',
  dpy4: '',
  dpt4: '',
  dpb4: '',
  footerSz: '',
  footerColor: '',
  footer: '',
  bgimage: '',
  tint: ''
};

export { TierPricing };
