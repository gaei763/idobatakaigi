import React, { useState } from "react"
import Main from "./Main"
import SignIn from "./SingIn"

export default () => {
	const [name, setName] = useState("")
	if (name === "") {
		return <SignIn setName={setName} />
	} else {
		return <Main name={name} />
	}
}
