import Vue from 'vue';

Vue.directive('transform', {

    /**
     * sera executado quando coloca a diretiva em um elemento do dom
     * @param {*} el elemento do DOM
     * @param {*} binding valor passado
     * @param {*} vnode 
     */
    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', () => {
            current += 90;
            el.style.transform = `rotate(${current}deg)`;

            if (binding.modifiers.animate) 
                el.style.transition = 'transform 0.5s';
        });
    }

});