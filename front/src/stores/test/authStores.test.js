import { createPinia } from "pinia";
import { router } from "../../router";
import axios from "axios";
import useAuthStore from "../authStores";
// import {describe, beforeEach, it, expect} from 'vitest'


describe('Auth Store', () => {
    let store;

    beforeEach(() => {
        const pinia = createPinia();
        store = useAuthStore(pinia);
        // Reiniciar el estado del almacén antes de cada prueba si es necesario
        store.$reset();
    });

    it('should set user on login', async () => {
        // Datos de prueba
        const email = 'a@gmail.com';
        const password = '1234';
        const user = { id: 6, username: 'a' };

        // Espiar la función axios.post para devolver el usuario simulado
        axios.post = jest.fn().mockResolvedValue(user);

        // Llamar a la acción de inicio de sesión del almacén
        await store.login(email, password);

        // Verificar que el usuario se haya establecido correctamente en el almacén
        expect(store.user).toEqual(user);

        // Verificar que el usuario se haya guardado en el almacenamiento local
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'user',
            JSON.stringify(user)
        );

        // Verificar que se haya redirigido al usuario a la ruta correcta
        expect(router.push).toHaveBeenCalledWith('/');
    });
});
