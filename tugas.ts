let _length : number = 5;
let _width : number  = 3;
console.log(_length * _width);
console.log(2*(_length + _width));

let _radius : number = 5;
let _phi : number = Math.PI;
console.log(2 * _radius);
console.log((2*_phi*_radius).toFixed(3));
console.log((_phi*(_radius**2)).toFixed(3))
console.log(_phi* Math.pow(_radius,2))

let a : number = 80;
let b : number = 65;
console.log(180-a-b);

// soal 5
let _date1 : Date = new Date ();
let day1 : number= 366;
let day2 = 366;
console.log((day1/365).toFixed() +' year, '+
((day1 % 365)/30).toFixed() +' month, '+
((day1 % 365)%30).toFixed() +' days');

//Soal 6
const date1 : Date = new Date ("2022-01-02");
const date2 : Date = new Date("2022-01-22");
const perbedaanDate = (date2.getTime() - date1.getTime())/(24*3600*1000);
console.log(perbedaanDate);
