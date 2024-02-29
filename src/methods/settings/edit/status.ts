import { call } from "../../../index"
import { EDIT_STATUS as endpoint } from "../../../endpoints"

import type { IBaseApiParams } from "../../../types"
import type {
  IEditStatusRequest,
  IEditStatusResponse
} from "../../../schemas/settings"

export interface IEditStatusParams extends IBaseApiParams {
  token: string
  status: string
}

export async function editStatus(params: IEditStatusParams): Promise<boolean> {
  const body: IEditStatusRequest = {
    status: params.status
  }

  const response = await call<IEditStatusResponse>({
    path: endpoint,
    token: params.token,
    json: body,
    ...params.request
  })

  return response.code === 0
}
