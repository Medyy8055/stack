import logo from './logo.svg';
import './App.css';
import  {useState} from 'react';

function App() {
  const [num,setNum] =useState("0");
  const [oldnum,setoldnum]  =useState("0");
  const [operator,setoprator]  =  useState("");
  // const [ans,setans]  =  useState("");


  // const btnhandler = () => {
  //   setans(parseInt(no1) + parseInt(no2));

  function inputNum (e) {
    let input = e.target.value
    if(num == 0){
      setNum(input);
    }else{
      setNum(num+input);
    }
  }

  function clear(){
    setNum(0);
  }
  function per(e){
    setNum(num / 100);     
  }
  function sign(e){
    let operatorInput = e.target.value;
    setoprator(operatorInput);
    setoldnum(num);
    setNum(0);
  }
  function calculate(){
    if(operator == "/"){
      setNum(parseFloat(oldnum) / parseFloat(num));
    }else if(operator == "*"){
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
    else if(operator == "+"){
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
    else if(operator == "-"){
      setNum(parseFloat(oldnum) - parseFloat(num));
    }
    
  }  
  return (
   <>
      <div className='wrapper'>
        <h1 className='result'>{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={clear}>C</button>
        <button onClick={per}>%</button>
        <button className='orange' onClick={sign} value={'/'}>/</button>
        <button className='grey' onClick={inputNum} value={'7'}>7</button>
        <button className='grey' onClick={inputNum} value={'8'}>8</button>
        <button className='grey' onClick={inputNum} value={'9'}>9</button>
        <button className='orange' onClick={sign} value={'*'}>*</button>
        <button className='grey' onClick={inputNum} value={'4'}>4</button>
        <button className='grey' onClick={inputNum} value={'6'}>6</button>
        <button className='grey' onClick={inputNum} value={'5'}>5</button>
        <button className='orange' onClick={sign} value={'-'}>-</button>
        <button className='grey' onClick={inputNum} value={'1'}>1</button>
        <button className='grey' onClick={inputNum} value={'2'}>2</button>
        <button className='grey' onClick={inputNum} value={'3'}>3</button>
        <button className='orange' onClick={sign} value={'+'}>+</button>
        <button className='grey' onClick={inputNum} value={'0'}>0</button>
        <button style={{visibility: "hidden"}}>k</button>
        <button className='grey' onClick={inputNum} value={'.'}>.</button>
        <button className='orange' onClick={calculate}>=</button>






      </div>
   </>

  );
  }

export default App;
