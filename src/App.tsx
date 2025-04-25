// import { useState } from "react";
import "./App.css";
// import Button from "./components/Button/Button.tsx";
import { Button } from "@/components/ui/button";

function App() {
    return (
        <>
            <div >
                <Button variant='default'>Button</Button>
                <Button variant='success'>Button</Button>
                <Button variant='failed'>Button</Button>
            </div>
        </>
    );
}

export default App;
