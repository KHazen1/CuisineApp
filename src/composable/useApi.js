import { ref } from "vue";
import axios from "axios";

const meals = ref();

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/random.php"
});


export const useApi = () => {
  const getMeals = async () => {
    const response = await api.get("meals");
    meals.value = response.data.meals;
  };
  return {meals, getMeals};
};