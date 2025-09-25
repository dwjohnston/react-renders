function a() {
  return `<p>Hello ${b()}</p>`;
}

function b() {
  return `world!`;
}

function main() {
  return `<div>
    ${a()}
  </div>`;
}

function c(input) {
  return `<p>Hello ${input}</p>`;
}

function d() {
  return `world!`;
}

console.log("main1", a());
console.log("main2", c(d()));
