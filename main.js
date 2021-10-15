canvas1 = document.getElementById("canvas1");
canvas2 = document.getElementById("canvas2");

Rover_img = "rover.png";
Rover_size = 50;
Rover_x = 5;
Rover_y = 5;

function Add_image(){
    background_image = new Image();
    background_image.onload = uploadBackground;
    background_image.src = "mars.jpg"
    
    Rover_image = new Image();
    Rover_image.onload = uploadRover;
    Rover_image.src = Rover_img

    Alphabet_image = new Image();
    Alphabet_image.onload = Alphabet_key;
    Alphabet_image.src = "Alpkey.png";
}

function uploadBackground(){
    canvas1.getContext("2d").drawImage(background_image,0,0,canvas1.width,canvas1.height);
}

function uploadRover(){
    canvas1.getContext("2d").drawImage(Rover_image,Rover_x,Rover_y,Rover_size,Rover_size);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log("The "+ keypress + " key number has pressed");

    if (keypress == "37"){
        Left();
        console.log("Left");
    }

    if (keypress == "38"){
        Up();
        console.log("UP");
    }

    if (keypress == "39"){
        Right();
        console.log("Right");
    }

    if (keypress == "40"){
        Down();
        console.log("Down");
    }

    if(keypress >= 65 && keypress <=90 || keypress >= 97 && keypress <=112){
        alphabet_key();
        console.log("You have Pressed a Alphabet key on your Keyboard");
        document.getElementById("h_3").innerHTML = "You have Pressed a Alphabet key on your Keyboard";
    } else if(keypress >= 48 && keypress <=57){
        Number_key();
        console.log("You hava Pressed a Num key on your Keyboard");
        document.getElementById("h_3").innerHTML = "You hava Pressed a num key on your Keyboard";
    } else if(keypress >= 37 && keypress <=40){
        Arrow_key();
        console.log("You have Pressed a Arrow key on your Keyboard");
        document.getElementById("h_3").innerHTML = "You have Pressed a Arrow key on your Keyboard";
    } else if(keypress >= 16 && keypress <=18 || keypress == 27){
        Special_key();
        console.log("You have Pressed a Special key on your Keyboard");
        document.getElementById("h_3").innerHTML = "You have Pressed a Special key on your Keyboard";
    }
}

function Left(){
    if (Rover_x >= 5){
        Rover_x = Rover_x - 1;
        uploadBackground();
        uploadRover();
    }
}

function Up(){
    if (Rover_y >= 5){
        Rover_y = Rover_y - 1;
        uploadBackground();
        uploadRover();
    }
}

function Right(){
    if (Rover_x <= 250){
        Rover_x = Rover_x + 1;
        uploadBackground();
        uploadRover();
    }
}

function Down(){
    if (Rover_y <= 100){
        Rover_y = Rover_y + 1;
        uploadBackground();
        uploadRover();
    }
}

function Alphabet_key(){
    canvas2.getContext("2d").drawImage(Alphabet_image,0,0,canvas2.width,canvas2.height);
}

function alphabet_key(){
    Alphabet_image = new Image();
    Alphabet_image.src = "Alpkey.png";
    Alphabet_image.onload = Alphabet_key;
    canvas2.getContext("2d").drawImage(Alphabet_image,0,0,canvas2.width,canvas2.height);
}

function Arrow_key(){
    Alphabet_image = new Image();
    Alphabet_image.src = "Arrkey.png";
    Alphabet_image.onload = Alphabet_key;
    canvas2.getContext("2d").drawImage(Alphabet_image,0,0,canvas2.width,canvas2.height);
}

function Number_key(){
    Alphabet_image = new Image();
    Alphabet_image.src = "numkey.png";
    Alphabet_image.onload = Alphabet_key;
    canvas2.getContext("2d").drawImage(Alphabet_image,0,0,canvas2.width,canvas2.height);
}

function Special_key(){
    Alphabet_image = new Image();
    Alphabet_image.src = "spkey.png";
    Alphabet_image.onload = Alphabet_key;
    canvas2.getContext("2d").drawImage(Alphabet_image,0,0,canvas2.width,canvas2.height);
}