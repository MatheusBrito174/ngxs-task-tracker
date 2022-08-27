export interface Task {
  description: string;
  datetime: string;
  completed: boolean;
}

export type Tasks = Array<Task>;
