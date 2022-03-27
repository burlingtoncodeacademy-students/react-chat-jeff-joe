import { useState, useEffect } from "react";

import React from 'react';
import '../App.css';

export default function Lobby() {
    const [allMessages, setAllMessages] = useState([])
    useEffect(() => {
      fetch("http://localhost:5000/allmessages")
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          setAllMessages(json)
        });
    }, []);
    return(
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
    )
}