import React, { Component } from "react";
import styled from "styled-components";

const Container= styled.main`

  display: flex;
  height:90vh;
  justify-content: center;
  align-items: center;


`
const Principal = styled.div`
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
const InputValor= styled.input`
  width: 18vw;
  height:4vh;
  font-size:2vw;
  text-align: center;
`
const Ope = styled.div`
  display: flex;
  align-items: center;
  justify-content:  space-evenly;
  align-items: center;
  width:18vw;
  height: 50vh;
  

 
`;
const Botaonum = styled.button`
  width: 4vw;
  height: 8vh;
  border-radius: 50%;
  font-size: clamp(5px, 2vw, 1rem);
  cursor: pointer;
  border:none;
  background-color:#80868b;
  color:#eeeeee;
  
  
  
`

const Botao = styled.button`
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
const Result = styled.div`
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
export default class Main extends Component {
  state = {
  
    num: 0,
    num2: 0,
    operador:0
  
  };

  handleChange3 = (event) => {
    const{num} = this.state
      if(num == 0){
        this.setState({
          num: event.target.value 
  
        })
      
      } else {
        this.setState({
          num:  num + event.target.value 
  
        })

      }
      
  };
 
  /*
  operacaoInput = (event) => {
    const {num, num2, operador} = this.state
    this.setState({
      operador: event.target.value,
      num2: num,
      num: 0

    })
  }

  calcular = (event) =>{
    const {num, num2, operador} = this.state
    if(operador === "/"){
      this.setState({
        num: num2 / num
  
      })
    } else if(operador=== "*" ){
      this.setState({
        num: num2 * num
  
      })
    } else if(operador === "-"){
      this.setState({
        num: num2 - num
  
      })
    }else if(operador === "+"){
      this.setState({
        num: Number(num2) + Number(num)
  
      })
    }

  }

  usei essa lógica primeiro, depois aprendi a função eval.
  comentei para deixar salva as duas possibilidades de resolver. 
  */

  calcular =(event) =>{
    const {num, num2, operador} = this.state
    if(num){
      this.setState({
        num: eval(num)
  
      })
    }
  }

  porcentagem = (event) => {
    const{num} = this.state
    this.setState({
      num: num / 100
      
    });
  };
  sinal = (event) =>{
    const{num} = this.state
    this.setState({
      num: -num
    })
  }
  Limpar = (event) => {
    this.setState({
      num: 0,
      
    });
  };
  apagar = (event) => {
    const{num, num2, operador} = this.state
    this.setState({
     
      num: num.substring(0,num.length - 1),
  

    });
  }
  render() {
    return (
          <Container>
            
            <Principal>
            <h1>{this.state.num} </h1>
            <Ope>
            <Botao onClick={this.Limpar}>AC</Botao>
            <Botao onClick={this.sinal}> +/- </Botao>
            <Botao onClick={this.porcentagem} >%</Botao>
            <Botao onClick={this.handleChange3}  value={"/"}>&divide;</Botao>
            

            
            </Ope> 
            <Ope>
            <Botaonum onClick={this.handleChange3} value={7}>7</Botaonum>
            <Botaonum onClick={this.handleChange3} value={8}>8</Botaonum>
            <Botaonum onClick={this.handleChange3} value={9}>9</Botaonum>
            <Botao onClick={this.handleChange3} value={"*"}>X</Botao>
            
            
            </Ope>
            <Ope>
            <Botaonum onClick={this.handleChange3} value={4}>4</Botaonum>
            <Botaonum onClick={this.handleChange3} value={5}>5</Botaonum>
            <Botaonum onClick={this.handleChange3} value={6}>6</Botaonum>  
            <Botao onClick={this.handleChange3} value={"-"}>-</Botao>
            
            
            </Ope>
            <Ope>
            <Botaonum onClick={this.handleChange3} value={1}>1</Botaonum>
            <Botaonum onClick={this.handleChange3} value={2}>2</Botaonum>
            <Botaonum onClick={this.handleChange3} value={3}>3</Botaonum>
            <Botao onClick={this.handleChange3} value={"+"}>+</Botao>
            
            
            </Ope>
            <Ope>
            <Botaonum onClick={this.handleChange3} value={0}>0</Botaonum>
            <Botaonum onClick={this.handleChange3}  value={"."} > , </Botaonum>
            <Botaonum onClick={this.apagar}> ⌫ </Botaonum>
            
           
            <Botao onClick={this.calcular}> = </Botao>
            </Ope>
             
              
              
            </Principal>
          </Container>
        );
  }
}
