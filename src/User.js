import React from "react";

export default function User(prop) {
    return (
        <div>
            <h1>{prop.name.data} - {prop.address.data}</h1>
        </div>
    )
}