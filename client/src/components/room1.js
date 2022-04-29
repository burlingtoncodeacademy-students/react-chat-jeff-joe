import React from 'react';
import '../App.css';
import { useState, useEffect } from "react";

export default function Room1() {
    //use effect to fetch and display messages
    const [allMessages, setAllMessages] = useState([])
    useEffect(() => {
      fetch("http://localhost:5000/messages")
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          setAllMessages(json)
        });
    }, []);

    return(
        <>
        <>
            <div className='entries'>
                <table>
                    <tbody>
                        {allMessages.map((entry) => {
                            return(
                            <tr key={entry._id}>
                                <td>{entry.date}</td>
                                <td>{entry.userName}</td>
                                <td>{entry.body}</td>

                            </tr>
                            )})}
                    </tbody>
                </table>
            </div>
            
        </>
            placeholder text
        </>
    )
}
