import { call } from "@/anixart"
import { AUTH_SIGN_IN_WITH_VK as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IAuthVKRequest } from "@/anixart/schemas/auth"
import type { IResponse } from "@/anixart/schemas/response"

export interface IAuthVKParams extends IBaseApiParams {
  token: string
  vkToken: string
}

export interface IAuthVKResult {
  code: number
}

export async function authVK(params: IAuthVKParams): Promise<IAuthVKResult> {
  const body: IAuthVKRequest = {
    vkAccessToken: params.vkToken,
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
