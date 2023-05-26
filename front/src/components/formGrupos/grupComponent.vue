<template>
    <div class="div">
        <h1 class="text-center">Grupos</h1>
        <v-form @submit.prevent="añadirGrupo">
            <v-text-field v-model="data.name" label="Nombre" type="text">
            </v-text-field>
            <v-text-field v-model="data.yearFormed" label="Año de Formacion" type="text">
            </v-text-field>
            <v-text-field v-model="data.genero" label="Genero" type="text">
            </v-text-field>
            <v-text-field v-model="data.descripcion" label="Nombre" type="text">
            </v-text-field>
            <v-btn type="submit" class="btn-registroLogin">Registrar Grupo <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@/router";
import apiClient from "../../Middlewares/axiosInstance";


const data = reactive({
    name: "",
    yearFormed: "",
    genero: "",
    descripcion: "",
});

function añadirGrupo() {

    if (!data.name || !data.yearFormed || !data.genero || !data.descripcion) {
        console.log("No se pudo registrar el grupo, comprueba si el nombre está disponible");
    }
    apiClient
        .post("añadirGrupo", {
            name: data.name,
            yearFormed: data.yearFormed,
            genero: data.genero,
            descripcion: data.descripcion

        })
        .then((res) => {
            if (res.status === 200) {
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                }
                console.log(res);
                router.push("/login");

            }
            alert("Grupo registrado correctamente");
        })
        .catch((err) => {
            console.log("Error ", err);
        });

}
</script>

<style ></style>