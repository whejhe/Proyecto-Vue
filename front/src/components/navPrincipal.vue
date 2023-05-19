<template>
    <v-app-bar class="nav" :sticky="true">
        <v-toolbar prominent>
            <v-toolbar-title> Mi pagina Web</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon icon="md:home"></v-icon>
            <v-btn to="/" color="white">Inicio</v-btn>
            <v-btn v-if="!authStore.estaLogueado" to="/register" class="ma-2"> Registro </v-btn>
            <v-btn v-if="!authStore.estaLogueado" to="/login">Login</v-btn>
            <v-btn v-if="authStore.estaLogueado" to="/addGrupo">Añadir Grupo</v-btn>
            <v-btn v-if="authStore.estaLogueado" to="/user/perfil">Perfil</v-btn>
            <v-btn v-if="authStore.estaLogueado" @click="desloguear">Cerrar Sesion</v-btn>
        </v-toolbar>
    </v-app-bar>
    <v-spacer style="padding-top: 50px;"></v-spacer>
</template>

<script setup>
import { router } from "@/router"
import { authStores } from "@/stores";
const authStore = authStores();

function desloguear() {
    localStorage.removeItem("token");
    router.push("/");
    console.log('logueado:', authStore.estaLogueado);
    authStore.estaLogueado = false;
}

</script>

<style>
.nav {
    width: 100%;
    height: 120px;
}
</style>