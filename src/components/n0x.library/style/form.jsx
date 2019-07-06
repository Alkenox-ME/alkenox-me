import { css } from 'styled-components'

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

export const form = css`
background: linear-gradient(bottom, #CCCCCC, #EEEEEE 175px);
margin: auto;
position: relative;
width: 550px;
height: 450px;
font-family: Tahoma, Geneva, sans-serif;
font-size: 14px;
font-style: italic;
line-height: 24px;
font-weight: bold;
color: #09C;
text-decoration: none;
border-radius: 10px;
padding: 10px;
border: 1px solid #999;
border: inset 1px solid #333;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`

export const inputs = css`
  input {
    width: 100%;
    display: block;
    border: 1px solid #999;
    height: 25px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
`

export const textarea = css`
width: 100%;
height: 150px;
display: block;
`
