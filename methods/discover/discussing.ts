import { call } from "@/anixart"
import { DISCOVER_DISCUSSING as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease } from "@/anixart/schemas/release"
import type { IDiscussingResponse } from "@/anixart/schemas/discover"

export interface IDiscussingParams extends IBaseApiParams {}

export interface IDiscussingResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverDiscussing(params: IDiscussingParams): Promise<IDiscussingResult> {
  const response = await call<IDiscussingResponse>({
    path: endpoint,
    ...params.request,
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null,
  }
}
