import styled from 'styled-components';

export const FilteredList = styled.ul`
display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  padding: 0;
  justify-content: space-around;`

export const CardContact = styled.li`
 position: relative;
  box-sizing: content-box;
  width: 150px;
  height: 100px;
  display: flex;
   flex-direction: column;
  padding: 10px;
  background: rgb(223 135 63 / 50%);
  border-radius: 5%;
  box-shadow: 0px 5px 10px 2px rgb(37 23 1 / 41%);
  
  :nth-child(n) {
  margin-bottom: 40px;
  p {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
  }

}`

export const ButtonDelete = styled.button`
position: absolute;
  bottom: 10px;
  left: 30%;
  margin-top: 5px;
  text-align: center;
  width: 60px;
  height: 20px;
  border-radius: 45px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  color: #2a2827;
  font-weight: 600;
  background: rgba(223, 135, 63, 0.418);
  box-shadow: 0px 5px 10px 2px rgb(37 23 1 / 41%);
  transition: 0.3s;
  :hover {
  background: #7c4d01;
  box-shadow: 0 15px 20px rgba(226, 139, 58, 0.4);
  color: white;
  transform: translateY(-7px);
}
&, :active, :focus {
    outline: none;
}`
