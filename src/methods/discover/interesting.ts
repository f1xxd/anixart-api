import { call } from "../../index"
import { DISCOVER_INTERESTING as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IInteresting, IInterestingResponse } from "../../schemas/discover"

export interface IInterestingParams extends IBaseApiParams {}

export interface IInterestingResult {
  items: IInteresting[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverInteresting(
  params: IInterestingParams
): Promise<IInterestingResult> {
  const response = await call<IInterestingResponse>({
    path: endpoint,
    ...params.request
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null
  }
}
