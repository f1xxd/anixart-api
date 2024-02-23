import { call } from "@/anixart"
import { AUTH_SIGN_IN_WITH_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IAuthGoogleRequest } from "@/anixart/schemas/auth"
import type { IResponse } from "@/anixart/schemas/response"

export interface IAuthGoogleParams extends IBaseApiParams {
  token: string
  googleToken: string
}

export interface IAuthGoogleResult {
  code: number
}

export async function authGoogle(params: IAuthGoogleParams): Promise<IAuthGoogleResult> {
  const body: IAuthGoogleRequest = {
    googleIdToken: params.googleToken,
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
