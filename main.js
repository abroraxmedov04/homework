function bmi(weight, height) {
  let res = weight / height ** 2;
  if (res <= 18.5) {
    return "Underweight";
  } else if (res <= 25.0) {
    return "Normal weight";
  } else if (res <= 30.0) {
    return "Overweight";
  } else if (res > 30) {
    return "Obese";
  } else {
    return "Invalid input";
  }
}
// console.log(bmi(70, 2.0));

function removeWhiteSpaceAddTHemTogether(str) {
  return str.replace(/ /g, "");
}
// console.log(removeWhiteSpaceAddTHemTogether(" He llo Wo rl d"));

function checkWhoIsBetter(smo, me) {
  const smoScore = Number(smo);
  const meScore = Number(me);
  if (smoScore < meScore) {
    return `Smo is better with a score of ${smo}`;
  }
  if (smoScore === meScore) {
    return "They are equal";
  }
  return `Me is better with a score of ${me}`;
}
// console.log(checkWhoIsBetter('5', '4'));

function reverseedStr(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseedStr("Hello World!"));

function chekForBooleans(n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(chekForBooleans(-4));

function convertIntoInitials(name) {
  const namesArr = name.split(" ");
  let initials = "";
  for (let i = 0; i < namesArr.length; i++) {
    initials += namesArr[i].charAt(0);
  }
  return initials;
}
// console.log(convertIntoInitials("John . Doe"));

function checkArrayHasValue(a, x) {
  //   return a.includes(x);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(checkArrayHasValue([1, 5, 6], 5));

function factorialRes(n) {
  const res = [];
  for (let i = n; i >= 1; i--) {
    res.push(i);
  }
  return res;
}

const n = 5;
const factorialSequence = factorialRes(n);
// console.log(factorialSequence);

// calculateTheScore();
function averageGrade(n1, n2, n3) {
  let avg = (n1 + n2 + n3) / 3;
  if (avg >= 90 && 100) {
    return "A";
  } else if (avg < 80 && 90) {
    return "B";
  } else if (avg < 70 && 80) {
    return "C";
  } else if (avg < 60 && 70) {
    return "D";
  } else if (avg <= 60) {
    return "F";
  }
}
// console.log(averageGrade(84, 85, 86));/

function booleanToString(value) {
  return value.toString();
}
const booleanValue = true;
const stringValue = booleanToString(booleanValue);
// console.log(stringValue);
