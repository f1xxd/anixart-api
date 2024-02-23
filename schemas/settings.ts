import type { IResponse } from "@/anixart/schemas/response"

export interface IChangePasswordRequest {
  current: string
  new: string
}

export interface IChangePasswordResponse extends IResponse {
  token: string
}
