// alert ("azal");

// document.write (" <h1> Chapter 21to25 </h1>");
// document.write ("<h2> STRING METHODS </h2>")

// Q1
// var First_name = prompt ("First name: ");
// var Last_name = prompt ("Last name: ");

// var fullName = (First_name + " " + Last_name). toUpperCase ();
// document.write ("Hi," + fullName + " Good Morning"+ "<br>");

// Q2
// var model = prompt ("enter your favourite mobile phone model ?:");
// document.write ("my favourite phone is : " + model + " <br> length of string :" + model.length);

// Q3
// var country = "pakistani";
// index=country.indexOf ( 'n' ); 

// document.write ("string : " +country+ "<br> index of 'n' : " + index);

// Q4
// var word = "Hello World";
// var index = word.lastIndexOf ("l");

// document.write ("string : " + word + "<br> last index of 'I': " + index +"<br>" );

// Q5
// var country = "pakistan";
// var thirdChar = country.charAt (3);

// document.write ("string: " + country + " <br> Character at index 3:" + thirdChar + "<br>");

// Q6
// var First_name = prompt ("Enter your First name: ");
// var Last_name = prompt ("Enter your Last name: ");
// var full_name = First_name.concat (Last_name);

// document.write ("hello " + full_name + " how are youh!");

// Q7
// var city = "Hyderabad";
// replace=city.replace ("Hyder" , "Islam");

// document.write ("City :" +city+ "<br> After replacement :" + replace);

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// rep = message.replace (/and/g, "&" );

// document.write ("message :" + message + "<br> After replacement : " + rep);

// Q9
// var num = "472";
// document.write ("<br> Value: " + num + "<br> Type: " +typeof (num));

// var chng = parseInt (num);
// document.write ("<br> Value: " + num + "<br> Type:" +typeof (chng));

// Q10
// var input= prompt ("Enter statement:");
// document.write ("<br> User input: " + input + "<br> Uppercase: " +input.toUpperCase());

// Q11
// var input= prompt ("Enter statement:");
// first=input.charAt(0).toUpperCase();

// document.write ("<br> User input : " + input + "<br> Uppercase: " +(first+input.slice(1)));

// Q12
// var num = 35.36;
// var string =num.toString().replace("." , "");

// document.write ("Number:" + num + "<br> Result: " +string );

// Q13
// var names = prompt("User Name :");
// for(var i=0;i<names.length;i++){
//     if(names[i].charCodeAt() ===33 || names[i].charCodeAt() ===44 || names[i].charCodeAt()===46 || names[i].charCodeAt()===64) {
//        alert("please enter a valid userName");   
//     }
// }
// document.write(names);

// Q14
// var menu = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var question = prompt ("Welcome to master Bakery : What do you want to order sir/ma'am?");
// var flag = true;
// for (var i = 0; i < menu.length; i++){
// if (question === menu [i]){
// document.write(question + " is <b> available </b> at index " + i +"in our bakery");
// flag = false;
// }
// }
// if (flag === true ){
//     document.write ("We are sorry:" + question + " is <b>not available </b> in our bakery");
// }

// Q15
// var password = prompt ("Enter password" );
// var pass_validation =/^[a-zA-Z0-9!$@] {1,} $/ 

// if (password !== "") {
// if(!password.match (pass_validation)){
//     alert ("please enter a valid password")
// }
// else {
//     alert ("password is Correct")
// }
// }
// else{
//     alert ("please fill up password field")
// }

// Q16
// var university ="University Of Karachi";
// var arr = university.split("") 
// document.write ( arr.join ("<br  />"))

// Q17
// var user = prompt (" enter word");

// document.write ("User Input: " + user + "<br  />" + "Last Character of input : " + user.slice(user.length-1))

// Q18
// var string = "The quick brown fox jumps over the lazy dog".toLowerCase()
// var count = string.match (/the/g)

// document.write (count.length)




















































