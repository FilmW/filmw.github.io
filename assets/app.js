new Flickity( '#ratings', {
    // options
    cellAlign: 'center',
    wrapAround: true,
    contain: true
});

const filmData = {
    "vision3_50d": {
        "name": "Kodak Vision3 50D",
        "description": `Vision3 50D is an exceptionally sharp daylight-balanced (5600K) motion picture film.`,
        "images": []
    },
    "vision3_200t": {
        "name": "Kodak Vision3 200T",
        "description": `Vision3 200T is a popular motion pciture film known for it's unmatched "cinema look". It is popular among directors and DPs. Except indoor scenes, it's often used to shoot daylight scenes despite it being tungsten-balanced (3200K). An amber filter is, hovewer, recommended to shoot this film outside during day.`,
        "images": []
    },
    "vision3_250d": {
        "name": "Kodak Vision3 250D",
        "description": "Vision3 250D is arguably the most popular and versatile motion picture film stock being manufactured to this day. It is daylight-balanced at 5600K plus it allows for tighter apertures than 50D while compensating it with dismissible amount of grain. It is our most-sold film stock.",
        "images": []
    },
    "vision3_500t": {
        "name": "Kodak Vision3 500T",
        "description": "Vision3 500T is a very sensitive motion picture film stock intended for use with tungsten lights (3200K). Because of it's sensitivity of ISO 500, it allows darker and problematic indoor scenes to be shot with minimal effort. Nowdays, alongside Cinestill 800T, it is the preferred film among photographers for shooting at night. Especially with the presence of neon lights, this film creates the perfect, somewhat grainy cinematic feel.",
        "images": []
    },
    "ektachrome_100d": {
        "name": "Kodak Ektachrome 100D",
        "description": "Ektachrome is a color positive classic popular for its use in the Apollo missions (the moon shots were captured on 70mm Ektachrome film). Currently, Ektachrome is having a resurgence as a motion picture film after it's use in the second season of Euphoria.",
        "images": []
    },
}

const films = document.querySelector("#films");

let currentFilm = null;

films.addEventListener("click", e => {

    if (!e.target)
    return;

    const anchor = e.target.closest("a")
    if(!anchor)
    return;

    if(filmData[anchor.dataset.id] == undefined || currentFilm == filmData[anchor.dataset.id])
    {
        currentFilm = null;
    } else {
        currentFilm = filmData[anchor.dataset.id];
    }

    updateFilmView();
})

const wrapper = document.querySelector("#details");
const name = document.querySelector("#details_name");
const description = document.querySelector("#details_description");

function updateFilmView () {

    if(currentFilm == null) {
        wrapper.classList.add("hidden")
        return;
    }


    name.innerText = currentFilm.name;
    description.innerText = currentFilm.description;

    wrapper.classList.remove("hidden")
    
}