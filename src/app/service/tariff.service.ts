import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITariff } from '../Interface/ITariff';
import { BASE_URL } from '../const/backend-url';
import { priceCalculate } from './interPrice';

@Injectable({
  providedIn: 'root'
})

export class TariffService {

  constructor(private http: HttpClient) { }

getAllTariffs(): Observable<ITariff[]>{
  return this.http.get<ITariff[]>(`${BASE_URL}/getAllTariffs`)
}

calculate( price: number, discount: number){
  const request = { price, discount }
  return this.http.post<priceCalculate>(`http://localhost:8080/api/calculate`,request)
}



}
