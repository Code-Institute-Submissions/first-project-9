var url = "https://miner.minerbot.repl.co/api/status"
    
const http = new XMLHttpRequest();
http.open("GET", url);
http.send();

http.onreadystatechange = () => {
    
    var status = this.document.getElementById("status")

    if (http.status == 200){
        status.innerHTML = "Online"
        status.style.color = "#12a600"
    } else{
        status.innerHTML = "Offline"
        status.style.color = "#b80000"
    }

}