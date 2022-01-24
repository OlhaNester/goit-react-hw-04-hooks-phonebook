import styled from 'styled-components';

export const Form = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 10px 2px rgba(37, 23, 1, 0.2);
  :not(:last-child) {
  margin-bottom: 20px}`

export const Label = styled.label`
  margin-bottom: 15px;
  margin-left: 15px;
   font-weight: 700;
  font-size: 24px;
  color: rgb(105, 46, 3);`

export const Input = styled.input`
 margin-left: 15px;`

 export const Button = styled.button`
 margin-left: auto;
  margin-right: auto;
  border: none;
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  color: rgb(105, 46, 3);
  background: rgba(223, 135, 63, 0.418);
  box-shadow: 0px 5px 10px 2px rgb(37 23 1 / 41%);
  transition: 0.3s;
  :hover {
    background: #7c4d01;
  box-shadow: 0 15px 20px rgba(226, 139, 58, 0.4);
  color: white;
  transform: translateY(-7px);  
  
  :hover, :active, :focus {
   outline: none;   
  }} `

export const ErrorText = styled.span`
color: red;
font-size: 20px;
margin-top: 5px;
`

