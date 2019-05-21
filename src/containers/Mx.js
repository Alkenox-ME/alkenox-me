import React from "react";
import ReactPlayer from "react-player";
import { n0x, image, data, brand } from "../components/n0x.vars";
import { PageLayout, H1, H2, P, Image, Box, List, ListItem, colors } from "../components/n0x.library";

const Mx = () => {
  return (
    <PageLayout
      pgTitle="alkenox-me: Music Production"
      color={colors.tint.white[3]}
    >
      <H1 mb='0'>Music Production</H1>
      <H2>Film & Television</H2>
      <P py='2vh'>
        Film and television require a wide range of music from source cues (music that is apart of the scene) and music scores that accentuate some scenes and carry other scenes. You may even find that you need music specificly written for your picture, such as music that was written by specific characters or for specific reasons (eg. "Scotty doesn't know" --Eurotrip).
      </P>
      <P py='2vh'>
        Music for picture in it's purest form is a character that helps to convey a scene, accentuate a scene, transition a scene, or even to carry a scene. It's a character that your audience has to feel, rather than see, making it's entrance and exit just as important as not taking over a scene or obscuring the dialog. Which is why all of our music scoring and production is hand-crafted to your picture.
      </P>
      <P py='2vh'>
        Our composers are skilled in creating a cinematic score for any genre. From the traditional, large, action-packed orchestra to subtle drone music to fill the background without impeding on the soundscape or dialog. Instead of taking a pre-made piece of music and editing it down to what will be used (while making sure you have a beginning, middle and end with clean edits) a custom written piece can make for a smoother, better fit. Not only is it written to the time, but it is an exclusive piece of music written to the emotion of your visual presentation or scene, yielding a more unique and immersive experience.
      </P>

      <List talignCenter>
        <ListItem>Free Consultation</ListItem>
        <ListItem>Spotting Session</ListItem>
        <ListItem>The SPRINT</ListItem>
        <ListItem>Delivery</ListItem>
      </List>

      <H2>Interactive Scoring</H2>
      <P py='2vh'>
        Interactive scoring can be a very complex endeaver. It is most commonly used in video games. But as more and more apps are becoming more interactive, interactive scoring is becoming more common outside of just game design. Depending on the project, the music usually has to imply or convey something to the user or audience.
      </P>
      <P py='2vh'>
        For an easy example, let us use a mobile or console game. You have waiting music, background music and cut-scene music. Cut-scene music is created the same way it is for film or television. But the background music, and sometimes the waiting music requires different variations that will help the player identify their situation. A neutral piece of music for exploration, a positive variation of the neutral piece that implies the player is in a place of interest, and a negative variation to imply the player is in danger. All of the music needs a beginning and an end while remaing unannoyingly loopable.
      </P>

      <Box px='5vw' py='3vh'>
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

    </PageLayout>
  );
};

export default Mx;
