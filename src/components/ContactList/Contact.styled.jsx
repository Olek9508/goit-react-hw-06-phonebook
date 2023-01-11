import styled from "@emotion/styled"

export const Text = styled.p`
text-transform: capitalize;
`
;

export const BtnDelete = styled.button`
margin-right:10px;
padding:8px;
border-radius: 5px;
border: solid 1px;
color: white;
background-color: crimson;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
cursor:pointer;
:hover,
:focus{
  background-color: rgba(99, 220, 253, 0.763);
  color: rgba(2, 2, 2, 0.823);
  border-color: transparent;
transition-duration: 250ms;
}
`;