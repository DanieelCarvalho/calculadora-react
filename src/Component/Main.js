import React, { Component } from "react";
import { Container, Principal, Ope,  Botaonum, Botao, Result,  } from "./Style";


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
  comentei para deixar salva as duas possibilidades de resolver. np
  */

  calcular =(event) =>{
    const {num, num2, operador} = this.state
    if(num){
      this.setState({
        num:  eval(num)
  
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
