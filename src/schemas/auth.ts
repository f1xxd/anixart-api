import type { IProfile, IProfileToken } from "./profile"
import type { IResponse } from "./response"

export interface IAuthLoginRequest {
  login: string
  password: string
}

export interface IAuthLoginResponse extends IResponse {
  profile: IProfile
  profileToken: IProfileToken
}

export interface IAuthVKRequest {
  vkAccessToken: string
}

export interface IAuthVKResponse extends IResponse {}

export interface IAuthGoogleRequest {
  googleIdToken: string
}

export interface IAuthGoogleResponse extends IResponse {}
