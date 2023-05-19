import { createPinia } from "pinia";
import { router } from "../../router";
import axios from "axios";
import useAuthStore from "../authStores";
/* 
describe("Auth Store", () => {
    let store;

    beforeEach(() => {
        const pinia = createPinia();
        store = useAuthStore(pinia);
        // Reiniciar el estado del almacén antes de cada prueba si es necesario
        store.$reset();
    });

    it("should set user on login", async () => {
        // Datos de prueba
        const email = "test@example.com";
        const password = "password";
        const user = { id: 1, username: "test" };

        // Espiar la función axios.post para devolver el usuario simulado
        jest.spyOn(axios, "post").mockResolvedValue(user);

        // Llamar a la acción de inicio de sesión del almacén
        await store.login(email, password);

        // Verificar que el usuario se haya establecido correctamente en el almacén
        expect(store.user).toEqual(user);

        // Verificar que el usuario se haya guardado en el almacenamiento local
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "user",
            JSON.stringify(user)
        );

        // Verificar que se haya redirigido al usuario a la ruta correcta
        expect(router.push).toHaveBeenCalledWith("/");
    });

    it("should remove user on logout", () => {
        // Establecer un usuario simulado en el almacén
        const user = { id: 1, username: "test" };
        store.user = user;

        // Llamar a la acción de cierre de sesión del almacén
        store.logout();

        // Verificar que el usuario se haya eliminado del almacén
        expect(store.user).toBeNull();

        // Verificar que el usuario se haya eliminado del almacenamiento local
        expect(localStorage.removeItem).toHaveBeenCalledWith("user");

        // Verificar que se haya redirigido al usuario a la ruta correcta
        expect(router.push).toHaveBeenCalledWith("/login");
    });

    it("should register a new user", async () => {
        // Datos de prueba
        const email = "test@example.com";
        const username = "test";
        const password = "password";
        const user = { id: 1, email, username };

        // Espiar la función axios.post para devolver el usuario simulado
        jest.spyOn(axios, "post").mockResolvedValue(user);

        // Llamar a la acción de registro del almacén
        await store.register(email, username, password);

        // Verificar que el usuario se haya establecido correctamente en el almacén
        expect(store.user).toEqual(user);

        // Verificar que el usuario se haya guardado en el almacenamiento local
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "user",
            JSON.stringify(user)
        );

        // Verificar que se haya redirigido al usuario a la ruta correcta
        expect(router.push).toHaveBeenCalledWith("/login");
    });
});

 */