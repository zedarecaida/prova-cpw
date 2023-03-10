
import styled from 'styled-components'
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
export const ButtonPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #2d55ff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2d55ff;
    color: white;
  }

  &:focus {
    outline: none;
  }
`

export const ButtonText = styled.span`
  margin-right: 10px;
  text-transform: capitalize;
`

export const ColorButton = styled.input.attrs({ type:'range'})`
  margin: 0;
  width: 100px;
  margin-right:20px;
`

export const ColorValueButton = styled.button` 
  margin: 0 10px;
  width: 200px;
  background-color: #2d55ff;
  color: black;
  font-size: 24px;
  font-family: 'bold';
  padding: 20px 10px;
  border: none;
  border-radius: none;
  cursor: pointer;
`
