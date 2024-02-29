import { call } from "../../../index"
import { SETTINGS_PROFILE_UNBIND_GOOGLE as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type { IUnbindGoogleResponse } from "../../../schemas/unbind"

export interface IUnbindGoogleParams extends IBaseApiParams {
  token: string
}

export async function unbindGoogle(
  params: IUnbindGoogleParams
): Promise<boolean> {
  const response = await call<IUnbindGoogleResponse>({
    path: endpoint,
    token: params.token,
    ...params.request
  })

  return response.code === 0
}
