// Core
import React from 'react';

// Styling
import { Card } from './n0x.Bass';

// Components
import { LabelBlock } from './n0x.elements';

const Label = (props) => {
  return(

        <Card {...props}>
          <LabelBlock {...props} />
        </Card>

    )
}

export { Label };
