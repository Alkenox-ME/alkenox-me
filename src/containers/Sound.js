import React from "react";
import ReactPlayer from "react-player";
import { n0x, image, data, brand } from "../components/n0x.vars";
import {
  PageLayout,
  Box,
  List,
  ListItem,
  P,
  H1,
  H2,
  colors
} from "../components/n0x.library";

const Sound = () => {
  return (
    <PageLayout pgTitle="alkenox-me: Sound Design" color={colors.tint.white[3]}>
      <H1>SoundScaping</H1>
      <P>
        Sound Design is crucial when you need to create an immersive experience.
        The human brain processes sound faster than any of our other senses.
        Sound is a universal language and helps to convey a story or
        description. With the rise of semi-pro audio systems hitting the markets
        at such cheap prices, our audience is beginning to expect more out of
        their experience. When they use their beautiful, pristine, surround
        sound system, they want their sound to feel so three dimensional that
        they can almost smell and taste the air when their character goes
        outside. They want the experience of that building or cliff breaking off
        behind them and crashing into the ground. If they have a true home
        theatre system, they want to feel the rumble of that crash. With that in
        mind, the Art of SoundScaping requires us to sonically paint a picture
        so vivid that the audience believes it to be a reality.
      </P>

      <H2>Sonic Branding</H2>
      <P>
        Creating a "sonic identity" for your brand is important, especially is
        you want your brand's "image" conveyed to those who may not be able to
        see it. It's a tool the biggest brands have been using for years to
        bring their audience along with them as they evolve. But what works for
        the big companies can also work for small companies who are just
        starting out and trying to make their brand a household name.
      </P>

      <H2>Interactive Branded SoundScapes</H2>
      <P>
        Great examples of how this form of SoundScaping would be most useful
        include games, cell phone apps, computer programs, and even all the
        special sounds that make up the unique brands of vehicles. Our world is
        filled with all sorts of sounds that help us to identify, learn, and
        remember things like people, places, or things. They help to alert us
        when we are in danger, or if something is wrong, or even help us safely
        navigate to a location. A company who brands these sounds will make
        their product and their brand more identifiable when used.
      </P>
    </PageLayout>
  );
};

export default Sound;
