import React from "react";

export default (props:any) => {
    const { children } = props;
    return (
        <>
            <label style={{ height: '100%', color: 'black', display: "flex", alignItems: 'center', justifyContent: 'center', paddingLeft: '10px', paddingRight: '10px', borderRight: '1px solid #c0c0c0' }}>
                {children}
            </label>
        </>
    )
}
