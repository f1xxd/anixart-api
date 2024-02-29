import { call } from "../../index"
import { RELEASE as endpoint } from "../../endpoints"

import type { IBaseApiParams } from "../../types"
import type { IRelease, IReleaseResponse } from "../../schemas/release"

export interface IReleaseParams extends IBaseApiParams {
  token: string
  releaseId: number | string
}

export interface IReleaseResult extends IRelease {}

export async function release(params: IReleaseParams): Promise<IReleaseResult> {
  const response = await call<IReleaseResponse>({
    path: endpoint.replace("{releaseId}", params.releaseId as string),
    token: params.token,
    ...params.request
  })

  return response.release ?? null
}
