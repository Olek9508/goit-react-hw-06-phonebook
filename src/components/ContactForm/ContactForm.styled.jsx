
import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  width: 60px;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 5px;
  border: solid 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BtnSubmit = styled.button`
  display: block;
  margin-top: 20px;
  width: 160px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  background-color: greenyellow;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
    background-color: #63868a;
    color: #e1e4e9;
    scale: 1.1;
  }
`;
// import styled from "@emotion/styled"

// export const Form = styled.form`
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     flex-wrap: wrap;
//     flex-direction: column;
//     align-content: stretch;
// `
// ;

// export const Label = styled.label`
// margin-bottom:10px;
// `
//     ;

// export const Input = styled.input`
//     margin-left: 10px;
//     border-radius: 5px;
//     border: solid 1px;
//     box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
//     0px 2px 2px rgba(0, 0, 0, 0.12);
// `
// ;

// export const BtnSubmit = styled.button`
// margin-right:10px;
// padding:8px;
// border-radius: 5px;
// border: solid 1px;
// color: white;
// background-color: green;
// box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
// 0px 2px 2px rgba(0, 0, 0, 0.12);
// cursor:pointer;
// :hover,
// :focus{
//   background-color: rgba(99, 220, 253, 0.763);
//   color: rgba(2, 2, 2, 0.823);
//   border-color: transparent;
// transition-duration: 250ms;
// }
// `;