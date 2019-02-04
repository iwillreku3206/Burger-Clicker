// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

import UnityEngine.UI;

public var burgers: float = 0;
public var bps: float = 0;
public var bpc: float = 1;

public var prestiges: int;
public var prestiges_multiplier: int;

// Default Burger Levels

public var lettuce_level = 0;
public var lettuce_bps: float = 0;
public var lettuce_bpc: float = 0;
public var lettuce_cost: float = 15.0f;

public var tomato_level = 0;
public var tomato_bps: float = 0;
public var tomato_bpc: float = 0;
public var tomato_cost: float = 120.0f;

// Researches
var rBMUpPercent: float = 0.0f;

// On-screen GameObjects
var burger_counter: Text;
var bps_counter: Text;

// External Scripts
var SpriteBurger: SpriteBurger;

function Start ()
{

}

function Update ()
{	
	prestiges_multiplier = prestiges+1;
	
	// Counters
	burgers = burgers+bps/(1/Time.deltaTime);
	burger_counter.text = "Burgers: "+burgers.ToString("F0");

	bps_counter.text = "BPS: "+bps.ToString("F0");

	// Set BPS/BPC values
	lettuce_bps = lettuce_level*1;
	lettuce_bpc = lettuce_level*1;

	tomato_bps = tomato_level*15;
	tomato_bpc = tomato_level*15;

	bps = (lettuce_bps+tomato_bps)*(rBMUpPercent+1.0f)*prestiges_multiplier;
	bpc = (lettuce_bpc+tomato_bpc+1)*(rBMUpPercent+1.0f)*prestiges_multiplier;

	// Set Costs
	lettuce_cost = 15+lettuce_level*5+(lettuce_level*lettuce_level);
	tomato_cost = 120+tomato_level*5+(tomato_level*tomato_level);
}

function FixedUpdate ()
{

}

function Prestige ()
{
	if (burgers < 1000000000000){print("cannot prestige");}
	if (burgers > 1000000000000)
	{
		tomato_level = 0;
		lettuce_level = 0;
		
		burgers = 0;
		
		prestiges++;
	}
}
