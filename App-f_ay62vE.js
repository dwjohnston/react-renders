import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime-CocFHxF7.js";
import "../_virtual/index-C6541tRK.js";
import util from "util";
function SomeThing(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
    children: ["Hello ", props.text],
  });
}
function ChildrenStyleOne() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    id: "foo",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "A regular node",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SomeThing, { text: "world!" }),
    ],
  });
}
function ChildrenStyleTwo(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    id: "bar",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "A regular node",
      }),
      props.children,
    ],
  });
}
function Main1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChildrenStyleOne, {});
}
function Main2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChildrenStyleTwo, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SomeThing, {
      text: "world!",
    }),
  });
}
export { ChildrenStyleOne, ChildrenStyleTwo, Main1, Main2 };

function log(obj) {
  console.log(
    util.inspect(obj, {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
}

log(ChildrenStyleOne({}));

log(
  ChildrenStyleTwo({
    children: jsxRuntimeExports.jsx(SomeThing, {}),
  })
);

const childrenStyleOneProps = {};

const a = ChildrenStyleOne(childrenStyleOneProps);
const b = ChildrenStyleOne(childrenStyleOneProps);

console.log(a.props.children[1] === b.props.children[1]);

const childrenStyleTwoProps = {
  children: jsxRuntimeExports.jsx(SomeThing, {}),
};

const c = ChildrenStyleTwo(childrenStyleTwoProps);
const d = ChildrenStyleTwo(childrenStyleTwoProps);

console.log(c.props.children[1] === d.props.children[1]);
