import { UserDTO } from './user.dto';

export interface ResultDTO {
  results: UserDTO[];
  info: any;
}
