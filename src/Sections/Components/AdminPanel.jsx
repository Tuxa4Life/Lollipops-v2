import React, { useState } from 'react';
import styles from '../../assets/styles/AdminPanel.css'

const AdminPanel = ({setAdmin, closeAdminPanel}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isIncorrect, setIsIncorrect] = useState(false)

    const confirmCreds = (e) => {
        e.preventDefault()

        if (username === 'admin' && password === 'lollipops') {
            setAdmin(true)
            closeAdminPanel()
            setIsIncorrect(false)
        } else {
            setIsIncorrect(true)
            setPassword('')
        }
    }

    return (
        <form style={styles} className='admin-panel' onSubmit={confirmCreds}>
            <div className="ui input inputs">
                <input style={{border: `${isIncorrect ? '1px red solid' : 'unset'}`}} type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} />
                <input style={{border: `${isIncorrect ? '1px red solid' : 'unset'}`}} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="buttons">
                <button type='submit' className="ui pink button">შესვლა</button>
                <button type='button' onClick={closeAdminPanel} className="ui button">უკან</button>
            </div>
        </form>
    )
}

export default AdminPanel;