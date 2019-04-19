// Core
import React, { PureComponent } from 'react';

// Styling
import posed from 'react-pose'

// Components
import { Label } from './Label';

const AniLabel = ({...props}) => {
  return(
        <Label {...props}/>
    )
}

export { AniLabel };
