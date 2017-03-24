import React from 'react'
import UserDetails from './UserDetails';

function UserDetailWrapper(props){
    return(
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            <UserDetails info={props.playerInfo}/>
        </div>
    )
}

export default UserDetailWrapper;