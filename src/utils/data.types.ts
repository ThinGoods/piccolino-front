export interface IAdress {
  mapUrl: string;
  localStreet: string;
}

export interface IAdresses {
  zsu: IAdress;
  epicentr: IAdress;
}

export interface ICoffeeItem {
  id: number;
  img: any;
  country: string;
  region: string,
  farm: string,
  descriptors: Array<string>,
  type: TCoffeeType,
  processing: string,
  roasting: string,
  score: number,
  price: number,
  weight: number,
}

type TCoffeeType = 'мелена' | 'зерно';