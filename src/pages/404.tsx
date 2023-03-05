import { NextPage } from "next"
import Link from "next/link"
import React from "react"

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <h2>NotFoundPage</h2>
      <Link href="/">
        <button
          type="button"
          className="capitalize bg-red-600 w-44 h-10"
        >
          go back to home page
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
