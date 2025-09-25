
import React from "react";

const style1 = []; 
const style2 = []; 

export function ChildrenStyleOne() {

    style1.push(<SomeComponent/>)
    const [value, setValue] = React.useState(0)
    return <>
        <button onClick={() => {
            setValue((prev) => prev + 1);;
        }}>Increase count: {value}</button>
        <SomeComponent />
    </ >
}

export function ChildrenStyleTwo(props: React.PropsWithChildren) {
    style2.push(props.children); 
    const [value, setValue] = React.useState(0)
    return <>
        <button onClick={() => {
            setValue((prev) => prev + 1);;
        }}>Increase count: {value}</button>
        {props.children}
    </>
}


function SomeComponent(){
    const randomValue = Math.random(); 

    return <div>{randomValue}</div>
}

export function Main() {

    return <div>
          <button onClick={() => {
                console.log(style1, style2);
                console.log("style1", style1[1] === style1[2]); 
                console.log("style2", style2[1] === style2[2]);  
                console.log(style1[1])
                console.log(style1[2])
          }}>Click me</button>
          <ChildrenStyleOne/>

          <ChildrenStyleTwo>
              <SomeComponent/>
          </ChildrenStyleTwo>
    </div>
        }


export default Main;