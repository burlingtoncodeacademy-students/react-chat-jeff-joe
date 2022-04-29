import { useState, useEffect } from "react";

import React from 'react';
import '../App.css';

export default function Lobby() {
  //use effect to fetch and display messages
    const [allMessages, setAllMessages] = useState([])
    useEffect(() => {
      fetch("mongodb://localhost:27017/messages")
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          setAllMessages(json)
        });
    }, []);
    return(
        <>
            <div className='messages'>
                <table>
                    <tbody>
                      {/* MAPS MESSAGES INTO READABLE BOXES */}
                        {allMessages.map((message) => {
                            return(
                            <tr key={message._id}>
                                <td>{message.date}</td>
                                <td>{message.userName}</td>
                                <td>{message.msg}</td>
                            </tr>
                            )})}
                    </tbody>
                    <tfoot>
                <tr>
                  {/* SUBMIT INPUT */}
                  <td colSpan="4">
                    <form action="/create" method="POST">
                      <input
                        type="text"
                        name="userName"
                        placeholder="Display Name"
                      />

                      <input
                        type="text"
                        name="msg"
                        placeholder="Send a chat"
                      />
                      <input type="submit" value="Send!" />
                    </form>
                  </td>
                </tr>
              </tfoot>
                </table>
            </div>
            
        </>
    )
}