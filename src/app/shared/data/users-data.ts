import { UserEntity } from './../entity/userEntity';
const firstUser = new UserEntity({
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Marvão',
    last: 'Campos'
  },
  location: {
    street: {
      number: 9929,
      name: 'Rua Primeiro de Maio '
    },
    city: 'Lauro de Freitas',
    state: 'Espírito Santo',
    country: 'Brazil'
  },
  email: 'marvao.campos@example.com',
  login: {
    uuid: '10f874f3-cd1d-4a1c-8a18-b8134d0f44eb',
    username: 'redbutterfly553',
    password: 'cuervo',
    sha1: '51751d58253d6f9246eacb8b36ceefc6a438cdc9'
  },
  dob: {
    date: '1983-08-22T08:08:45.367Z',
    age: 37
  },
  phone: '(12) 8093-2971',
  cell: '(12) 0496-2593',
  id: {
    name: '',
    value: null
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/10.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/10.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/10.jpg'
  },
  nat: 'BR'
});

const secondUser = new UserEntity({
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Murat',
    last: 'Tütüncü'
  },
  location: {
    street: {
      number: 3068,
      name: 'Maçka Cd'
    },
    city: 'Şanlıurfa',
    state: 'Gaziantep',
    country: 'Turkey'
  },
  email: 'murat.tutuncu@example.com',
  login: {
    uuid: 'd94bc5b9-95cd-4a21-94b4-66c171ec1f93',
    username: 'crazypeacock364',
    password: 'slinky',
    sha1: '2a76c319fecc64f22961342339300629bfc3d251'
  },
  dob: {
    date: '1966-06-20T20:24:28.463Z',
    age: 54
  },
  phone: '(040)-880-9621',
  cell: '(326)-873-0092',
  id: {
    name: '',
    value: null
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/76.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
  },
  nat: 'TR'
});

const users = [firstUser, secondUser];
export { users };
