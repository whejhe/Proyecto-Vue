<template>
  <div class="div">
    <h1 class="text-center">Login</h1>
    <v-alert v-model="data.showAlert" type="error" class="mb-3" closable>{{ data.errorText }} </v-alert>
    <v-form @submit.prevent="iniciarSesion">
      <v-text-field v-model="data.email" label="Correo" type="e-mail"> </v-text-field>
      <v-text-field v-model="data.password" label="Contraseña" type="password"></v-text-field>
      <v-btn type="submit" class="btn-registroLogin"> Iniciar Sesión <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { router } from "@/router";
import axiosInstance from "../../Middlewares/axiosInstance";
import { authStores } from "@/stores";

const authStore = authStores();

const data = reactive({
  email: "",
  password: "",
  showAlert: false,
});

function iniciarSesion() {

  if (!data.email || !data.password) {
    data.showAlert = true;
    data.errorText = 'Todos los campos son obligatorios'
    return;
  }

  axiosInstance
    .post("login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        router.push("/")
        alert("Usuario logeado correctamente"),
          authStore.estaLogueado = true;
        router.push("/");
      } else {
        console.log(Error);
      }
    })
    .catch((err) => {
      console.log("Error ", err);
      const res = err.response
      if (res.data.errorCode === 106)
        console.log();
      data.showAlert = true
      data.errorText = 'Usuario o contraseña inválidas'
    });

}
</script>

<style></style>