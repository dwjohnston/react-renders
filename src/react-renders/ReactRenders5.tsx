"use client"
import React from "react";
import "./style.css";
import { RenderTracker } from "./common";



function ChildrenStyleOne() {
    const [isLeft, setIsLeft] = React.useState(true)
    return <div className="some-parent-component double-wide">
        <strong>ChildrenStyleOne</strong>
        <p>RenderTracker is directly rendered</p>
        <button onClick={() => {
            setIsLeft((prev) => !prev);;
        }}>Move to {isLeft ? "right" : "left"}</button>

        <div className="left-right">
            <div>
                {isLeft && <RenderTracker />}
            </div>
            <div>
                {!isLeft && <RenderTracker />}
            </div>
        </div>

    </div >
}

function ChildrenStyleTwo(props: React.PropsWithChildren) {
    const { children } = props;
    const [isLeft, setIsLeft] = React.useState(true)
    return <div className="some-parent-component double-wide">
        <strong>ChildrenStyleTwo</strong>
        <p>RenderTracker is rendered as props.children</p>

        <button onClick={() => {
            setIsLeft((prev) => !prev);;
        }}>Move to {isLeft ? "right" : "left"}</button>

        <div className="left-right">
            <div>
                {isLeft && children}
            </div>
            <div>
                {!isLeft && children}
            </div>
        </div>

    </div >

}

export function ReactRenders5() {
    return <div className="demo">
        <ChildrenStyleOne />
        <ChildrenStyleTwo>
            <RenderTracker />
        </ChildrenStyleTwo>
    </div >
}

