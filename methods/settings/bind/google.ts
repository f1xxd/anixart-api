import { call } from "@/anixart"
import { SETTINGS_PROFILE_BIND_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IBindGoogleRequest, IBindGoogleResponse } from "@/anixart/schemas/bind"

export interface IBindGoogleParams extends IBaseApiParams {
  token: string
  googleToken: string
}

export async function bindGoogle(params: IBindGoogleParams): Promise<boolean> {
  const body: IBindGoogleRequest = {
    idToken: params.googleToken,
  }

  const response = await call<IBindGoogleResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request,
  })

  return response.code === 0
}
