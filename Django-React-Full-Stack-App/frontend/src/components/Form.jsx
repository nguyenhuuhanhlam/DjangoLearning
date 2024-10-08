import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"

const Form = ({ route, method }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
}
