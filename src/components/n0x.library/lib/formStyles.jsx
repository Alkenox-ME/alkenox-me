import { css } from 'styled-components/macro'

export const radio = css`
  height: 2vh;
label:before {
border-radius: 8px;
}
input[type=radio]:checked {
content: "\2022";
color: #f3f3f3;
font-size: 30px;
text-align: center;
line-height: 18px;
}
`
