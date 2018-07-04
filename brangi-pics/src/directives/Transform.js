import Vue from 'vue';

Vue.directive('transform', {

    // sera executado quando coloca a diretiva em um elemento do dom
    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', () => {
            current += 90;
            el.style.transform = `rotate(${current}deg)`;
        });
    }

});