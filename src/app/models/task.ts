export interface Task {
  id?: string;
  description: string;
  state: 'to_do' | 'done',
  user_id: string;
}
