onEvent('recipes', (event) => {
    //grinder recipes
    for(mat of global.retags){
        if(Ingredient.of('emendatusenigmatica:'+mat+'_dust').isInvalidRecipeIngredient()){
            continue
        }else{
            event.remove({type: 'appliedenergistics2:grinder', input: '#forge:ores/'+mat})
            generateOreChunkGrindingRecipes(event, mat)
        }
    }

    createAdvancedGrindingRecipe(event, "forge:chunks/charged_certus_quartz", "forge:dusts/certus_quartz", 2, "forge:dusts/certus_quartz", 0.9, 1, 4)
    createAdvancedGrindingRecipe(event, "forge:chunks/bitumen", "forge:bitumen", 1, "forge:bitumen", 0.9, 1, 4)
})

function generateOreChunkGrindingRecipes(event, material){
    event.custom({
        "type": "appliedenergistics2:grinder",
        "input": {
            "tag": "forge:chunks/"+material
        },
        "result": {
            "primary": {
                "tag": "forge:dusts/"+material,
                "count": 1
            },
            "optional": [
                {
                    "tag": "forge:dusts/"+material,
                    "chance": 0.9
                }
            ]
        },
        "turns": 4
    })
}

function createAdvancedGrindingRecipe(event, input, result, resultCount, extraResult, extraResultChance, extraResultCount, turns){
    event.custom({
        "type": "appliedenergistics2:grinder",
        "input": {
            "tag": input
        },
        "result": {
            "primary": {
                "tag": result,
                "count": resultCount
            },
            "optional": [
                {
                    "tag": extraResult,
                    "count": extraResultCount,
                    "chance": extraResultChance
                }
            ]
        },
        "turns": turns
    })
}

