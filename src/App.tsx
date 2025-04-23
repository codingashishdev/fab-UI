// import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.tsx";

function App() {
    return (
        <>
            <div >
                <Button varient='primary' size={'medium'} classname={'cursor-pointer'}>Click me please</Button>
            </div>
        </>
    );
}

export default App;
