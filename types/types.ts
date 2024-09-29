import { UserRole } from "@prisma/client";

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  role: UserRole;
}
export interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}
