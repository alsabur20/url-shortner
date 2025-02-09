'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface ShortenFormProps {
    handleRefresh(): void
}

function ShortenForm({ handleRefresh }: ShortenFormProps) {
    const [url, setUrl] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true);
        try {
            const response = await fetch("/api/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url })
            })
            await response.json();
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setUrl("")
            handleRefresh();
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="space-y-4">
                <Input className="h-12" value={url ?? ""} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Enter URL to shorten" required />
                <Button className="w-full p-2" type="submit" disabled={isLoading}>
                    {isLoading ? "Shortening..." : "Shorten URL"}
                </Button>
            </div>
        </form>
    )
}

export default ShortenForm