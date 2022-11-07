function criarjogo(time1, hora, time2) {
    return `
    <li>
        <img src="./svgs/${time1}.svg" class="jogo" alt="${time1}">
        <strong>${hora}</strong>
        <img src="./svgs/${time2}.svg" class="jogo" alt="${time2}">
    </li>
    `
}


function newcard(date, day, games){
    return `
    <div class="card">
            <div class="dia">
                <h1>${date}</h1>
                <span>${day}</span>
            </div>
            <ul>
                ${games}
            </ul>
        </div>
    `
}


document.querySelector('.all').innerHTML = `
    <div>
        <header>
            <img src="./svgs/logo.svg" alt="logo" class="logo">
        </header>
    </div>
        
    <div class="cards">
    ${newcard("21/11", "segunda", 
    criarjogo("inglaterra", "10:00", "ira")
    + criarjogo("senegal", "13:00", "holanda")
    + criarjogo("estadosunidos", "16:00", "paisdegales"))}

    ${newcard("22/11", "terça", 
    criarjogo("argentina", "07:00", "arabia")
    +criarjogo("dinamarca", "10:00", "tunisia")
    +criarjogo("mexico", "13:00", "polonia"))}

    </div>
`