import React, { useState } from 'react';
import Button from './Button';
import History from './History';

function Calculator() {
    const [final, setFinal] = useState(''); 
    const [operator, setOperator] = useState(null);  
    const [operand, setOperand] = useState(null); 
    const [input, setInput] = useState([]); 
    const [history, setHistory] = useState([]); 

    function handleClick(value) {
        setFinal(prevFinal => prevFinal + value);  
        setInput(prevInput => [...prevInput, value]); 
    }

    function handleComputation() {
        if (operand !== null && operator !== null && final !== '') {
            let result;
            const currentValue = parseFloat(final);

            switch (operator) {
                case '+':
                    result = operand + currentValue;
                    break;
                case '-':
                    result = operand - currentValue;
                    break;
                case '*':
                    result = operand * currentValue;
                    break;
                case '/':
                    result = operand / currentValue;
                    break;
                default:
                    result = currentValue;
            }

            setHistory(prevHistory => [
                ...prevHistory,
                `${input.join(' ')} = ${result.toString()}`  
            ]);
            
            setInput([]);
            setFinal('');
            setOperand(null);
            setOperator(null);
        }
    }

    function handleOperator(selectedOperator) {
        if (final === '') return;  

        if (operand === null) {
            setOperand(parseFloat(final)); 
        } else {
            handleComputation();  
        }

        setOperator(selectedOperator);  
        setInput(prevInput => [...prevInput, selectedOperator]);  
        setFinal('');  
    }

    function handleClear() {
        setOperand(null);
        setOperator(null);
        setFinal('');
        setInput([]);
        setHistory([]);  
    }

    return (
        <div className="calculator">
            <p><b>Calculator App</b></p>
            <br/>
            <input type="text" value={final} readOnly /> 
            <p>{input.join(' ')}</p>

            <div className="row1">
                <Button label="1" class="digit" click={() => handleClick(1)} type={() => handleClick(1)}/>
                <Button label="2" class="digit" click={() => handleClick(2)} type={() => handleClick(2)} />
                <Button label="3" class="digit" click={() => handleClick(3)} />
                <Button label="+" class="math" click={() => handleOperator('+')} />
            </div>
            <div className="row2">
                <Button label="4" class="digit" click={() => handleClick(4)} />
                <Button label="5" class="digit" click={() => handleClick(5)} />
                <Button label="6" class="digit" click={() => handleClick(6)} />
                <Button label="-" class="math" click={() => handleOperator('-')} />
            </div>
            <div className="row3">
                <Button label="7" class="digit" click={() => handleClick(7)} />
                <Button label="8" class="digit" click={() => handleClick(8)} />
                <Button label="9" class="digit" click={() => handleClick(9)} />
                <Button label="/" class="math" click={() => handleOperator('/')} />
            </div>
            <div className="row4">
                <Button label="0" class="digit" click={() => handleClick(0)} />
                <Button label="*" class="math" click={() => handleOperator('*')} />
                <Button label="=" class="green" click={handleComputation} />
            </div>
            <div className="row5">
                <Button label="Clear" class="clear" click={handleClear} />
            </div>


<div className="history">
    <h3>History: </h3>
        {history.length === 0 ? (
          <p>You dont have any hisory</p>
        ) : (
            history.map((entry, index) => (
            <History
              key={index}
              entry={entry}
            />
          ))
        )}
      </div>
            </div>
    );
}

export default Calculator;
