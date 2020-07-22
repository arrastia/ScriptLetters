import { keyframes } from 'styled-components';

const rotate1 = keyframes`{
    to {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
 }`;

const rotate2 = keyframes`{
   to {
       transform: rotate(225deg);
       -webkit-transform: rotate(225deg);
    }
 }`;

const rotate3 = keyframes`{
   to {
       transform: rotate(315deg);
       -webkit-transform: rotate(315deg);
    }
 }`;

export { rotate1, rotate2, rotate3 };
