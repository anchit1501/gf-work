import React, { useState, useEffect } from "react";
import Label from "./Label";
import Tooltip from "./Tooltip";

export default (props) => {

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDateState(new Date());
        }, 1000);
    }, []);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
        <nav style={{ backgroundColor: '#eeeeef', height: '40px', display: "flex", justifyContent: 'flex-start' }}>

            <Tooltip content={today} direction="right">
                <Label>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true,
                    })}
                </Label>
            </Tooltip>
            <Tooltip content="Yee-haw!" direction="right">
                <Label>
                    Settings
                </Label>
            </Tooltip>
        </nav>
    )
}