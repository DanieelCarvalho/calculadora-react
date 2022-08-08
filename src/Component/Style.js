import styled from "styled-components";

export const Container= styled.main`

  display: flex;
  height:90vh;
  justify-content: center;
  align-items: center;


`
export const Principal = styled.div`
  background-color: #34393c; 
  width: 20%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  

  
  h1{
    color:white;
    font-size: 20px;
    text-align: right;
    width:80%;
    font-size: clamp(5px, 2vw, 2rem);
  }
  p{
    color:white;
    font-size:2vw;
  }

`;

export const Ope = styled.div`
  display: flex;
  align-items: center;
  justify-content:  space-evenly;
  align-items: center;
  width:18vw;
  height: 50vh;
  

 
`;
export const Botaonum = styled.button`
  width: 4vw;
  height: 8vh;
  border-radius: 50%;
  font-size: clamp(5px, 2vw, 1rem);
  cursor: pointer;
  border:none;
  background-color:#80868b;
  color:#eeeeee;
  
  
  
`

export const Botao = styled.button`
  background-color: rgb(66,133,244);
  color:white;
  border: none;
  font-size: clamp(5px, 2vw, 1rem);
  display: flex;
  align-items: center;
  justify-content:  center;
  width: 4vw;
  height: 8vh;
  border-radius: 50%;
  cursor: pointer;
  
  
 
`
export const Result = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:  space-around;
height: 15vw;
button{
  background-color: orange;
  border: none;
  width: 10vw;
  height:4vh;
  border-radius: 5%;
  font-size: clamp(5px, 2vw, 1rem);
  text-align: center;
}
`