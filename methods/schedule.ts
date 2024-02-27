import { call } from "@/anixart"
import { SCHEDULE as endpoint } from "@/anixart/endpoints"

import type { IBaseApiParams } from "@/anixart/types"
import type { ISchedule, IScheduleResponse } from "@/anixart/schemas/schedule"

export interface IScheduleParams extends IBaseApiParams {}
export interface IScheduleResult extends ISchedule {}

export async function schedule(params: IScheduleParams): Promise<IScheduleResult> {
  const response = await call<IScheduleResponse>({
    path: endpoint,
    ...params.request,
  })

  return {
    monday: response.monday ?? null,
    tuesday: response.tuesday ?? null,
    wednesday: response.wednesday ?? null,
    thursday: response.thursday ?? null,
    friday: response.friday ?? null,
    saturday: response.saturday ?? null,
    sunday: response.sunday ?? null,
  }
}
