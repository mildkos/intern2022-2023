/* 
    * ref<Thai> -> https://www.monosor.dev/courses/typescript-101
    * interface or type -> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
    * basic types -> https://www.typescriptlang.org/docs/handbook/basic-types.html
    ? arrow function generic if you want to use -> https://timmousk.com/blog/typescript-arrow-function-generic
*/

const isActive = true
const isUnActive = "false"
const price = 1.5
const thb = 30.5
const cardName = "Son Heung-Min"
const cardNameList = ["Kevin", "Ronaldo"]
const randomValue = ["Van", 109, "Milner"]
const date1 = "2022-11-29T09:21:02.967Z"
const date2 = "Tue Nov 29 2022 16:21:02 GMT+0700"
const date3 = new Date()
const date4 = new Date(date1)
const date5 = new Date(date2)
const cardType = null
const cardTier = undefined
const _unk: unknown = "Kaoru"

type TNum = 10 | 20

const setFakeMock = () => {
  let fake: number = 10
  if (price > 0) {
    fake = 20
  }
}

const getCardName = () => {
  //   return _unk;
  return cardName
}

// Tips: you can check variable is null | undefinded | "" | 0 | false with if(<variable>)
const checkTopTier = () => {
  if (cardTier) {
    // or if(cardType)
    return true
  } else {
    return false
  }
}

const calsPriceToTHB = (_price: number): string => {
  return (_price * thb).toString()
}

function getAge(x: number): number {
  return 60
}

const CardData = {
  cardName: "Tony",
  price: 500,
  power: 300,
  isActive: true,
  position: {
    short: "mf",
    full: "midfielder"
  },
  club: "New York City F.C."
}

// _nameList = cardNameList
const getNameFromArr = (_nameList: Array<any>) => {
  return _nameList[0]
}

// _cData = CardData
const getNameByCardData = (_cData: any) => {
  return _cData.cardName
}

export const CardMockData = [
  {
    cardName: "Tony",
    price: 500,
    power: 300,
    isActive: true,
    position: {
      short: "mf",
      full: "midfielder"
    },
    club: "New York City F.C."
  },
  {
    cardName: "Simon",
    price: 60,
    power: 120,
    isActive: true,
    position: {
      short: "gk",
      full: "goalkeeper"
    },
    club: "A.C. Milan"
  }
]
