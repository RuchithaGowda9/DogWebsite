class Customer{
    constructor(customerId,customerName,customerEmail)  {
        this.customerId=customerId;
        this.customerName=customerName;
        this.customerEmail=customerEmail;
    }
    getCustomerDetails(){
        console.log(this.customerId+" "+this.customerName+" "+this.customerEmail);
    }
}
let custObj=new Customer(101,"Ruchitha","ru@gmail.com");
custObj.getCustomerDetails();

let custObj1=new Customer;
custObj1.customerId=102;
custObj1.customerName="Haru";
custObj1.customerEmail="haru@gmal.com";
custObj1.getCustomerDetails();
console.log(custObj1);

let custList=[custObj,custObj1];
custList.forEach((cust)=>{
    console.log(cust.getCustomerDetails());
});
custList.filter((cust) => {
    return (cust.customerName).startsWith("R");
}).forEach((cust) => {
    console.log(cust.getCustomerDetails());
});