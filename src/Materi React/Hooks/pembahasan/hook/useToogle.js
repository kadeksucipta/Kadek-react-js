import { useState } from "react"

export const useToogle = () => {        //custom hook
    const [value, setValue] = useState(false)

    return [value, setValue]
} 