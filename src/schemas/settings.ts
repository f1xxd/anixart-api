import type { IResponse } from "./response"

export interface IChangePasswordRequest {
  current: string
  new: string
}

export interface IChangePasswordResponse extends IResponse {
  token: string
}

export interface IChangeEmailRequest {
  current_password: string
  current: string
  new: string
}

export interface IChangeEmailResponse extends IResponse {}

export interface IChangeLoginRequest {
  login: string
}

export interface IChangeLoginResponse extends IResponse {}

export interface IEditStatusRequest {
  status: string
}

export interface IEditStatusResponse extends IResponse {}

export interface IEditSocialRequest {
  discordPage?: string
  instPage?: string
  tgPage?: string
  ttPage?: string
  vkPage?: string
}

export interface IEditSocialResponse extends IResponse {}
