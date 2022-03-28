import React from 'react';
import '../App.css';
import { useState, useEffect } from "react";

export default function Room2() {
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
            placeholder text
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


        </>
    )
}
