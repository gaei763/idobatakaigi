import { IconButton } from "@material-ui/core"
import React from "react"
import { pushMessage } from "../firebase"
import SendIcon from "@material-ui/icons/Send"

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
	return (
		<div>
			<IconButton
				disabled={text === ""}
				onClick={() => {
					pushMessage({ name, text })
					setText("")
					inputEl.current.focus()
				}}
			>
				<SendIcon />
			</IconButton>
		</div>
	)
}

export default MessageSubmitButton
