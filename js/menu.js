const navegacao = performance.getEntriesByType("navigation")[0];

if (navegacao && navegacao.type === "reload") {
    sessionStorage.removeItem("paginasVisitadas");
}

document.addEventListener("DOMContentLoaded", () => {

    const menuHTML = `
        <div class="menu-overlay"></div>

        <nav class="sidebar" aria-label="Main navigation">

            <div class="sidebar-header">
                <span>Attack on Titan</span>

                <button class="fechar-menu" aria-label="Close menu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="sidebar-conteudo">

                <a href="index.html" class="menu-link menu-home">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </a>

                <div class="menu-separador"></div>

                <!-- CHARACTERS -->
                <div class="menu-grupo">
                    <button class="menu-toggle">
                        <span>Characters</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    <div class="submenu">

                        <a href="eren.html" class="menu-link">Eren Yeager</a>
                        <a href="levi.html" class="menu-link">Levi Ackerman</a>
                        <a href="mikasa.html" class="menu-link">Mikasa Ackerman</a>
                        <a href="armin.html" class="menu-link">Armin Arlert</a>
                        <a href="hange.html" class="menu-link">Hange Zoë</a>
                        <a href="historia.html" class="menu-link">Historia Reiss</a>
                        <a href="connie.html" class="menu-link">Connie Springer</a>
                        <a href="reiner.html" class="menu-link">Reiner Braun</a>
                        <a href="bertholdt.html" class="menu-link">Bertholdt Hoover</a>
                        <a href="annie.html" class="menu-link">Annie Leonhart</a>
                        <a href="erwin.html" class="menu-link">Erwin Smith</a>
                        <a href="jean.html" class="menu-link">Jean Kirstein</a>
                        <a href="sasha.html" class="menu-link">Sasha Blouse</a>
                        <a href="gabi.html" class="menu-link">Gabi Braun</a>
                        <a href="porco.html" class="menu-link">Porco Galliard</a>
                        <a href="falco.html" class="menu-link">Falco Grice</a>
                        <a href="pieck.html" class="menu-link">Pieck Finger</a>
                        <a href="zeke.html" class="menu-link">Zeke Yeager</a>

                    </div>
                </div>

                <!-- ANIME -->
                <div class="menu-grupo">
                    <button class="menu-toggle">
                        <span>Anime</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    <div class="submenu">

                        <a href="anime.html" class="menu-link">Anime Overview</a>

                        <div class="menu-grupo menu-subgrupo">

                            <button class="menu-toggle">
                                <span>OVAs</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>

                            <div class="submenu">
                                <a href="ilsesnotebook.html" class="menu-link">Ilse's Notebook</a>
                                <a href="asuddenvisitor.html" class="menu-link">A Sudden Visitor</a>
                                <a href="distress.html" class="menu-link">Distress</a>
                                <a href="noregrets.html" class="menu-link">No Regrets</a>
                                <a href="lostgirls.html" class="menu-link">Lost Girls</a>
                            </div>

                        </div>

                        <div class="menu-grupo menu-subgrupo">

                            <button class="menu-toggle">
                                <span>Seasons</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>

                            <div class="submenu">
                                <a href="temporada1.html" class="menu-link">Season 1</a>
                                <a href="temporada2.html" class="menu-link">Season 2</a>
                                <a href="temporada3.html" class="menu-link">Season 3</a>
                                <a href="temporada4.html" class="menu-link">Season 4</a>
                            </div>

                        </div>

                    </div>
                </div>

                <!-- MANGA -->
                <a href="manga.html" class="menu-link menu-direto">
                    Manga
                </a>

                <!-- ARCS -->
                <div class="menu-grupo">
                    <button class="menu-toggle">
                        <span>Arcs</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    <div class="submenu">

                        <a href="arco1.html" class="menu-link">Fall of Shiganshina</a>
                        <a href="arco2.html" class="menu-link">104th Cadet Corps</a>
                        <a href="arco3.html" class="menu-link">The Battle of Trost</a>
                        <a href="arco4.html" class="menu-link">The Female Titan</a>
                        <a href="arco5.html" class="menu-link">Clash of the Titans</a>
                        <a href="arco6.html" class="menu-link">Royal Government</a>
                        <a href="arco7.html" class="menu-link">Return to Shiganshina</a>
                        <a href="arco8.html" class="menu-link">Marley</a>
                        <a href="arco9.html" class="menu-link">War for Paradis</a>

                    </div>
                </div>

                <!-- UNIVERSE -->
                <div class="menu-grupo">
                    <button class="menu-toggle">
                        <span>Universe</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    <div class="submenu">

                        <a href="muralhas.html" class="menu-link">Walls</a>
                        <a href="mundo.html" class="menu-link">World</a>

                        <div class="menu-grupo menu-subgrupo">

                            <button class="menu-toggle">
                                <span>Organizations</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>

                            <div class="submenu">

                                <a href="tropas.html" class="menu-link">Military</a>
                                <a href="guerreiros.html" class="menu-link">Warriors</a>
                                <a href="cadetes.html" class="menu-link">Cadet Corps</a>
                                <a href="suditos.html" class="menu-link">Subjects of Ymir</a>
                                <a href="igreja.html" class="menu-link">Church of the Walls</a>

                            </div>
                        </div>

                        <a href="titas.html" class="menu-link">Titans</a>

                    </div>
                </div>

                <!-- PRODUCTION -->
                <a href="producao.html" class="menu-link menu-direto">
                    Production
                </a>

            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML("beforeend", menuHTML);

    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".menu-overlay");
    const abrir = document.querySelector(".menu");
    const fechar = document.querySelector(".fechar-menu");

    function abrirMenu() {
        sidebar.classList.add("ativo");
        overlay.classList.add("ativo");
        document.body.classList.add("menu-aberto");
    }

    function fecharMenu() {
        sidebar.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }

    if (abrir) {
        abrir.addEventListener("click", abrirMenu);
    }

    fechar.addEventListener("click", fecharMenu);
    overlay.addEventListener("click", fecharMenu);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            fecharMenu();
        }
    });

    document.querySelectorAll(".menu-toggle").forEach(botao => {

        botao.addEventListener("click", () => {

            const grupo = botao.parentElement;

            grupo.classList.toggle("aberto");

        });

    });

    const paginaAtual = window.location.pathname.split("/").pop() || "principal.html";

    let visitadas = [];

    try {
        visitadas = JSON.parse(sessionStorage.getItem("paginasVisitadas")) || [];
    } catch (erro) {
        visitadas = [];
    }

    if (!visitadas.includes(paginaAtual)) {
        visitadas.push(paginaAtual);
    }

    try {
        sessionStorage.setItem("paginasVisitadas", JSON.stringify(visitadas));
    } catch (erro) {
        console.warn("Não foi possível salvar o histórico de páginas.");
    }

    document.querySelectorAll(".menu-link").forEach(link => {

        const destino = link.getAttribute("href");

        if (visitadas.includes(destino)) {
            link.classList.add("visitada");
        }

    });

});