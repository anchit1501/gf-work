import React, { useState, useEffect } from "react";
import Label from "./Label";

export default (props) => {

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDateState(new Date());
        }, 1000);
    }, []);

    return (
        <nav style={{ backgroundColor: '#eeeeef', height: '40px', display: "flex", justifyContent: 'flex-start' }}>
            <Label>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}
            </Label>
            <Label>
                Settings
            </Label>
        </nav>
    )
}