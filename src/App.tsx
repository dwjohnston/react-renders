
import React from "react";

function SomeThing(props: {
    text: string;
}) {
    return <span>Hello {props.text}</span>
}

export function ChildrenStyleOne() {
    return <div id="foo">
        <p>A regular node</p>
        <SomeThing text="world!" />
    </div>
}

export function ChildrenStyleTwo(props: React.PropsWithChildren) {
    return <div id="bar">
        <p>A regular node</p>
        {props.children}
    </div>
}

export function Main1() {
    return <ChildrenStyleOne />

}

export function Main2() {
    return <ChildrenStyleTwo>
        <SomeThing text={"world!"} />
    </ChildrenStyleTwo>
}





