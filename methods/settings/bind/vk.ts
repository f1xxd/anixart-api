import { call } from "@/anixart"
import { SETTINGS_PROFILE_BIND_VK as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IBindVKRequest, IBindVKResponse } from "@/anixart/schemas/bind"

export interface IBindVKParams extends IBaseApiParams {
  token: string
  vkToken: string
}

export async function bindVK(params: IBindVKParams): Promise<boolean> {
  const body: IBindVKRequest = {
    accessToken: params.vkToken,
  }

  const response = await call<IBindVKResponse>({
    path: endpoint,
    token: params.token,
    urlencoded: body,
    ...params.request,
  })

  return response.code === 0
}
