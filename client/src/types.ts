export interface IUserDataForLogin {
  email: string,
  password: string,
  [type: string]: string | undefined,
  confirmPassword?: string,
}

export interface IUserDataForLoginValidation {
  email: number,
  password: number,
  [type: string]: number 
}

export interface IUserDataForRegisterValidation extends IUserDataForLoginValidation{
  nickname: number,
}

export interface IUserDataForRegister extends IUserDataForLogin{
  nickname: string
}