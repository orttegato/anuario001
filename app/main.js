window.onload = () => {
    let lista = document.querySelector("#usuarios");

    let mostrarDetalle = (e) => {
    window.open(`../detalle.html?id=${e.currentTarget.id}`, '_blank');

        if (currentWork) {
        window.location.href = `anuario001/detalle.html?id=${currentWork.Id}`;
    }
}


    fetch('assets/data/anuario.json')
        .then(res => res.json())
        .then(data => {
            let projectNum = 0;
            data.forEach((project, index) => {
                if (project.titulo != undefined && project.imagenes != "" && project.imagenes != undefined) {
                    let portada = project.imagenes.slice(0, 62);
                    projectNum++;
                    let item = `
                            <article class="unid-cajon" id="${projectNum}">
                                <img class="img-cajon" src="${portada}"/> 
                                <h2 class="titulo-cajon">${project.titulo}</h2> 
                                <div class="info-cajon">
                                <p class="autor-cajon">${project.nombre_estudiante}</p>  
                                </div>
                            </article>`;
                    lista.innerHTML += item;
                    
                }
            });
        })
        .then(() => {
            let projects = document.querySelectorAll(".unid-cajon");
            projects.forEach((project) => {
                project.addEventListener("click", mostrarDetalle, true);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
};
