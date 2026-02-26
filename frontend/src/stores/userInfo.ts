import { defineStore } from 'pinia'

export const useUserInfo = defineStore("userInfo", {
    state: () => ({
        email: '',
        role: ''
    }),

    actions: {
        setValues(newEmail: string, newRole: string) {
            this.email = newEmail;
            this.role = newRole;

            console.log(this.email, this.role);
        }
    }
})