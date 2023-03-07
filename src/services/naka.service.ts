import service from "@configs/interceptor"
import { IGetMaterialServ } from "src/interfaces/services/naka.interface"

export const getMaterialTypes = () => {
  return service
    .get<IGetMaterialServ>("/market-place/materials")
    .then((_res) => ({ status: true, data: _res.data.data, message: "" }))
    .catch((_err) => ({
      status: false,
      data: null,
      message: "failed to get material types"
    }))
}

export const getBuildingTypes = () => {
  // market-place/building
  return
}
