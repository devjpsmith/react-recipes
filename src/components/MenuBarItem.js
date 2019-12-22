import React from 'react';

const MenuBarItem = ({ name, isActive, onItemClicked }) => {
    const className = isActive ? 'active item' : 'item';

    return <a href="#" onClick={() => onItemClicked(name)} className={className}>{name}</a>;
};

export default MenuBarItem;