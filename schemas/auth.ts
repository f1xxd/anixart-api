import type { IProfile, IProfileToken } from '@/anixart/schemas/profile'
import type { IResponse } from '@/anixart/schemas/response'

export interface IAuthLoginRequest {
  login: string
  password: string
}

export interface IAuthLoginResponse extends IResponse {
  profile: IProfile
  profileToken: IProfileToken
}
