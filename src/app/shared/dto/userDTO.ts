export interface UserDTO {
  cell: string;
  dob: DobDTO;
  email: string;
  gender: string;
  id: IdDTO;
  location: LocationDTO;
  login: LoginDTO;
  name: NameDTO;
  nat: string;
  phone: string;
  picture: PictureDTO;
}

interface NameDTO {
  title: string;
  first: string;
  last: string;
}

interface DobDTO {
  date: string;
  age: number;
}

interface IdDTO {
  name: string;
  value: any;
}

interface LocationDTO {
  city: string;
  country: string;
  state: string;
  street: StreetDTO;
}

interface StreetDTO {
  number: number;
  name: string;
}

interface LoginDTO {
  uuid: string;
  username: string;
  password: string;
  sha1: string;
}

interface PictureDTO {
  large: string;
  medium: string;
  thumbnail: string;
}
