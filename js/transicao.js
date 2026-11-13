document.addEventListener("DOMContentLoaded", () => {

    const conteudoTopicos = document.querySelector(".conteudo-topicos");

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                conteudoTopicos.classList.add("visivel");

                observador.unobserve(conteudoTopicos);

            }
        });

    }, {
        threshold: 0.15
    });

    observador.observe(conteudoTopicos);

});