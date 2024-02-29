import { call } from "../../index"
import { RELEASE_FILTER as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IRelease,
  IReleaseFilterRequest,
  IReleaseFilterResponse
} from "../../schemas/release"

export interface IReleaseFilterParams extends IBaseApiParams {
  page: number | string
  extendedMode?: boolean
}

export interface IReleaseFilterResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function filter(
  params: IReleaseFilterParams
): Promise<IReleaseFilterResult> {
  const body: IReleaseFilterRequest = {}

  const response = await call<IReleaseFilterResponse>({
    path: endpoint.replace("{page}", params.page as string),
    params: {
      extended_mode: params.extendedMode
    },
    json: body,
    ...params.request
  })

  return {
    items: response.content ?? null,
    totalCount: response.total_count ?? null,
    page: response.current_page ?? null,
    pagesCount: response.total_page_count ?? null
  }
}
