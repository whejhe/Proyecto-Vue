import {describe,it,expect} from 'vitest';
import {mount} from '@vue/test-utils';
import { authStores } from '../authStores';

describe('authStores', () => {
    it('should login successfully', async () => {
        const authStore = authStores.authStore();

        const response = await axios.post('/login', {
            username: 'a@gmail.com',
            password: '1234',
        });

        authStore.setUser(response.data.user);

        expect(authStore.user).not.toBe(null);
    });
});