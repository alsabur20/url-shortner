import UrlShortnerContainer from "@/components/url-shortner-container";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-12 md:py-24 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">URL Shortner</h1>
        <p className="ms:text-lg">Shorten URLs and share them easily.</p>
      </div>
      <UrlShortnerContainer />
    </div>
  );
}
