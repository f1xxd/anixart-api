import { call } from "../index"
import { TYPES as endpoint } from "../endpoints"

import type { IBaseApiParams } from "../types"
import type { ITypes, ITypesResponse } from "../schemas/types"

export interface ITypesParams extends IBaseApiParams {
  token: string
  releaseId: number | "all"
}

export interface ITypesResult extends Array<ITypes> {}

export async function types(params: ITypesParams): Promise<ITypesResult> {
  const response = await call<ITypesResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request
  })

  return response.types ?? null
}
