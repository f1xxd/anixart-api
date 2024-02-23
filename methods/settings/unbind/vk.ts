import { call } from "@/anixart"
import { SETTINGS_PROFILE_UNBIND_VK as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IResponse } from "@/anixart/schemas/response"

export interface IUnbindVKParams extends IBaseApiParams {
  token: string
}

export interface IUnbindVKResult {
  code: number
}

export async function unbindVK(params: IUnbindVKParams): Promise<IUnbindVKResult> {
  const response = await call<IResponse>({
    path: endpoint,
    token: params.token,
    ...params.request,
  })

  return {
    code: response.code,
  }
}
