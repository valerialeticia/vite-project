/*export type Rows = {
  userId: number;
  id: number;
  title: string;
  body: boolean
}*/

export type Detail = {
  userId: number;
  id: number;
  title: string;
  body: string
}

export type Airline = {
  _id: string;
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
  __v: number
}
export type PassengerDataResponse = {
  name: string;
  trips: number;
  airline: Airline[];
  __v: number
}
