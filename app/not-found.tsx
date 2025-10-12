import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 text-center transition-all duration-700">
        <h1 className="text-muted/70 text-[150px] leading-none font-bold select-none md:text-[200px]">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            ページが見つかりません
          </h2>
          <p className="text-muted-foreground mx-auto text-lg">
            お探しのページは削除されたか、URLが変更された可能性があります。
          </p>
        </div>

        <div className="flex items-center justify-center pt-4">
          <Link
            href="/todos"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-medium transition-all"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            ホームに戻る
          </Link>
        </div>

        <div className="flex justify-center gap-2 pt-8">
          <div
            className="bg-muted-foreground/30 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="bg-muted-foreground/30 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="bg-muted-foreground/30 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  )
}
