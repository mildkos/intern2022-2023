import React, { memo } from "react"

interface IProps {
  dataList: JSX.Element | JSX.Element[]
}

const GridCardLayout = (props: IProps) => {
  return (
    <div className="w-full place-items-center gap-y-2 gap-x-2 sm:gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {props.dataList}
    </div>
  )
}

export default memo(GridCardLayout)
