import React from 'react'

function List(props) {
    console.log(props)
    const listItems =props.name.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default List