onEvent('recipes', event => {
    event.remove({output: 'thermal:niter_ore'})

    for(mat of global.retags){
        event.replaceOutput({type: 'industrialforegoing:laser_drill_ore'}, '#forge:ores/'+mat, '#forge:chunks/'+mat)
    }

    event.replaceOutput({type: 'industrialforegoing:laser_drill_ore'}, 'emendatusenigmatica:arcane_ore', 'emendatusenigmatica:arcane_chunk')
})