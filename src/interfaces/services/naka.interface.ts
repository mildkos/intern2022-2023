export interface IMaterialType {
  crate_date: Date;
  _id: string;
  name: string;
  detail: string;
  is_active: boolean;
  price: number;
  image: string;
  item_id_smartcontract: number;
  model_id: number;
  min_item: number;
  image_icon: string;
  image_icon_color: string;
  max_item: number;
  current_time: Date;
  item_size: string;
  craft_time: number;
  id: string;
}

export interface Info {
}

export interface IGetMaterialServ {
  status: boolean;
  data: IMaterialType[];
  info: Info;
}

