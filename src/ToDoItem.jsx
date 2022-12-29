import React, { useState } from "react";

function ToDoItem(props) {
    const [itemOnOver, setItemOnOver] = useState(false);

    function onMouseOver() {
        setItemOnOver(true);
    }

    function onMouseOut() {
        setItemOnOver(false);
    }

    return (
        <div
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li style={{ textDecorationLine: itemOnOver ? "line-through" : "none" }}>
                {props.text}
            </li>
        </div>
    );
}

export default ToDoItem;
