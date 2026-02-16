### Answer of the questions:
1. What is the difference between null and undefined?

Ans: The differences between null and undefined are : undefined means variable exists but has no value and javascript automatically assign undefined to variable, the type of undefined is also undefined. On the other hand null means variable is explicitly empty, most of the time devoloper put the null to a variable and the type of null is object.


2. What is the use of the map() function in JavaScript? How is it different from forEach()?

Ans : map() is used to transform an array by applying a function to each element and returning a new array with the results.It does not modify the original array. forEach() is used to iterate over an array and perform an operation on each element.It does not return anything. It operates on the original array, and modify the original array but doesn’t create a new one.


3. What is the difference between == and ===?

Ans: === this one check the data value and data type both and returns true or false based on evaluation but == only check the data value doesn't check the data type, and even in the time of checking == change the type of data from one to another like if we check 2==='2' it will be false but if we check 2 == '2' then it will be true because == will transfer 2 from integer to string type which is wrong. 


4. What is the significance of async/await in fetching API data?

Ans: async and await plays significant role in fetching API data. It holds the excution of the function code untill the fetching of data is completed. It means it will wait and stop excution when the api is fetching data and after completing the data fetching it will excute the next line of code in the function.


5. Explain the concept of Scope in JavaScript (Global, Function, Block).

Ans: Variable can be accessed from global , funcational and block scope. First block scope - the variable which is declared inside a block of code like in a if() can only be accessible inside that if block. Functional block means the variable which is declared inside a fucntion can only accessed inside the particular fucntion. Global Scope means the variable is declared globally and any one (if blocks, function block ) can access that variable.

