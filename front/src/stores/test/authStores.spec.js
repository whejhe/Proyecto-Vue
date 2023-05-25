
import { setActivePinia, createPinia } from "pinia";
import { authStores } from "@/stores";
import { describe, it, expect, beforeEach, vi, test } from "vitest";
import axios from "axios";

describe("Test", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it("Testeo", () => {
        const testeo = authStores();
        expect(testeo.username).toBe(null);
    });
});

vi.mock("axios");

describe("login", () => {
    it("muestra el login correctamente", async () => {
        const email = "a@gmail.com";
        const password = "1234";

        axios.post.mockResolvedValue({ token: 'aljkhsgllfsdhgj' })

        const user = await axios.post('/login', { email, password })
        console.log(user);

        expect(axios.post).toHaveBeenCalledWith('/login', { email, password });
        expect(user).toHaveProperty('token');
    });
});

describe("register",()=>{
    it("registro correctamente", async () => {
        const username = "carlos";
        const email = "carlos@gmail.com";
        const password = "123244";
        axios.post.token = "aljkhsgllfsdhgj";
        
        const user = axios.post('/register', { username, email, password });

        expect(axios.post).toHaveBeenCalledWith('/register', { username, email, password });
        expect(user).toBeDefined();
    });
});