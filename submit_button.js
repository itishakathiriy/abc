function sendmail()
{
    var params={
        name:document.getElementById("name").value,
        date:document.getElementById("date").value,
        time:document.getElementById("time").value,
        time:document.getElementById("number").value,

    };

    const serviceid="service_bewgsjj";
    const templateid="template_vnp1s7m";
    emailjs.send(serviceid,templateid,params)

    
        .then(res => {
                document.getElementById("name").value="";
                document.getElementById("date").value="";

                    document.getElementById("time").value="";
                    document.getElementById("number").value="";


                console.log(res);

                alert("your email has sent been successfuly");



            }

        )
    
       

    }

   