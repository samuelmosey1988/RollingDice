let countsArray = ["", "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (i = 0; i < 1000; i++) {

    let d1 = Math.ceil(Math.random() * 6)
    let d2 = Math.ceil(Math.random() * 6)
    let count = d1 + d2

    countsArray[count]+=1
    console.log(countsArray);
    console.log(count); 

} 

for (i = 0; i < countsArray.length; i++) {
    console.log(countsArray[i])
    
    let countDiv = document.createElement("div")

    // Creating a bar graph div
    let bg = document.createElement("div")
    let ct = document.createTextNode(countsArray[i])
    bg.appendChild(ct)

    bg.style.width = "30px"
    bg.style.height = countsArray[i] + "px" 
    bg.style.backgroundColor = "blue"
    bg.style.display = "inline-block" 
    bg.style.marginRight = "10px"
    document.body.appendChild(bg);

} 




