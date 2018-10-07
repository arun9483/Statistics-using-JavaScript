function processData(input) {
  input = input.split("\n");
  N = parseInt(input[0], 10);
  items = input[1].split(" ").map(item => parseInt(item, 10));
  weights = input[2].split(" ").map(item => parseInt(item, 10));
  main();
}

function getWeightedMean() {
  let totalWeight = 0;
  let total = 0;
  for (let i = 0; i < N; i++) {
    totalWeight += weights[i];
    total += items[i] * weights[i];
  }
  return (total / totalWeight).toFixed(1);
}

function main() {
  const res = getWeightedMean();
  console.log(res);
}

let items;
let weights;
let N;
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
