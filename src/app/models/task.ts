export interface Task {
  id: string;
  description: string;
  datetime: string;
  completed: boolean;
}

export type Tasks = Array<Task>;
