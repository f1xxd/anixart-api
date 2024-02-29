import { call } from "../../../index"
import { SETTINGS_PROFILE_UNBIND_VK as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type { IUnbindVKResponse } from "../../../schemas/unbind"

export interface IUnbindVKParams extends IBaseApiParams {
  token: string
}

export async function unbindVK(params: IUnbindVKParams): Promise<boolean> {
  const response = await call<IUnbindVKResponse>({
    path: endpoint,
    token: params.token,
    ...params.request
  })

  return response.code === 0
}
