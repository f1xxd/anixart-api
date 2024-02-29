import type { IResponse } from "./response"
import type { IRelease } from "./release"

export interface ISchedule {
  monday: IRelease[]
  tuesday: IRelease[]
  wednesday: IRelease[]
  thursday: IRelease[]
  friday: IRelease[]
  saturday: IRelease[]
  sunday: IRelease[]
}

export interface IScheduleResponse extends IResponse, ISchedule {}
