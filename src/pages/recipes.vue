<script setup>
import { useApi } from "../composable/useApi";

const {meals, getMeals} = useApi();

</script>

<template>
  <div class="bg-gray-200">
    <div class="flex-row py-6 text-center ">
      <h3 class="text-6xl ">
        Meal Time!
      </h3>
      <h5>
        Click here for random recipe
     </h5>
      <button  @click="getMeals" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
       Get Recipe 🍔
       </button>
    </div>
      <div v-for="meal in meals" :key="meal.idMeal">
        <div class="flex-row py-6 text-center ">
          <div class="py-2">
            <h3 class="text-4xl">{{ meal.strMeal }}</h3>
            <p>Category: {{ meal.strCategory }}</p>
            <p>Region: {{ meal.strArea }}</p>
          </div>
          <h4 class="py-2 text-2xl">Instructions</h4>
          <p class="py-2 mx-4">{{ meal.strInstructions }}</p>
        <div class="px-6 mx-6 text-justify">
          <h3 class="py-4 text-3xl tracking-wide">Ingredients</h3>
            <ul class="px-2 list-disc">
                <li>{{ meal.strIngredient1 }} - {{ meal.strMeasure1 }}</li>
                <li>{{ meal.strIngredient2 }} - {{ meal.strMeasure2 }}</li>
                <li>{{ meal.strIngredient3 }} - {{ meal.strMeasure3 }}</li>
                <li>{{ meal.strIngredient4 }} - {{ meal.strMeasure4 }}</li>
                <li>{{ meal.strIngredient5 }} - {{ meal.strMeasure5 }}</li>
                <li>{{ meal.strIngredient6 }} - {{ meal.strMeasure6 }}</li>
                <li>{{ meal.strIngredient7 }} - {{ meal.strMeasure7 }}</li>
                <li>{{ meal.strIngredient8 }} - {{ meal.strMeasure8 }}</li>
                <li>{{ meal.strIngredient9 }} - {{ meal.strMeasure9 }}</li>
                <li>{{ meal.strIngredient10 }} - {{ meal.strMeasure10 }}</li>
                <li>{{ meal.strIngredient11 }} - {{ meal.strMeasure11 }}</li>
                <li>{{ meal.strIngredient12 }} - {{ meal.strMeasure12 }}</li>
                <li>{{ meal.strIngredient13 }} - {{ meal.strMeasure13 }}</li>
                <li>{{ meal.strIngredient14 }} - {{ meal.strMeasure14 }}</li>
                <li>{{ meal.strIngredient15 }} - {{ meal.strMeasure15 }}</li>
                <li>{{ meal.strIngredient16 }} - {{ meal.strMeasure16 }}</li>
                <li>{{ meal.strIngredient17 }} - {{ meal.strMeasure17 }}</li>
                <li>{{ meal.strIngredient18 }} - {{ meal.strMeasure18 }}</li>
                <li>{{ meal.strIngredient19 }} - {{ meal.strMeasure19 }}</li>
                <li>{{ meal.strIngredient20 }} - {{ meal.strMeasure20 }}</li>
			      </ul>
          </div>
        </div>
		  </div>
  </div>
</template>