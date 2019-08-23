import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
    color: {
        primary: string;
        secondary: string;
        bg: string;
        fg: string;
    };
    font: {
        body: {
            size: number[];
            color: {
                primary: string;
                secondary: string;
            };
            shadow: string[];
        };
        heading: {
            size: number[];
            color: {
                primary: string;
                secondary: string;
            };
            shadow: string[];
        };
        caption: {
            size: number[];
            color: {
                primary: string;
                secondary: string;
            };
            shadow: string[];
        };
    };
    list: {
        listStyle: string[];
    };
    item: {
        listStyle: string[];
    };
};
export default styled as CreateStyled<Theme>;
