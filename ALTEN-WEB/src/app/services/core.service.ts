import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) {

  }
  public getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://vehicle-api:4000/vehicles');

  }
  public getCustomers(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`http://customer-api:3000/customers`);
  }

  public GetVehiclesForCustomer(customer):Observable<Vehicle[]> {

    return this.http.get<Vehicle[]>(`http://vehicle-api:4000/vehicles/customer/${customer}`);

  }
  

  public GetVehiclesByStatus(status): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`http://vehicle-api:4000/vehicles/connected/${status}`);
  }
}
