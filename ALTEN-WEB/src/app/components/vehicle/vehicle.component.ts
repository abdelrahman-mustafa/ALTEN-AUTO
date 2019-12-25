import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from 'src/app/interfaces/vehicle.model';
import { Customer } from 'src/app/interfaces/customer.model';

import { CoreService } from 'src/app/services/core.service';

function getData() {
  const ELEMENT_DATA: Vehicle[] = [
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
    this.service.getAllVehicles()
      .subscribe((res: any) => {
        console.log('##### After Get  The init')
        console.log(res);
        this.vehicles = res.map(item => {
          var now = new Date().getTime();
          var lastSeen = new Date(item.lastSeen).getTime();
          console.log(now)
          console.log(lastSeen)
          var diffMs = (now - lastSeen);
          var minutes = (diffMs / 1000) / 60;    
          let vehicleItem: Vehicle = {
            vehicleId: item.vehicleId,
            customer: item.customer.name,
            lastSeen: item.lastSeen,
            regNum: item.number,
            isConnected: (minutes<2)? true: false
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
        console.log('##### After Get  Customers ')
        console.log(res);
        this.customers = res.map(item => {
          let customerItem: Customer = {
            id: item._id,
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
        console.log('##### After Get  The Search')
        console.log(res);

        this.vehicles = res.map(item => {
          var now = new Date().getTime();
          console.log(lastSeen)

          var lastSeen = new Date(item.lastSeen).getTime();
          console.log(now)
          console.log(lastSeen)
          var diffMs = (now - lastSeen);
          var minutes = (diffMs / 1000) / 60;    
          let vehicleItem: Vehicle = {
            vehicleId: item.vehicleId,
            customer: item.customer.name,
            lastSeen: item.lastSeen,
            regNum: item.number,
            isConnected: (minutes<2)? true: false
          };
          return vehicleItem;
        }); // this line to make any kind of deserialziation you need from API;
        this.dataSource = new MatTableDataSource(this.vehicles);
      }, (error) => {
        console.log(error);
        alert(error);
      });
    } else if (this.filterIsConnected != -1) {
      this.service.GetVehiclesByStatus(Boolean(this.filterIsConnected)).subscribe((res: any) => {
          console.log('##### After Get  The init')
          console.log(res);
          

          this.vehicles = res.map(item => {
            var now = new Date().getTime();
            var lastSeen = new Date(item.lastSeen).getTime();
            console.log(now)
            console.log(lastSeen)
            var diffMs = (now - lastSeen);
            var minutes = (diffMs / 1000) / 60;    
            let vehicleItem: Vehicle = {
              vehicleId: item.vehicleId,
              customer: item.customer.name,
              lastSeen: item.lastSeen,
              regNum: item.number,
              isConnected: (minutes<2)? true: false
            };
            return vehicleItem;
          }); // this line to make any kind of deserialziation you need from API;
          this.dataSource = new MatTableDataSource(this.vehicles);
        }, (error) => {
          console.log(error);
          alert(error);
        });
    } else this.getAllVehicles();
  }

}
