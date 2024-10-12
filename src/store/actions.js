import instance from "../axiosClient";

export function searchMeals({commit},keyword){
    instance.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        
        commit('setSearchedMeals',data.meals)
    })
}

export function MealsByLetter({commit},letter){
    instance.get(`search.php?f=${letter}`)
    .then(({data})=>{
        
        commit('setMealsByLetter',data.meals)
    })
}