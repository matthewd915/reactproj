import { useState } from 'react';
import './App.css';
import diagram1 from './assets/arrayImage.png';
import diagram2 from './assets/ptrImage.png';
import diagram3 from './assets/classesImage.png';
function App() {
  const [score, setScore] = useState(0);

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div>

  <div className = 'information'>
  <h2>Things You Need To Know:</h2>
    <h3><u>Arrays</u> </h3>
    <img src={diagram1} alt = "" style={{width: '400px', height: 'auto'}}/>
    <p>Arrays provide a way to group multiple variables of the same type under a single name. Each element in an array is accessed by its index or position, starting from zero. </p>
    <h3><u>Pointers</u> </h3>
    <img src={diagram2} alt = "" style={{width: '400px', height: 'auto'}}/>
    <p>Pointers in C++ are variables that store the memory address of another variable. They provide a way to directly manipulate memory. </p>
    <h3><u>Classes/Polymorphism</u> </h3>
    <img src={diagram3} alt = "" style={{width: '400px', height: 'auto'}}/>
    <p>In C++, a class is a user-defined data type that represents a blueprint for creating objects. Objects are instances of a class and encapsulate data (attributes) and functions (methods) that operate on that data.</p>
    <p>Polymorphism means "many forms" and is a fundamental concept in object-oriented programming. It allows objects to be treated as instances of their base class, even when they are instances of derived classes.</p>

  </div>

  <div className = 'names'>
    <h1>Muslim, Matthew, Tony, Kevin</h1>
  </div>

    <div className="question">
      <h2>Score: {score}</h2>
      <p>Question 1. Which segment of code correctly declares an integer array arr of length 5?</p>
      <button className="wrong" type="button">
        A. Array arr[5];
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        B. int arr[5];
      </button><br></br>
      <button className="wrong" type="button">
        C. int array[5];
      </button><br></br>
      <button className="wrong" type="button">
        D. int arr.size = 4;
      </button>
      
      <p>Question 2. Which of the following segments of code correctly gets the length of integer array arr?</p>
      <button className="wrong" type="button">
        A. arr.size();
      </button><br></br>
      <button className="wrong" type="button">
        B. arr.length();
      </button><br></br>
      <button className="wrong" type="button">
        C. sizeof(arr[0])/sizeof(arr);
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        D. sizeof(arr)/sizeof(arr[0]);
      </button>

      <p>Question 3. What does 243%10 evaluate to?</p>
      <button className="wrong" type="button">
        A. 24
      </button><br></br>
      <button className="wrong" type="button">
        B. 24
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        C. 3
      </button><br></br>
      <button className="wrong" type="button">
        D. 24.3
      </button>

      <p>Question 4. Given string str = "apples", the value of string s = str.substr(1, 3) will be "app"</p>
      <button className="wrong" type="button">
        True
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        False
      </button>
    </div>

</div>
  );
}

export default App;