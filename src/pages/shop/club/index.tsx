import CardClub from "@components/molecules/CardClub"
import { NextPage } from "next"
import React from "react"
import GridCardLayout from "src/layouts/GridCardLayout"
import imageThirteen from "@public/thirteen.svg"
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"

interface IMockClub {
  cId: string
  cName: string
  cImg: string
  cLeague: string
  cTrophy: number
  cStadium: string
}

const ShopClubPage: NextPage = () => {
  const mockClubList: Array<IMockClub> = [
    {
      cId: "c-001",
      cName: "Newcastle United F.C.",
      cImg: imageThirteen,
      cLeague: "Premier League",
      cTrophy: 11,
      cStadium: "St James' Park"
    },
    {
      cId: "c-002",
      cName: "Real Madrid CF",
      cImg: imageThirteen,
      cLeague: "LaLiga",
      cTrophy: 10,
      cStadium: "Santiago Bernabéu Stadium"
    },
    {
      cId: "c-003",
      cName: "New York City F.C.",
      cImg: imageThirteen,
      cLeague: "Major League Soccer",
      cTrophy: 8,
      cStadium: "Yankee Stadium"
    },
    {
      cId: "c-004",
      cName: "A.F.C. Bournemouth",
      cImg: imageThirteen,
      cLeague: "Premier League",
      cTrophy: 8,
      cStadium: "Vitality Stadium"
    },
    {
      cId: "c-005",
      cName: "Chelsea F.C.",
      cImg: imageThirteen,
      cLeague: "Premier League",
      cTrophy: 5,
      cStadium: "Stamford Bridge"
    },
    {
      cId: "c-006",
      cName: "Liverpool F.C.",
      cImg: imageThirteen,
      cLeague: "Premier League",
      cTrophy: 3,
      cStadium: "Anfield"
    },
    {
      cId: "c-007",
      cName: "FC Barcelona",
      cImg: imageThirteen,
      cLeague: "LaLiga",
      cTrophy: 1,
      cStadium: "Spotify Camp Nou"
    },
    {
      cId: "c-008",
      cName: "Villarreal CF",
      cImg: imageThirteen,
      cLeague: "LaLiga",
      cTrophy: 0,
      cStadium: "Estadio de la Cerámica"
    },
    {
      cId: "c-009",
      cName: "New York City F.C.",
      cImg: imageThirteen,
      cLeague: "LaLiga",
      cTrophy: 0,
      cStadium: "St James' Park"
    },
    {
      cId: "c-010",
      cName: "Atlético de Madrid",
      cImg: imageThirteen,
      cLeague: "LaLiga",
      cTrophy: 0,
      cStadium: "Civitas Metropolitan Stadium"
    }
  ]

  const router: NextRouter = useRouter()
  const genDataList = () => {
    return mockClubList.map((c) => (
      <CardClub
        name={c.cName}
        img={c.cImg}
        trophy={c.cTrophy}
        league={c.cLeague}
        arena={c.cStadium}
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

export default ShopClubPage
