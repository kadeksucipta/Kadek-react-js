import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Identity = () => {
    const fetchUser = useCallback(() => ["kadek", "rafly", "davi"], [])
    let[user, setuser] = useState([])

    useEffect(() => {
        const data = fetchUser()
        setuser(data)
    }, [fetchUser])
    return(
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
            </ul>
        </div>
    )
}
export default Identity