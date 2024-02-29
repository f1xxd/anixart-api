import { call } from "../../index"
import { HISTORY_DELETE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IHistoryDeleteResponse } from "../../schemas/history"

export interface IHistoryDeleteParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function historyDelete(
  params: IHistoryDeleteParams
): Promise<boolean> {
  const response = await call<IHistoryDeleteResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request
  })

  return response.code === 0
}
