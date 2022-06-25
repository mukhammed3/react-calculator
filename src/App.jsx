/* eslint-disable no-eval */
import React from "react";
import { useState } from "react";
import styled from "styled-components";

//styles
import { GlobalStyles } from "./globalStyles";

function App() {
  //
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", ".", "%"];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <Operator onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </Operator>
      );
    }

    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const reset = () => {
    setCalc("");
    setResult("");
  };

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `;

  const Calclulator = styled.div`
    /* width: 77.5vw;
    height: 80vh; */
    width: 300px;
    height: 515px;
    background-color: black;

    box-shadow: 0px 0px 71px 18px rgba(0, 0, 0, 0.27);
    -webkit-box-shadow: 0px -0px 71px 18px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 0px -0px 71px 18px rgba(0, 0, 0, 0.27);
  `;

  const DisplayContainer = styled.div`
    height: 30%;
    padding: 35px 20px 35px 35px;
  `;

  const Display = styled.span`
    color: white;
    font-weight: 400;
    font-size: 25px;
  `;

  const MiniDisplay = styled.span`
    color: teal;
    font-size: 20px;
    font-weight: 300;

    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    text-align: end;
    margin-top: 0px;
  `;

  const OperatorsContainer = styled.div`
    display: flex;
  `;

  const Operator = styled.button`
    width: 100px;
    height: 51.5px;
    background-color: #0c1619;
    color: white;
    border: 0.5px solid black;
    font-size: 20px;

    //props
    height: ${(props) => props.height}px;
    width: ${(props) => props.eq}px;
    font-size: ${(props) => props.fz}px;
    padding-top: ${(props) => props.pd}px;
    background-color: #${(props) => props.bk};
    background-color: #${(props) => props.bkE};
  `;

  const OperatorsLeft = styled.div`
    flex: 2;
  `;
  const OperatorsRight = styled.div`
    flex: 1;
  `;
  const OperatorBottom = styled.div``;

  return (
    <>
      <GlobalStyles />
      <Container>
        <Calclulator>
          <DisplayContainer>
            <MiniDisplay>
              {result ? <Display>({result})</Display> : ""}
              {calc || "0"}
            </MiniDisplay>
          </DisplayContainer>

          <OperatorsContainer>
            <OperatorsLeft>
              <Operator onClick={reset}>C</Operator>
              <Operator onClick={deleteLast}>x</Operator>
              {createDigits()}

              <Operator onClick={() => updateCalc("0")}>0</Operator>
            </OperatorsLeft>

            <OperatorsRight>
              <Operator
                fz="25"
                height="77.5"
                bk="083839"
                onClick={() => updateCalc("/")}
              >
                /
              </Operator>
              <Operator
                pd="14"
                fz="35"
                height="77.5"
                bk="083839"
                onClick={() => updateCalc("*")}
              >
                *
              </Operator>
              <Operator
                fz="30"
                height="77.5"
                bk="083839"
                onClick={() => updateCalc("+")}
              >
                +
              </Operator>
              <Operator
                fz="40"
                height="76.5"
                bk="083839"
                onClick={() => updateCalc("-")}
              >
                -
              </Operator>
            </OperatorsRight>
          </OperatorsContainer>
          <OperatorBottom>
            <Operator onClick={() => updateCalc(".")}>.</Operator>
            <Operator eq="200" bkE="27a89e" onClick={calculate}>
              =
            </Operator>
          </OperatorBottom>
        </Calclulator>
      </Container>
    </>
  );
}

export default App;
