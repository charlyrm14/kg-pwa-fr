<script setup lang="ts">

</script>

<template>
    <div>
        <div class="bg-white dark:bg-dark-light rounded-2xl p-4 mt-3">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Eliminar usuario </h4>
            </div>
            <div class="bg-gray-200 dark:bg-dark-extralight rounded-xl p-4 mt-4">
                <p class="text-gray-600 dark:text-gray-300 font-bold inline-flex items-center gap-x-4"> 
                    <input 
                        type="checkbox" 
                        name="confirm_delete" 
                        id="confirm_delete"
                        class="bg-indigo-500">
                            Confirmar desactivación de cuenta 
                </p>
            </div>
            <div class="flex justify-end items-center my-4">
                <button class="bg-red-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer hover:opacity-75">
                    Si, eliminar usuario
                </button>
            </div>
        </div>
    </div>
</template>