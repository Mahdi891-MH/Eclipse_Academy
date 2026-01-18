var classes = ["pl-kh-m", "pl-kh-a", "ql-nw-m", "ql-nw-a", "sr-pl-m", "sr-pl-a", "online"];
var fileNames = ["poleKhoshkMorning","poleKhoshkAfternoon","qalaNawMorning","qalaNawAfternoon","sarePolMorning","sarePolAfternoon","onlineClass"];

function fetchData(cls, fileName){
    document.querySelector("."+cls).innerHTML += "<tbody></tbody>";
    fetch("timeTables/"+fileName+".txt")
    .then(response => response.text())
    .then(text =>{
        var rows= text.split("\n");
        for(var i =0; i<rows.length; i++ ){
            var row = rows[i].split(",");
            document.querySelector("."+cls+" tbody").innerHTML += "<tr></tr>";
            for(var t= 0; t<4; t++){
                document.querySelectorAll("."+cls+" tbody tr")[i].innerHTML += "<td>"+row[t].trim()+"</td>";
            }
        }
        
    })
    .catch(err => console.error(err));
}
for(var i=0; i<classes.length; i++){
    fetchData(classes[i], fileNames[i]);
}