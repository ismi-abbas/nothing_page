import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div
      id="error-page"
      className="container max-w-full h-screen flex flex-col items-center justify-center bg-[#050211] text-center text-white"
    >
      <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Error Message: <i>{error.statusText || error.message}</i>
      </p>
      <button className="mt-2 hover:ring-1 px-4 py-2 rounded-md">
        <a href="/">Home</a>
      </button>
    </div>
  )
}
