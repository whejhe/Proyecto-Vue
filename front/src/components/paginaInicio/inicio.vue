<template>
    <v-app class="fondo" v-if="authStore.estaLogueado">
        <v-main class="margenAlto">
            <div class="div">
            <v-container class="margenInferior">
                <v-row>
                    <v-col cols="12" sm="3" class="columna">
                        <v-sheet elevation="7">
                            <div class="container">
                            </div>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="9" class="columna">
                        <div class="container">
                            <v-sheet elevation="7">
                                <h3>CLUTCH - ELECTRIC WORRY</h3>
                                <p> <iframe max-width="500" max-height="320" src="https://www.youtube.com/embed/s4ABpbxIPFI"
                                    frameborder="0"></iframe>La banda de Maryland es uno de esos casos de evolución
                                    perfecta.
                                    Empezaron haciendo
                                    hardcore,
                                    pero a lo largo de los años han ido puliendo su estilo hasta llegar a un stoner con
                                    una
                                    fuerte influencia del blues. From Beale Street to Oblivion es uno de sus trabajos
                                    más
                                    conseguidos de sus últimos años y este Electric Worry un maravilloso ejemplo de cómo
                                    han
                                    encajado el hammond y la armónica en su sonido.</p>

                            </v-sheet>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col cols="12" sm="3" class="columna">
                        <v-sheet elevation="7">
                            <div class="container">
                            </div>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="9" class="columna">
                        <div class="container">
                            <v-sheet elevation="7">
                                <h3>CLUTCH - ELECTRIC WORRY</h3>
                                <p> <iframe max-width="500" max-height="320" src="https://www.youtube.com/embed/YMkrud5tBW0"
                                    frameborder="0"></iframe>La banda de Maryland es uno de esos casos de evolución
                                    perfecta.
                                    Empezaron haciendo
                                    hardcore,
                                    pero a lo largo de los años han ido puliendo su estilo hasta llegar a un stoner con
                                    una
                                    fuerte influencia del blues. From Beale Street to Oblivion es uno de sus trabajos
                                    más
                                    conseguidos de sus últimos años y este Electric Worry un maravilloso ejemplo de cómo
                                    han
                                    encajado el hammond y la armónica en su sonido.</p>

                            </v-sheet>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        </v-main>
    </v-app>
</template>
<script setup>

import { authStores } from "@/stores";
const authStore = authStores();
//import {ficha} from ficha.vue;

</script>

<style scoped>

.margenAlto{
    margin-top: 100px;
}
.margenInferior{
    margin-bottom: 50px;
}
.fondo {
    background-color: #333434;
    margin: 0;
}

.columna {
    background-color: #001F03;
    min-height: 100px;
}

.container {
    display: flex;
    justify-content: right;
    overflow-y: scroll;
    background-color: white;
}

h3 {
    text-align: center;
    color: rgb(0, 0, 0);
}

iframe {
    float: right;
    padding-top: 10px;
    padding-left: 10px;
}
</style>