import React from 'react';

import { base } from '../components/n0x.vars'
import { Flex, Text, Heading } from '../components/n0x.Bass';

const MxPage = () => {
  return (
    <Flex>
      <Heading>Music for Picture</Heading>
      <Text p={[5]} fontSize={base.font.size.t5}>
        We specialize in creating music for picture. Instead of taking a pre-made piece and
        editing it down to what will be used while making sure you have a biggining, middle and
        end with clean edits, a custom written piece can make for a better fit. Not only is it
        written to the time but it is an exclusive piece of music written to the emotion of your
        visual presentation or scene yielding a more unique immersed experience.
      </Text>
      <Heading>Film & Television Scoring</Heading>
      <Text>
        Our composers are skilled in creating a cinematic score for any genre. From traditional
        large action packed orchestra to subtle drone music to fill the background without
        impeding on the soundscape or dialog.
      </Text>
      <ul>
        <li>Free Consultation</li>
        <li>Spotting Session</li>
        <li>The SPRINT</li>
        <li>Delivery</li>
      </ul>
      <Heading>Interactive Scoring</Heading>
      <Text>
        Interactive scoring can be a very complex endeaver. Depending on the project the music
        usually has to imply or convey something to the user/audience. For an easy example, let us
        use a mobile or console game. You have waiting music, background music, and scene music.
        Scene music is handled the same as film and television but the background music and
        sometimes the waiting music requires different variations that will help the player
        identify their situation. A neutral piece of music for exploration, a positive variation
        of the neutral piece that implies the player is in a place of interest, and a negative
        variation to imply the player is in danger. The complexity does not end there, the music
        also needs a beginning and an end while being unannoyingly loopable.
      </Text>
      <Heading>Source & Background Cue Production</Heading>
      <Text>
        Source and background cues require more of a normal singer/songwriter approach making it
        closer to a regular music production. For those under a tight time constraint, we suggest
        checking out our in-house library. You will only have to deal with one house for all
        rights and editing/syncing needs.
      </Text>
    </Flex>
  );
};

export default MxPage;
