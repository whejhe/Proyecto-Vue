<template>
    <div class="div">
        <h1 class="text-center">Perfil</h1>
        <v-form @submit.prevent="agregarPerfil">
            <h3>{{}}</h3>
            <v-text-field v-model="data.email" label="Correo" type="e-mail"> </v-text-field>
            <v-text-field v-model="data.password" label="Contraseña" type="password"></v-text-field>
            <v-text-field v-model="data.firstName" label="Nombre" type="text">
            </v-text-field>
            <v-text-field v-model="data.lastName" label="Apellido" type="text">
            </v-text-field>
            <v-text-field v-model="data.age" label="Edad" type="number">
            </v-text-field>
            <v-select v-model="data.gender" label="Genero" :items="['male', 'female', 'other']">
            </v-select>
            <v-file-input v-model="data.profileImage" label="Imagen de perfil" accept="@/images/*" prepend-icon="mdi-camera"
                @change="onFileChange"></v-file-input>
            <v-btn type="submit" class="btn-registroLogin">
                Guardar <v-icon icon="mdi-vuetify"> </v-icon>
            </v-btn>
        </v-form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@/router";
import axiosInstance from "../../Middlewares/axiosInstance";


const data = reactive({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profileImage: null, // Cambia el valor inicial a null
});


let errorMessage = "";

async function agregarPerfil() {
    axiosInstance
        .post("profile", {
            id : "",
            email: data.email,
            password: data.password,
            firstname: data.firstName,
            lastName: data.lastName,
            age: data.age,
            gender: data.gender,
            profileImage: data.profileImage,
        })
        .then((res) => {
            if (res.status === 200) {
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                }
                console.log(res);
                router.push("/");

            }
            alert("Usuario actualizado correctamente");
        })
        .catch((err) => {
            console.log("Error ", err);
        });
}


async function onFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', file);
    data.profileImage = formData;
}


</script>

<style>
.error-message {
    color: red;
}
</style>