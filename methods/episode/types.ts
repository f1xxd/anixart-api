import { call } from "@/anixart"
import { EPISODE_TYPES as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { IEpisodeTypesResult, IEpisodeTypesResponse } from "@/anixart/schemas/episode"

export interface IEpisodeTypesParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function episodeTypes(params: IEpisodeTypesParams): Promise<IEpisodeTypesResponse> {
  const response = await call<IEpisodeTypesResult>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.types ?? null
}
