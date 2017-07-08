import React, { Component } from 'react';

const LI = (props) => {
    let event;
    let { action, id, filter, style, content } = props;
    if (action) {
        event = action;
    }
    if (filter) {
        style = filter == id ? 'active' : '';
    }
    return (
        <li id={id} className={style} onClick={() => { event ? event(id) : '' }}>
            {content}
        </li>
    );
}
export default LI;