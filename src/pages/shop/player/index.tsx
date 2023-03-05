import { NextPage } from "next"
import React, { useMemo } from "react"
import GridCardLayout from "src/layouts/GridCardLayout"
import imageThirteen from "@public/thirteen.svg"
import CardSoccer, { TPosition } from "@components/molecules/CardSoccer"
import Link from "next/link"
import { NextRouter, useRouter } from "next/router"

interface IMockSoccerList {
  id: string
  img: string
  name: string
  position: TPosition
}

const ShopPlayerPage: NextPage = () => {
  const mockSoccerList: Array<IMockSoccerList> = [
    {
      id: "0001",
      img: imageThirteen,
      name: "Nick Pope",
      position: "gk"
    },
    {
      id: "0002",
      img: imageThirteen,
      name: "Jamaal Lascelles",
      position: "df"
    },
    {
      id: "0003",
      img: imageThirteen,
      name: "Dan Burn",
      position: "df"
    },
    {
      id: "0004",
      img: imageThirteen,
      name: "Kieran Trippier",
      position: "df"
    },
    {
      id: "0005",
      img: imageThirteen,
      name: "kittikon",
      position: "gk"
    },
    {
      id: "0006",
      img: imageThirteen,
      name: "Matt Ritchie",
      position: "mf"
    },
    {
      id: "0007",
      img: imageThirteen,
      name: "Joe Willock",
      position: "mf"
    },
    {
      id: "0008",
      img: imageThirteen,
      name: "Matty Longstaff",
      position: "mf"
    },
    {
      id: "0009",
      img: imageThirteen,
      name: "Joelinton",
      position: "fw"
    },
    {
      id: "0010",
      img: imageThirteen,
      name: "Allan Saint-Maximin",
      position: "fw"
    },
    {
      id: "0011",
      img: imageThirteen,
      name: "Alexander Isak",
      position: "fw"
    }
  ]

  const router: NextRouter = useRouter()
  const genDataList = () => {
    return mockSoccerList.map((g) => (
      <CardSoccer
        key={g.id}
        img={g.img}
        name={g.name}
        position={g.position}
      />
    ))
  }

  return (
    <div className="flex w-full h-full relative flex-col">
      <h2>ShopPlayerPage</h2>
      <div className="w-full flex flex-row gap-x-2">
        <Link
          href="/"
          legacyBehavior
        >
          <a className="bg-slate-700 w-24 h-10 text-white items-center justify-center flex flex-col rounded-xl">
            Home
          </a>
        </Link>
        <button
          className="bg-black text-white w-24 h-10 uppercase rounded-xl"
          onClick={() => router.back()}
          type="button"
        >
          back
        </button>
      </div>
      <GridCardLayout dataList={genDataList()} />
    </div>
  )
}

export default ShopPlayerPage
