import React, { memo } from "react"
import Image from "next/image"

interface IProps {
  name: string
  img: string
  alt?: string
  trophy: number
  league: string
  arena: string
}

const CardClub = (props: IProps) => {
  return (
    <div className="w-64 text-white h-80 bg-slate-900 rounded-2xl relative flex flex-col items-center py-6 px-4 gap-y-2 capitalize">
      <div className="p-2 rounded-xl bg-blue-500">
        <div className="relative w-28 h-32">
          <Image
            fill
            src={props.img}
            alt={props.alt ?? "_clubSoccer"}
          />
        </div>
      </div>
      <div className="w-full h-6">
        <span className="w-10 text-slate-400">Name : </span>
        <span className="w-full">{props.name}</span>
      </div>
      <div className="w-full h-6 flex flex-row gap-2">
        <span className="w-18 text-slate-400">league : </span>
        <span className="w-fit min-w-[120px]">{props.league}</span>
      </div>
      <div className="w-full h-6 flex flex-row gap-x-2">
        <div className="w-16 h-full flex">
          <span className="w-10 text-slate-400">🏆 : </span>
          <span className="w-fit">{props.trophy}</span>
        </div>
        <div className="w-44 h-full flex">
          <span className="w-20 text-slate-400">stadium : </span>
          <p className="w-20 truncate ">{props.arena}</p>
        </div>
      </div>
      <button className="bg-blue-600 w-20 h-6 uppercase rounded-md">
        see more
      </button>
    </div>
  )
}

export default memo(CardClub)
