const historias = [

    {
        titulo: "Mikasa — Lost in the Cruel World",
        imagem: "imagens/lostgirls-mikasa.webp",
        alt: "Lost Girls - Mikasa",
        infoTitulo: "Lost in the Cruel World",
        personagem: "Mikasa Ackerman",
        data: "August 9, 2018",
        duracao: "Approximately 25 minutes",
        sinopse: `
            <p>
                Lost in the Cruel World focuses on Mikasa
                Ackerman and presents an alternate version
                of the events surrounding her life.
            </p>

            <p>
                In this strange reality, Mikasa experiences
                a different life with the people she cares
                about. However, the world around her begins
                to change, forcing her to confront the fear
                of losing those who are important to her.
            </p>

            <p>
                The story explores Mikasa's memories,
                feelings and her relationship with Eren,
                presenting a more personal perspective on
                her character.
            </p>
        `
    },


    {
        titulo: "Annie — Wall Sina, Goodbye: Part <span> 1 </span>",
        imagem: "imagens/lostgirls-annie1.webp",
        alt: "Lost Girls - Annie Part 1",
        infoTitulo: "Wall Sina, Goodbye: Part 1",
        personagem: "Annie Leonhart",
        data: "December 8, 2017",
        duracao: "Approximately 25 minutes",
        sinopse: `
            <p>
                Wall Sina, Goodbye follows Annie Leonhart
                during the events surrounding the 57th
                Exterior Scouting Mission.
            </p>

            <p>
                Before leaving on her mission, Annie receives
                a request to find a missing girl named Carly
                Stratmann. Although she initially tries to
                avoid getting involved, she eventually begins
                investigating the disappearance.
            </p>

            <p>
                At the same time, Annie must deal with her
                secret mission and the pressure surrounding
                her identity as a Warrior. The investigation
                gradually becomes more complicated as she
                discovers that several people are connected
                to the case.
            </p>
        `
    },


    {
        titulo: "Annie — Wall Sina, Goodbye: Part <span> 2 </span>",
        imagem: "imagens/lostgirls-annie2.jpg",
        alt: "Lost Girls - Annie Part 2",
        infoTitulo: "Wall Sina, Goodbye: Part 2",
        personagem: "Annie Leonhart",
        data: "April 9, 2018",
        duracao: "Approximately 25 minutes",
        sinopse: `
            <p>
                In the second part of Wall Sina, Goodbye,
                Annie continues investigating the disappearance
                of Carly Stratmann while preparing for the
                upcoming operation outside the Walls.
            </p>

            <p>
                Her investigation brings her into contact with
                people connected to the case and reveals more
                about the circumstances surrounding Carly's
                disappearance.
            </p>

            <p>
                As the day of the expedition approaches, Annie
                must balance her investigation with her own
                secret objectives. The story ultimately leads
                back to the events of the main Attack on Titan
                storyline.
            </p>
        `
    }

];


let atual = 0;


function atualizarHistoria() {

    const historia = historias[atual];


    document.getElementById("titulo-ova").innerHTML =
        historia.titulo;


    document.getElementById("imagem-ova").src =
        historia.imagem;


    document.getElementById("imagem-ova").alt =
        historia.alt;


    document.getElementById("info-titulo").textContent =
        historia.infoTitulo;


    document.getElementById("info-personagem").textContent =
        historia.personagem;


    document.getElementById("info-data").textContent =
        historia.data;


    document.getElementById("info-duracao").textContent =
        historia.duracao;


    document.getElementById("sinopse-texto").innerHTML =
        historia.sinopse;


    document.getElementById("anterior").disabled =
        atual === 0;


    document.getElementById("proximo").disabled =
        atual === historias.length - 1;

}

document.getElementById("anterior").addEventListener("click", function () {

    if (atual > 0) {

        atual--;

        atualizarHistoria();

    }

});

document.getElementById("proximo").addEventListener("click", function () {

    if (atual < historias.length - 1) {

        atual++;

        atualizarHistoria();

    }

});

atualizarHistoria();