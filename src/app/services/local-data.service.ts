import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStats} from '../models/stats.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private dataPath = '/RustinityStat/assets/data/'; // Path to your local data

  constructor(private http: HttpClient) {
  }

  /**
   * Fetch data from a local JSON file.
   * @param fileName - The name of the JSON file located in `/assets/data/`.
   */
  fetchData(fileName: string): Observable<UserStats[]> {
    return this.http.get<UserStats[]>(`${this.dataPath}${fileName}.json`);
  }
}
