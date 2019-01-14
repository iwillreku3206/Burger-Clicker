// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

var PanelPause: GameObject;

function Resume ()
{
	PanelPause.SetActive(false);
}

function Options ()
{

}

function SaveLoad ()
{

}

function AutoSave ()
{

}

function Quit ()
{
	AutoSave();
	Application.Quit();
}
