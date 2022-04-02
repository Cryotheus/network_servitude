onEvent('recipes', event => {
    for(mat of global.retags){
        event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/'+mat})
        event.remove({type: 'minecraft:stonecutting', output: '#forge:ores'})
    }
})