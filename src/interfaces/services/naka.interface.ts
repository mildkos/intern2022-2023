export interface IMaterialType {
  name: string;
  detail: string;
  material_type_id: number;
  material_id_smartcontract?: number;
  model_id?: number;
  image: string;
  is_active: boolean;
  name_type: string;
  type: string;
  createdAt: Date;
  current_time: Date;
  id: string;
}

export interface Info {
}

export interface IGetMaterialServ {
  status: boolean;
  data: IMaterialType[];
  info: Info;
}

