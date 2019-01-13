// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var PanelUpgrades: GameObject;


function Start ()
{
	PanelUpgrades.SetActive(false);
}

function Update ()
{

}

function FixedUpdate ()
{

}

function Close ()
{
	PanelUpgrades.SetActive(false);
}

function Open ()
{
	PanelUpgrades.SetActive(true);
}
