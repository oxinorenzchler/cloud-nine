import { useState } from 'react'


// Handles the onChange event
export const useHandleChange = (initialState) => {

  const [input, setInput] = useState(initialState)

  const handleInputChange = (e) => setInput({
    ...input,
    [e.target.id]: e.target.value
  })

  return [input, handleInputChange]
}
