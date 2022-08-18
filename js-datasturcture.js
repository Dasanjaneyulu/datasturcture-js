console.log("Q1");

function arrayfunction(array, sum) {
  for (let i = 0; i < array.length; i++) {
    var first = array[i];
    for (let j = i + 1; j < array.length; j++) {
      var second = array[j];

      if (first + second == sum) {
        console.log("first:" + first + "second:" + second);
      }
    }
  }
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -2, -3, -8, -9];

arrayfunction(a, 6);
//enetr any number here position b

//reversearray Q2//
console.log("Q2");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let reverseNumbers = numbers.slice().reverse();

console.log(reverseNumbers);
//Q3 rotetion

console.log("Q3");

function rotfunction(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  var av = str2.indexOf(str1[0]);
  if (av === -1) return false;

  return str1 === str2.slice(av) + str2.slice(0, av);
}

console.log(
  rotfunction("abcd", "abcd"),
  rotfunction("acdb", "abcd"),
  rotfunction("abdc", "abcd"),
  rotfunction("uluyenajnasad", "dasanjaneyulu")
);

console.log("Q4");

function find_notRepeatedchar(str) {
  var arr1 = str.split("");
  var result = "";
  var ct = 0;

  for (var x = 0; x < arr1.length; x++) {
    ct = 0;
    for (var y = 0; y < arr1.length; y++) {
      if (arr1[x] === arr1[y]) {
        ct += 1;
      }
    }
    if (ct < 2) {
      result = arr1[x];
    }
  }
  return result;
}

console.log(find_notRepeatedchar("dasanjaneyulu"));

console.log("Q5");
function solve_tower_of_hanoi(disk, start, destination, staging) {
  if (disk == 1) {
    console.log(
      "Move disk 1 from post " + start + " to post " + destination + ".<br/>"
    );
  } else {
    solve_tower_of_hanoi(disk - 1, start, staging, destination);

    console.log(
      "Move disk " +
        disk +
        " from post " +
        start +
        " to post " +
        destination +
        ".<br/>"
    );
    solve_tower_of_hanoi(disk - 1, staging, destination, start);
  }
}

solve_tower_of_hanoi(3, "A", "C", "B");

console.log("Q6");

function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

function preToPost(pre_exp) {
  let s = [];

  let length = pre_exp.length;
  for (let i = length - 1; i >= 0; i--) {
    if (isOperator(pre_exp[i])) {
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      let temp = op1 + op2 + pre_exp[i];

      s.push(temp);
    } else {
      s.push(pre_exp[i] + "");
    }
  }

  return s[s.length - 1];
}

let pre_exp = "*-A/BC-/AKL"; //given anything here
console.log("Postfix : " + preToPost(pre_exp));

console.log("Q7");

function convert(input) {
  var x = input.split("");
  var output = "";

  var symbols = ["+", "-", "*", "/", "%"];

  for (var i = 0; i < x.length; i++) {
    if (symbols.includes(x[i])) {
      for (var j = 0; j < input.length; j += 2) {
        if (output[j] == " ") {
          output = output + x[i];
        }
      }
    } else {
      output = output + x[i];
      console.log(output);
    }
  }
}

console.log(convert("+ 1 2 3 4"));

console.log("Q8");
function brackets(expression) {
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "(" ||
      expression[i] === "[" ||
      expression[i] === "{"
    ) {
      leftArr.push(expression[i]);
    }

    if (expression[i] === ")") {
      rightArr.push("(");
    } else if (expression[i] === "}") {
      rightArr.push("{");
    } else if (expression[i] === "]") {
      rightArr.push("[");
    }
  }

  rightArr.reverse();

  if (leftArr.length < rightArr.length || leftArr.length > rightArr.length) {
    return false;
  }

  for (let k = 0; k < leftArr.length; k++) {
    if (leftArr[k] != rightArr[k]) {
      return false;
    }
  }

  return true;
}

console.log(brackets("(3+{1-1)}"));
console.log(brackets("{[(3+1)+2]+}"));
console.log(brackets("[1+1]+(2*2)-{3/3}"));
console.log(brackets("(({[(((1)-2)+3)-3]/3}-3)"));

console.log("Q9");

let st = [];
function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    let a = st.pop();
    insert_at_bottom(x);

    st.push(a);
  }
}
function reverse() {
  if (st.length > 0) {
    let x = st.pop();
    reverse();

    insert_at_bottom(x);
  }
}

st.push("1");
st.push("2");
st.push("3");
st.push("4");

console.log("Original Stack<br>");

console.log(st.join(" ") + "<br>");

reverse();

console.log("Reversed Stack<br>");

console.log(st.join(" "));

console.log("Q10");

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr);
console.log(min);
