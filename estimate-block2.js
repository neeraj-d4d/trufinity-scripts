//=================================================================
//      BLOCK 2: ESTIMATE PAGE LOGIC — REAL PRICING
//=================================================================

(function () {
  // ── REAL PRICING LOOKUP ──────────────────────────────────────────
  // Key: "sqft|systemType|homeType|fuel|heatingCooling"
  var TF_PRICING_LOOKUP = {
    // 0-800 sq ft
    "0-800|Central Air System|Single-Family|Natural Gas|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "0-800|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "0-800|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "0-800|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "0-800|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "0-800|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "0-800|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "0-800|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "0-800|Central Air System|Single-Family|Propane|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "0-800|Central Air System|Townhome|Propane|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "0-800|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "0-800|Central Air System|Townhome|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "0-800|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "0-800|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "0-800|Central Air System|Single-Family|Electric|Heating Only": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "0-800|Central Air System|Townhome|Electric|Heating Only": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "0-800|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 9195,
      high: 10504,
      spec: "1.5 ton AC + air handler",
    },
    "0-800|Central Air System|Townhome|Electric|Cooling Only": {
      low: 9195,
      high: 10504,
      spec: "1.5 ton AC + air handler",
    },
    "0-800|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "0-800|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 13524,
      high: 17961,
      spec: "Mobile furnace + 1.5 ton AC",
    },
    "0-800|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "0-800|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "0-800|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 13524,
      high: 17961,
      spec: "Mobile furnace + 1.5 ton AC",
    },
    "0-800|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    // 801-1200 sq ft
    "801-1200|Central Air System|Single-Family|Natural Gas|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "801-1200|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "801-1200|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "801-1200|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "801-1200|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "801-1200|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "801-1200|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "801-1200|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 11761,
      high: 13691,
      spec: "1.5 ton AC + 30–40k furnace",
    },
    "801-1200|Central Air System|Single-Family|Propane|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "801-1200|Central Air System|Townhome|Propane|Heating Only": {
      low: 6653,
      high: 7757,
      spec: "30–40k furnace",
    },
    "801-1200|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "801-1200|Central Air System|Townhome|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "801-1200|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "801-1200|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "801-1200|Central Air System|Single-Family|Electric|Heating Only": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "801-1200|Central Air System|Townhome|Electric|Heating Only": {
      low: 10602,
      high: 11085,
      spec: "1.5 ton heat pump + air handler",
    },
    "801-1200|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 9195,
      high: 10504,
      spec: "1.5 ton AC + air handler",
    },
    "801-1200|Central Air System|Townhome|Electric|Cooling Only": {
      low: 9195,
      high: 10504,
      spec: "1.5 ton AC + air handler",
    },
    "801-1200|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "801-1200|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 13524,
      high: 17961,
      spec: "Mobile furnace + 1.5 ton AC",
    },
    "801-1200|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    "801-1200|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "801-1200|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 13524,
      high: 17961,
      spec: "Mobile furnace + 1.5 ton AC",
    },
    "801-1200|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 5108,
      high: 5434,
      spec: "1.5 ton AC",
    },
    // 1201-1600 sq ft
    "1201-1600|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 11980, high: 13734, spec: "2 ton AC + 40k furnace" },
    "1201-1600|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 11980,
      high: 13734,
      spec: "2 ton AC + 40k furnace",
    },
    "1201-1600|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 6733,
      high: 7757,
      spec: "40k furnace",
    },
    "1201-1600|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 6733,
      high: 7757,
      spec: "40k furnace",
    },
    "1201-1600|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    "1201-1600|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    "1201-1600|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 11980,
      high: 13734,
      spec: "2 ton AC + 40k furnace",
    },
    "1201-1600|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 11980,
      high: 13734,
      spec: "2 ton AC + 40k furnace",
    },
    "1201-1600|Central Air System|Single-Family|Propane|Heating Only": {
      low: 6733,
      high: 7757,
      spec: "40k furnace",
    },
    "1201-1600|Central Air System|Townhome|Propane|Heating Only": {
      low: 6733,
      high: 7757,
      spec: "40k furnace",
    },
    "1201-1600|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    "1201-1600|Central Air System|Townhome|Propane|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    "1201-1600|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 10900,
      high: 11775,
      spec: "2 ton heat pump + air handler",
    },
    "1201-1600|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 10900,
      high: 11775,
      spec: "2 ton heat pump + air handler",
    },
    "1201-1600|Central Air System|Single-Family|Electric|Heating Only": {
      low: 10900,
      high: 11775,
      spec: "2 ton heat pump + air handler",
    },
    "1201-1600|Central Air System|Townhome|Electric|Heating Only": {
      low: 10900,
      high: 11775,
      spec: "2 ton heat pump + air handler",
    },
    "1201-1600|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 9334,
      high: 10547,
      spec: "2 ton AC + air handler",
    },
    "1201-1600|Central Air System|Townhome|Electric|Cooling Only": {
      low: 9334,
      high: 10547,
      spec: "2 ton AC + air handler",
    },
    "1201-1600|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "1201-1600|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 13663,
      high: 18004,
      spec: "Mobile furnace + 2 ton AC",
    },
    "1201-1600|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    "1201-1600|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "1201-1600|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 13663,
      high: 18004,
      spec: "Mobile furnace + 2 ton AC",
    },
    "1201-1600|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 5247,
      high: 5477,
      spec: "2 ton AC",
    },
    // 1601-2000 sq ft
    "1601-2000|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 12129, high: 14462, spec: "2.5 ton AC + 60k furnace" },
    "1601-2000|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 12129,
      high: 14462,
      spec: "2.5 ton AC + 60k furnace",
    },
    "1601-2000|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "1601-2000|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "1601-2000|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    "1601-2000|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    "1601-2000|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 12129,
      high: 14462,
      spec: "2.5 ton AC + 60k furnace",
    },
    "1601-2000|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 12129,
      high: 14462,
      spec: "2.5 ton AC + 60k furnace",
    },
    "1601-2000|Central Air System|Single-Family|Propane|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "1601-2000|Central Air System|Townhome|Propane|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "1601-2000|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    "1601-2000|Central Air System|Townhome|Propane|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    "1601-2000|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 12082,
      high: 12182,
      spec: "2.5 ton heat pump + air handler",
    },
    "1601-2000|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 12082,
      high: 12182,
      spec: "2.5 ton heat pump + air handler",
    },
    "1601-2000|Central Air System|Single-Family|Electric|Heating Only": {
      low: 12082,
      high: 12182,
      spec: "2.5 ton heat pump + air handler",
    },
    "1601-2000|Central Air System|Townhome|Electric|Heating Only": {
      low: 12082,
      high: 12182,
      spec: "2.5 ton heat pump + air handler",
    },
    "1601-2000|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 10083,
      high: 11260,
      spec: "2.5 ton AC + air handler",
    },
    "1601-2000|Central Air System|Townhome|Electric|Cooling Only": {
      low: 10083,
      high: 11260,
      spec: "2.5 ton AC + air handler",
    },
    "1601-2000|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "1601-2000|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 13734,
      high: 18622,
      spec: "Mobile furnace + 2.5 ton AC",
    },
    "1601-2000|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    "1601-2000|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "1601-2000|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 13734,
      high: 18622,
      spec: "Mobile furnace + 2.5 ton AC",
    },
    "1601-2000|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 5318,
      high: 6095,
      spec: "2.5 ton AC",
    },
    // 2001-2400 sq ft
    "2001-2400|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 12680, high: 14861, spec: "3 ton AC + 60k furnace" },
    "2001-2400|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 12680,
      high: 14861,
      spec: "3 ton AC + 60k furnace",
    },
    "2001-2400|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "2001-2400|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "2001-2400|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    "2001-2400|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    "2001-2400|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 12680,
      high: 14861,
      spec: "3 ton AC + 60k furnace",
    },
    "2001-2400|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 12680,
      high: 14861,
      spec: "3 ton AC + 60k furnace",
    },
    "2001-2400|Central Air System|Single-Family|Propane|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "2001-2400|Central Air System|Townhome|Propane|Heating Only": {
      low: 6811,
      high: 7867,
      spec: "60k furnace",
    },
    "2001-2400|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    "2001-2400|Central Air System|Townhome|Propane|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    "2001-2400|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 12553,
      high: 13648,
      spec: "3 ton heat pump + air handler",
    },
    "2001-2400|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 12553,
      high: 13648,
      spec: "3 ton heat pump + air handler",
    },
    "2001-2400|Central Air System|Single-Family|Electric|Heating Only": {
      low: 12553,
      high: 13648,
      spec: "3 ton heat pump + air handler",
    },
    "2001-2400|Central Air System|Townhome|Electric|Heating Only": {
      low: 12553,
      high: 13648,
      spec: "3 ton heat pump + air handler",
    },
    "2001-2400|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 10634,
      high: 11659,
      spec: "3 ton AC + air handler",
    },
    "2001-2400|Central Air System|Townhome|Electric|Cooling Only": {
      low: 10634,
      high: 11659,
      spec: "3 ton AC + air handler",
    },
    "2001-2400|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2001-2400|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 14285,
      high: 19021,
      spec: "Mobile furnace + 3 ton AC",
    },
    "2001-2400|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    "2001-2400|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2001-2400|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 14285,
      high: 19021,
      spec: "Mobile furnace + 3 ton AC",
    },
    "2001-2400|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 5869,
      high: 6494,
      spec: "3 ton AC",
    },
    // 2401-2800 sq ft
    "2401-2800|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 13421, high: 15611, spec: "3.5 ton AC + 80k furnace" },
    "2401-2800|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 13421,
      high: 15611,
      spec: "3.5 ton AC + 80k furnace",
    },
    "2401-2800|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 7086,
      high: 7944,
      spec: "80k furnace",
    },
    "2401-2800|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 7086,
      high: 7944,
      spec: "80k furnace",
    },
    "2401-2800|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    "2401-2800|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    "2401-2800|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 13421,
      high: 15611,
      spec: "3.5 ton AC + 80k furnace",
    },
    "2401-2800|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 13421,
      high: 15611,
      spec: "3.5 ton AC + 80k furnace",
    },
    "2401-2800|Central Air System|Single-Family|Propane|Heating Only": {
      low: 7086,
      high: 7944,
      spec: "80k furnace",
    },
    "2401-2800|Central Air System|Townhome|Propane|Heating Only": {
      low: 7086,
      high: 7944,
      spec: "80k furnace",
    },
    "2401-2800|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    "2401-2800|Central Air System|Townhome|Propane|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    "2401-2800|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 13743,
      high: 13840,
      spec: "3.5 ton heat pump + air handler",
    },
    "2401-2800|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 13743,
      high: 13840,
      spec: "3.5 ton heat pump + air handler",
    },
    "2401-2800|Central Air System|Single-Family|Electric|Heating Only": {
      low: 13743,
      high: 13840,
      spec: "3.5 ton heat pump + air handler",
    },
    "2401-2800|Central Air System|Townhome|Electric|Heating Only": {
      low: 13743,
      high: 13840,
      spec: "3.5 ton heat pump + air handler",
    },
    "2401-2800|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 11462,
      high: 12697,
      spec: "3.5 ton AC + air handler",
    },
    "2401-2800|Central Air System|Townhome|Electric|Cooling Only": {
      low: 11462,
      high: 12697,
      spec: "3.5 ton AC + air handler",
    },
    "2401-2800|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2401-2800|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 14751,
      high: 19694,
      spec: "Mobile furnace + 3.5 ton AC",
    },
    "2401-2800|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    "2401-2800|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2401-2800|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 14751,
      high: 19694,
      spec: "Mobile furnace + 3.5 ton AC",
    },
    "2401-2800|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 6335,
      high: 7167,
      spec: "3.5 ton AC",
    },
    // 2801-3200 sq ft
    "2801-3200|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 13670, high: 16562, spec: "4 ton AC + 80–85k furnace" },
    "2801-3200|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 13670,
      high: 16562,
      spec: "4 ton AC + 80–85k furnace",
    },
    "2801-3200|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 7086,
      high: 8232,
      spec: "80–85k furnace",
    },
    "2801-3200|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 7086,
      high: 8232,
      spec: "80–85k furnace",
    },
    "2801-3200|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    "2801-3200|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    "2801-3200|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 13670,
      high: 16562,
      spec: "4 ton AC + 80–85k furnace",
    },
    "2801-3200|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 13670,
      high: 16562,
      spec: "4 ton AC + 80–85k furnace",
    },
    "2801-3200|Central Air System|Single-Family|Propane|Heating Only": {
      low: 7086,
      high: 8232,
      spec: "80–85k furnace",
    },
    "2801-3200|Central Air System|Townhome|Propane|Heating Only": {
      low: 7086,
      high: 8232,
      spec: "80–85k furnace",
    },
    "2801-3200|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    "2801-3200|Central Air System|Townhome|Propane|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    "2801-3200|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 14239,
      high: 15194,
      spec: "4 ton heat pump + air handler",
    },
    "2801-3200|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 14239,
      high: 15194,
      spec: "4 ton heat pump + air handler",
    },
    "2801-3200|Central Air System|Single-Family|Electric|Heating Only": {
      low: 14239,
      high: 15194,
      spec: "4 ton heat pump + air handler",
    },
    "2801-3200|Central Air System|Townhome|Electric|Heating Only": {
      low: 14239,
      high: 15194,
      spec: "4 ton heat pump + air handler",
    },
    "2801-3200|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 11711,
      high: 13360,
      spec: "4 ton AC + air handler",
    },
    "2801-3200|Central Air System|Townhome|Electric|Cooling Only": {
      low: 11711,
      high: 13360,
      spec: "4 ton AC + air handler",
    },
    "2801-3200|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2801-3200|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 15000,
      high: 20357,
      spec: "Mobile furnace + 4 ton AC",
    },
    "2801-3200|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    "2801-3200|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "2801-3200|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 15000,
      high: 20357,
      spec: "Mobile furnace + 4 ton AC",
    },
    "2801-3200|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 6584,
      high: 7830,
      spec: "4 ton AC",
    },
    // 3201-3600 sq ft
    "3201-3600|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 15112, high: 18510, spec: "5 ton AC + 100k furnace" },
    "3201-3600|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3201-3600|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3201-3600|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3201-3600|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3201-3600|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3201-3600|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3201-3600|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3201-3600|Central Air System|Single-Family|Propane|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3201-3600|Central Air System|Townhome|Propane|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3201-3600|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3201-3600|Central Air System|Townhome|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3201-3600|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3201-3600|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3201-3600|Central Air System|Single-Family|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3201-3600|Central Air System|Townhome|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3201-3600|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "3201-3600|Central Air System|Townhome|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "3201-3600|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "3201-3600|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "3201-3600|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3201-3600|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "3201-3600|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "3201-3600|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    // 3601-4000 sq ft
    "3601-4000|Central Air System|Single-Family|Natural Gas|Heating & Cooling":
      { low: 15112, high: 18510, spec: "5 ton AC + 100k furnace" },
    "3601-4000|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3601-4000|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3601-4000|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3601-4000|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3601-4000|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3601-4000|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3601-4000|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 15112,
      high: 18510,
      spec: "5 ton AC + 100k furnace",
    },
    "3601-4000|Central Air System|Single-Family|Propane|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3601-4000|Central Air System|Townhome|Propane|Heating Only": {
      low: 7965,
      high: 8981,
      spec: "100k furnace",
    },
    "3601-4000|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3601-4000|Central Air System|Townhome|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3601-4000|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3601-4000|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3601-4000|Central Air System|Single-Family|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3601-4000|Central Air System|Townhome|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler",
    },
    "3601-4000|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "3601-4000|Central Air System|Townhome|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "3601-4000|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "3601-4000|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "3601-4000|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "3601-4000|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "3601-4000|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "3601-4000|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    // 4001+ sq ft
    "4001+|Central Air System|Single-Family|Natural Gas|Heating & Cooling": {
      low: 15361,
      high: 18857,
      spec: "5 ton AC + 120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Natural Gas|Heating & Cooling": {
      low: 15361,
      high: 18857,
      spec: "5 ton AC + 120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Natural Gas|Heating Only": {
      low: 8214,
      high: 9328,
      spec: "120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Natural Gas|Heating Only": {
      low: 8214,
      high: 9328,
      spec: "120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "4001+|Central Air System|Townhome|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "4001+|Central Air System|Single-Family|Propane|Heating & Cooling": {
      low: 15361,
      high: 18857,
      spec: "5 ton AC + 120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Propane|Heating & Cooling": {
      low: 15361,
      high: 18857,
      spec: "5 ton AC + 120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Propane|Heating Only": {
      low: 8214,
      high: 9328,
      spec: "120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Propane|Heating Only": {
      low: 8214,
      high: 9328,
      spec: "120k furnace (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "4001+|Central Air System|Townhome|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "4001+|Central Air System|Single-Family|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Electric|Heating & Cooling": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler (multi-system recommended)",
    },
    "4001+|Central Air System|Townhome|Electric|Heating Only": {
      low: 15972,
      high: 16546,
      spec: "5 ton heat pump + air handler (multi-system recommended)",
    },
    "4001+|Central Air System|Single-Family|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "4001+|Central Air System|Townhome|Electric|Cooling Only": {
      low: 12777,
      high: 15062,
      spec: "5 ton AC + air handler",
    },
    "4001+|Central Air System|Mobile Home|Natural Gas|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "4001+|Central Air System|Mobile Home|Natural Gas|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "4001+|Central Air System|Mobile Home|Natural Gas|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
    "4001+|Central Air System|Mobile Home|Propane|Heating Only": {
      low: 8416,
      high: 12027,
      spec: "Mobile-rated furnace",
    },
    "4001+|Central Air System|Mobile Home|Propane|Heating & Cooling": {
      low: 15563,
      high: 21556,
      spec: "Mobile furnace + 5 ton AC",
    },
    "4001+|Central Air System|Mobile Home|Propane|Cooling Only": {
      low: 7147,
      high: 9029,
      spec: "5 ton AC",
    },
  };

  // ── DUCTLESS MINI-SPLIT PRICING ───────────────────────────────────
  var TF_DUCTLESS_LOOKUP = {
    "0-800": {
      low: 8685,
      high: 10252,
      spec: "9,000–18,000 BTU Single-Zone Mini Split",
    },
    "801-1200": {
      low: 8798,
      high: 10686,
      spec: "12,000–24,000 BTU Single-Zone Mini Split",
    },
    "1201-1600": {
      low: 10494,
      high: 15420,
      spec: "30,000–36,000 BTU Single-Zone Mini Split",
    },
    "1601-2000": {
      low: 13165,
      high: 14790,
      spec: "2-Zone or Ducted Mini Split",
    },
    "2001-2400": {
      low: 13165,
      high: 21459,
      spec: "2–3 Zone or Ducted Mini Split",
    },
    "2401-2800": {
      low: 13165,
      high: 21459,
      spec: "3-Zone or Ducted 2–3 Ton Mini Split",
    },
    "2801-3200": { low: 13165, high: 21459, spec: "Ducted 2–3 Ton Mini Split" },
    "3201-3600": { low: 15268, high: 21459, spec: "Ducted 4–5 Ton Mini Split" },
    "3601-4000": { low: 15268, high: 21459, spec: "Ducted 4–5 Ton Mini Split" },
    "4001+": {
      low: 15268,
      high: 21459,
      spec: "Ducted 4–5 Ton Mini Split (assessment recommended)",
    },
  };

  // ── SYSTEM IMAGES ─────────────────────────────────────────────────
  var TF_SYSTEM_IMAGES = {
    "Furnace & AC":
      "https://cdn.prod.website-files.com/681934453acc22527c6bf035/6a1d43439e1cfdfaeb490385_Furnace-AC.png",
    Furnace:
      "https://cdn.prod.website-files.com/681934453acc22527c6bf035/6a1d4341f76744ddc2716e1f_Furnace.png",
    "Central Air Conditioner":
      "https://cdn.prod.website-files.com/681934453acc22527c6bf035/6a1d4342b9dc322e3d98c462_Central-Air-Conditioner.png",
    "Ductless Mini Split":
      "https://cdn.prod.website-files.com/681934453acc22527c6bf035/6a1d43417ce17ed2a35a385e_Ductless-Mini-Split.png",
    "Heat Pump":
      "https://cdn.prod.website-files.com/681934453acc22527c6bf035/6a1d4342b9dc322e3d98c462_Central-Air-Conditioner.png",
  };

  function tfGetLead() {
    try {
      var s = sessionStorage.getItem("tf_lead");
      if (s) return JSON.parse(s);
    } catch (e) {}
    var p = new URLSearchParams(window.location.search);
    return {
      homeType: p.get("ht") || "",
      systemType: p.get("st") || "",
      heatingCooling: p.get("hc") || "",
      fuel: p.get("fl") || "",
      sqft: p.get("sq") || "",
      firstName: p.get("nm") || "",
    };
  }

  function tfCalculate(lead) {
    var sqft = lead.sqft || "1601-2000";
    var systemType = lead.systemType || "Central Air System";
    var fuel = lead.fuel || "Natural Gas";
    var homeType = lead.homeType || "Single-Family";
    var heatingCooling = lead.heatingCooling || "Heating & Cooling";

    // Ductless — separate lookup
    if (systemType === "Ductless Mini Split") {
      var d = TF_DUCTLESS_LOOKUP[sqft] || TF_DUCTLESS_LOOKUP["1601-2000"];
      return {
        category: "Ductless Mini Split",
        specs: d.spec,
        brand: "Rheem / Tosot",
        rangeLow: d.low,
        rangeHigh: d.high,
        assessment: false,
      };
    }

    // Mobile Home + Electric (heating) → Assessment Required
    if (
      homeType === "Mobile Home" &&
      fuel === "Electric" &&
      heatingCooling !== "Cooling Only"
    ) {
      return {
        category: "Heat Pump Retrofit",
        specs: "Site assessment required",
        brand: "TBD",
        rangeLow: null,
        rangeHigh: null,
        assessment: true,
      };
    }

    // Look up exact price
    var key =
      sqft +
      "|" +
      systemType +
      "|" +
      homeType +
      "|" +
      fuel +
      "|" +
      heatingCooling;
    var row = TF_PRICING_LOOKUP[key];

    // Fallback: try Single-Family
    if (!row) {
      key =
        sqft +
        "|" +
        systemType +
        "|Single-Family|" +
        fuel +
        "|" +
        heatingCooling;
      row = TF_PRICING_LOOKUP[key];
    }

    // Ultimate fallback
    if (!row) {
      row = { low: 12129, high: 14462, spec: "2.5 ton AC + 60k furnace" };
    }

    // Category label
    var category;
    if (fuel === "Electric") {
      category =
        heatingCooling === "Cooling Only"
          ? "Central Air Conditioner"
          : "Heat Pump";
    } else if (heatingCooling === "Cooling Only") {
      category = "Central Air Conditioner";
    } else if (heatingCooling === "Heating Only") {
      category = "Furnace";
    } else {
      category = "Furnace & AC";
    }

    return {
      category: category,
      specs: row.spec,
      brand: "Rheem",
      rangeLow: row.low,
      rangeHigh: row.high,
      assessment: false,
    };
  }
  window.tfCalculate = tfCalculate;

  function tfMonthly(principal, years, aprPct) {
    if (aprPct === 0) return principal / (years * 12);
    var r = aprPct / 100 / 12;
    var n = years * 12;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function init() {
    var lead = tfGetLead();
    var system = tfCalculate(lead);

    // Assessment Required case
    if (system.assessment) {
      document.body.classList.add("tf-assessment");
      setText("tf-cat", "SITE ASSESSMENT REQUIRED");
      setText("tf-cat-title", "Assessment Required");
      setText("tf-specs", "This configuration requires an in-home assessment.");
      setText("tf-brand", "");
      setText("tf-range", "Call for pricing");
      setText("tf-price-15", "—");
      setText("tf-price-10", "—");
      setText("tf-price-1", "—");

      // Hide slider and savings sections — not relevant for assessment
      var sliderWrap = document.querySelector(".tf-slider-wrap");
      var sliderLabels = document.querySelector(".tf-slider-labels");
      var effTitle = document.querySelector(".tf-eff-title");
      var effSub = document.querySelector(".tf-eff-sub");
      if (sliderWrap) sliderWrap.style.display = "none";
      if (sliderLabels) sliderLabels.style.display = "none";
      if (effTitle) effTitle.style.display = "none";
      if (effSub) effSub.style.display = "none";

      // Hide price grid — prices are null
      var estGrid = document.querySelector(".tf-est-grid");
      if (estGrid) estGrid.style.display = "none";

      var greetElA = document.getElementById("tf-greeting");
      if (greetElA && lead.firstName) {
        greetElA.textContent =
          "Hi " + lead.firstName + ", here is what we found.";
      }
      return;
    }

    document.body.classList.add("tf-normal");
    setText("tf-cat", system.category.toUpperCase());
    setText("tf-cat-title", system.category);
    setText("tf-specs", system.specs);
    setText("tf-brand", system.brand);
    setText(
      "tf-range",
      "$" +
        system.rangeLow.toLocaleString() +
        " \u2013 $" +
        system.rangeHigh.toLocaleString(),
    );

    var imgEl = document.getElementById("tf-system-img");
    if (imgEl)
      imgEl.src =
        TF_SYSTEM_IMAGES[system.category] || TF_SYSTEM_IMAGES["Furnace & AC"];

    var greetEl = document.getElementById("tf-greeting");
    if (greetEl && lead.firstName) {
      greetEl.textContent =
        "Hi " + lead.firstName + ", here is the system we recommend.";
    }

    var slider = document.getElementById("tf-slider");
    var bubble = document.getElementById("tf-slider-bubble");
    if (!slider) return;

    function updateSlider() {
      if (!system.rangeLow || !system.rangeHigh) return; // safety check
      var pos = parseInt(slider.value, 10);
      var t = (pos - 20) / 30;
      var price = system.rangeLow + (system.rangeHigh - system.rangeLow) * t;
      setText("tf-price-15", String(Math.round(tfMonthly(price, 15, 12.99))));
      setText("tf-price-10", String(Math.round(tfMonthly(price, 10, 9.99))));
      setText(
        "tf-price-1",
        Math.round(tfMonthly(price, 1, 0)).toLocaleString(),
      );
      var savingsDollar = Math.round(8000 + (pos - 20) * 233);
      setText("tf-savings-dollar", savingsDollar.toLocaleString());
      setText("tf-savings-pct", String(pos));
      var pct = ((pos - 20) / 30) * 100;
      if (bubble) bubble.style.left = pct + "%";
    }
    slider.addEventListener("input", updateSlider);
    updateSlider();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
