new Vue({
    el: '#vue-app',
    data: {
        name: 'Md Mazharul Islam',
        university: 'TU Darmstadt',
        age: 27,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dc) {
            this.age -= dc;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY
        }
    }
})