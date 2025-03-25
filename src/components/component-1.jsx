import { useState, createContext, useContext } from "react";

const RollNumberContext = createContext();

const Component1 = () => {
    const [userName, setUserName] = useState("Jagadish Adhikari");
    const [rollNumber, setRollNumber] = useState(1002);
    return (
        <RollNumberContext.Provider value={rollNumber}>
            <h1>Hello {userName} this is Component1</h1>
            <Component2 user2={userName}/>
        </RollNumberContext.Provider>
    );
}

function Component2({user2}) {
    return (
        <>
            <h1>Hello this is Component 2</h1>
            <Component3 user3={user2}/>
        </>
    );
}

function Component3({user3}) {
    const rollNumber= useContext(RollNumberContext);
    return (
        <>
            <h1>Hello {user3} this is Component 3 and roll number is {rollNumber}</h1>
        </>
    );
}


export default Component1;