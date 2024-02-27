import { call } from "@/anixart"
import { TYPES as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { ITypes, ITypesResponse } from "@/anixart/schemas/types"

export interface ITypesParams extends IBaseApiParams {
  token: string
  releaseId: number | "all"
}

export interface ITypesResult extends Array<ITypes> {}

export async function types(params: ITypesParams): Promise<ITypesResult> {
  const response = await call<ITypesResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.types ?? null
}
