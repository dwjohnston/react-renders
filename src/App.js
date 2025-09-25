function SomeThing() {
  return {
    type: "span",
    props: {
      children: ["hello World!"],
    },
  };
}

function ChildrenStyleOne() {
  return {
    type: "div",
    props: {
      id: "foo",
      children: [SomeThing({})],
    },
  };
}

function ChildrenStyleTwo(props) {
  return {
    type: "div",
    props: {
      id: "bar",
      children: props.children,
    },
  };
}
