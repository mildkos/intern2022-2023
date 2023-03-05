import Image from "next/image"
import React, { memo } from "react"
import { TPosition } from "src/interfaces/player.interface"

interface IProps {
  img: string
  alt?: string
  name: string
  position: TPosition
}

const CardSoccer = (props: IProps) => {
  const displayFullPosition = (_pos: TPosition) => {
    switch (_pos) {
      case "fw":
        return "forward"
      case "mf":
        return "midfieder"
      case "df":
        return "defender"
      case "gk":
        return "goalkeeper"
      default:
        break
    }
  }

  const displayColor = (_pos: TPosition) => {
    switch (_pos) {
      case "fw":
        return "bg-red-600"
      case "mf":
        return "bg-green-600"
      case "df":
        return "bg-blue-600"
      case "gk":
        return "bg-yellow-600"
      default:
        break
    }
  }

  return (
    <div className="w-64 text-white h-80 bg-slate-900 rounded-2xl relative flex flex-col items-center py-6 px-4 gap-y-2 capitalize">
      <div className="p-2 rounded-xl bg-blue-500">
        <div className="relative w-40 h-44">
          <Image
            fill
            src={props.img}
            alt={props.alt ?? "_cardSoccer"}
          />
        </div>
      </div>
      <div className="w-full h-6">
        <span className="w-10 text-slate-400">Name : </span>
        <span className="w-full">{props.name}</span>
      </div>
      <div className="w-full h-6 flex flex-row gap-2">
        <span className="w-18 text-slate-400">Position : </span>
        <span
          className={`${displayColor(props.position)} rounded-xl w-6 h-6`}
        />
        <span className="w-fit min-w-[120px]">
          {displayFullPosition(props.position)}
        </span>
      </div>
      <button className="bg-red-600 w-20 h-6 uppercase">see more</button>
    </div>
  )
}

export default memo(CardSoccer)
