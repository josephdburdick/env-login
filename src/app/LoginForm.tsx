"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginForm() {
  const [status, setStatus] = useState("idle")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { body, status } = await fetch(e.currentTarget.action, {
      method: "POST",
      body: formData,
    })
    switch (status) {
      case 200:
        setStatus("Success")
        console.log({ body })
        router.push("/admin")
      case 401:
        setStatus("Unauthorized")
        break
      default:
        setStatus("Error")
        break
    }
  }

  return (
    <form action="/api/login" method="post" onSubmit={handleSubmit}>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>

      <p></p>
      <p>{status}</p>
    </form>
  )
}
