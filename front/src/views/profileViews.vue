<template>
    <profileComponent modo="nuevo" nombre="" :datos="datos" ></profileComponent>  
</template>

<script setup>
import {reactive,onMounted} from 'vue';
import {profileComponent} from '@/components';
import axiosInstance  from '../Middlewares/axiosInstance';
import { getToken } from '../utils/token';

const datos = reactive({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profileImage: null
})

let errorMessage = "";
const token = getToken();

onMounted(() => {
    try{
        const response = axiosInstance.get(`profile/${id}`, {
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