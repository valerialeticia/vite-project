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

export type Items = {
  body: string; 
  id: number;
  title: string;
  userId: number
}
