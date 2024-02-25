import { call } from "@/anixart"
import { DISCOVER_RECOMMENDATIONS as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IRelease } from "@/anixart/schemas/release"
import type { IRecommendationsRequest, IRecommendationsResponse } from "@/anixart/schemas/discover"

export interface IRecommendationsParams extends IBaseApiParams {
  token: string
  page: number | string
  previousPage: number | string
}

export interface IRecommendationsResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export async function discoverRecommendations(params: IRecommendationsParams): Promise<IRecommendationsResult> {
  const body: IRecommendationsRequest = {
    previous_page: params.previousPage,
  }

  const response = await call<IRecommendationsResponse>({
    path: endpoint.replace("{page}", params.page as string),
    params: body,
    token: params.token,
    ...params.request,
  })

  return {
    items: response.content,
    totalCount: response.total_count,
    page: response.current_page,
    pagesCount: response.total_page_count,
  }
}
