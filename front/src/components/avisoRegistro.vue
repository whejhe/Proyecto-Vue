<template>
    <v-spacer v-if="this.$route.path === '/'"></v-spacer>
    <v-section class="container" v-if="!authStore.estaLogueado && this.$route.path === '/'">
        <h2>Debes de estar Logueado para ver el contenido de la Pagina</h2>
    </v-section>
    <v-spacer v-if="this.$route.path === '/'"></v-spacer>
</template>

<script setup>
import { authStores } from "@/stores";

const authStore = authStores();

</script>

<style scoped>

.container{
    display: flex;
    background-color: bisque;
    width: 100;
    margin: 0;
    justify-content: center;
    height: 500px;
}

h2{
    text-align: center;
    color: #001F03;
    font-size: 30px;
    font-weight: bold;
    padding-top: 100px;
}
.espacio{
    height: 150px;
}

</style>