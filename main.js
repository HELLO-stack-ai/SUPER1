var canvas=new fabric.Canvas('myCanvas');

super_hero_x=10;
super_hero_y=10;

block_image_width=30;
block_image_height=30;

var super_hero_object="";
var block_image_object="";

function player_update(){

   fabric.Image.fromURL("player.png" , function(Img){
     super_hero_object=Img;
   
     super_hero_object.scaleToWidth(150);
     super_hero_object.scaleToHeight(150);
     super_hero_object.set({
top:super_hero_y,
left:super_hero_x
     });
     canvas.add(super_hero_object)
    }); 
}

function new_image(get_image){

   fabric.Image.fromURL(get_image , function(Img){
       block_image_object=Img;

       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
        top:super_hero_y,
        left:super_hero_x
             });
             canvas.add(block_image_object)
   });
}