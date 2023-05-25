<template>
    <div class="div">
        <h1 class="text-center">Perfil</h1>
        <v-form @submit.prevent="agregarPerfil">
            <v-text-field v-model="data.firstName" label="Nombre" type="text">
            </v-text-field>
            <v-text-field v-model="data.lastName" label="Apellido" type="text">
            </v-text-field>
            <v-text-field v-model="data.age" label="Edad" type="number">
            </v-text-field>
            <v-select v-model="data.gender" label="Genero" :items="['Masculino', 'Femenino', 'Otro']">
            </v-select>
            <v-text-field v-model="data.profileImage" label="Imagen de perfil" type="url"
                hint="Añade aqui una URL con tu imagen de perfil">
            </v-text-field>
            <v-btn type="submit" class="btn-registroLogin">
                Guardar <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
        </v-form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axiosInstance from "../../middlewares/axiosInstance";
import getToken from "../../Middlewares/auth";


const data = reactive({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profileImage: "",
});

let errorMessage = "";

async function agregarPerfil() {

    if (!data.firstName || !data.lastName) {
        console.log("No se pudo completar el perfil, comprueba si la cuenta está disponible");
        errorMessage = "No se pudo completar el perfil, comprueba si la cuenta está disponible o los campos son correctos";
        return
    }
    const token = getToken();
    if (!token) {
        errorMessage = "No se pudo completar el perfil, no se encontro un token valido";
    }
    try {
        const response = await axiosInstance.post(
            "profile",
            {
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                gender: data.gender,
                profileImage: data.profileImage,
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
        errorMessage = "Ha ocurrido un error al agregar el perfil. Por favor, inténtelo de nuevo más tarde.";
    }
}
</script>

<style>
.error-message {
    color: red;
}
</style>