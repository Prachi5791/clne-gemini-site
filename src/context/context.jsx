// import { createContext } from "react";
// import run from "../config/gemini";

// const Context = createContext();

// const ContextProvider = (props) => {

//     const onSent = async (prompt) =>{
//         await run(prompt)
//     }

//     onSent("what is react js")

//     const contextValue = {

//     }

//     return (
//         <Context.Provider value = {contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider


import React, { createContext, useEffect, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState(""); //when the sent button clicked to get the data
    const [recentPrompt, setRecentPrompt] = useState(""); //to show the data on main page
    const [prevPrompts, setPrevPrompts] = useState([]); //to show data in the left column
    const [showResult, setShowResult] = useState(false); //once true then hide the hello thing and boxes
    const [loading, setLoading] = useState(false); //display loading animation
    const [resultData, setResultData] = useState(""); //display our result on webpage


    //to remove the stars
    const delayPara = (index, nextWord) =>{
        setTimeout(function (){
            setResultData(prev =>prev+nextWord);
        },75*index)
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        setResultData("") // previous response removed from state variable
        setLoading(true)
        setShowResult(true)

        let response;
        if(prompt !== undefined){
            //if we click on item from recent screen
            response = await run(prompt);
            setRecentPrompt(prompt)
            // setPrevPrompts(prev =>[...prev,input])
            // const response = await run(input)
        }
        else{
            //if given input in search
            setPrevPrompts(prev =>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i =0 ; i<responseArray.length; i++){
            if(i == 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse +="<b>" + responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord +" ")
        }
        //setResultData(newResponse2)
        setLoading(false)
        setInput("")

        //console.log(response);
    }

    // useEffect(() => {
    //     onSent("what is react js");
    // }, []);

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
