onEvent('recipes', event => {
    event.shaped('brazier:living_flame', [
        'SPS',
        'PMP',
        'SPS'
    ], {
        S: 'druidcraft:lime_soulfire',
        P: '#forge:gems/peridot',
        M: 'xreliquary:molten_core'
    })
})