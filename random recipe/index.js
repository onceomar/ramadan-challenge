function change_image(number1,number2){
    let image = document.querySelector(".img");
function generate(number1,number2){
    let number1 = Math.ceil(Math.random()*5);
    let number2 = Math.ceil(Math.random()*5);
    if (number1===number2){
        generate(number1,number2);
    }
    else{
    let number3 = number2;
    return number3;
}
}
    generate(number1,number2)

    image = document.querySelector(".img");
    switch(number3){
        case 1:
            image = document.querySelector(".img").src = "pics/chicken.jpg"
            break
        case 2:
            image = document.querySelector(".img").src = "pics/beef.jpg"
            break
        case 3:
            image = document.querySelector(".img").src = "pics/eggs.jpeg"
            break
        case 4:
            image = document.querySelector(".img").src = "pics/Salad.jpg"
            break
        case 5:
            image = document.querySelector(".img").src = "pics/pasta.jpg"
            break
}//switch end  

// let src_array =['pics/chicken.jpg','pics/beef.jpg','pics/eggs.jpeg','pics/Salad.jpg','pics/pasta.jpg']
// let pick=src_array[Math.ceil(Math.random()*src_array.length)]
// let new_array=src_array.slice(pick)
// console.log(pick)
}