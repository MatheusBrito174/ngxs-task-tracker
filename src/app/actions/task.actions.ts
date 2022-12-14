import { AddTaskPayload } from '../models/add-task-payload.model';
import { Task } from './../models/task';

export namespace TaskActions {
  export class Add {
    static readonly type = '[Task] Add';

    constructor(public addTaskPayload: AddTaskPayload) {}
  }

  export class Edit {
    static readonly type = '[Task] Edit';

    constructor(public task: Task) {}
  }

  export class FetchAll {
    static readonly type = '[Task] FetchAll';
  }

  export class Remove {
    static readonly type = '[Task] Remove';

    constructor(public taskId: string) {}
  }
}
