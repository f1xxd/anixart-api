import { call } from "@/anixart"
import { AUTH_SIGN_IN_WITH_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IAuthGoogleRequest, IAuthGoogleResponse } from "@/anixart/schemas/auth"

export interface IAuthGoogleParams extends IBaseApiParams {
  token: string
  googleToken: string
}

export async function authGoogle(params: IAuthGoogleParams): Promise<boolean> {
  const body: IAuthGoogleRequest = {
    googleIdToken: params.googleToken,
  }

  const response = await call<IAuthGoogleResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request,
  })

  return response.code === 0
}
