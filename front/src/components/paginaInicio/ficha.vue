<template>
    <v-container>
                <v-row>
                    <v-col cols="12" sm="2" class="columna">
                        <v-sheet elevation="7">
                            <div class="container">
                            </div>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="8" class="columna">
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
                    <v-col cols="12" sm="2" class="columna">
                        <v-sheet elevation="7">
                            <p>un texto cualquiera</p>
                            <!--  -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
</template>

<script setup>
</script>

<style scoped>
.fondo {
    background-color: #53a77d;
    margin: 0;
}

.columna {
    background-color: #001F03;
    min-height: 100px;
}

.container {
    display: flex;
    justify-content: right;
    min-height: 240px;
    max-height: 280px;
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