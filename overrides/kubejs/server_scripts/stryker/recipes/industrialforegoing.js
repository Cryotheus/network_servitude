onEvent('recipes', event => {
    event.remove({output: 'thermal:niter_ore'})

    retags = [
        'aluminum',
        'apatite',
        'bitumen',
        'certus_quartz',
        'charged_certus_quartz',
        'cinnabar',
        'coal',
        'cobalt',
        'copper',
        'diamond',
        'dimensional',
        'emerald',
        'fluorite',
        'gold',
        'iridium',
        'iron',
        'lapis',
        'lead',
        'nickel',
        'osmium',
        'peridot',
        'potassium_nitrate',
        'quartz',
        'redstone',
        'ruby',
        'sapphire',
        'silver',
        'sulfur',
        'tin',
        'uranium',
        'zinc'
    ]

    for(mat of retags){
        event.replaceOutput({type: 'industrialforegoing:laser_drill_ore'}, '#forge:ores/'+mat, '#forge:chunks/'+mat)
    }

    event.replaceOutput({type: 'industrialforegoing:laser_drill_ore'}, 'emendatusengimatica:arcane_ore', 'emendatusengimatica:arcane_chunk')
})