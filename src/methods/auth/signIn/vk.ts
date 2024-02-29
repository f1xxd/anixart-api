import { call } from "../../../index"
import { AUTH_SIGN_IN_WITH_VK as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type { IAuthVKRequest, IAuthVKResponse } from "../../../schemas/auth"

export interface IAuthVKParams extends IBaseApiParams {
  token: string
  vkToken: string
}

export async function authVK(params: IAuthVKParams): Promise<boolean> {
  const body: IAuthVKRequest = {
    vkAccessToken: params.vkToken
  }

  const response = await call<IAuthVKResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request
  })

  return response.code === 0
}
