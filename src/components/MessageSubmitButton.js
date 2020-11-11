import { IconButton } from "@material-ui/core"
import React from "react"
import { pushMessage } from "../firebase"
import SendIcon from "@material-ui/icons/Send"

const MessageSubmitButton = ({ name, setText, text }) => {
	return (
		<div>
			<IconButton
				disabled={text === ""}
				onClick={() => {
					pushMessage({ name: "石田テスト", text })
					setText("")
				}}
			>
				<SendIcon />
			</IconButton>
		</div>
	)
}

export default MessageSubmitButton
