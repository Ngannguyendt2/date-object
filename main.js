let myDate=function (date,month,year) {

    this.date=date;
    this.month=month;
    this.year=year;
    this.getDate=function () {
        return this.date;
    }
    this.getMonth=function () {
        return this.month;
    }
    this.getYear=function () {
        return this.year;
    }
    this.setDate=function (date) {

         this.date=date;
    }
    this.setMonth=function (month) {
        this.month=month;
    }
    this.setYear=function (year) {
        this.year=year;
    }
}
let mydate=new myDate(13,8,2019);
    let Date=mydate.getDate();
    let Month=mydate.getMonth();
    let Year=mydate.getYear();
    alert(Date+'/'+Month+'/'+Year);
  mydate.setDate(14);
   mydate.setMonth(9);
   mydate.setYear(2019);
alert(mydate.getDate()+'/'+mydate.getMonth()+'/'+mydate.getYear());


