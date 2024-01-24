import React from "react";
import { useState } from "react";

function App (){

    const [books , setbook] = useState(10)
    const sellBook = () => {
        if (books === 0) {
            setbook(books)
        }
        else{
            setbook(books - 1)
        } 
    }
    const returnBook = () => {
        if (books === 10) {
            setbook(books)
        }
        else{
            setbook(books + 1)
        }
    }

    return (
        <>
            <h2>Books in the library : {books} </h2>
            <button onClick = {sellBook}
            >Sell Book </button>{" "}
            <button onClick = {returnBook}
            >Return Book </button>
        </>
    )
}

export default App