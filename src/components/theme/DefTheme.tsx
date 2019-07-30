import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    main: {
        color: {
            state: {
                error: ['#d73a49'],
                failure: ['#d73a49'],
                pending: ['#dbab09'],
                queued: ['#dbab09'],
                success: ['#28a745'],
                unknown: ['#959da5'],
            },
            solid: {
                black: ['rgba(0,0,0,1)'],
                white: ['rgba(255,255,255,1)'],
                blue: ['rgba(80,80,255,1)'],
                green: ['rgba(80,255,80,1)'],
                orange: ['rgba(255,160,80,1)'],
                purple: ['rgba(204,125,255,1)'],
                red: ['rgba(255,130,130,1)'],
                yellow: ['rgba(255,255,125,1)'],
            },
            tint: {
                black: [
                    'rgba(0,0,0,0.9)',
                    'rgba(0,0,0,0.8)',
                    'rgba(0,0,0,0.7)',
                    'rgba(0,0,0,0.6)',
                    'rgba(0,0,0,0.5)',
                    'rgba(0,0,0,0.4)',
                    'rgba(0,0,0,0.3)',
                    'rgba(0,0,0,0.2)',
                    'rgba(0,0,0,0.1)',
                ],
                white: [
                    'rgba(255,255,255,0.9)',
                    'rgba(255,255,255,0.8)',
                    'rgba(255,255,255,0.7)',
                    'rgba(255,255,255,0.6)',
                    'rgba(255,255,255,0.5)',
                    'rgba(255,255,255,0.4)',
                    'rgba(255,255,255,0.3)',
                    'rgba(255,255,255,0.2)',
                    'rgba(255,255,255,0.1)',
                ],
                blue: [
                    'rgba(80,80,255,0.9)',
                    'rgba(80,80,255,0.8)',
                    'rgba(80,80,255,0.7)',
                    'rgba(80,80,255,0.6)',
                    'rgba(80,80,255,0.5)',
                    'rgba(80,80,255,0.4)',
                    'rgba(80,80,255,0.3)',
                    'rgba(80,80,255,0.2)',
                    'rgba(80,80,255,0.1)',
                ],
                green: [
                    'rgba(80,255,80,0.9)',
                    'rgba(80,255,80,0.8)',
                    'rgba(80,255,80,0.7)',
                    'rgba(80,255,80,0.6)',
                    'rgba(80,255,80,0.5)',
                    'rgba(80,255,80,0.4)',
                    'rgba(80,255,80,0.3)',
                    'rgba(80,255,80,0.2)',
                    'rgba(80,255,80,0.1)',
                ],
                orange: [
                    'rgba(255,160,80,0.9)',
                    'rgba(255,160,80,0.8)',
                    'rgba(255,160,80,0.7)',
                    'rgba(255,160,80,0.6)',
                    'rgba(255,160,80,0.5)',
                    'rgba(255,160,80,0.4)',
                    'rgba(255,160,80,0.3)',
                    'rgba(255,160,80,0.2)',
                    'rgba(255,160,80,0.1)',
                ],
                purple: [
                    'rgba(204,125,255,0.9)',
                    'rgba(204,125,255,0.8)',
                    'rgba(204,125,255,0.7)',
                    'rgba(204,125,255,0.6)',
                    'rgba(204,125,255,0.5)',
                    'rgba(204,125,255,0.4)',
                    'rgba(204,125,255,0.3)',
                    'rgba(204,125,255,0.2)',
                    'rgba(204,125,255,0.1)',
                ],
                red: [
                    'rgba(255,130,130,0.9)',
                    'rgba(255,130,130,0.8)',
                    'rgba(255,130,130,0.7)',
                    'rgba(255,130,130,0.6)',
                    'rgba(255,130,130,0.5)',
                    'rgba(255,130,130,0.4)',
                    'rgba(255,130,130,0.3)',
                    'rgba(255,130,130,0.2)',
                    'rgba(255,130,130,0.1)',
                ],
                yellow: [
                    'rgba(255,255,125,0.9)',
                    'rgba(255,255,125,0.8)',
                    'rgba(255,255,125,0.7)',
                    'rgba(255,255,125,0.6)',
                    'rgba(255,255,125,0.5)',
                    'rgba(255,255,125,0.4)',
                    'rgba(255,255,125,0.3)',
                    'rgba(255,255,125,0.2)',
                    'rgba(255,255,125,0.1)',
                ],
            },
            fg: {
                text: ['rgba(0,0,0,1)'],
                link: ['rgba(80,80,255,1)', 'rgba(155,155,255,1)'],
            },
            bg: {
                body: ['rgba(255,255,255,1)'],
                gradient: [
                    'linear-gradient( to bottom, rgba(255, 255, 255, 1), rgba(255, 125, 125, 1) )',
                    'linear-gradient( to bottom, rgba(255, 125, 125, 1), rgba(255,255,125,1) )',
                    'linear-gradient( to bottom, rgba(255,255,125,1), rgba(204,125,255,1) )',
                    'linear-gradient( to bottom, rgba(204,125,255,1), rgba(255, 255, 255, 1) )',
                ],
            },
        },
        font: {
            body: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            heading: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            mono: ['SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'],
            title: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            size: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
            lineHeight: [1, 1.25, 1.5],
        },
    },

    secondary: {
        color: {
            fg: {
                text: ['rgba(255,255,255,1)'],
                link: ['rgba(80,80,255,1)'],
            },
            bg: {
                body: ['rgba(0,0,0,1)'],
                gradient: [
                    'linear-gradient( to bottom, rgba(255, 255, 255, 1), rgba(255, 125, 125, 1) )',
                    'linear-gradient( to bottom, rgba(255, 125, 125, 1), rgba(255,255,125,1) )',
                    'linear-gradient( to bottom, rgba(255,255,125,1), rgba(204,125,255,1) )',
                    'linear-gradient( to bottom, rgba(204,125,255,1), rgba(255, 255, 255, 1) )',
                ],
            },
        },
        font: {
            body: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            heading: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            mono: ['SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'],
            title: [
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            ],
            size: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
            lineHeight: [1, 1.25, 1.5],
        },
    },
};

export default theme;