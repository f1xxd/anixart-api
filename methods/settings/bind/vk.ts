import { call } from "@/anixart"
import { SETTINGS_PROFILE_BIND_VK as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IBindVKRequest } from "@/anixart/schemas/bind"
import type { IResponse } from "@/anixart/schemas/response"

export interface IBindVKParams extends IBaseApiParams {
  token: string
  vkToken: string
}

export interface IBindVKResult {
  code: number
}

export async function bindVK(params: IBindVKParams): Promise<IBindVKResult> {
  const body: IBindVKRequest = {
    accessToken: params.vkToken,
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
