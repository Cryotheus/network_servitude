onEvent('recipes', (event) => {
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