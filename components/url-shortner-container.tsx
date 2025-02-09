'use client';

import { useState } from "react"
import ShortenForm from "./shorten-form"
import UrlList from "./url-list"

function UrlShortnerContainer() {
    const [refreshKey, setRefreshKey] = useState(0)

    const handleRefresh = () => {
        setRefreshKey((prev) => prev + 1)
    }

    return (
        <div>
            <ShortenForm handleRefresh={handleRefresh} />
            <UrlList key={refreshKey} />
        </div>
    )
}

export default UrlShortnerContainer