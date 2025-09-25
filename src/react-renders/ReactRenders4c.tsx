"use client"
import React, { useState } from "react";
import "./style.css";
import { RenderTracker } from "./common";



function Header() {
    return <div className="header">
        <h3>Header</h3>
        <div>
            <RenderTracker />   <RenderTracker />   <RenderTracker />
        </div>
    </div>
}


function Body() {
    return <div className="body">
        <h3>Body</h3>
        <div>
            <RenderTracker />   <RenderTracker />   <RenderTracker />
        </div>

    </div>
}

function Footer() {
    return <div className="footer">
        <h3>Footer</h3>
        <div>
            <RenderTracker />   <RenderTracker />   <RenderTracker />
        </div>
    </div>
}



function PassthroughShell(props: {
    headerSlot: React.ReactNode;
    bodySlot: React.ReactNode;
    footerSlot: React.ReactNode;
}) {
    const [value, setValue] = useState('')
    return <div className="demo">

        <h2>Example 4c</h2>
        <p>
            Simple refactor to avoid the renders
        </p>
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="type here" />
            <button onClick={() => alert(value)}>Submit</button>

            <div className="header">{props.headerSlot}</div>

            <div className="body">{props.bodySlot}</div>
            <div className="footer">{props.footerSlot}</div>

        </div>
    </div >
}
export function ReactRenders4c() {
    return <PassthroughShell
        headerSlot={<Header />}
        bodySlot={<Body />}
        footerSlot={<Footer />}
    />
}