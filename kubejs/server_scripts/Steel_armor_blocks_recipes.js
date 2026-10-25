// File: kubejs/server_scripts/steel_armor_blocks.js
// Minecraft 1.21.1 NeoForge + KubeJS

ServerEvents.recipes(event => {

    // ======================================================
    // STEEL INGOTS
    // ======================================================

    const steelIngots = [
        'createbigcannons:steel_ingot',
        'tfmg:steel_ingot',
        'createnuclear:steel_ingot'
    ]

    // ======================================================
    // COLORS
    // ======================================================

    const colors = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    // ======================================================
    // COLOR ID FIX
    // ======================================================

    function formatColor(color) {

        // special fixes
        if (color == 'light_blue') {
            return 'lightblue'
        }

        if (color == 'light_gray') {
            return 'lightgray'
        }

        return color
    }

    // ======================================================
    // DYE RECIPES
    // ======================================================

    function addDyeRecipes(baseBlock, outputSuffix) {

        colors.forEach(color => {

            let formattedColor = formatColor(color)

            let outputId = ''

            // SPECIAL EXCEPTION
            // orangehardsteelblock -> orange
            if (
                outputSuffix == 'hardsteelblock' &&
                color == 'orange'
            ) {

                outputId = 's_a_b:orange'
            }

            else {

                outputId =
                    's_a_b:' +
                    formattedColor +
                    outputSuffix
            }

            event.shapeless(
                Item.of(outputId),
                [
                    baseBlock,
                    `minecraft:${color}_dye`
                ]
            )
        })
    }

    // ======================================================
    // STEEL ARMOR BLOCK
    // s_a_b:steelblock
    // ======================================================

    // 1 heavy plate surrounded by 4 steel ingots

    steelIngots.forEach(ingot => {

        event.shaped(
            Item.of('s_a_b:steelblock'),
            [
                ' I ',
                'IPI',
                ' I '
            ],
            {
                I: ingot,
                P: 'tfmg:heavy_plate'
            }
        )
    })

    addDyeRecipes(
        's_a_b:steelblock',
        'steelblock'
    )

    // ======================================================
    // DOUBLE STEEL BLOCK
    // s_a_b:doublesteelblock
    // ======================================================

    steelIngots.forEach(ingot => {

        event.shaped(
            Item.of('s_a_b:doublesteelblock'),
            [
                ' I ',
                'ISI',
                ' I '
            ],
            {
                I: ingot,
                S: 's_a_b:steelblock'
            }
        )
    })

    addDyeRecipes(
        's_a_b:doublesteelblock',
        'doublesteelblock'
    )

    // ======================================================
    // HARD STEEL BLOCK
    // s_a_b:hardsteelblock
    // ======================================================

    event.shaped(
        Item.of('s_a_b:hardsteelblock'),
        [
            ' P ',
            'PDP',
            ' P '
        ],
        {
            P: 'tfmg:heavy_plate',
            D: 's_a_b:doublesteelblock'
        }
    )

    addDyeRecipes(
        's_a_b:hardsteelblock',
        'hardsteelblock'
    )

    // ======================================================
    // LIGHT STEEL BLOCK
    // s_a_b:lightsteelblock
    // ======================================================

    steelIngots.forEach(ingot => {

        event.shaped(
            Item.of('s_a_b:lightsteelblock'),
            [
                'II',
                'II'
            ],
            {
                I: ingot
            }
        )
    })

    addDyeRecipes(
        's_a_b:lightsteelblock',
        'lightsteelblock'
    )

})


//letters


// File: kubejs/server_scripts/brass_letters.js
// Minecraft 1.21.1 NeoForge + KubeJS

ServerEvents.recipes(event => {

    // ======================================================
    // MATERIALS
    // ======================================================

    const BRASS = 'create:brass_nugget'

    const STEEL_NUGGETS = [
        'createnuclear:steel_nugget',
        'tfmg:steel_nugget'
    ]

    // ======================================================
    // HELPERS - BRASS
    // ======================================================

    function brassLetter(id, pattern) {

        event.shaped(
            Item.of(`s_a_b:brass${id}`),
            pattern,
            {
                B: BRASS
            }
        )
    }

    function brassNumber(id, pattern) {

        event.shaped(
            Item.of(`s_a_b:brass_${id}`),
            pattern,
            {
                B: BRASS
            }
        )
    }

    // ======================================================
    // HELPERS - STEEL
    // ======================================================

    function steelLetter(id, pattern) {

        STEEL_NUGGETS.forEach(nugget => {

            event.shaped(
                Item.of(`s_a_b:${id}`),
                pattern,
                {
                    S: nugget
                }
            )
        })
    }

    function steelNumber(id, pattern) {

        STEEL_NUGGETS.forEach(nugget => {

            event.shaped(
                Item.of(`s_a_b:${id}`),
                pattern,
                {
                    S: nugget
                }
            )
        })
    }

    // ======================================================
    // BRASS LETTERS A-Z
    // ======================================================

    brassLetter('a', [
        ' B ',
        'B B',
        'BBB'
    ])

    brassLetter('b', [
        'BB ',
        'BBB',
        'BBB'
    ])

    brassLetter('c', [
        'BBB',
        'B  ',
        'BBB'
    ])

    brassLetter('d', [
        'BB ',
        'B B',
        'BB '
    ])

    brassLetter('e', [
        'BBB',
        'BB ',
        'BBB'
    ])

    brassLetter('f', [
        'BBB',
        'BB ',
        'B  '
    ])

    brassLetter('g', [
        'BBB',
        'B B',
        'BBB'
    ])

    brassLetter('h', [
        'B B',
        'BBB',
        'B B'
    ])

    brassLetter('i', [
        'BBB',
        ' B ',
        'BBB'
    ])

    brassLetter('j', [
        '  B',
        '  B',
        'BBB'
    ])

    brassLetter('k', [
        'B B',
        'BB ',
        'B B'
    ])

    brassLetter('l', [
        'B  ',
        'B  ',
        'BBB'
    ])

    brassLetter('m', [
        'B B',
        'BBB',
        'B B'
    ])

    brassLetter('n', [
        'BB ',
        'BBB',
        'B B'
    ])

    brassLetter('o', [
        'BBB',
        'B B',
        'BBB'
    ])

    brassLetter('p', [
        'BBB',
        'BBB',
        'B  '
    ])

    brassLetter('q', [
        'BBB',
        'B B',
        ' BB'
    ])

    brassLetter('r', [
        'BBB',
        'BB ',
        'B B'
    ])

    brassLetter('s', [
        'BBB',
        'BB ',
        'BBB'
    ])

    brassLetter('t', [
        'BBB',
        ' B ',
        ' B '
    ])

    brassLetter('u', [
        'B B',
        'B B',
        'BBB'
    ])

    brassLetter('v', [
        'B B',
        'B B',
        ' B '
    ])

    brassLetter('w', [
        'B B',
        'BBB',
        'BBB'
    ])

    brassLetter('x', [
        'B B',
        ' B ',
        'B B'
    ])

    brassLetter('y', [
        'B B',
        ' B ',
        ' B '
    ])

    brassLetter('z', [
        'BBB',
        ' B ',
        'BBB'
    ])

    // ======================================================
    // BRASS NUMBERS 0-9
    // ======================================================

    brassNumber('0', [
        'BBB',
        'B B',
        'BBB'
    ])

    brassNumber('1', [
        ' B ',
        'BB ',
        ' B '
    ])

    brassNumber('2', [
        'BBB',
        ' BB',
        'BB '
    ])

    brassNumber('3', [
        'BBB',
        ' BB',
        'BBB'
    ])

    brassNumber('4', [
        'B B',
        'BBB',
        '  B'
    ])

    brassNumber('5', [
        'BBB',
        'BB ',
        '  B'
    ])

    brassNumber('6', [
        'BBB',
        'BB ',
        'BBB'
    ])

    brassNumber('7', [
        'BBB',
        '  B',
        '  B'
    ])

    brassNumber('8', [
        'BBB',
        ' B ',
        'BBB'
    ])

    brassNumber('9', [
        'BBB',
        'BBB',
        '  B'
    ])

    // ======================================================
    // STEEL LETTERS B-Z
    // ======================================================

    steelLetter('b', [
        'SS ',
        'SSS',
        'SSS'
    ])

    steelLetter('c', [
        'SSS',
        'S  ',
        'SSS'
    ])

    steelLetter('d', [
        'SS ',
        'S S',
        'SS '
    ])

    steelLetter('e', [
        'SSS',
        'SS ',
        'SSS'
    ])

    steelLetter('f', [
        'SSS',
        'SS ',
        'S  '
    ])

    steelLetter('g', [
        'SSS',
        'S S',
        'SSS'
    ])

    steelLetter('h', [
        'S S',
        'SSS',
        'S S'
    ])

    steelLetter('i', [
        'SSS',
        ' S ',
        'SSS'
    ])

    steelLetter('j', [
        '  S',
        '  S',
        'SSS'
    ])

    steelLetter('k', [
        'S S',
        'SS ',
        'S S'
    ])

    steelLetter('l', [
        'S  ',
        'S  ',
        'SSS'
    ])

    steelLetter('m', [
        'S S',
        'SSS',
        'S S'
    ])

    steelLetter('n', [
        'SS ',
        'SSS',
        'S S'
    ])

    steelLetter('o', [
        'SSS',
        'S S',
        'SSS'
    ])

    steelLetter('p', [
        'SSS',
        'SSS',
        'S  '
    ])

    steelLetter('q', [
        'SSS',
        'S S',
        ' SS'
    ])

    steelLetter('r', [
        'SSS',
        'SS ',
        'S S'
    ])

    steelLetter('s', [
        'SSS',
        'SS ',
        'SSS'
    ])

    steelLetter('t', [
        'SSS',
        ' S ',
        ' S '
    ])

    steelLetter('u', [
        'S S',
        'S S',
        'SSS'
    ])

    steelLetter('v', [
        'S S',
        'S S',
        ' S '
    ])

    steelLetter('w', [
        'S S',
        'SSS',
        'SSS'
    ])

    steelLetter('x', [
        'S S',
        ' S ',
        'S S'
    ])

    steelLetter('y', [
        'S S',
        ' S ',
        ' S '
    ])

    steelLetter('z', [
        'SSS',
        ' S ',
        'SSS'
    ])

    // ======================================================
    // STEEL NUMBERS 0-9
    // ======================================================

    steelNumber('zero', [
        'SSS',
        'S S',
        'SSS'
    ])

    steelNumber('one', [
        ' S ',
        'SS ',
        ' S '
    ])

    steelNumber('two', [
        'SSS',
        ' SS',
        'SS '
    ])

    steelNumber('three', [
        'SSS',
        ' SS',
        'SSS'
    ])

    steelNumber('four', [
        'S S',
        'SSS',
        '  S'
    ])

    steelNumber('five', [
        'SSS',
        'SS ',
        '  S'
    ])

    steelNumber('six', [
        'SSS',
        'SS ',
        'SSS'
    ])

    steelNumber('seven', [
        'SSS',
        '  S',
        '  S'
    ])

    steelNumber('eight', [
        'SSS',
        ' S ',
        'SSS'
    ])

    steelNumber('nine', [
        'SSS',
        'SSS',
        '  S'
    ])

})