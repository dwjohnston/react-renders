"use client"
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

export function ReactRenders4b() {
    return <div className="demo">

        <h2>Example 4b</h2>
        <p>
            Just intercept the form submission event
        </p>
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const value = formData.get("value");
                alert(value)
            }}>
                <input type="text" name="value" placeholder="type here" />
                <button type="submit">Submit</button>
            </form>

            <Header />
            <Body />
            <Footer />
        </div>
    </div >
}