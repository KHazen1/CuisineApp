<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();
const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
    <div class="text-green-200 bg-green-900">
        <div class="container flex items-center justify-between mx-auto">
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                        <li 
                            class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                        >
                            Home
                        </li>
                    </router-link>
                    <router-link to="/about">
                        <li
                            class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                        >
                            About
                        </li>
                    </router-link>
                    <router-link 
                        v-if="!isAuthenticated"
                        :to="{ path: '/login', name: 'Login' }"
                    >
                        <li 
                            class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                        >
                            Login
                        </li>
                    </router-link>
                    <div v-else class="flex">
                        <router-link :to="{ name: 'Recipes' }">
                            <li
                                class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                            >
                                Recipes
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'Shopping' }">
                            <li
                                class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                            >
                                Grocery List
                            </li>
                        </router-link> 
                        <button @click="loggingOut">
                            <li
                                class="px-4 py-8 hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
                            >
                                Logout
                            </li>
                        </button>
                    </div>
                </ul>
            </nav>
            <h1 class="px-2 text-3xl font-thin tracking-tighter">Compact<span class="font-serif">Cuisine</span>
            </h1>
        </div>
    </div>
</template>