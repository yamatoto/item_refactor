import { Table } from './table.model';

export class Product extends Table {
  /** 品番 */
  productNo: string;
  /** 品名 */
  productName: string;
  /** 仮発注日 */
  preOrderAt: Date;
}
