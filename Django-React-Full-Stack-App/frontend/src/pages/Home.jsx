import { useState, useEffect } from "react"
import api from "../api"

const Home = () => {
	const [notes, setNotes] = useState([])
	const [content, setContent] = useState("")
	const [title, setTitle] = useState("")

	const getNotes = () => {
		api
			.get("/api/notes")
			.then((res) => res.data)
			.then((data) => setNotes(data))
			.catch((err) => alert(err))
	}

	return <div>Home</div>
}

export default Home
