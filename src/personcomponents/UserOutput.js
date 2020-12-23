import React from 'react'

import './Person.css'

const UserOutput = (props) => {
    return(
    <div className="User">
        <p>{props.username}  : Paragraph 1</p>
        <p>{props.username}  : Paragraph 2</p>
        
    </div>
    );
}


export default UserOutput;