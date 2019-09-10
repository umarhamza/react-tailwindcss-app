import React from 'react'

const Buttons = props => {
    const { utilClasses, title, link } = props;
    return (
        <a href={link} className={`btn ${utilClasses}` }>{title}</a>
    )
}

export default Buttons;
