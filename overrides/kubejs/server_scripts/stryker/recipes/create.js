onEvent('recipes', event => {
    event.remove({id: 'create:compat/thermal/crushing/niter_ore'})
    for(mat of global.retags){
        event.replaceInput({type: 'create:crushing'}, '#forge:ores/'+mat, '#forge:chunks/'+mat)
        event.replaceInput({type: 'create:milling'}, '#forge:ores/'+mat, '#forge:chunks/'+mat)
    }
})