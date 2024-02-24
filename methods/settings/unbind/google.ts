import { call } from "@/anixart"
import { SETTINGS_PROFILE_UNBIND_GOOGLE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IUnbindGoogleResponse } from "@/anixart/schemas/unbind"

export interface IUnbindGoogleParams extends IBaseApiParams {
  token: string
}

export async function unbindGoogle(params: IUnbindGoogleParams): Promise<boolean> {
  const response = await call<IUnbindGoogleResponse>({
    path: endpoint,
    token: params.token,
    ...params.request,
  })

  return response.code === 0
}
