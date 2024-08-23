  
    function display(){
        alert("Button clicked")
    } 
    var printMessage=function(){
        alert("Hello");
    }
    printMessage(); //calling the function
    //arrow function
    var quote=()=>alert("All good things");
    quote();
    var stationery=['pen','pencil','eraser','sharpner','scale','notebook'];
    function displayStationery(stationeryItem){
            console.log(stationeryItem);
        }

    // stationery.forEach((stItem)=>console.log(stItem));
    // //stationery.forEach(displayStationery);//callback of function display stationery
    // stationery.map((stItem)=>displayStationery(stItem));
    console.log("length greater than 6");
    stationery.filter((stItem)=>stItem.length>6).forEach((stItem)=>console.log(stItem));
    console.log("**************");
    console.log("starts with p");
    stationery.filter((stItem)=>stItem.startsWith('p')).forEach((stItem)=>console.log(stItem));
    console.log("**************");
    console.log("In uppercase");
    stationery.map((stItem)=>stItem.toUpperCase()).forEach((stItem)=>console.log(stItem));
    console.log("**************");