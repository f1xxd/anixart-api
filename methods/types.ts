import { call } from "@/anixart"
import { TYPES as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { ITypesResult, ITypes } from "@/anixart/schemas/types"

export interface ITypesParams extends IBaseApiParams {
  token: string
  releaseId: number | "all"
}

export async function types(params: ITypesParams): Promise<ITypes[]> {
  const response = await call<ITypesResult>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request,
  })

  return response.types
}
