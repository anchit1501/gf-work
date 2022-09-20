import React from "react";

export default (props) => {
    return (
        <label style={{ height: '100%', color: 'black', display: "flex", alignItems: 'center', justifyContent: 'center', paddingLeft: '10px',paddingRight:'10px', borderRight:'1px solid #c0c0c0' }}>
            {props.children}
        </label>
    )
}
