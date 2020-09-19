import { useAuth0 } from '@auth0/auth0-react'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Profile({}: Props): ReactElement {
    const {user, isAuthenticated} = useAuth0();
    return (
        <div>
            <h1>Personal info</h1>
                <ul>{user.name}</ul>
            <h1>Saved Visas</h1>
        </div>
    )
}
