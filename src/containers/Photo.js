import React from "react";
import ReactPlayer from "react-player";
import { n0x, image, data, brand } from "../components/n0x.vars";
import { PageLayout, H2, colors } from "../components/n0x.library";

const Photo = () => {
  return (
    <PageLayout
      pgTitle="alkenox-me: Photography"
      color={colors.tint.white[3]}
    >
      <H2
        width={1}
        mt={5}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Photography
      </H2>
    </PageLayout>
  );
};

export default Photo;
