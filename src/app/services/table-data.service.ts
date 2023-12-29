import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  // Initialize with an empty array if no initial data. Otherwise, pass the initial data array.
  private tableDataSource = new BehaviorSubject<any[]>([]);

  // Expose the observable part of the table data source.
  tableData = this.tableDataSource.asObservable();

  constructor() {
  }

  // Call this method to update the table data
  updateTableData(newData: any[]) {
    this.tableDataSource.next(newData);
  }
}
