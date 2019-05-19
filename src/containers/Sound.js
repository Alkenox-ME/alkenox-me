import React from "react";
import ReactPlayer from "react-player";
import { n0x, image, data, brand } from "../components/n0x.vars";
import { PageLayout, Box, List, ListItem, P, H2, colors } from "../components/n0x.library";

const Sound = () => {
  return (
    <PageLayout
      pgTitle="alkenox-me: Sound Design"
      color={colors.tint.white[3]}
    >
      <H2>
        Sound Design
      </H2>

      <P>
        The recording, manipulation, and generation of sounds is utilized in
        Whether you need us to create unique dings and whistles for your app,
        video game, or or ensuring the space your actors are in sounds real
        on-screen; sound is what brings your audience into your creation and
        connects them to it.
      </P>

      <Box>
        <List>
          <ListItem>
            Hard effects, soft effects, foley and soundscaping for film, video,
            games, and apps.
          </ListItem>
          <ListItem>Branded Sound Icons for a project or company.</ListItem>
          <ListItem>
            Interactive projects ranging from audio navigation for the blind to
            the aesthetics of your user interface are welcome.
          </ListItem>
        </List>
      </Box>

      <H2>
        Film, Television, Games, & Apps
      </H2>

      <P>
        We enjoy making immersive soundscapes that glue to each other and to the
        picture on screen.
      </P>

      <H2>
        Branded Sound Crafting
      </H2>

      <P>
        As a brand, you want to make sure that you are not only seen but heard.
        We all know LionsGate from the roar of the lion. We even know when it is
        that particular lion being played. We know the motif of the Warner
        Brother's trumpets or the chime of a Mac computer booting up. Why should
        n0t your brand have the same capability?
      </P>
    </PageLayout>
  );
};

export default Sound;
