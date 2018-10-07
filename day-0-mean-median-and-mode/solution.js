function processData(input) {
  //Enter your code here
  input = input.split("\n");
  N = parseInt(input[0], 10);
  arr = input[1].split(" ").map(item => parseInt(item, 10));
  arr.sort((a, b) => a - b);
  main();
}

function getMean() {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (arr.reduce(reducer) / arr.length).toFixed(1);
}

function getMedian() {
  const isOdd = !arr.length % 2;
  const mid = Math.floor(arr.length / 2);
  const res = isOdd ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;
  return res.toFixed(1);
}

function getMode() {
  let currentNumber = Number.MAX_VALUE;
  let currentCount = 0;
  let maxCount = 0;
  let maxItem = Number.MAX_VALUE;
  for (let item of arr) {
    if (item === currentNumber) {
      currentCount++;
    } else {
      currentCount = 1;
      currentNumber = item;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxItem = currentNumber;
    }
  }
  return maxItem;
}

function main() {
  const mean = getMean();
  const median = getMedian();
  const mode = getMode();
  console.log(mean);
  console.log(median);
  console.log(mode);
}

var N;
var arr;
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
