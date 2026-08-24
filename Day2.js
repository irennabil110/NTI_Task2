//Task 1: Attendance Sheet

// for(var i=1;i<=10;i++)
// {
//     console.log(i);
// }


//Task 2: Even Seat Numbers

// for(var i=2;i<=20;i+=2)
// {
//     console.log(i);
// }



//Task 3: Daily Sales Total

// var totalSales=0;
// for( var i=1;i<=15;i++)
// {
//     totalSales+=i;
// }
// console.log("Total sales = ",totalSales);
// // or totalSales=(15 *16)/2;



//Task 4: Queue Tickets

// var ticket=1;
// while(ticket<=7)
// {
//     console.log("ticket: ",ticket);
//     ticket++;
// }


//Task 5: Rocket Launch Countdown

// var countdown=8;
// while(countdown>=1)
// {
//     console.log("Time until launching: ",countdown);
//     countdown--;
// }


//Task 6: First Login Welcome

// var cntr=1;
// do{
//     console.log(cntr);
//     cntr++;
// }while(cntr<=5); 


//Task 7: Empty Cart vs First Visit

// var itemsInCart = 10;
// //do while :
// do{
//     console.log("Start Shopping");
//     itemsInCart--;
// }while(itemsInCart < 5 );

// //while 
// while(itemsInCart < 5 )
// {
//     console.log("Start Shopping");
//     itemsInCart--;
// }

// // do while operates at least once before checking the condition then continues normally. 
// // While checks the condition first



//Task 8: Student Profile Card

// var userName = "Ali";
// var userAge = 22;
// var isStudent = true;
// console.log(userName,typeof(userName));
// console.log(userAge,typeof(userAge));
// console.log(isStudent,typeof(isStudent));



//Task 9: Price Match Bug

// var dbPrice = 10;
// var inputPrice = "10";
// if(dbPrice==inputPrice)
// {
//     console.log("They are equal");
// }
// if(dbPrice===inputPrice)
// {
//     console.log("They are exactly the same");
// }
// // == is a loose comparison that converts both sides to a common type for equality while === compares both value and type


//Task 10: App Welcome Screen

// var userName =prompt("Enter your name");
// alert(`Welcome, ${userName}`);
// console.log(`Welcome, ${userName}`);


//Task 11: Checkout Quantity

// var value= prompt("Please enter the quantity");
// var val1= Number(value);
// var val2= parseInt(value);
// var val3= +value;
// console.log(val1, typeof(val1));
// console.log(val2, typeof(val2));
// console.log(val3, typeof(val3));


//Task 12: Mini Calculator

// var a=10;
// var b=3;
// console.log("a+b = ",a+b);
// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ",a/b);
// console.log("a%b = ",a%b);
// console.log("a**b = ",a**b);


//Task 13: Cinema Age Gate

// var age =parseInt(prompt("enter your age"));
// if(age>=18)
// {
//     console.log("You can enter");
// }
// else
// {
//     console.log(" Sorry, underage");
// }


//Task 14: Exam Result Letter

// var score=91;

// if(score>70&&score<=80)
// {
//     console.log("Grade: C");
// }
// else if(score>80&&score<=90)
// {
//     console.log("Grade: B");
// }
// else if(score>90&&score<=100)
// {
//     console.log("Grade: A");
// }
// else if(score<=70)
// {
//     console.log("Grade: F");
// }
// else
// {
//     console.log("Invalid score");    
// }


//Task 15: Quick Age Label

// var age=parseInt( prompt("Enter your age"));
// console.log(age>=18? "Adult": "Minor");


//Task 16: Workday Message

// var day=prompt("which day of the week is today ");
// switch (day) {
//     case "Saturday":
//         console.log("Weekend");
//         break;
//     case "Sunday":
//         console.log("Sunday ,work day");
//         break;
//     case "Monday":
//         console.log("Monday ,work day");
//         break;
//     case "Tuesday":
//         console.log("Tuesday ,work day");
//         break;
//     case "Wednesday":
//         console.log("Wednesday ,work day");
//         break;
//     case "Thursday":
//         console.log("Thursday ,work day");
//         break;
//     case "Friday":
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }



//Task 17: Product Price Table

// var price=parseInt(prompt("enter the price of the item"));
// for( var i=1;i<=10;i++)
// {
//     console.log(`${i} x ${price} = ${i*price}`);
// }


//Task 18: Download Progress

// var sz= parseInt(prompt("enter the size"));
// if(sz>0)
// {
//     for(var i=1;i<=sz;i++)
//     {
//         console.log(i);
//     }
// }
// else{
//     console.log("Invalid file size");
    
// }


//Task 19: Order IDs Parity

// var start = parseInt(prompt("Enter start number:"));
// var end = parseInt(prompt("Enter end number:"));

// for (var i=start; i<= end; i++) {
//     if (i%2===0) {
//         console.log(i + " express");
//     } else {
//         console.log(i + " normal");
//     }
// }


//Task 20: Class Roster

// var names=["Ali","Ahmed","Sara","Iren","Ola"];
// for (var i=0;i<names.length;i++)
// {
//     console.log(`Student ${i+1} : ${names[i]}`);
// }



//Task 21: Weekly Expense Average

// var sum =0;
// for(var i=0;i<5;i++)
// {
//     sum+= Number(prompt(`Enter your allowance for day ${i+1}`));
// }
// var avg =sum/5;
// console.log("sum = ",sum);
// console.log("average = ",avg);


//Task 22: ATM PIN Retry

// var correctPin = "1234";
// var cnt=0;
// var succes=false;
// while(cnt<3)
// {
//     var pin=prompt("Enter your pin");
//     if(pin===correctPin)
//     {
//         succes=true;
//         break;
//     }
//     else
//     {
//         cnt++;
//     }
// }
// if(succes)
// {
//     console.log("Log in Succesful");
// }
// else
// {
//     console.log("Attempts finished, Log in Failed");
// }


//Task 23: Account Verification Gate

// var hasAccount = true;
// var isVerified = false;
// if(hasAccount&&isVerified)
// {
//     console.log("Welcome back");
    
// }
// else if(hasAccount&& !isVerified)
// {
//     console.log("Please verify your account");   
// }
// else
// {
//     console.log("Please sign up");
// }


//Task 24: Broken Invoice Total

// var a = 40;
// var b = 50;
// var c = Number("60");
// var d = 30;
// var e = 30;
// var sum=a + b + c + d + e;
// console.log(sum);
// if(sum<=20)
// {
//     for(var i=1;i<=20;i++)
//         console.log(i);
// }
// else
// {
//     console.log("Too big to print line by line"); 
// }


//Task 25: Promo Code Combinations

// var n=parseInt(prompt("Enter a number"));
// if(n<0)
// {
//     console.log("Invalid number");
// }
// else
// {
//     tot =1;
//     for(var i=1;i<=n;i++)
//         tot*=i;
//     console.log(`${n}! = ${tot}`);
//     alert(`${n}! = ${tot}`);
// }