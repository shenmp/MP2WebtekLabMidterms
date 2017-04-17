var invalid = 0;
            
            function validation(){
                
                invalid = 0;
                var n = document.getElementById('name').value;
                var y = document.getElementById('yearAndSection').value;
                var a = "Rey Meljohn Guieb"
                var b = "Emmanuel Alfonso Cabantac"
                var c = "Eldridge Cabanban"
                var d = "Kristine Jorgia de Alban"
                var e = "David Benedict Malones"
                var f = "Diane Kaye Mauri"
                var g = "Paul Ian Quezada"
                var h = "Sherene Joyce Pagaduan"
                
                if(n == ""){
                    alert("Enter your name");
                    invalid += 1;
                }
                else if(y == "7-A"){
                    if(n == a || n == b){
                        window.location.assign("./form7A.html")
                    }
                    else {
                        alert("You are not from this class.");
                        return false;
                    }
                }
                else if(y == "7-B"){
                    if(n == c || n == d){
                        window.location.assign("./form7B.html")
                        return true;
                    }
                    else {
                        alert("You are not from this class.");
                        return false;
                    }
                }
                else if(y == "8-C"){
                    if(n == e || n == f){
                        window.location.assign("./form8C.html")
                        return true;
                    }
                    else {
                        alert("You are not from this class.");
                        return false;
                    }
                }
                else if(y == "8-A"){
                    if(n == g || n == h){
                        window.location.assign("./form8D.html")
                        return true;
                    }
                    else {
                        alert("You are not from this class.");
                        return false;
                    }
                }
                
                if(invalid != 0){
                    return false;
                }
                else{
                    return true;            
                }
            }
            
            function validate(){
                var s1 = document.getElementById('yearAndSection').value;
                
                if(s1==""){
                    alert("Please select your year and section");
                    return false;
                }
                return true;
            }