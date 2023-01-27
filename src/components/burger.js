import React from 'react';

const Burger = ({open, setOpen}) => {
    return (
        <div className='hamburger' onClick={() => setOpen(!open)}>
            <span />
        </div>
    )
}

export default Burger;