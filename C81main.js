//document.getElementById("Canvas").getContext("2d");

myCanvas = document.getElementById("Canvas");
ctx = myCanvas.getContext("2d");


color = "#067506";
line_width=2;


var last_position_of_X, last_position_of_Y;
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

myCanvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e){
    color = document.getElementById("color").value;
    last_position_of_X = e.touches[0].clientX - myCanvas.offsetLeft;
    last_position_of_Y = e.touches[0].clientY - myCanvas.offsetTop;
}



myCanvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e){
    current_position_touch_x = e.touches[0].clientX - myCanvas.offsetLeft;
    current_position_touch_y = e.touches[0].clientY - myCanvas.offsetTop;
    newcolor = document.getElementById("color").value;

   
        ctx.beginPath();
        ctx.strokeStyle = newcolor;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo( current_position_touch_x, current_position_touch_y);
        ctx.stroke();
   

    last_position_of_X = current_position_touch_x;
    last_position_of_Y = current_position_touch_y;
}



function  clearcanvas(){

    ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
}





