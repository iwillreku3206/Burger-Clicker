// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var PanelPrestige: GameObject;

function Start ()
{
	Close();
}

function Update ()
{

}

function FixedUpdate ()
{

}

function Close ()
{
	PanelPrestige.SetActive(false);
}

function Open ()
{
	PanelPrestige.SetActive(true);
}
