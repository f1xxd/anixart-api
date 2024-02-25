import { call } from "@/anixart"
import { FAVORITE_DELETE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IFavoriteDeleteResponse } from "@/anixart/schemas/favorite"

export interface IFavoriteDeleteParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function favoriteDelete(params: IFavoriteDeleteParams): Promise<boolean> {
  const response = await call<IFavoriteDeleteResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.code === 0
}
