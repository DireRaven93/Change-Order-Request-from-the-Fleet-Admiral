//Ryker Hicks Halfway there to blastoff
function start()
        {
            var count = 10;

            for(i=0; i < 11; i++) {
                setTimeout(function() {
                    document.write("Countdown " + count + "<br>");

                    if(count < 6) {
                        alert("Warning, less then 1/2 way to launch, " + count + " seconds left");
                    }
                    count=count-1;

                    }, 1000*i) 
            }
            setTimeout(function() {
                    alert("Blastoff!!!!");
                    }, 11000)
                    
        }