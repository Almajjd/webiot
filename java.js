

  const endpoint = "http://192.168.1.11"; 
  function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledDapur.style.backgroundColor = "blue";
    dapurledimage.src = "led-on.png";
        
        } else {
            ledDapur.style.backgroundColor = "#579fff";
            dapurledimage.src = "led-off.png";   
        }
      });
    
    }

    function getTamuLed() {
        fetch(endpoint + "/tamu", {
            method: "GET"
        }).then(response => response.text()).then(result => {
            if(result == "ON"){
                ledTamu.style.backgroundColor = "blue";
        tamuledimage.src = "led-on.png";
            
            } else {
                ledTamu.style.backgroundColor = "#579fff";
                tamuledimage.src = "led-off.png";   
            }
          });
        
        }

        function getMakanLed() {
            fetch(endpoint + "/makan", {
                method: "GET"
            }).then(response => response.text()).then(result => {
                if(result == "ON"){
                    ledMakan.style.backgroundColor = "blue";
            makanledimage.src = "led-on.png";
                
                } else {
                    ledMakan.style.backgroundColor = "#579fff";
                    makanledimage.src = "led-off.png";   
                }
              });
            
            }

            function geToiletLed() {
                fetch(endpoint + "/toilet", {
                    method: "GET"
                }).then(response => response.text()).then(result => {
                    if(result == "ON"){
                        ledToilet.style.backgroundColor = "blue";
                toiletledimage.src = "led-on.png";
                    
                    } else {
                        ledToilet.style.backgroundColor = "#579fff";
                        toiletledimage.src = "led-off.png";   
                    }
                  });
                
                }
    
    function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
   
}
function setTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
   
}
function setMakanLed() {
    fetch(endpoint + "/makan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
   
}
function setToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
   
}

getDapurLed();
getTamuLed();
getMakanLed();
geToiletLed();
