import React from "react";
import ReactPlayer from "react-player";
import { n0x, base, image, data } from "../components/n0x.vars";
import { PageLayout, T, T1, T2, Img } from "../components/n0x.library";

const GraphicPage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.black}
      opacity={[.9]}
    >
      <T1>
        2D & 3D Graphic Design
      </T1>

      <T2>
        Whiteboard / Glassboard Animation Videos
      </T2>

      <T>
        These types of videos are usually created to add to your website or for
        posting on social media. These are usually advertising or explainer
        videos, meant to capture your audience's attention and get them
        interested in what you have to share with them. Our talented artists
        will help you focus your story into a working script. Our directors will
        then take that script and have a storyboard put together for your
        approval before embarking on the main course of putting the animations
        together.
      </T>


      <ReactPlayer
        url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
        width="100%"
        height="100%"
        loop
        playing
        volume={0}
      />

      <T>
        Whiteboard Animation produced for Drs. Enoch and Lamei
      </T>

      <T2>
        Film & Television
      </T2>


      <ReactPlayer
        url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
        width="100%"
        height="100%"
        loop
        playing
        volume={0}
      />

      <T2>
        Animated Gifs
      </T2>
      <Img
        width={1}
        src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
        alt="Sissy Promo Gif"
      />

      <T2>
        2D & 3D Logo Design & Animated Logos
      </T2>

    </PageLayout>
  );
};

export default GraphicPage;
