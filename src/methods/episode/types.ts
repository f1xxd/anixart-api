import { call } from "../../index"
import { EPISODE_TYPES as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type {
  IEpisodeTypesResult,
  IEpisodeTypesResponse
} from "../../schemas/episode"

export interface IEpisodeTypesParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export async function episodeTypes(
  params: IEpisodeTypesParams
): Promise<IEpisodeTypesResponse> {
  const response = await call<IEpisodeTypesResult>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request
  })

  return response.types ?? null
}
