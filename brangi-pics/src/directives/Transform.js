// import Vue from 'vue';

// Vue.directive('transform', {

    /**
     * sera executado quando coloca a diretiva em um elemento do dom
     * @param {*} el elemento do DOM
     * @param {*} binding valor passado
     * @param {*} vnode referência para o Virtual DOM utilizado pelo Vue.
     *                  Ele permite acessar propriedades do Componente no qual ela foi associada.
     *                  No entanto, essa dependência pode acabar com o reuso da diretiva,
     *                  por isso deve ser usado com parcimônia. Além disso, não é comum querermos interagir com esse parâmetro.
     *  
     */
   /*  bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', () => {
            current += 90;
            el.style.transform = `rotate(${current}deg)`;

            if (binding.modifiers.animate)
                el.style.transition = 'transform 0.5s';
        });
    } */

// });

export default {

    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function() {

            let incremento = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate') {

                if(binding.modifiers.reverse) {
                    current-=incremento;
                } else {
                    current+=incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if(binding.arg == "scale") {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;

            if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
        });
    }

};

