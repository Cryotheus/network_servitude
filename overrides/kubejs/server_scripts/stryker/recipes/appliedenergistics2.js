onEvent('recipes', (event) => {
    event.remove({id: 'appliedenergistics2:grinder/certus_quartz_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/nether_quartz_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/gold_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/iron_dust_ore'})
    event.remove({id: 'appliedenergistics2:network/parts/quartz_fiber_part'})
    event.remove({id: 'appliedenergistics2:network/cables/smart_fluix_clean'})
    event.remove({id: 'appliedenergistics2:network/cables/dense_smart_fluix_clean'})

    event.shaped('4x appliedenergistics2:quartz_fiber', [
        ' G ',
        'GQG',
        ' G '
    ], {
        G: '#forge:glass_panes',
        Q: '#appliedenergistics2:dusts/quartz'
    })

    event.shapeless('appliedenergistics2:fluix_smart_cable', ['#appliedenergistics2:smart_cable'])
    event.shapeless('appliedenergistics2:fluix_smart_dense_cable', ['#appliedenergistics2:smart_dense_cable'])

    const ore_chunks = Ingredient.of('#forge:chunks').itemIds;
    ore_chunks.forEach((value) => {
        materialTag = value.substring(0,value.length-5)+'dust'
        if(Ingredient.of(materialTag).isInvalidRecipeIngredient()){
            return
        }else{
            createGrinderRecipe(event, value, materialTag, 4)
        }
    })
})

function createGrinderRecipe(e, material, result, turns){
    e.custom({
        "type": "appliedenergistics2:grinder",
        "input": {
            "item": material
        },
        "result": {
            "primary": {
                "item": result,
                "count": 1
            },
            "optional": [
                {
                    "item": result,
                    "chance": 0.9
                }
            ]
        },
        "turns": turns
    })
}