console.log("hello");
function sendmail()

{
    console.log("hello");

    var params={
        name:document.getElementById("name").value,
        date:document.getElementById("email").value,
        time:document.getElementById("msg").value,
    };

    const serviceid="service_rxqsbp1";
    const templateid="template_eu6d63n";
    emailjs.send(serviceid,templateid,params)

    
        .then(res => {
                document.getElementById("name").value="";
                document.getElementById("email").value="";

                    document.getElementById("msg").value="";

                console.log(res);

                alert("your email has sent been successfuly");



            }

        )

        console.error();
    
       

    }

   