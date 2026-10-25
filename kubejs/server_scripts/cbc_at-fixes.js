// server_scripts/cbc_at-fixes.js

const DROP_BLOCKS = [
    'cbc_ballistics:ballistic_calculator',
    'cbc_ballistics:artillery_coordinator',
    'cbc_ballistics:cannon_control',
    'cbc_at:armor_piercing_shell_caseless',
    'cbc_at:fluid_shell_cartridge',
    'cbc_at:fluid_shell_caseless',
    'cbc_at:high_explosive_cartridge',
    'cbc_at:high_explosive_caseless',
    'cbc_at:shrapnel_cartridge',
    'cbc_at:shrapnel_caseless',
    'cbc_at:smoke_cartridge',
    'cbc_at:cluster_cartridge',
    'cbcatfix:flak_shell',
    'cbcatfix:heavy_he_shell',
    'cbcatfix:flak_shell',
    'cbc_at:armor_piercing_shell_cartridge',
    'cbc_at:smoke_caseless',
    'cbcatfix:big_rocket_rail',
    'cbcatfix:big_rocket_rail_breech',
    'cbc_at:rocket_pod_rail_mould',
    'cbc_at:rocket_pod_breech_mould'
]

DROP_BLOCKS.forEach(block => {
    BlockEvents.broken(block, event => {
        event.player.give(Item.of(block))
    })

    BlockEvents.rightClicked(block, event => {
        const player = event.player
        const item = player.mainHandItem

        if (player.isCrouching() && item.id == 'create:wrench') {
            player.give(Item.of(block))
            event.block.set('minecraft:air')
            event.cancel()
        }
    })
})

ServerEvents.recipes(event => {
    event.recipes.create.cutting('cbc_at:rocket_pod_rail_mould', '#minecraft:logs').processingTime(200)
    event.recipes.create.cutting('cbc_at:rocket_pod_breech_mould', '#minecraft:logs').processingTime(200)
})

// Made by Snoopy