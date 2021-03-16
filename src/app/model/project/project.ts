import { User } from "../user/user";
import { Department } from "../department/department";

export enum ProjectType {
  Informal = 1,
  Formal = 2,
}

export class Project {
  name?: string;
  type?: ProjectType;
  isDown?: boolean;
  users?: User[];
  department?: Department;
  creationDate?: Date;
}
