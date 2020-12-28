var mmol = new Vue({
    el: '#mmol',
    methods: {
        update_mmol: function () {
            document.getElementById("mmol_input")?.setAttribute("disabled", "false");
            document.getElementById("mg_input")?.setAttribute("disabled", "true");
        }
    }
})

var mg = new Vue({
    el: '#mg',
    methods: {
        update_mg: function () {
            document.getElementById("mg_input")?.setAttribute("disabled", "false");
            document.getElementById("mmol_input")?.setAttribute("disabled", "true");
        }
    }
})