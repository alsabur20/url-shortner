'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function ShortenForm() {
    const [url, setUrl] = useState<string>()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(url)
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="space-y-4">
                <Input className="h-12" value={url ?? ""} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Enter URL to shorten" required />
                <Button className="w-full p-2" type="submit">
                    Shorten URL
                </Button>
            </div>
        </form>
    )
}

export default ShortenForm