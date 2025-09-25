import util from "util";

function a() {
  return {
    type: "p",
    content: [
      {
        content: "hello",
      },
      {
        type: b,
        content: [{}],
      },
    ],
  };
}

function b() {
  return {
    content: ["world!"],
  };
}

function c(input) {
  return {
    type: "p",
    content: [
      {
        content: "hello",
      },
      input,
    ],
  };
}

function d() {
  return {
    content: ["world!"],
  };
}

console.log(
  "main1",
  util.inspect(a(), { showHidden: false, depth: null, colors: true })
);
console.log(
  "main2",
  util.inspect(
    c({
      type: d,
      content: [{}],
    }),
    {
      showHidden: false,
      depth: null,
      colors: true,
    }
  )
);
