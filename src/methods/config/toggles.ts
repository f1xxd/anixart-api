import { call } from "../../index"
import { CONFIG_TOGGLES as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IToggles,
  ITogglesRequest,
  ITogglesResponse
} from "../../schemas/toggles"

export interface ITogglesParams extends IBaseApiParams {
  versionCode: number
  isBeta?: boolean
  isApiAlt?: boolean
}

export interface ITogglesResult extends IToggles {}

export async function toggles(params: ITogglesParams): Promise<ITogglesResult> {
  const body: ITogglesRequest = {
    version_code: params.versionCode,
    is_beta: params.isBeta ?? false,
    is_api_alt: params.isApiAlt ?? false
  }

  const response = await call<ITogglesResponse>({
    path: endpoint,
    params: body,
    ...params.request
  })

  return response ?? null
}
