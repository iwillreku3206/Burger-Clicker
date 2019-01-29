// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var PanelResearch: GameObject;

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
	PanelResearch.SetActive(false);
}

function Open ()
{
	PanelResearch.SetActive(true);
}
