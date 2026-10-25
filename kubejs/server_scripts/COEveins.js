ServerEvents.recipes(event => {

//netherite-gold
    event.recipes.createoreexcavation.vein('{"text": "Netherite Gold Vein", "color": "gold"}', 'advancednetherite:netherite_gold_ingot')
        .placement(512, 64, 71234561)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:netherite_gold_vein");

    event.recipes.createoreexcavation.drilling('advancednetherite:netherite_gold_ingot', 'kubejs:netherite_gold_vein', 36000)
        .drill('create_ore_excavation_plus:ultimate_drill')
        .fluid('minecraft:lava')
        .stress(512)
        .id("kubejs:drilling_netherite_gold");

//netherite-emerald
    event.recipes.createoreexcavation.vein('{"text": "Netherite Emerald Vein", "color": "green"}', 'advancednetherite:netherite_emerald_ingot')
        .placement(512, 64, 71234562)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:netherite_emerald_vein");

    event.recipes.createoreexcavation.drilling('advancednetherite:netherite_emerald_ingot', 'kubejs:netherite_emerald_vein', 36000)
        .drill('create_ore_excavation_plus:ultimate_drill')
        .fluid('minecraft:lava')
        .stress(512)
        .id("kubejs:drilling_netherite_emerald");

//netherite-diamond
    event.recipes.createoreexcavation.vein('{"text": "Netherite Diamond Vein", "color": "aqua"}', 'advancednetherite:netherite_diamond_ingot')
        .placement(512, 64, 71234563)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:netherite_diamond_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('advancednetherite:netherite_diamond_ingot', 0.9)
        ],
        'kubejs:netherite_diamond_vein',
        36000
    )
        .drill('create_ore_excavation_plus:ultimate_drill')
        .fluid('minecraft:lava')
        .stress(512)
        .id("kubejs:drilling_netherite_diamond");
		
//netherite scrap
    event.recipes.createoreexcavation.vein('{"text": "Pure Netherite Scrap Vein", "color": "red"}', 'minecraft:netherite_scrap')
        .placement(256, 32, 71234564)
        .biomeWhitelist('minecraft:is_nether')
        .id("kubejs:pure_netherite_scrap_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('minecraft:netherite_scrap', 0.65)
        ],
        'kubejs:pure_netherite_scrap_vein',
        20000
    )
        .drill('createoreexcavation:netherite_drill')
        .fluid('minecraft:lava')
        .stress(512)
        .id("kubejs:drilling_netherite_scrap");
		
		// Raw Titanium
    event.recipes.createoreexcavation.vein('{"text": "Titanium Vein", "color": "blue"}', 'rocketnautics:raw_titanium')
        .placement(350, 40, 84310572)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:titanium_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('rocketnautics:raw_titanium', 0.4),
			coeutil.processingOutput('rocketnautics:titanium_nugget', 0.9)
        ],
        'kubejs:titanium_vein',
        18000
    )
        .drill('createoreexcavation:netherite_drill')
        .stress(256)
        .id("kubejs:drilling_titanium");

// Raw Uranium
    event.recipes.createoreexcavation.vein('{"text": "Uranium Deposit", "color": "green"}', 'createnuclear:raw_uranium')
        .placement(256, 32, 95102481)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:uranium_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('createnuclear:raw_uranium', 0.90),
			coeutil.processingOutput('createnuclear:uranium_powder', 0.20)
        ],
        'kubejs:uranium_vein',
        18000
    )
        .drill('create_ore_excavation_plus:ultimate_drill')
        .stress(512)
        .id("kubejs:drilling_uranium");

// Raw Lead
    event.recipes.createoreexcavation.vein('{"text": "Heavy Lead Vein", "color": "dark_gray"}', 'createnuclear:raw_lead')
        .placement(256, 32, 10249583)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:lead_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('createnuclear:raw_lead', 0.95)
        ],
        'kubejs:lead_vein',
        18000 
    )
        .drill('createoreexcavation:diamond_drill')
        .stress(256)
        .id("kubejs:drilling_lead");
		
// Raw nickel
    event.recipes.createoreexcavation.vein('{"text": "Nickel Vein", "color": "dark_gray"}', 'tfmg:raw_nickel')
        .placement(256, 32, 10249584)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:nickel_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('tfmg:raw_nickel', 0.95)
        ],
        'kubejs:nickel_vein',
        18000 
    )
        .drill('createoreexcavation:diamond_drill')
        .stress(128)
        .id("kubejs:drilling_nickel");
		
// Raw lithium
    event.recipes.createoreexcavation.vein('{"text": "Lithium Vein", "color": "dark_gray"}', 'tfmg:raw_lithium')
        .placement(256, 32, 10249585)
        .biomeWhitelist('minecraft:is_overworld')
        .id("kubejs:lithium_vein");

    event.recipes.createoreexcavation.drilling(
        [
            coeutil.processingOutput('tfmg:raw_lithium', 0.95)
        ],
        'kubejs:lithium_vein',
        18000 
    )
        .drill('createoreexcavation:diamond_drill')
        .stress(128)
        .id("kubejs:drilling_lithium");		

});
