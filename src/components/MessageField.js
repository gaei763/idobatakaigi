import React, { useState } from "react"
import { TextField } from "@material-ui/core"
import { pushMessage } from "../firebase"

const MessageField = ({ inputEl, name, setText, text }) => {
	const [isComposed, setIsComposed] = useState(false)

	console.log({ text })
	return (
		<TextField
			fullWidth={true}
			value={text}
			autoFocus
			inputRef={inputEl}
			onChange={(e) => setText(e.target.value)}
			onKeyDown={(e) => {
				if (isComposed) return
				// const text = e.target.value
				if (text === "") return
				if (e.key === "Enter") {
					console.log("Enter!!!!!")
					pushMessage({ name, text })
					setText("")
					e.preventDefault()
				}
			}}
			onCompositionStart={() => setIsComposed(true)}
			onCompositionEnd={() => setIsComposed(false)}
		/>
	)
}

export default MessageField
