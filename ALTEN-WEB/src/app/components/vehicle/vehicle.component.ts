import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from 'src/app/interfaces/vehicle.model';
import { Customer } from 'src/app/interfaces/customer.model';

import { CoreService } from 'src/app/services/core.service';

function getData() {
  const ELEMENT_DATA: Vehicle[] = [
    { vehicleId: 1, customer: 'Hydrogen', regNum: 1.0079, isConnected: true },
    { vehicleId: 2, customer: 'Helium', regNum: 4.0026, isConnected: true },
    { vehicleId: 3, customer: 'Lithium', regNum: 6.941, isConnected: true },
    { vehicleId: 4, customer: 'Beryllium', regNum: 9.0122, isConnected: true },
    { vehicleId: 5, customer: 'Boron', regNum: 10.811, isConnected: true },
    { vehicleId: 6, customer: 'Carbon', regNum: 12.0107, isConnected: true },
    { vehicleId: 7, customer: 'Nitrogen', regNum: 14.0067, isConnected: true },
    { vehicleId: 8, customer: 'Oxygen', regNum: 15.9994, isConnected: true },
    { vehicleId: 9, customer: 'Fluorine', regNum: 18.9984, isConnected: true },
    { vehicleId: 10, customer: 'Neon', regNum: 20.1797, isConnected: true },
  ];
  return ELEMENT_DATA;
}
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  displayedColumns: string[] = ['VehicleId', 'customer', 'regNum', 'isConnected'];
  public vehicles: Vehicle[];
  public customers: Customer[];

  dataSource = new MatTableDataSource(getData());

  constructor(private service: CoreService) { }

  ngOnInit() {
    this.getAllVehicles();
    this.getAllCustomers();

  }
  public getAllVehicles() {
    this.service.getVehicles()
      .subscribe((res: any) => {
        console.log('##### After Get  The init')
        console.log(res);
        this.vehicles = res.data.vehicles.map(item => {
          let vehicleItem: Vehicle = {
            vehicleId: item.id,
            customer: item.customer.name,
            regNum: item.number,
            isConnected: item.connected
          };
          return vehicleItem;
        }); // this line to make any kind of deserialziation you need from API;
        this.dataSource = new MatTableDataSource(this.vehicles);
        console.log(this.vehicles);
      }, (error) => {
        console.log(error);
        alert(error);
      });
  }
  public filterCustomerID: number = -1;
  public filterIsConnected: number = -1;
  public vehicleStatus: Array<any> = [{ id: 1, type: 'Connected', value: true }, { id: 0, type: 'Disconnected', value: false }];;




  changefilterCustomer(e) {
    if (e.value != -1)
      this.filterIsConnected = -1;
  }
  changefilterStatus(e) {
    if (e.value != -1)
      this.filterCustomerID = -1;
  }

  public getAllCustomers() {
    this.service.getCustomers()
      .subscribe((res: any) => {
        console.log('##### After Get  The init')
        console.log(res);
        this.customers = res.data.customers.map(item => {
          let customerItem: Customer = {
            id: item.id,
            name:item.name
          };
          return customerItem;
        }); // this line to make any kind of deserialziation you need from API;
      }, (error) => {
        console.log(error);
        alert(JSON.stringify(error));
      });
  }


  public executeSearch() {

    if (this.filterCustomerID != -1) {
      this.service.GetVehiclesForCustomer(this.filterCustomerID).subscribe((res: any) => {
        console.log('##### After Get  The init')
        console.log(res);
        this.vehicles = res.data.customer.vehicles.map(item => {
          let vehicleItem: Vehicle = {
            vehicleId: item.id,
            customer: res.data.customer.name,
            regNum: item.number,
            isConnected: item.connected
          };
          return vehicleItem;
        }); // this line to make any kind of deserialziation you need from API;
        this.dataSource = new MatTableDataSource(this.vehicles);
        console.log(this.vehicles);
      }, (error) => {
        console.log(error);
        alert(error);
      });
    } else if (this.filterIsConnected != -1) {
      this.service.GetVehiclesByStatus(Boolean(this.filterIsConnected))
        .subscribe((res: any) => {
          console.log('##### After Get  The init')
          console.log(res);
          this.vehicles = res.data.vehicles.map(item => {
            let vehicleItem: Vehicle = {
              vehicleId: item.id,
              customer: item.customer.name,
              regNum: item.number,
              isConnected: item.connected
            };
            return vehicleItem;
          }); // this line to make any kind of deserialziation you need from API;
          this.dataSource = new MatTableDataSource(this.vehicles);
          console.log(this.vehicles);
        }, (error) => {
          console.log(error);
          alert(error);
        });
    } else this.getAllVehicles();
  }

}
