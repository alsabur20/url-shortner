import Link from "next/link"
import { Button } from "./ui/button"
import { CopyIcon, Eye, EyeIcon } from "lucide-react"

function UrlList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent Urls</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 justify-between">
          <Link className="text-blue-500" target="_blank" href="https://www.youtube.com/watch?v=mr9vOla2AMc">https://www.youtube.com/watch?v=mr9vOla2AMc</Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
              <CopyIcon className="w-4 h-4" />
              <span className="sr-only">Copy</span>
            </Button>
            <span className="flex items-center">
              <EyeIcon className="w-4 h-4 mr-1" />
              100 views
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default UrlList