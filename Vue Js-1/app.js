new Vue({
    el: '#vue-app',
    data: {
        name: 'Md Mazharul Islam',
        job: 'Full Stack Developer',
        website: 'https://www.facebook.com'
    },
    methods: {
        greet: function (time) {
            return 'Good' + ' ' + time + ' ' + this.name;
        }
    }
});