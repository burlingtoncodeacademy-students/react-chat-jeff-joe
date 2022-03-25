import { useState, useEffect } from "react";

export default function Registry() {
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
    return (
        <>



        </>
        )
    }

