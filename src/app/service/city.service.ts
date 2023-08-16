import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Interface/city-interface';
import { BASE_URL } from '../const/backend-url';
import { AppState } from '../ngrx-store/state/app.state';
import { Store } from '@ngrx/store';
import { getCity } from '../ngrx-store/selectors/selectors';
import { AddCity } from '../ngrx-store/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  addCity(name: string): Observable<City> {
    const city: City = {
      id: 0,
      name: name,
      addressDtoList:[]
    };
    return this.http.post<City>(`${BASE_URL}/saveCity`, city);
  }

  getAllCityes(): Observable<City[]>{
   return this.http.get<City[]>(`${BASE_URL}/getAllCity`)
  }

 
  
}
