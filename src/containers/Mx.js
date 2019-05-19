import React from "react";
import ReactPlayer from "react-player";
import { n0x, image, data, brand } from "../components/n0x.vars";
import { PageLayout,H2, P, Image, Box, List, ListItem, colors } from "../components/n0x.library";

const Mx = () => {
  return (
    <PageLayout
      pgTitle="alkenox-me: Music Production"
      color={colors.tint.white[3]}
    >
      <H2>
        Music Production
      </H2>

      <H2>
        Sonic Branding
      </H2>

      <P>
        Human beings actually process sound faster than any of the other senses.
        Music and sound transcend language, culture and all things visual. So,
        creating an audio advertising "sonic identity" is important. You want
        your brand's image conveyed in an instant. It's a tool the biggest
        brands have been using for years to bring their audience along with them
        as they evolve. But what works for the big companies can also work for
        small companies who are just starting out and trying to make their brand
        a household name. Ultimately, exposing your audience to your brand's
        identity early on can help to expedite your growth and solidify your
        brand's place in the current market.
      </P>

      <H2>
        Original Music Score
      </H2>
      <P>
        Our composers are skilled in creating a cinematic score for any genre.
        From the traditional, large, action-packed orchestra to subtle drone
        music to fill the background without impeding on the soundscape or
        dialog. We specialize in creating music for picture. Instead of taking a
        pre-made piece of music and editing it down to what will be used (while
        making sure you have a beginning, middle and end with clean edits) a
        custom written piece can make for a better fit. Not only is it written
        to the time, but it is an exclusive piece of music written to the
        emotion of your visual presentation or scene, yielding a more unique and
        immersive experience.
      </P>

      <Box>
        <List>
          <ListItem>Free Consultation</ListItem>
          <ListItem>Spotting Session</ListItem>
          <ListItem>The SPRINT</ListItem>
          <ListItem>Delivery</ListItem>
        </List>
      </Box>

      <H2>
        Interactive Scoring
      </H2>
      <P>
        Interactive scoring can be a very complex endeaver. It is most commonly
        used in video games. But as more and more apps are becoming more
        interactive, interactive scoring is becoming more common outside of just
        game design. Depending on the project, the music usually has to imply or
        convey something to the user or audience. For an easy example, let us
        use a mobile or console game. You have waiting music, background music,
        and scene music. Scene music is created the same way it is for film and
        Television. But the background music, and sometimes the waiting music,
        requires different variations that will help the player identify their
        situation. A neutral piece of music for exploration, a positive
        variation of the neutral piece that implies the player is in a place of
        interest, and a negative variation to imply the player is in danger. The
        complexity does not end there. The music also needs a beginning and an
        end while being unannoyingly loopable.
      </P>

      <Box>
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/aeon-soundDesign.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />
      </Box>

      <H2>        Source & Background Cue Production
      </H2>
      <P>
        Source cues refer to music that is literally in the scene, and are
        typically from records that your music supervisor would acquire a
        license to use. Background cues Source and background cues require a
        more traditional singer/songwriter approach, making this type of
        production closer to a regular music production. For those under a tight
        time constraint, we suggest checking out our in-house library. You will
        only have to deal with one house for all rights, editing, and syncing
        needs.
      </P>
    </PageLayout>
  );
};

export default Mx;
