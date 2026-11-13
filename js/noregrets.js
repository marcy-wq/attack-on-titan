const partes = [

    {
        titulo: "No Regrets — Part <span>1</span>",
        imagem: "imagens/noregrets1.webp",
        alt: "No Regrets Part 1",
        infoTitulo: "No Regrets — Part 1",
        data: "December 9, 2014",
        duracao: "Approximately 25 minutes",
        sinopse: `
            <p>
                No Regrets — Part 1 introduces Levi Ackerman
                and his life in the Underground, where he
                survives alongside his close friends Furlan
                Church and Isabel Magnolia.
            </p>

            <p>
                The three make a living by using their skills
                with the vertical maneuvering equipment while
                trying to avoid the authorities. Levi's
                exceptional abilities eventually attract the
                attention of Erwin Smith.
            </p>

            <p>
                Erwin offers Levi and his friends a chance to
                leave the Underground and join the Survey Corps.
                However, their new opportunity is connected
                to a secret mission that will change their lives.
            </p>
        `
    },


    {
        titulo: "No Regrets — Part <span>2</span>",
        imagem: "imagens/noregrets2.jpg",
        alt: "No Regrets Part 2",
        infoTitulo: "No Regrets — Part 2",
        data: "April 9, 2015",
        duracao: "Approximately 25 minutes",
        sinopse: `
            <p>
                In Part 2, Levi and his friends become members
                of the Survey Corps and take part in an
                expedition outside the Walls.
            </p>

            <p>
                Levi continues to struggle with his distrust
                of Erwin while trying to protect Furlan and
                Isabel. The mission soon takes an unexpected
                turn, forcing Levi to make difficult decisions.
            </p>

            <p>
                The events of the expedition have a profound
                impact on Levi and change his understanding of
                Erwin, the Survey Corps and the choices he has
                made throughout his life.
            </p>

            <p>
                The story ultimately shows how Levi's past
                shaped the soldier he would become and leads
                directly into his role in the main series.
            </p>
        `
    }

];


let atual = 0;


function atualizarParte() {

    const parte = partes[atual];


    document.getElementById("titulo-ova").innerHTML =
        parte.titulo;


    document.getElementById("imagem-ova").src =
        parte.imagem;


    document.getElementById("imagem-ova").alt =
        parte.alt;


    document.getElementById("info-titulo").textContent =
        parte.infoTitulo;


    document.getElementById("info-data").textContent =
        parte.data;


    document.getElementById("info-duracao").textContent =
        parte.duracao;


    document.getElementById("sinopse-texto").innerHTML =
        parte.sinopse;


    document.getElementById("anterior").disabled =
        atual === 0;


    document.getElementById("proximo").disabled =
        atual === partes.length - 1;

}



document.getElementById("anterior").addEventListener("click", function () {

    if (atual > 0) {

        atual--;

        atualizarParte();

    }

});



document.getElementById("proximo").addEventListener("click", function () {

    if (atual < partes.length - 1) {

        atual++;

        atualizarParte();

    }

});


atualizarParte();