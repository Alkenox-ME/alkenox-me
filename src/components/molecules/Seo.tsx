import * as React from 'react';
import { Helmet } from 'react-helmet';
import { meta } from '../../lib';

const Seo: React.FC = () => {
    return (
        <Helmet defaultTitle={meta.title}>
            <meta name="url" content={meta.url} />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            // favicon imports plus "favicon.ico" in root dir.
            <link rel="icon" sizes="192x192" href={meta.favicon.pngIcon} />
            <link rel="apple-touch-icon" href={meta.favicon.pngAppleTouch} />
            <link rel="mask-icon" href={meta.favicon.svgSafari} color={meta.favicon.svgColor} />
            <link href="https://fonts.googleapis.com/css?family=Uncial+Antiqua&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Uncial+Antiqua&display=swap" rel="stylesheet" />
        </Helmet>
    );
};

export default Seo;
