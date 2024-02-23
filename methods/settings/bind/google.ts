import { call } from "@/anixart"
import { SETTINGS_PROFILE_BIND_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IBindGoogleRequest } from "@/anixart/schemas/bind"
import type { IResponse } from "@/anixart/schemas/response"

export interface IBindGoogleParams extends IBaseApiParams {
  token: string
  googleToken: string
}

export interface IBindGoogleResult {
  code: number
}

export async function bindGoogle(params: IBindGoogleParams): Promise<IBindGoogleResult> {
  const body: IBindGoogleRequest = {
    idToken: params.googleToken,
  }

  const response = await call<IResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request,
  })

  return {
    code: response.code,
  }
}
