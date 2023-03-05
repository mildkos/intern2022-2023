import { NextPage } from "next"
import React, { useEffect } from "react"
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@stores/hooks"
import { getProfile, SIGNOUT } from "@stores/slices/profileSlices"

const HomePage: NextPage = () => {
  const router: NextRouter = useRouter()
  const profile = useAppSelector(getProfile)
  const dispatch = useAppDispatch()
  const fetchRef: boolean = false

  const onSignOut = () => {
    dispatch(SIGNOUT())
  }

  useEffect(() => {
    alert("Welcome to Home Page")
  }, [])

  return (
    <div className="flex w-full h-full relative flex-col">
      <h2>HomePage</h2>
      <div className="flex w-96 bg-slate-900 rounded-xl text-white px-4 h-10 capitalize items-center flex-row gap-x-4">
        <span>
          {!profile.isLoggedIn ? (
            <>
              <span className="mr-4">Please signIn</span>
              <Link href="/signin">
                <button
                  className="bg-yellow-600 w-24 h-6 text-black uppercase"
                  type="button"
                >
                  signin
                </button>
              </Link>
            </>
          ) : (
            `user: ${profile.username}`
          )}
        </span>
        <span className="text-yellow-600">
          {!profile.isLoggedIn ? null : `cash: ${profile.cash}`}
        </span>
        {!profile.isLoggedIn ? null : (
          <button
            className="bg-red-600 w-24 h-6 uppercase"
            type="button"
            onClick={() => onSignOut()}
          >
            sign out
          </button>
        )}
      </div>

      <div className="flex w-full flex-row gap-x-4">
        <Link href="/signin">
          <button
            className="bg-purple-600 w-44 h-10 uppercase"
            type="button"
          >
            cart
          </button>
        </Link>

        <Link href={{ pathname: "/shop/player", query: { from: "homePage" } }}>
          <button
            className="bg-pink-600 w-44 h-10 uppercase"
            type="button"
          >
            shop player
          </button>
        </Link>
        <button
          className="bg-blue-600 w-24 h-10 uppercase"
          type="button"
          onClick={() => router.push("/shop/club")}
        >
          club
        </button>
      </div>
    </div>
  )
}

export default HomePage
