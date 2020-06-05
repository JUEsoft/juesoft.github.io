    window.onload = function(){
    var foot = document.querySelector("footer");
    var d = new Date();
    var yr = d.getFullYear();
    foot.innerHTML = "&copy"+yr+" JUEsoft INC";
    }
    function togglesidebar(){
        document.querySelector("#sidebar").style.left="0px";
        document.querySelector("#toggle").style.left="50px";
        document.querySelector("#sidebar").classList.toggle("active");
        document.querySelector("#toggle").style.display="none";
    

    }
    function hidenav(){
        document.querySelector("#sidebar").style.left="-200px";
        document.querySelector("#toggle").style.left="210px";
        document.querySelector("#toggle").style.display="block";
    }
    function start(){
       myVar = setTimeout(displayp, 2000);
       document.querySelector('input[type=submit]').addEventListener('click', function(){
       Swal.fire({
       type:'error',
       title:'ERROR!',
       text:'Sorry, there was an unexpected error while submitting your request',
       footer:'<b>Please try again another time</b>'
       });
       });
    }
    function displayp(){
     Swal.fire({
     type:'info',
     title:'HI',
     text:'Welcome To My Portfolio'
     });
    document.getElementById("p-loader").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    }
