export type Book = {
  id: number;
  name: string;
  rented_date: string;
  received_date: string;
  status: boolean;
  rented_by: string;
};
export interface Action {
  type: string;
  payload: any;
}
