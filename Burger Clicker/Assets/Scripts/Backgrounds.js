#pragma strict

var t_Default: Texture;
var t_Truck: Texture;
var t_Stall: Texture;
var t_Restaurant: Texture;

var Background: RawImage;

function Start(){bgDefault();}

function bgDefault(){Background.texture = t_Default;}
function bgTruck(){Background.texture = t_Truck;}
function bgStall(){Background.texture = t_Stall;}
function bgRestaurant(){Background.texture = t_Restaurant;}
