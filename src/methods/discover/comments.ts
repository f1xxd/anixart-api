import { call } from "../../index"
import { DISCOVER_COMMENTS as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IReleaseComment } from "../../schemas/release"
import type { ICommentsResponse } from "../../schemas/discover"

export interface ICommentsParams extends IBaseApiParams {}

export interface ICommentsResult {
  items: IReleaseComment[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverComments(
  params: ICommentsParams
): Promise<ICommentsResult> {
  const response = await call<ICommentsResponse>({
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
