import { Component } from '@angular/core';
import { UserData } from '../shared/userdata.service';

class item {
  name;
  val;
}
@Component({
  selector: 'header-app',
  templateUrl: 'header.component.html',
})
export class Header {
  constructor(private ud: UserData) {
    this.users = this.ud.loadUsers();
  }

  className = 'Header welcomes you';

  users;
  num;

  items: item[] = [
    { name: 'admin', val: 101 },
    { name: 'manager', val: 102 },
    { name: 'QA', val: 103 },
  ];
  sv1 = 'one';
  sv2 = 'admin';
  sv3 = 'three';

  mycity = 'Mumbai';
  mydesert1 =
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80';
  mydessert2 = 'https://images.app.goo.gl/dp32zZLrRTjPtR8q6';

  callme() {
    alert('I am called');
  }

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'red';
    }
  }
  person;
  people: any[] = [
    {
      name: 'admin',
      country: 'UK',
    },
    {
      name: 'John',
      country: 'USA',
    },
    {
      name: 'MIKE',
      country: 'UK',
    },
  ];
  getColor1(country) {
    switch (country) {
      case 'UK':
        return 'magenta';
      case 'USA':
        return 'blue';
    }
  }

  dp;
  department: any[] = [
    {
      name: 'admin',
      country: 'UK',
    },
    {
      name: 'HR',
      country: 'USA',
    },
    {
      name: 'QA',
      country: 'UK',
    },
  ];
}
