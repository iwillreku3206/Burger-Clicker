// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var PanelPause: GameObject;


function Start ()
{
	PanelPause.SetActive(false);
}

function Update ()
{

}

function FixedUpdate ()
{

}

function Close ()
{
	PanelPause.SetActive(false);
}

function Open ()
{
	PanelPause.SetActive(true);
}
