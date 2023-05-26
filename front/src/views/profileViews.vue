<template>
    <profileComponent modo="nuevo" nombre="" :datos="datos" ></profileComponent>  
</template>

<script setup>
import {reactive,onMounted} from 'vue';
import getToken from "../Middlewares/auth";
import {profileComponent} from '@/components';

const datos = reactive({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profileImage: null
})

let errorMessage = "";

onMounted(() => {
    const token = getToken();
    if (!token) {
        errorMessage = "No se pudo completar el perfil, no se encontró un token válido";
        return;
    }
    try{
        const response = axiosInstance.get(`profile/${this.$route.params.id}`, {
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        });
        const profileData = response.data;
        datos.firstName = profileData.firstName;
        datos.lastName = profileData.lastName;
        datos.age = profileData.age;
        datos.gender = profileData.gender;
        datos.profileImage = profileData.profileImage;
    }catch(error){
        console.log(error);
        errorMessage = "Ha ocurrido un error al agregar el perfil. Por favor, inténtelo de nuevo más tarde.";
    }
})
</script> 

<style></style>