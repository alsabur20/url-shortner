'use client';

import Link from "next/link"
import { Button } from "./ui/button"
import { CheckIcon, CopyIcon, EyeIcon } from "lucide-react"
import { useEffect, useState } from "react"

type Url = {
  id: number
  originalUrl: string
  shortCode: string
  visits: number
  createdAt: string
}
function UrlList() {
  const [urls, setUrls] = useState<Url[]>([])
  const [copied, setCopied] = useState(false);
  const [copyUrl, setCopyurl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const shortenUrl = (code: string) => `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`

  const fetchUrls = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
    }

  }

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(shortenUrl(code))
    setCopied(true)
    setCopyurl(code)
    setTimeout(() => setCopied(false), 3000)
  }

  useEffect(() => {
    fetchUrls();
  }, [])

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <ul className="space-y-2">
          {[...Array(3)].map((_, index) => (
            <li key={index} className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border p-3">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="flex items-center gap-2">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent Urls</h2>
      <ul className="space-y-2">
        {urls?.map((url: Url) => (
          <li key={url.id} className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border p-3">
            <Link className="text-blue-500" target="_blank" href={`/${url.shortCode}`}>{shortenUrl(url.shortCode)}</Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted" onClick={() => handleCopy(url.shortCode)} aria-label="Copy URL">
                {copied && copyUrl == url.shortCode ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
                <span className="sr-only">Copy</span>
              </Button>
              <span className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                {url.visits} views
              </span>
            </div>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default UrlList