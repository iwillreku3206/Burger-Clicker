#pragma strict

import UnityEngine.UI;

var ButtomLettuce: Button;
var LevelTextLettuce: Text;
var BPSTextLettuce: Text;
var CostTextLettuce: Text;

var GameHandler: GameHandler;

function Start ()
{

}

function Update ()
{
	LevelTextLettuce.text = "Level: "+GameHandler.lettuce_level.ToString("F0");
	BPSTextLettuce.text = "BPS: "+GameHandler.lettuce_bps.ToString("F0");
	CostTextLettuce.text = "Cost: $"+GameHandler.lettuce_cost.ToString("F0");
}

function FixedUpdate ()
{

}

function OnClick ()
{
	if (GameHandler.burgers >= GameHandler.lettuce_cost)
	{
		GameHandler.burgers = GameHandler.burgers - GameHandler.lettuce_cost;
		GameHandler.lettuce_level = GameHandler.lettuce_level + 1;
	}
}
