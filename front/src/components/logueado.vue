<template>
    <v-h1> Puedes acceder </v-h1>
    <v-btn @click="desloguear">
        Cerrar Sesión <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
</template>

<script setup>
import { router } from "@/router"
function desloguear() {
    localStorage.removeItem("token");
    router.push("/");
}
</script>