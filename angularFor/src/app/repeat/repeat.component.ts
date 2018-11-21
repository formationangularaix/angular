import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderBy = {'value': 'index', 'label': 'Index'};
  reverse: boolean = false;
  data_to_use2 = [
    {'value': 'index', 'label': 'Index', 'show_value': true, 'orderby': true, 'active': false},
    {'value': 'name', 'label': 'First Name', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'lastname', 'label': 'Last Name', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'age', 'label': 'Age', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'gender', 'label': 'Gender', 'show_value': false, 'orderby': false, 'active': false},
    {'value': 'email', 'label': 'E-mail', 'show_value': true, 'orderby': false, 'active': false}
  ];

  users: any = [
    {
      "_id": "5bf4302f34b568e234371318",
      "index": 0,
      "guid": "320171f1-eb3b-44e6-907b-f763b8ca7a96",
      "isActive": false,
      "balance": "$2,525.45",
      "picture": "https://randomuser.me/api/portraits/men/0.jpg",
      "age": 33,
      "eyeColor": "brown",
      "name": "Miranda",
      "lastname": "Cook",
      "gender": "women",
      "company": "ANACHO",
      "email": "mirandacook@anacho.com",
      "phone": "+1 (907) 541-2864",
      "address": "331 Lake Avenue, Windsor, Mississippi, 9794",
      "about": "Consequat consequat eiusmod sint est laborum eiusmod in et cillum. Laborum elit quis ullamco anim non veniam consequat ut in cupidatat do ipsum tempor laborum. Velit magna minim excepteur adipisicing sunt dolore elit magna dolor ut.\r\n",
      "registered": "2016-05-29T09:38:50 -02:00",
      "latitude": 24.864033,
      "longitude": 143.319171
    },
    {
      "_id": "5bf4302f77203b2abaaaceba",
      "index": 1,
      "guid": "ee121335-d293-48ce-97eb-02c66b71edc0",
      "isActive": false,
      "balance": "$3,023.36",
      "picture": "https://randomuser.me/api/portraits/women/1.jpg",
      "age": 23,
      "eyeColor": "brown",
      "name": "Leanna",
      "lastname": "Estrada",
      "gender": "women",
      "company": "PURIA",
      "email": "leannaestrada@puria.com",
      "phone": "+1 (849) 559-3950",
      "address": "762 Moultrie Street, Golconda, Idaho, 580",
      "about": "Eu pariatur qui amet excepteur nulla magna adipisicing quis pariatur eu non fugiat do aliqua. Ea ea sit ex duis laborum do officia dolor eiusmod. Occaecat consequat Lorem do velit amet Lorem adipisicing nostrud exercitation voluptate exercitation sunt. Nostrud eiusmod ex in nostrud commodo sit.\r\n",
      "registered": "2015-05-02T04:21:23 -02:00",
      "latitude": 39.425015,
      "longitude": 141.792533
    },
    {
      "_id": "5bf4302fad55cb9d55f1e3ef",
      "index": 2,
      "guid": "b596c034-e6b9-43d7-9487-aa866d051c10",
      "isActive": false,
      "balance": "$1,806.04",
      "picture": "https://randomuser.me/api/portraits/men/2.jpg",
      "age": 40,
      "eyeColor": "brown",
      "name": "Lawrence",
      "lastname": "Shields",
      "gender": "women",
      "company": "NETROPIC",
      "email": "lawrenceshields@netropic.com",
      "phone": "+1 (875) 464-3171",
      "address": "159 Harbor Court, Woodlake, Delaware, 207",
      "about": "Enim ullamco tempor fugiat anim reprehenderit velit aliqua deserunt veniam occaecat in et. Aute excepteur elit culpa aute eu et reprehenderit excepteur. Ut Lorem labore occaecat officia. Excepteur est nulla et proident aliqua incididunt cupidatat id do nostrud est exercitation reprehenderit duis. Est dolore eiusmod minim nisi est excepteur aute consequat aliqua ex duis non. Ut enim ullamco do veniam laboris proident commodo sunt.\r\n",
      "registered": "2015-01-18T04:15:44 -01:00",
      "latitude": -26.440293,
      "longitude": -169.441704
    },
    {
      "_id": "5bf4302f2928dc80a7087474",
      "index": 3,
      "guid": "83626207-b96f-481d-a657-dfa89f8e3fe2",
      "isActive": false,
      "balance": "$2,672.05",
      "picture": "https://randomuser.me/api/portraits/men/3.jpg",
      "age": 26,
      "eyeColor": "green",
      "name": "Ferguson",
      "lastname": "Shepherd",
      "gender": "women",
      "company": "APPLIDEC",
      "email": "fergusonshepherd@applidec.com",
      "phone": "+1 (986) 466-2571",
      "address": "349 Clinton Street, Bainbridge, Kansas, 2962",
      "about": "Anim irure occaecat incididunt irure Lorem. Irure nostrud id commodo est cillum in deserunt laborum in laborum duis quis anim proident. Do voluptate ipsum dolore ex. Magna enim ut sint enim ipsum non do labore officia magna dolor aliquip. Excepteur elit ut consectetur do consequat mollit ex do. Aliquip proident exercitation ullamco nulla voluptate esse. Amet ullamco occaecat eu officia aute proident proident consequat.\r\n",
      "registered": "2018-11-08T08:31:11 -01:00",
      "latitude": -22.62775,
      "longitude": -8.201976
    },
    {
      "_id": "5bf4302f3b10d884c8b62b4f",
      "index": 4,
      "guid": "a93d84aa-2df0-492b-81da-ab7554734deb",
      "isActive": true,
      "balance": "$2,718.71",
      "picture": "https://randomuser.me/api/portraits/men/4.jpg",
      "age": 26,
      "eyeColor": "brown",
      "name": "Karyn",
      "lastname": "Hicks",
      "gender": "men",
      "company": "APPLICA",
      "email": "karynhicks@applica.com",
      "phone": "+1 (976) 544-3460",
      "address": "971 Catherine Street, Escondida, Virginia, 9088",
      "about": "Aliqua laboris duis non reprehenderit magna laborum irure aliquip cupidatat. Ut eu culpa dolor Lorem aute sunt officia Lorem sit voluptate adipisicing labore. Cillum laborum nisi ad qui consequat quis dolore veniam nulla laboris occaecat sunt do.\r\n",
      "registered": "2016-11-11T11:32:29 -01:00",
      "latitude": 69.696934,
      "longitude": 86.029153
    },
    {
      "_id": "5bf4302f1872e89c818eba74",
      "index": 5,
      "guid": "cbe61579-05eb-40eb-8c7c-7af8439fc620",
      "isActive": true,
      "balance": "$1,715.73",
      "picture": "https://randomuser.me/api/portraits/women/5.jpg",
      "age": 23,
      "eyeColor": "green",
      "name": "Davis",
      "lastname": "Mendez",
      "gender": "women",
      "company": "ZIALACTIC",
      "email": "davismendez@zialactic.com",
      "phone": "+1 (856) 454-2301",
      "address": "870 Erasmus Street, Bordelonville, Georgia, 2454",
      "about": "Exercitation quis reprehenderit nisi sint adipisicing anim irure. Nostrud commodo aliqua enim ad. Duis enim anim qui aute mollit tempor. Cupidatat et elit nostrud quis. Officia ut ex mollit deserunt consectetur eu.\r\n",
      "registered": "2017-07-15T12:05:29 -02:00",
      "latitude": 21.738954,
      "longitude": 175.668981
    },
    {
      "_id": "5bf4302ffb360b7403b75a31",
      "index": 6,
      "guid": "6514802f-5c38-4ad5-96a3-0b2b66ca3bcc",
      "isActive": false,
      "balance": "$3,050.10",
      "picture": "https://randomuser.me/api/portraits/men/6.jpg",
      "age": 38,
      "eyeColor": "brown",
      "name": "Tara",
      "lastname": "Boyle",
      "gender": "women",
      "company": "XYLAR",
      "email": "taraboyle@xylar.com",
      "phone": "+1 (818) 512-2630",
      "address": "477 Danforth Street, Idledale, Utah, 4029",
      "about": "Fugiat magna irure occaecat est et esse amet. Aute magna occaecat sint sunt commodo et adipisicing labore sint. Deserunt anim proident culpa consequat labore sit Lorem cillum id reprehenderit officia sit. Culpa quis amet adipisicing aliquip est veniam do reprehenderit quis ea labore in. Cupidatat proident sit ad tempor reprehenderit esse quis esse exercitation elit cupidatat aliquip sunt laborum. Ex aute sit minim sit consectetur officia ex commodo irure non ad quis aliqua sint.\r\n",
      "registered": "2016-08-16T10:53:17 -02:00",
      "latitude": -4.446799,
      "longitude": 118.506448
    }
  ]

  changeOrderBy(order) {
    // for (let index = 0; index < this.data_to_use2.length; index++) {
    //   const element = this.data_to_use2[index];
    //   if (element.orderby) {
    //     console.log(element);
      if (this.orderBy['value'] === order.value) {
        this.reverse = !this.reverse;
      }
      this.orderBy['value'] = order.value;
      this.orderBy['label'] = order.label;
      console.log('The order is now by', order.label)
      // }
    }
  }


