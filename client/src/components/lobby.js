import { useState, useEffect } from "react";

import React from 'react';
import '../App.css';

export default function Lobby() {
    const [allMessages, setAllMessages] = useState([])
    useEffect(() => {
      fetch("http://localhost:27017/messages")
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
                            <tr key={entry._id}>
                                <td>{entry.date}</td>
                                <td>{entry.userName}</td>
                                <td>{entry.body}</td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            
        </>
    )
}