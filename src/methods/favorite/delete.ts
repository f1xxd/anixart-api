import { call } from "../../index"
import { FAVORITE_DELETE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IFavoriteDeleteResponse } from "../../schemas/favorite"

export interface IFavoriteDeleteParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function favoriteDelete(
  params: IFavoriteDeleteParams
): Promise<boolean> {
  const response = await call<IFavoriteDeleteResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request
  })

  return response.code === 0
}
