<template>
  <div class="div">
    <h1 class="text-center">Registro</h1>
    <v-form @submit.prevent="registrarse">
      <v-text-field v-model="data.username" label="Nombre" type="text">
      </v-text-field>
      <v-text-field v-model="data.email" label="Correo" type="email">
      </v-text-field>
      <v-text-field v-model="data.password" label="Contraseña" type="password"></v-text-field>
      <v-btn type="submit" class="btn-registroLogin">
        Registrarse <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@/router";
import axiosInstance from "../../Middlewares/axiosInstance";


const data = reactive({
  username: "",
  email: "",
  password: "",
});

function registrarse() {

  if (!data.email || !data.password || !data.username) {
    console.log("No se pudo registrar el usuario, comprueba si la cuenta está disponible");
    return;
  }
  axiosInstance
    .post("register", {
      username: data.username,
      email: data.email,
      password: data.password,

    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        console.log(res);
        router.push("/login");

      }
      alert("Usuario registrado correctamente");
    })
    .catch((err) => {
      console.log("Error ", err);
    });

}
</script>

<style ></style>