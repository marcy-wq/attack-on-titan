const volumes = [
    {
        number: 1, date: "March 17, 2010", chapters: "Chapters 1–4",
        synopsis: "The Colossal Titan breaches the wall of Shiganshina, changing Eren, Mikasa and Armin's lives forever. Eren vows to fight the Titans after the destruction of his home."
    },
    {
        number: 2, date: "July 16, 2010", chapters: "Chapters 5–9",
        synopsis: "The cadets face the battle of Trost. When hope seems lost, a mysterious Titan begins attacking other Titans, leaving the soldiers with an impossible question."
    },
    {
        number: 3, date: "December 9, 2010", chapters: "Chapters 10–13, plus a side story",
        synopsis: "Eren's power becomes the subject of a military dispute. The soldiers must decide whether he is a threat or their best chance to reclaim their territory."
    },
    {
        number: 4, date: "April 8, 2011", chapters: "Chapters 14–18",
        synopsis: "Eren is put on trial, and his future is decided by the military. The story also looks back at the cadets' training and the choices that led them to the battlefield."
    },
    {
        number: 5, date: "August 9, 2011", chapters: "Chapters 19–22, plus a side story",
        synopsis: "Eren joins Levi's Special Operations Squad. The Survey Corps prepares for an expedition beyond the Walls, where an unexpected enemy awaits."
    },
    {
        number: 6, date: "December 9, 2011", chapters: "Chapters 23–26",
        synopsis: "During an expedition, the Scouts encounter the Female Titan, an intelligent opponent whose actions suggest that she has a specific target."
    },
    {
        number: 7, date: "April 9, 2012", chapters: "Chapters 27–30",
        synopsis: "The Scouts attempt to uncover the Female Titan's identity. The mission becomes a devastating struggle, and Eren is captured."
    },
    {
        number: 8, date: "August 9, 2012", chapters: "Chapters 31–34",
        synopsis: "The investigation reaches Stohess, where Annie's connection to the Female Titan is exposed. The battle reveals a disturbing secret hidden within the Walls."
    },
    {
        number: 9, date: "December 7, 2012", chapters: "Chapters 35–38",
        synopsis: "A Beast Titan appears, and reports of a breach throw the Scouts into confusion. Several soldiers take shelter in an old castle as Titans close in."
    },
    {
        number: 10, date: "April 9, 2013", chapters: "Chapters 39–42",
        synopsis: "The fight for survival continues as the soldiers uncover more about their companions and the strange events surrounding the Walls."
    },
    {
        number: 11, date: "August 9, 2013", chapters: "Chapters 43–46",
        synopsis: "Eren faces the Armored Titan in a desperate battle. The Scouts struggle to rescue their comrades while the enemy's motives remain unclear."
    },
    {
        number: 12, date: "December 9, 2013", chapters: "Chapters 47–50",
        synopsis: "The attempt to save Eren reaches a turning point. A desperate situation leads to the appearance of a power no one expected."
    },
    {
        number: 13, date: "April 9, 2014", chapters: "Chapters 51–54",
        synopsis: "The Scouts become involved in a struggle against the government itself, shifting the conflict from fighting Titans to uncovering political secrets."
    },
    {
        number: 14, date: "August 8, 2014", chapters: "Chapters 55–58",
        synopsis: "Kenny Ackerman and his squad hunt the Scouts. As the conflict intensifies, the story reveals more about the people who control life inside the Walls."
    },
    {
        number: 15, date: "December 9, 2014", chapters: "Chapters 59–62",
        synopsis: "The Scouts investigate the Reiss family and the secrets behind the throne. The truth they seek is tied to the history of the Walls."
    },
    {
        number: 16, date: "April 9, 2015", chapters: "Chapters 63–66",
        synopsis: "Inside a cavern beneath a chapel, the struggle over the Founding Titan's power reaches a decisive moment."
    },
    {
        number: 17, date: "August 7, 2015", chapters: "Chapters 67–70",
        synopsis: "Historia faces her family's legacy while the Scouts prepare for a dangerous operation. A powerful Titan threatens the district of Orvud."
    },
    {
        number: 18, date: "December 9, 2015", chapters: "Chapters 71–74",
        synopsis: "The Scouts prepare to return to Shiganshina. Memories of Grisha Yeager's past begin to reveal clues about the larger mystery."
    },
    {
        number: 19, date: "April 8, 2016", chapters: "Chapters 75–78",
        synopsis: "The battle to retake Shiganshina begins. The Scouts face old enemies and must make difficult decisions to survive."
    },
    {
        number: 20, date: "August 9, 2016", chapters: "Chapters 79–82",
        synopsis: "The battle reaches its most desperate stage. The soldiers face choices that will determine who can continue fighting and who will be saved."
    },
    {
        number: 21, date: "December 9, 2016", chapters: "Chapters 83–86",
        synopsis: "The survivors finally reach the basement. The discoveries there change their understanding of the world beyond the Walls."
    },
    {
        number: 22, date: "April 7, 2017", chapters: "Chapters 87–90",
        synopsis: "Memories reveal more about the Attack Titan and the history of the conflict. At last, Eren and his friends reach the sea."
    },
    {
        number: 23, date: "August 9, 2017", chapters: "Chapters 91–94",
        synopsis: "Four years later, the story moves across the ocean to Marley, introducing a different perspective on the conflict and its warriors."
    },
    {
        number: 24, date: "December 8, 2017", chapters: "Chapters 95–98",
        synopsis: "Reiner's past and the lives of the young Warrior candidates come into focus as the story explores how children are shaped by war."
    },
    {
        number: 25, date: "April 9, 2018", chapters: "Chapters 99–102",
        synopsis: "A declaration of war sets off a major confrontation in Liberio. The Scouts enter the conflict and face the power of the War Hammer Titan."
    },
    {
        number: 26, date: "August 9, 2018", chapters: "Chapters 103–106",
        synopsis: "The battle in Liberio continues, forcing both sides to pay a heavy price. The surviving characters begin to deal with the consequences."
    },
    {
        number: 27, date: "December 7, 2018", chapters: "Chapters 107–110",
        synopsis: "Back on Paradis, distrust grows within the military. The threat is no longer only outside the Walls, as divisions spread among former allies."
    },
    {
        number: 28, date: "April 9, 2019", chapters: "Chapters 111–114",
        synopsis: "Levi is tasked with watching Zeke, while competing plans and loyalties push the island toward a new crisis."
    },
    {
        number: 29, date: "August 9, 2019", chapters: "Chapters 115–118",
        synopsis: "The balance of power on Paradis shifts dramatically. Marley launches an attack on Shiganshina as the conflict approaches a critical turning point."
    },
    {
        number: 30, date: "December 9, 2019", chapters: "Chapters 119–122",
        synopsis: "A confrontation in the Paths reveals a deeper connection between Eren, Zeke and the origins of the Titans. The Rumbling begins."
    },
    {
        number: 31, date: "April 9, 2020", chapters: "Chapters 123–126",
        synopsis: "As the world faces an unprecedented threat, former enemies begin to consider working together in an attempt to stop the destruction."
    },
    {
        number: 32, date: "September 9, 2020", chapters: "Chapters 127–130",
        synopsis: "The uneasy alliance confronts its past and prepares for a dangerous journey. Eren's advance continues beyond their control."
    },
    {
        number: 33, date: "January 8, 2021", chapters: "Chapters 131–134",
        synopsis: "The Rumbling devastates the world. The alliance reaches the final stage of its mission and prepares to confront Eren."
    },
    {
        number: 34, date: "June 9, 2021", chapters: "Chapters 135–139",
        synopsis: "The final battle unfolds as Eren's friends fight to stop the Rumbling. The story reaches its conclusion and reflects on freedom, loss and the cycle of conflict."
    }
];

const lista = document.getElementById("lista-volumes");
const botao = document.getElementById("botao-volumes");
let mostrarTodos = false;

function criarVolume(volume) {
    const caixa = document.createElement("article");
    caixa.className = "volume";

    caixa.innerHTML = `
        <img
            class="capa-volume"
            src="imagens/manga/volume${volume.number}.jpg"
            alt="Attack on Titan volume ${volume.number} cover"
            onerror="this.onerror=null; this.src='imagens/manga/capa-indisponivel.jpg';"
        >

        <div class="info-volume">
            <h3>Volume <span class="numero-volume">${volume.number}</span></h3>
            <p><strong>Release Date:</strong> ${volume.date}</p>
            <p><strong>Chapters:</strong> ${volume.chapters}</p>
            <p><strong>Synopsis:</strong> ${volume.synopsis}</p>
        </div>
    `;

    return caixa;
}

function mostrarVolumes() {
    lista.innerHTML = "";

    const quantidade = mostrarTodos ? volumes.length : 3;

    for (let i = 0; i < quantidade; i++) {
        lista.appendChild(criarVolume(volumes[i]));
    }

    botao.textContent = mostrarTodos ? "Show Less" : "See All Volumes";
}

botao.addEventListener("click", function () {
    mostrarTodos = !mostrarTodos;
    mostrarVolumes();

    if (!mostrarTodos) {
        document.querySelector(".titulo-volumes").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

mostrarVolumes();
