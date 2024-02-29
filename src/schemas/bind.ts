import type { IResponse } from "./response"

export interface IBindVKRequest {
  accessToken: string
}

export interface IBindVKResponse extends IResponse {}

export interface IBindGoogleRequest {
  idToken: string
}

export interface IBindGoogleResponse extends IResponse {}
