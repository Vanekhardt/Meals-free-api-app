import { createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import DefaultView from '../components/DefaultView.vue';
import mealDetail from '../views/mealDetail.vue';
import MealDetail from '../views/mealDetail.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        
        {
            path:"/",
            component:DefaultView,
            children:[

                    
        {
            path:"/",
            name:"home",
            component:Home
    
        },
      
        {
            path:"/meals-by-name/:name?",
            name:"byname",
            component:MealsByName,
        },
        {
            path:"/meals-by-letter/:letter?",
            name:"byletter",
            component:MealsByLetter,
        },
        {
            path:"/meals-by-ingredient/:ingredient?",
            name:"byingredient",
            component:MealsByIngredient,
        },
        {
            path:"/meal/:id",
            name:"mealdetail",
            component:MealDetail,
        }
            
            
            
            
            
            
            
            
            ]
    
        },




    ]
})


export default router;