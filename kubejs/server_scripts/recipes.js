ServerEvents.recipes(event => {

    // lodestone 1.21.5+ recipe
    event.shaped('minecraft:lodestone', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:chiseled_stone_bricks',
        B: 'minecraft:iron_ingot'
    })

    // wire
    event.shaped('drivebywire:wire', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:chain'
    })

    // feather
    event.shaped('minecraft:feather', [
        '  A',
        ' A ',
        'B  '
    ], {
        A: 'minecraft:white_wool',
        B: 'minecraft:stick'
    })

    // spider eye
    event.shaped('minecraft:spider_eye', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:redstone',
        B: 'minecraft:redstone_block'
    })

    // skeleton skull
    event.shaped('minecraft:skeleton_skull', [
        'AAA',
        'BAB',
        'AAA'
    ], {
        A: 'minecraft:bone_block',
        B: 'minecraft:black_dye'
    })	
	
    // Cobweb
    event.shaped('minecraft:cobweb', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'minecraft:string',
        B: 'minecraft:white_dye'
    })	
	

	
	// bone
    event.shapeless('minecraft:bone', [
        'minecraft:bone_meal', 'minecraft:bone_meal', 'minecraft:bone_meal',
        'minecraft:bone_meal', 'minecraft:bone_meal', 'minecraft:bone_meal',
        'minecraft:bone_meal', 'minecraft:bone_meal', 'minecraft:bone_meal'
    ])
	
	//
	    event.shaped('create_dragons_plus:fluid_hatch', [
        ' A ',
        ' B ',
        'B  '
    ], {
        A: 'minecraft:iron_bars',
        B: 'create:fluid_pipe'
    })
	
	
    // white phosphorus
    event.shapeless('createbb:white_phosphorus', [
        'create:limestone'
    ])
	
	// lime sand
    event.shapeless('tfmg:limesand', [
        'create:limestone'
    ])
	
	// scute
    event.shaped('minecraft:turtle_scute', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:slime_ball',
        B: 'minecraft:emerald_block'
    })

	
    // wire cutter
    event.shaped('drivebywire:wire_cutter', [
        '   ',
        ' B ',
        'A A'
    ], {
        A: 'minecraft:shears',
        B: 'minecraft:iron_ingot'
    })

    // controller hub
    event.shaped('drivebywire:controller_hub', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'create:linked_controller',
        B: 'create:brass_casing'
    })

    // tweaked controller hub
    event.shaped('drivebywire:tweaked_controller_hub', [
        '   ',
        ' A ',
        ' B '
    ], {
        A: 'create_tweaked_controllers:tweaked_linked_controller',
        B: 'create:brass_casing'
    })

    // leather
    event.shapeless('minecraft:leather', [
        'minecraft:brown_dye',
        'minecraft:paper'
    ])

    // phantom membrane
    event.shaped('minecraft:phantom_membrane', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:prismarine_shard',
        B: 'minecraft:prismarine_crystals'
    })

    // end stone
    event.shaped(Item.of('minecraft:end_stone', 8), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:ender_pearl'
    })

    // honey bottle
    event.shapeless('minecraft:honey_bottle', [
        'minecraft:sugar',
        'minecraft:sugar',
        'minecraft:sugar',
        'minecraft:sugar',
        'minecraft:water_bucket'
    ])

    // leather from kelp
    event.smelting(
        'minecraft:leather',
        'minecraft:dried_kelp_block'
    ).xp(0.1)

    // wool
    event.shaped(Item.of('minecraft:white_wool', 4), [
        '   ',
        'AB ',
        'BA '
    ], {
        A: 'minecraft:paper',
        B: 'minecraft:string'
    })

    // breeze rod
    event.shaped('minecraft:breeze_rod', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:snowball',
        B: 'minecraft:blaze_rod'
    })

    // string
    event.shapeless('minecraft:string', [
        'minecraft:wheat_seeds',
        'minecraft:wheat_seeds'
    ])

    // egg
    event.shaped(Item.of('minecraft:egg', 2), [
        ' A ',
        'A A',
        ' A '
    ], {
        A: 'create:dough'
    })

    // pine resin
    event.shaped(
        Item.of('createpropulsion:pine_resin', 2),
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'minecraft:spruce_log',
            B: 'minecraft:spruce_planks'
        }
    )
	// pine resin
    event.shaped(
        Item.of('createoreexcavation:vein_finder', 1),
        [
            'DC ',
            'BA ',
            '  A'
        ],
        {
            A: 'minecraft:stick',
            B: 'minecraft:diamond',
			C: 'minecraft:amethyst_shard',
			D: 'minecraft:ender_eye'
        }
    )
    event.shaped(
        Item.of('coebetterfinder:radar_prospecteur', 1),
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: 'createoreexcavation:vein_finder',
            B: '#c:ingots/steel'
        }
    )
})


//bauxite recipe in crafttweaker

//end rod, ender pearl, ink sac in crafttweaker

//sputnik recipe in crafttweaker

//milk recipe in crafttweaker

//plastic recipe in crafttweaker

ServerEvents.recipes(event => {
    event.shaped('cbc_ballistics:ballistic_calculator', [
        'BAC',
        'EAA',
        'EDC'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:electron_tube',
        C: 'create:andesite_alloy',
        D: 'create:brass_casing',
        E: 'create:display_board'
    })
    event.shaped('cbc_ballistics:artillery_coordinator', [
        'ABA',
        'FEG',
        'CDC'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:electron_tube',
        C: 'create:andesite_alloy',
        D: 'create:brass_casing',
        E: 'create:display_board',
        F: 'cbc_ballistics:network_manager_item',
        G: 'create:transmitter'
    })
    event.shaped('cbc_ballistics:radio_item', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:lightning_rod',
        B: 'cbc_ballistics:artillery_coordinator',
        C: 'minecraft:leather'
    })
    event.shaped('cbc_ballistics:network_manager_item', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:transmitter',
        B: 'create:clipboard',
        C: 'create:andesite_alloy'
    })
    event.shaped('cbc_ballistics:cannon_control', [
        'ABA',
        'FEG',
        'CDC'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:electron_tube',
        C: 'create:andesite_alloy',
        D: 'create:brass_casing',
        E: 'create:display_board',
        F: 'cbc_ballistics:network_manager_item',
        G: 'create:transmitter'
    })
    event.shaped('cbc_ballistics:rangefinder', [
        ' FA',
        'DBE',
        'CE '
    ], {
        A: 'minecraft:spyglass',
        B: 'minecraft:string',
        C: 'minecraft:glass_pane',
        D: 'create:electron_tube',
        E: 'create:iron_sheet',
        F: 'minecraft:amethyst_shard'
    })
    event.shaped('rocketnautics:jetpack', [
        ' A ',
        'DBD',
        'C C'
    ], {
        A: 'tfmg:steel_mechanism',
        B: 'create:netherite_backtank',
        D: 'rocketnautics:titanium_sheet',
        C: 'rocketnautics:vector_thruster'
    })
	event.shaped('create_aeronautics_ftb_chunks:contraption_claim_block', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:obsidian',
        C: 'minecraft:glowstone'
    })
	//armor gold
	event.shaped('advancednetherite:netherite_gold_helmet', [
        'AAA',
        'ABA',
        '   '
    ], {
        A: 'advancednetherite:netherite_gold_ingot',
        B: 'advancednetherite:netherite_iron_helmet'
    })
		event.shaped('advancednetherite:netherite_gold_chestplate', [
        'ABA',
        'AAA',
        'AAA'
    ], {
        A: 'advancednetherite:netherite_gold_ingot',
        B: 'advancednetherite:netherite_iron_chestplate'
    })		
		event.shaped('advancednetherite:netherite_gold_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_gold_ingot',
        B: 'advancednetherite:netherite_iron_leggings'
    })
		event.shaped('advancednetherite:netherite_gold_boots', [
        '   ',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_gold_ingot',
        B: 'advancednetherite:netherite_iron_boots'
    })
	
	//armor emerald_block
	event.shaped('advancednetherite:netherite_emerald_helmet', [
        'AAA',
        'ABA',
        '   '
    ], {
        A: 'advancednetherite:netherite_emerald_ingot',
        B: 'advancednetherite:netherite_gold_helmet'
    })
		event.shaped('advancednetherite:netherite_emerald_chestplate', [
        'ABA',
        'AAA',
        'AAA'
    ], {
        A: 'advancednetherite:netherite_emerald_ingot',
        B: 'advancednetherite:netherite_gold_chestplate'
    })		
		event.shaped('advancednetherite:netherite_emerald_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_emerald_ingot',
        B: 'advancednetherite:netherite_gold_leggings'
    })
		event.shaped('advancednetherite:netherite_emerald_boots', [
        '   ',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_emerald_ingot',
        B: 'advancednetherite:netherite_gold_boots'
    })
	
	// armor diamonds
	event.shaped('advancednetherite:netherite_diamond_helmet', [
        'AAA',
        'ABA',
        '   '
    ], {
        A: 'advancednetherite:netherite_diamond_ingot',
        B: 'advancednetherite:netherite_emerald_helmet'
    })
		event.shaped('advancednetherite:netherite_diamond_chestplate', [
        'ABA',
        'AAA',
        'AAA'
    ], {
        A: 'advancednetherite:netherite_diamond_ingot',
        B: 'advancednetherite:netherite_emerald_chestplate'
    })		
		event.shaped('advancednetherite:netherite_diamond_leggings', [
        'AAA',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_diamond_ingot',
        B: 'advancednetherite:netherite_emerald_leggings'
    })
		event.shaped('advancednetherite:netherite_diamond_boots', [
        '   ',
        'ABA',
        'A A'
    ], {
        A: 'advancednetherite:netherite_diamond_ingot',
        B: 'advancednetherite:netherite_emerald_boots'
    })
})

//hammers
ServerEvents.recipes(event => {
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:stone_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'minecraft:diamond_pickaxe',  
        'minecraft:stone'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:gold_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:stone_hammer',  
        'minecraft:gold_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:redstone_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_hammer',  
        'minecraft:redstone_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:lapis_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_hammer',  
        'minecraft:lapis_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:iron_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_hammer',  
        'advancednetherite:netherite_iron_ingot'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:diamond_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:iron_hammer',  
        'minecraft:diamond_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:emerald_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:diamond_hammer',  
        'minecraft:emerald_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:obsidian_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:emerald_hammer',  
        'advancednetherite:netherite_emerald_ingot'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:netherite_hammer', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:obsidian_hammer',  
        'advancednetherite:netherite_diamond_ingot'
    );
//excavators	
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:stone_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'minecraft:diamond_shovel',  
        'minecraft:stone'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:gold_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:stone_excavator',  
        'minecraft:gold_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:redstone_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_excavator',  
        'minecraft:redstone_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:lapis_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_excavator',  
        'minecraft:lapis_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:iron_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:gold_excavator',  
        'advancednetherite:netherite_iron_ingot'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:diamond_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:iron_excavator',  
        'minecraft:diamond_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:emerald_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:diamond_excavator',  
        'minecraft:emerald_block'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:obsidian_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:emerald_excavator',  
        'advancednetherite:netherite_emerald_ingot'
    );
    event.recipes.minecraft.smithing_transform(
        'onlyhammersandexcavators:netherite_excavator', 
        'minecraft:netherite_upgrade_smithing_template', 
        'onlyhammersandexcavators:obsidian_excavator',  
        'advancednetherite:netherite_diamond_ingot'
    );	
});

