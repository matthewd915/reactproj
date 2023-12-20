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

  <div className = 'a'>
    <h1>
      Computer Science Quiz
    </h1>
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
        C. int array[4];
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
        A. 28
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

      <p>Question 5. Which segment of code correctly adds 4 to the end of a vector named nums?</p>
          <button className="right" type="button" onClick={increaseScore }>
        A. nums.push_back(4);
      </button><br></br>
      <button className="wrong" type="button">
        B. nums.insert(4);
      </button><br></br>
      <button className="wrong" type="button">
        C. nums.pop_back(4);
      </button><br></br>
      <button className="wrong" type="button">
        D. nums.add(4);
          </button>

          <p>Question 6. What is the value of int num = 7 / 2</p>
      <button className="wrong" type="button">
        A. 3.5;
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        B. 3;
      </button><br></br>
      <button className="wrong" type="button">
        C. 4;
      </button><br></br>
      <button className="wrong" type="button">
        D. 72;
      </button>

      <p>Question 7. Which is the correct header for a function that returns the double variable num in a class?</p>
      <button className="wrong" type="button">
        A. int getNum();
      </button><br></br>
      <button className="right" type="button" onClick={increaseScore}>
        B. double getNum();
      </button><br></br>
      <button className="wrong" type="button">
        C. void getNum();
      </button><br></br>
      <button className="wrong" type="button">
        D. string getNum();
          </button>

          <p>Question 8. Which loop ends in 4 iterations?</p>
          <button className="wrong" type="button">
              A. for (int i = 0; i {'<= '}4; i++);
          </button><br></br>
          <button className="wrong" type="button">
              B. for (int i = 1; i {'<'} 13; i+= 2);
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore}>
              C. for (int i = 5; i {"<="} 20; i+= 5);
          </button><br></br>
          <button className="wrong" type="button">
              D. for (int i = 10; i {'<'} 4; i--);
          </button>

          <p>Question 8. Method for the length of string str. </p>
          <button className="right" type="button" onClick={increaseScore }>
              A. str.length();
          </button><br></br>
          <button className="wrong" type="button">
              B. str.size();
          </button><br></br>
          <button className="wrong" type="button">
              C. str.len();
          </button><br></br>
          <button className="wrong" type="button">
              D. str.capacity();
          </button>

          <p>Question 8. Create a random int [50,100]</p>
          <button className="wrong" type="button">
              A. rand() % 50;
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore}>
              B. rand() % 51 + 50;
          </button><br></br>
          <button className="wrong" type="button">
              C. rand() % 49 + 50;
          </button><br></br>
          <button className="wrong" type="button">
              D. rand() % 50 + 49;
          </button>

          <p>Question 9. If int num = 72 /7, what is the value of num?</p>
          <button className="wrong" type="button">
              A. 9;
          </button><br></br>
          <button className="wrong" type="button">
              B. 10.3;
          </button><br></br>
          <button className="wrong" type="button">
              C. 10.2222222222;
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore }>
              D. 10;
          </button>

          <p>Question 10. Declare a string variable called str and store "Javascript" in it.</p>
          <button className="right" type="button" onClick={increaseScore }>
              A. string str = "Javascript";
          </button><br></br>
          <button className="wrong" type="button">
              B. str = string "Javascript";
          </button><br></br>
          <button className="wrong" type="button">
              C. str str = "Javascript";
          </button><br></br>
          <button className="wrong" type="button">
              D. Str str = "Javascript";
          </button>

          <p>Question 11. Create a pointer int variable named p</p>
          <button className="wrong" type="button">
              A. int p;
          </button><br></br>
          <button className="wrong" type="button">
              B. int &p;
          </button><br></br>
          <button className="wrong" type="button">
              C. new int p;
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore }>
              D. int *p;
          </button>

          <p>Question 12. The body of a function only contains "cout {'<<'} "Hello world! {'<<'} endl;". What should be the function type?</p>
          <button className="wrong" type="button">
              A. int
          </button><br></br>
          <button className="wrong" type="button">
              B. double
          </button><br></br>
          <button className="wrong" type="button">
              C. string
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore }>
              D. void
          </button>

          <p>Question 13. Which of the following is not a valid data type</p>
          <button className="wrong" type="button">
              A. string
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore}>
              B. array
          </button><br></br>
          <button className="wrong" type="button">
              C. int
          </button><br></br>
          <button className="wrong" type="button">
              D. double
          </button>

          <p>Question 14. If you want to store the value 14.2 without losing information for arithmetic, which data type should you use?</p>
          <button className="wrong" type="button">
              A. int
          </button><br></br>
          <button className="right" type="button" onClick={increaseScore}>
              B. double
          </button><br></br>
          <button className="wrong" type="button">
              C. char
          </button><br></br>
          <button className="wrong" type="button">
              D. string
          </button>

          <p>Question 15. How many times does the following loop iterate? "for (int i = 0 ; i {'<'} 37; i++)" </p>
          <button className="right" type="button" onClick={increaseScore }>
              A. 37
          </button><br></br>
          <button className="wrong" type="button">
              B. 36
          </button><br></br>
          <button className="wrong" type="button">
              C. 38
          </button><br></br>
          <button className="wrong" type="button">
              D. 39
          </button>

    </div>

</div>
  );
}

export default App;