

    
 function validacion()
        { 
        let usuarioingresado = document.getElementById("usuarioingresado").value; 
        let passwordingresado = document.getElementById("passwordingresado").value;
                
        
            if(usuarioingresado.length == "" )
                {
                    alert ("Complete el usuario") ;
                    
                }
                else if (usuarioingresado.indexOf("@") <= 0)
                    {
                        alert ("Falta el @")
                    }
                else if ( passwordingresado.length == "" )  
                    {
                        alert ("Complete la contraseña");
                    }
                else if (usuarioingresado.length != "" && passwordingresado.length != "" && usuarioingresado.indexOf("@") >= 0)
                    {
                        alert ("Datos enviados");
                    }

               
                    
           
            
        }


