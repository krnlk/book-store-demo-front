import { DataSource } from '@angular/cdk/collections';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  input,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';

@Component({
  selector: 'pgd-table-template',
  imports: [MatTableModule],
  templateUrl: './table-template.html',
  styleUrl: './table-template.scss',
})
export class TableTemplate<T> implements AfterContentInit {
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow) noDataRow!: MatNoDataRow;

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>;

  readonly displayedColumns = input.required<string[]>();
  readonly dataSource = input.required<DataSource<T>>();

  ngAfterContentInit() {
    this.initMatTable();
  }

  private initMatTable(): void {
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach((rowDef) => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach((headerRowDef) =>
      this.table.addHeaderRowDef(headerRowDef),
    );
    this.table.setNoDataRow(this.noDataRow);
  }
}
