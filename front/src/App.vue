<template>
  <v-app>
    <NavPrincipal></NavPrincipal>
    <avisoRegistro></avisoRegistro> 
  <!-- <div class="container"> -->
    <router-view></router-view>
  <!-- </div> -->
    <footerComponent></footerComponent>
  </v-app>
</template>

<script setup>

import {avisoRegistro} from "@/components";
import { footerComponent } from "@/components";
import {NavPrincipal} from "@/components";

</script>