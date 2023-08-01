import styled from 'styled-components';

export const Button = styled.button `
background-color: black;
color: white;
width: 220px;
height: 44px;
border-radius: 5px;
padding: 10px 18px;
gap: 10px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s background ease-in;
}
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
}`