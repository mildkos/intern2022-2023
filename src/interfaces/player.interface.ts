export type TPosition = "fw" | "mf" | "df" | "gk"

export interface IMockSoccerList {
  id: string
  img: string
  name: string
  position: TPosition
}
