import { call } from "@/anixart"
import { DISCOVER_INTERESTING as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IInteresting, IInterestingResponse } from "@/anixart/schemas/discover"

export interface IInterestingParams extends IBaseApiParams {}

export interface IInterestingResult {
  items: IInteresting[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverInteresting(params: IInterestingParams): Promise<IInterestingResult> {
  const response = await call<IInterestingResponse>({
    path: endpoint,
    ...params.request,
  })

  return {
    items: response.content,
    totalCount: response.total_count,
    page: response.current_page,
    pagesCount: response.total_page_count,
  }
}
