// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var transform_burger: RectTransform;
var timer: float;

var mx: float;
var my: float;

var wait: boolean;

var GameHandler: GameHandler;

// public static function Raycast(origin:  Vector3(Input.mousePosition[0], Input.mousePosition[1], -1.0f), direction: Vector3(0.0f, 0.0f, 1.0f), maxDistance: float = Mathf.Infinity, )

function Start ()
{

}

function Update ()
{
	print(Input.mousePosition+" W: "+Screen.width+" H: "+Screen.height);
}

function FixedUpdate ()
{
	mx = Input.mousePosition[0];
	my = Input.mousePosition[1];


	if (Input.GetMouseButton(0)==true && 50 < mx && mx < 350 && 150 < my && my < 450){OnClick();}
	if (Input.GetMouseButton(0) == false) {transform_burger.sizeDelta = new Vector2(300.0f, 300.0f); wait = false;}
}

function OnClick ()
{
	transform_burger.sizeDelta = new Vector2(350.0f, 350.0f);
	if (wait == false){GameHandler.burgers = GameHandler.burgers+GameHandler.bpc;}
	wait = true;
}
