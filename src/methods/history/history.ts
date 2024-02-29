import { call } from "../../index"
import { HISTORY as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IRelease } from "../../schemas/release"
import type { IHistoryResponse } from "../../schemas/history"

export interface IHistoryParams extends IBaseApiParams {
  token: string
  page: number | string
}

export interface IHistoryResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function history(params: IHistoryParams): Promise<IHistoryResult> {
  const response = await call<IHistoryResponse>({
    path: endpoint.replace("{page}", params.page as string),
    token: params.token,
    ...params.request
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null
  }
}
