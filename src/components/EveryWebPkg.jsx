import React from "react";
import {
  n0x,
  base,
  image,
  data,
  brand,
  deskH1,
  deskH2,
  deskH3,
  deskH4,
  mobileH1,
  mobileH2,
  deskT1,
  deskT2,
  mobileT1,
  mobileT2,
  deskFoot,
  mobileFoot
} from "./n0x.vars";
import { TierPricing } from "./n0x.library";

const WebPricing = () => {
  return (
    <TierPricing
      title="Included In Every Web Package"
      titleSz={[mobileH2, null, deskH2, null]}
      titleColor={[brand.color.offwhite]}
      bgimage={image.bg.everyWeb.pricing}
      tint={n0x.tint.black[0]}
      title1="Domain Name (renews yearly)"
      price1="Web Hosting 1st Year"
      length1="Site Back-Up and Security (Included with Hosting)"
      desc1=""
      width1={[1, null, 1 / 4, null]}
      bg1={null}
      align1="center"
      bm1={null}
      bmx1={null}
      bmy1={null}
      bmt1={null}
      bmb1={null}
      bp1={[1]}
      bpx1={null}
      bpy1={null}
      bpt1={null}
      bpb1={null}
      textAlign1="center"
      titleSz1={brand.font.size.text.price}
      titleWeight1="bold"
      titleColor1={brand.color.offwhite}
      tm1={null}
      tmx1={null}
      tmy1={null}
      tp1={[1]}
      tpx1={null}
      tpy1={null}
      tpt1={null}
      tpb1={null}
      priceSize1={brand.font.size.text.price}
      priceWeight1="bold"
      priceColor1={brand.color.offwhite}
      pm1={null}
      pmx1={null}
      pmy1={null}
      pp1={[1]}
      ppx1={null}
      ppy1={null}
      ppt1={null}
      ppb1={null}
      lengthSize1={brand.font.size.text.price}
      lengthWeight1="bold"
      lengthColor1={brand.color.offwhite}
      lm1={null}
      lmx1={null}
      lmy1={null}
      lp1={[1]}
      lpx1={null}
      lpy1={null}
      lpt1={null}
      lpb1={null}
      descSize1={brand.font.size.text.price}
      descWeight1={null}
      descColor1={brand.color.offwhite}
      dm1={null}
      dmx1={null}
      dmy1={null}
      dp1={[1]}
      dpx1={null}
      dpy1={null}
      dpt1={null}
      dpb1={null}
      title2="Appropriate SSL Certificate"
      price2="Unique In-House Design (Gatsby/React/JS)"
      length2="Newsletter Sign-Up (Database)"
      desc2=""
      width2={[1, null, 1 / 4, null]}
      bg2={null}
      align2="center"
      bm2={null}
      bmx2={null}
      bmy2={null}
      bmt2={null}
      bmb2={null}
      bp2={[1]}
      bpx2={null}
      bpy2={null}
      bpt2={null}
      bpb2={null}
      textAlign2="center"
      titleSz2={brand.font.size.text.price}
      titleWeight2="bold"
      titleColor2={brand.color.offwhite}
      tm2={null}
      tmx2={null}
      tmy2={null}
      tp2={[1]}
      tpx2={null}
      tpy2={null}
      tpt2={null}
      tpb2={null}
      priceSize2={brand.font.size.text.price}
      priceWeight2="bold"
      priceColor2={brand.color.offwhite}
      pm2={null}
      pmx2={null}
      pmy2={null}
      pp2={[1]}
      ppx2={null}
      ppy2={null}
      ppt2={null}
      ppb2={null}
      lengthSize2={brand.font.size.text.price}
      lengthWeight2="bold"
      lengthColor2={brand.color.offwhite}
      lm2={null}
      lmx2={null}
      lmy2={null}
      lp2={[1]}
      lpx2={null}
      lpy2={null}
      lpt2={null}
      lpb2={null}
      descSize2={brand.font.size.heading.tags}
      descWeight2={null}
      descColor2={brand.color.offwhite}
      dm2={null}
      dmx2={null}
      dmy2={null}
      dp2={[1]}
      dpx2={null}
      dpy2={null}
      dpt2={null}
      dpb2={null}
      title3="Blog"
      price3="Contact Form"
      length3="CMS Integration"
      desc3=""
      width3={[1, null, 1 / 4, null]}
      bg3={null}
      align3="center"
      bm3={null}
      bmx3={null}
      bmy3={null}
      bmt3={null}
      bmb3={null}
      bp3={[1]}
      bpx3={null}
      bpy3={null}
      bpt3={null}
      bpb3={null}
      textAlign3="center"
      titleSz3={brand.font.size.text.price}
      titleWeight3="bold"
      titleColor3={brand.color.offwhite}
      tm3={null}
      tmx3={null}
      tmy3={null}
      tp3={[1]}
      tpx3={null}
      tpy3={null}
      tpt3={null}
      tpb3={null}
      priceSize3={brand.font.size.text.price}
      priceWeight3="bold"
      priceColor3={brand.color.offwhite}
      pm3={null}
      pmx3={null}
      pmy3={null}
      pp3={[1]}
      ppx3={null}
      ppy3={null}
      ppt3={null}
      ppb3={null}
      lengthSize3={brand.font.size.text.price}
      lengthWeight3="bold"
      lengthColor3={brand.color.offwhite}
      lm3={null}
      lmx3={null}
      lmy3={null}
      lp3={[1]}
      lpx3={null}
      lpy3={null}
      lpt3={null}
      lpb3={null}
      descSize3={brand.font.size.heading.tags}
      descWeight3={null}
      descColor3={brand.color.offwhite}
      dm3={null}
      dmx3={null}
      dmy3={null}
      dp3={[1]}
      dpx3={null}
      dpy3={null}
      dpt3={null}
      dpb3={null}
      title4="Google Webmaster Tools"
      price4="Google Analytics"
      length4="SEO (Search Engine Optimization)"
      desc4=""
      width4={[1, null, 1 / 4, null]}
      bg4={null}
      align4="center"
      bm4={null}
      bmx4={null}
      bmy4={null}
      bmt4={null}
      bmb4={null}
      bp4={[1]}
      bpx4={null}
      bpy4={null}
      bpt4={null}
      bpb4={null}
      textAlign4="center"
      titleSz4={brand.font.size.text.price}
      titleWeight4="bold"
      titleColor4={brand.color.offwhite}
      tm4={null}
      tmx4={null}
      tmy4={null}
      tp4={[1]}
      tpx4={null}
      tpy4={null}
      tpt4={null}
      tpb4={null}
      priceSize4={brand.font.size.text.price}
      priceWeight4="bold"
      priceColor4={brand.color.offwhite}
      pm4={null}
      pmx4={null}
      pmy4={null}
      pp4={[1]}
      ppx4={null}
      ppy4={null}
      ppt4={null}
      ppb4={null}
      lengthSize4={brand.font.size.text.price}
      lengthWeight4="bold"
      lengthColor4={brand.color.offwhite}
      lm4={null}
      lmx4={null}
      lmy4={null}
      lp4={[1]}
      lpx4={null}
      lpy4={null}
      lpt4={null}
      lpb4={null}
      descSize4={brand.font.size.heading.tags}
      descWeight4={null}
      descColor4={brand.color.offwhite}
      dm4={null}
      dmx4={null}
      dmy4={null}
      dp4={[1]}
      dpx4={null}
      dpy4={null}
      dpt4={null}
      dpb4={null}
      footer="Alkenox Interactive provides ARTIST driven web development with UI/UX in mind."
      footerSz={[mobileFoot, null, deskFoot, null]}
      footerColor={brand.color.light}
    />
  );
};

export default WebPricing;
