function processData(input) {
  input = input.split('\n');
  N = parseInt(input[0], 10);
  items = input[1].split(' ').map(item => parseInt(item, 10));
  items.sort((a, b) => a - b);
  main()
}
var N;
var items;
var q1, q2, q3;

function getMid(i, j) {
  return i + Math.floor((j - i) / 2);
}

function getMedian(i, j) {
  if (i === j) {
    return items[i];
  } else {
    const count = (j - i + 1);
    const mid = getMid(i, j);
    if (count % 2) {
      return items[mid];
    } else {
      return (items[mid] + items[mid + 1]) / 2;
    }
  }
}

function main() {
  q2 = getMedian(0, N - 1);
  const mid = getMid(0, N - 1);
  if (N % 2) {
    q1 = getMedian(0, mid - 1);
    q3 = getMedian(mid + 1, N - 1);
  } else {
    q1 = getMedian(0, mid);
    q3 = getMedian(mid + 1, N - 1);
  }
  console.log(q1);
  console.log(q2);
  console.log(q3);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
