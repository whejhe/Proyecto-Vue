<template>
    <v-spacer></v-spacer>
    <v-footer id="footer">
        <h2>Pie de Pagina</h2>
        <p>Todos los derechos reservados</p>
    </v-footer>
</template>

<script setup>

</script>
<style scoped>

element.style {
    padding-left: 0px;
}

#footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #001F03;
    position:sticky;
    bottom: 0;
    width: 100%;
    height: 100px;
    max-height: 100px;
    margin: 0;
}

#footer h2{
    margin-right: auto;
    padding: 15px;
    color: white;
}

#footer p{
    margin-left: 10px;
    padding: 15px;
    color: white;
}
</style>