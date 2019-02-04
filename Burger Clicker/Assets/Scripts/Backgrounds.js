#pragma strict

var t_Default: Texture;
var t_Truck: Texture;
var t_Stall: Texture;
var t_Restaurant: Texture;

var Background: RawImage;

var GameHandler: GameHandler;

function Start(){bgDefault();}

function Update()
{
  if (GameHandler.prestiges==0){bgDefault();}
  if (GameHandler.prestiges==1){bgTruck();}
  if (GameHandler.prestiges==2){bgStall();}
  if (GameHandler.prestiges==3){bgRestaurant();}
}

function bgDefault(){Background.texture = t_Default;}
function bgTruck(){Background.texture = t_Truck;}
function bgStall(){Background.texture = t_Stall;}
function bgRestaurant(){Background.texture = t_Restaurant;}
