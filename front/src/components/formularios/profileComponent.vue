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
            <v-file-input v-model="data.profileImage" label="Imagen de perfil" accept="image/*" prepend-icon="mdi-camera"
                @change="onFileChange"></v-file-input>
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
import { toast } from "vue3-toastify";

const data = reactive({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profileImage: null, // Cambia el valor inicial a null
});

let errorMessage = "";

async function agregarPerfil() {
    if (!data.firstName || !data.lastName) {
        console.log(
            "No se pudo completar el perfil, comprueba si la cuenta está disponible"
        );
        errorMessage =
            "No se pudo completar el perfil, comprueba si la cuenta está disponible o los campos son correctos";
        return;
    }
    const token = getToken();
    if (!token) {
        errorMessage = "No se pudo completar el perfil, no se encontró un token válido";
        return;
    }
    try {
        // Crea un objeto FormData para enviar los datos del perfil y la imagen
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("age", data.age);
        formData.append("gender", data.gender);
        formData.append("profileImage", data.profileImage); // Agrega la imagen al FormData

        const response = await axiosInstance.post("profile", formData, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data", // Establece el tipo de contenido como multipart/form-data
            },
        });

        console.log(response.data);
    } catch (error) {
        console.log(error);
        errorMessage =
            "Ha ocurrido un error al agregar el perfil. Por favor, inténtelo de nuevo más tarde.";
    }
}

function onFileChange(event) {
    const file = event.target.files[0];
    data.profileImage = file; // Almacena el archivo seleccionado en la propiedad reactive 'profileImage'
}

</script>

<style>
.error-message {
    color: red;
}
</style>