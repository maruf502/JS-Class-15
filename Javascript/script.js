



/*


        var marks = prompt("Enter a Number : ");



       if(marks > 100 || marks < 0){

            document.write("Invalid Number !");

        }

        else if(marks >= 80 && marks <= 100){

            document.write("A+");

        }else if(marks >= 70 && marks <= 79){

            document.write("A");

        }else if(marks >= 60 && marks <= 69){

            document.write("A-");

        }else if(marks >= 50 && marks <= 59){

            document.write("B");

        }else if(marks >= 40 && marks <= 49){

            document.write("C");

        }else if(marks >= 33 && marks <= 39){

            document.write("D");

        }else{

            document.write("Faild !");

        }

*/

        //  Larges Number ;

/*

        var x = prompt("Enter a First Number : ");
        var y = prompt("Enter a Second Number : ");
        var z = prompt("Enter a Third Number : ");

        var p1 = parseInt(x);
        var p2 = parseInt(y);
        var p3 = parseInt(z);


        if(p1 > p2 && p1 > p3){

            document.write("Large Number = " + p1);

        }else if(p2 > p1 && p2 > p3){

            document.write("Large Number = " + p2);

        }else{

            document.write("Large Number = " + p3);

        }

*/


        //  Vawel And Consonant.

        
        var letter = prompt("Enter a Letter : ");

        var L = letter.toLowerCase();


        if(L == "a" || L == "e" || L == "i" || L == "o" || L == "u"){

            document.write("Vawel");

        }else{

            document.write("Consonant");

        }