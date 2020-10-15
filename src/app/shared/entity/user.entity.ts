export class UserEntity {
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

  constructor(props: UserEntity) {
    Object.assign(this, props);
  }
}

class NameDTO {
  title: string;
  first: string;
  last: string;

  constructor(props: NameDTO) {
    Object.assign(this, props);
  }
}

class DobDTO {
  date: string;
  age: number;

  constructor(props: DobDTO) {
    Object.assign(this, props);
  }
}

class IdDTO {
  name: string;
  value: any;

  constructor(props: IdDTO) {
    Object.assign(this, props);
  }
}

class LocationDTO {
  city: string;
  country: string;
  state: string;
  street: StreetDTO;

  constructor(props: LocationDTO) {
    Object.assign(this, props);
  }
}

class StreetDTO {
  number: number;
  name: string;

  constructor(props: StreetDTO) {
    Object.assign(this, props);
  }
}

class LoginDTO {
  uuid: string;
  username: string;
  password: string;
  sha1: string;

  constructor(props: LoginDTO) {
    Object.assign(this, props);
  }
}

class PictureDTO {
  large: string;
  medium: string;
  thumbnail: string;

  constructor(props: PictureDTO) {
    Object.assign(this, props);
  }
}
