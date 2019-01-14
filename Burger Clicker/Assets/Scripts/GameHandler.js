// This script shall not be copied for any commercial or hobbyist use, unless permitted by the creator, IWillRekU3206

#pragma strict

import UnityEngine.UI;

public var burgers: float = 0;
public var bps: float = 0;
public var bpc: float = 1;

// Default Burger Levels
public var patty_level = 1;
public var patty_bps: float=1;

public var bun_level = 0;
public var bun_bps: float = 0;

public var lettuce_level = 0;
public var lettuce_bps: float = 0;
public var lettuce_bpc: float = 0;
public var lettuce_cost: float = 15.0f;

public var tomato_level = 0;
public var tomato_bps: float = 0;
public var tomato_bpc: float = 0;
public var tomato_cost: float = 120.0f;

// Cheeses
public var cheese_american = 0;
public var cheese_american_bps: float = 0;

public var cheese_mozzarella = -1;
public var cheese_mozzarella_bps: float = 0;

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
	// Counters
	burgers = burgers+bps/(1/Time.deltaTime);
	burger_counter.text = "Burgers: "+burgers.ToString("F0");

	bps_counter.text = "BPS: "+bps.ToString("F0");

	// Set BPS/BPC values
	lettuce_bps = lettuce_level*1;
	lettuce_bpc = lettuce_level*1;

	tomato_bps = tomato_level*15;
	tomato_bpc = tomato_level*15;

	bps = lettuce_bps+tomato_bps;
	bpc = lettuce_bpc+tomato_bpc+1;

	// Set Costs
	lettuce_cost = 15+lettuce_level*5+(lettuce_level*lettuce_level);
	tomato_cost = 120+tomato_level*5+(tomato_level*tomato_level);
}

function FixedUpdate ()
{

}
