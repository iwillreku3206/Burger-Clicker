#pragma strict

import UnityEngine.UI;

var ButtomTomato: Button;
var LevelTextTomato: Text;
var BPSTextTomato: Text;
var CostTextTomato: Text;

var GameHandler: GameHandler;

function Start ()
{

}

function Update ()
{
	LevelTextTomato.text = "Level: "+GameHandler.tomato_level.ToString("F0");
	BPSTextTomato.text = "BPS: "+GameHandler.tomato_bps.ToString("F0");
	CostTextTomato.text = "Cost: $"+GameHandler.tomato_cost.ToString("F0");
}

function FixedUpdate ()
{

}

function OnClick ()
{
	if (GameHandler.burgers >= GameHandler.tomato_cost)
	{
		GameHandler.burgers = GameHandler.burgers - GameHandler.tomato_cost;
		GameHandler.tomato_level = GameHandler.tomato_level + 1;
	}
}
