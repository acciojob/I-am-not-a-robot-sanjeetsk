//your code here

//created h3 element
let heading3 = document.createElement("h3")
heading3.setAttribute("id", "h3")
heading3.innerHTML = "Please click on the identical tiles to verify that you are not a robot."
document.body.prepend(heading3)

//created btn
let arr = ["reset", "verify"]
for(let t of arr){
    let btn = document.createElement("button")
    btn.setAttribute("id", t)
    btn.innerHTML=t.toUpperCase()
    btn.setAttribute("class", "hide")
    // btn.style.color="blue"
    // btn.style.backgroundColor="blue"
    // btn.style.cssText = "color: white; background-color: green"
    // btn.style.display = "none"
    document.body.append(btn);
}


//generating 6th class name randomly from 5 value
let imgClass = ["img1", "img2", "img3", "img4", "img5"] 
let randomIndex = Math.floor(Math.random() * imgClass.length)
let randomImg = imgClass[randomIndex]
imgClass.push(randomImg)    

//shuffling the array - so that img will generate randomly at each position after reload
let arr1 = []
// let randomIndex2 = Math.floor(Math.random() * imgClass.length)
let k = 0
while(k < imgClass.length){
    // if(k == imgClass.length)
    // break;

    let randomIndex2 = Math.floor(Math.random() * imgClass.length)
    
    if(arr1[randomIndex2] == undefined){
        arr1[randomIndex2] = imgClass[k]
        k=k+1
    }

    else if(arr1[randomIndex2] != undefined){
        continue
    }

}


//selecting all images 
let images = document.querySelectorAll("img")

// setting attribute - class Name to all images
for(let i=0; i <= arr1.length-1; i++){
    images[i].setAttribute("class", arr1[i])
    images[i].setAttribute("id", i)
}

for(let t of images){
    t.addEventListener("click", userOrRobot)
}

let verifyBtn = document.getElementById("verify")
let resetBtn = document.getElementById("reset")
let prevImg = ""
let count = 0 

function userOrRobot(e){
    resetBtn.style.display = "inLine"
    let currentImgId = e.target.id
    //change border of image after click
    if(currentImgId != prevImg){
        images[currentImgId].classList.add("selected")
        count++;
        prevImg = currentImgId
        if(count == 2){
            verifyBtn.style.display = "inline"
        }
    }
}

resetBtn.addEventListener("click", () => {
    verifyBtn.style.display = "none"
    resetBtn.style.display = "none"
    count = 0
    selectedImages = document.querySelectorAll(".selected")

    for(let t of selectedImages){
        t.classList.remove("selected")
    }
})

verifyBtn.addEventListener("click", () => {
    let p = document.createElement("p")
    selectedImages = document.querySelectorAll(".selected")
    let class1 = selectedImages[0].className
    let class2 = selectedImages[1].className
    if(class1 == class2){
        p.innerHTML = "You are a human. Congratulations! "
    }
    else{
        p.innerHTML = "We can't verify you as a human. You selected the non-identical tiles."
    }
    verifyBtn.style.display = "none"
    document.body.append(p)
    
})
