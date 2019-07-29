import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {

    main?: {
      color?: {
        fg?: {
          text?: string[];
          link?: string[];
        }
        bg?: {
          body?: string[];
          gradient?: string[];
        }
        state?: {
          error?: string[];
          failure?: string[];
          pending?: string[];
          queued?: string[];
          success?: string[];
          unknown?: string[];
        },
        solid?: {
          black?: string[];
          white?: string[];
          blue?: string[];
          green?: string[];
          orange?: string[];
          purple?: string[];
          red?: string[];
          yellow?: string[];
        }
        tint?: {
          black?: string[];
          white?: string[];
          blue?: string[];
          green?: string[];
          orange?: string[];
          purple?: string[];
          red?: string[];
          yellow?: string[];
        }
        gradient?: string[];
      }
      font?: {
        body?: string[];
        heading?: string[];
        mono?: string[];
        title?: string[];
        size?: string[];
        lineHeight?: number[] | string[];
      }
    };

    secondary?: {
      color?: {
        fg?: {
          text?: string[];
          link?: string[];
        }
        bg?: {
          body?: string[];
          gradient?: string[];
        }
      }
      font?: {
        body?: string[];
        heading?: string[];
        mono?: string[];
        title?: string[];
        size?: string[];
        lineHeight?: number[] | string[];
      }
    }

  }
}
