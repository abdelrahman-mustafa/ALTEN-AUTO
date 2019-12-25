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
  public getVehicles(): Observable<Vehicle[]> {
    let query = `query{
      vehicles{
        id
        connected
        number
            customer{
              id
              name
            }
      }
    }`;

    return this.http.post<Vehicle[]>('http://localhost:5000/api', { "query": query });
  }
  public getCustomers(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://vehicle-api:4000/vehicles');
  }

  public GetVehiclesForCustomer(customer):Observable<Vehicle[]> {

    return this.http.get<Vehicle[]>(`http://customer-api:3000/customers/${customer}`);

  }
  

  public GetVehiclesByStatus(status): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`http://vehicle-api:4000/vehicles/connected/${status}`);
  }
}
