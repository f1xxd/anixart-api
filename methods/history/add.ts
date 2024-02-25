import { call } from "@/anixart"
import { HISTORY_ADD as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IHistoryAddResponse } from "@/anixart/schemas/history"

export interface IHistoryAddParams extends IBaseApiParams {
  token: string
  releaseId: number | string
  sourceId: number | string
  episode: number | string
}

export async function historyAdd(params: IHistoryAddParams): Promise<boolean> {
  const response = await call<IHistoryAddResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string).replace("{sourceId}", params.sourceId as string).replace("{position}", params.episode as string),
    token: params.token,
    ...params.request,
  })

  return response.code === 0
}
