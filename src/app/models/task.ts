export interface Task {
  id: string;
  description: string;
  datetime: Date;
  completed: boolean;
}

export type Tasks = Array<Task>;
