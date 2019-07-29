declare module 'react-mt-svg-lines' {
    let SvgLines: (props: any) => JSX.Element;
    export default SvgLines;
}

declare module 'react-player' {
    let ReactPlayer: (props: any) => JSX.Element;
    export default ReactPlayer;
}

declare module 'react-pose' {
    let posed: (props: any) => JSX.Element;
    let PoseGroup: (props: any) => JSX.Element;
    let config: (props: any) => JSX.Element;
    let SplitText: (props: any) => JSX.Element;
    export { posed, PoseGroup, config, SplitText };
}
