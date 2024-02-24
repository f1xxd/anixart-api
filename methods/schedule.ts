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
    monday: response.monday,
    tuesday: response.tuesday,
    wednesday: response.wednesday,
    thursday: response.thursday,
    friday: response.friday,
    saturday: response.saturday,
    sunday: response.sunday,
  }
}
