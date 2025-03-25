import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const ComponentUseContext = () => {
    const [user, setUser] = useState("Samriddhi");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>This is component2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>This is component3</h1>
            <h2>{`Hello Again ${user}!`}</h2>
        </>

    );
}

export default ComponentUseContext;

