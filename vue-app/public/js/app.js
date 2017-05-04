Vue.prototype.$http = axios;

new Vue({
    el: '#app',

    data: {
        skills: []
    },

    mounted() {
        this.$http.get('/api/skills').then(response => this.skills = response.data);
    }
});