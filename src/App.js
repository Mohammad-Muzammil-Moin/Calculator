import React, { useState } from "react";
import Button from "./Buttons/button";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [date,setDate] = useState("")
  setInterval(() => {
  setDate(new Date().toLocaleTimeString())

  }, 1000);
  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);
    if (content === "AC") {
      setMemory(null);
      return setValue("0");
    }
    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }
    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "+") {
          setMemory(memory + parseFloat(value));
        }
      }
       else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }
    if (content === "x") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "+") {
          setMemory(memory + parseFloat(value));
        }
      }
       else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("x");

      return;
    }
    if (content === "-") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "+") {
          setMemory(memory + parseFloat(value));
        }
      }
       else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("-");

      return;
    }
    if (content === "+") {
      if (operator !== null) {
        if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "+") {
          setMemory(memory + parseFloat(value));
        }
      }
       else {
        setMemory(parseFloat(value));
      }

      setValue("0");
      setOperator("+");

      return;
    }
    if (content === "=") {
      if (!operator) return;
      if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      } else if (operator === "x") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
      setValue(parseFloat(num + content).toString());
  };

  return (
    <div className="App">
      <div className="top">{date}</div>
      <div className="display">{value}</div>
      <div className="button">
        <Button
          onButtonPress={handleButtonPress}
          content="AC"
          type="function "
        />
        <Button
          onButtonPress={handleButtonPress}
          content="%"
          type="function "
        />
        <Button
          onButtonPress={handleButtonPress}
          content="÷"
          type="function "
        />
        <Button onButtonPress={handleButtonPress} content="±" type="operator" />
        <Button onButtonPress={handleButtonPress} content="7" />
        <Button onButtonPress={handleButtonPress} content="8" />
        <Button onButtonPress={handleButtonPress} content="9" />
        <Button onButtonPress={handleButtonPress} content="x" type="operator" />
        <Button onButtonPress={handleButtonPress} content="4" />
        <Button onButtonPress={handleButtonPress} content="5" />
        <Button onButtonPress={handleButtonPress} content="6" />
        <Button onButtonPress={handleButtonPress} content="-" type="operator" />
        <Button onButtonPress={handleButtonPress} content="1" />
        <Button onButtonPress={handleButtonPress} content="2" />
        <Button onButtonPress={handleButtonPress} content="3" />
        <Button onButtonPress={handleButtonPress} content="+" type="operator" />
        <Button onButtonPress={handleButtonPress} content="0" />
        <Button onButtonPress={handleButtonPress} content="." />
        <Button onButtonPress={handleButtonPress} content="=" type="operator" />
      </div>
      <div className="buttom">_</div>
    </div>
  );
};
export default App;
