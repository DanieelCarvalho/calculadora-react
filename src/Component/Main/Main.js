import React, { useState } from "react";
import * as S from "./Style";

function Main() {
  const [num1, setNum1] = useState("0");

  function handleChange3(event) {
    if (num1 == 0) {
      setNum1(event.target.value);
    } else {
      setNum1(num1 + event.target.value);
    }
  }

  function calcular() {
    if (num1) {
      setNum1(eval(num1));
    }
  }

  function porcentagem() {
    setNum1(num1 / 100);
  }
  function sinal() {
    setNum1(-num1);
  }
  function Limpar() {
    setNum1(0);
  }
  function apagar() {
    setNum1(num1.substring(0, num1.length - 1));
  }

  return (
    <S.Container>
      <S.Principal>
        <S.H1>{num1} </S.H1>
        <S.Ope>
          <S.Botao onClick={Limpar}>AC</S.Botao>
          <S.Botao onClick={sinal}> +/- </S.Botao>
          <S.Botao onClick={porcentagem}>%</S.Botao>
          <S.Botao onClick={handleChange3} value={"/"}>
            &divide;
          </S.Botao>
        </S.Ope>
        <S.Ope>
          <S.Botaonum onClick={handleChange3} value={7}>
            7
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={8}>
            8
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={9}>
            9
          </S.Botaonum>
          <S.Botao onClick={handleChange3} value={"*"}>
            X
          </S.Botao>
        </S.Ope>
        <S.Ope>
          <S.Botaonum onClick={handleChange3} value={4}>
            4
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={5}>
            5
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={6}>
            6
          </S.Botaonum>
          <S.Botao onClick={handleChange3} value={"-"}>
            -
          </S.Botao>
        </S.Ope>
        <S.Ope>
          <S.Botaonum onClick={handleChange3} value={1}>
            1
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={2}>
            2
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={3}>
            3
          </S.Botaonum>
          <S.Botao onClick={handleChange3} value={"+"}>
            +
          </S.Botao>
        </S.Ope>
        <S.Ope>
          <S.Botaonum onClick={handleChange3} value={0}>
            0
          </S.Botaonum>
          <S.Botaonum onClick={handleChange3} value={"."}>
            {" "}
            ,{" "}
          </S.Botaonum>
          <S.Botaonum onClick={apagar}> ⌫ </S.Botaonum>

          <S.Botao onClick={calcular}> = </S.Botao>
        </S.Ope>
      </S.Principal>
    </S.Container>
  );
}

export default Main;
