import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  return (
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
  );
}

export default App;