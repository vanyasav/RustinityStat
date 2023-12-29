import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {DecimalPipe, NgForOf, NgIf, NgOptimizedImage, TitleCasePipe,} from '@angular/common';
import {TableDataService} from '../../services/table-data.service';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {SecondsToHoursPipe} from '../../pipes/seconds-to-hours.pipe';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-dynamic-mat-table',
  templateUrl: './dynamic-mat-table.component.html',
  styleUrls: ['./dynamic-mat-table.component.css'],
  standalone: true,
  // Import MatTableModule from Angular Material
  imports: [
    MatTableModule,
    TitleCasePipe,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    MatSortModule,
    SecondsToHoursPipe,
    DecimalPipe,
    TranslateModule,
  ],
})
export class DynamicMatTableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() group = 'pvp';
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  selectedGroup = '';
  sortColumn: Record<string, string> = {
    pvp: 'playtime',
    pve: 'killed_tunneldweller',
    gambling: 'gambling_wheeldeposited',
    looted: 'looted_barrel',
    building: 'build_wall',
    item_placed: 'build_sleepingbag_leather_deployed',
    recycled: 'recycled_semibody',
    gathered: 'gathered_sulfur.ore',
    food_gathered: 'gathered_bearmeat',
    bought: 'bought_minicopter.entity',
    boom: 'shot_ammo.rocket.basic',
    bullets_fired: 'shot_ammo.rifle',
    bullets_hit: 'hit_player_headshot',
  };
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
    this.tableDataService.tableData.subscribe((data) => {
      this.displayedColumns = this.columns;
      this.selectedGroup = this.group;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      // (Optional) If you have complex data, define how sorting should access the data:
      this.dataSource.sortingDataAccessor = (item, property) => {
        // Return the value of the property you want to sort by
        // For example, if your data is nested and you want to sort by a nested field, do:
        // return item.someNestedObject[property];
        return item[property];
      };
    });
    // If you need to react to changes in @Input columns, use ngOnChanges as well.
  }
}
