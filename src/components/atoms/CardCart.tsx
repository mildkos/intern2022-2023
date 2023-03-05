import React, { memo } from "react"
import Image from "next/image"

interface IProps {
  img: string
  alt?: string
  name: string
  amount: number
  price: number
}

const CardCart = (props: IProps) => {
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
      <div className="w-full h-6">
        <span className="w-10 text-slate-400">amount : </span>
        <span className="w-full">{props.amount}</span>
      </div>
      <div className="w-full h-6">
        <span className="w-10 text-slate-400">price : </span>
        <span className="w-full">{props.price * props.amount}</span>
      </div>
      <button className="bg-red-600 w-20 h-6 uppercase">delete</button>
    </div>
  )
}

export default memo(CardCart)
