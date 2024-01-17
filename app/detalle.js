window.onload = () => {

    if (currentWork) {
        window.location.href = `/detalle.html?id=${currentWork.id}`;
    }
    
    let lista = document.querySelector("#usuarios");
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/anuario.json')
        .then(res => res.json())
        .then(data => {
            let project = data.filter((proj) => {
                return proj.Id == param;
            });
            let images =  [ project[0].imagenes.slice(0,62), project[0].imagenes.slice(64,126)]

                let estructura = `
                    <header>
                        <ul class="menu-header-detalle">
                        <li class="el-menu-header-a"><a href="../index.html">About</a></li>
                            <li class="el-menu-header">More</li>
                        </ul>
                    </header>
                    <section class="contenido">
                        <div class="contenido-container">
                            <div class="contenido-left">
                                <img src="${images[0]}" />
                            </div>
                            <div class="contenido-right">
                                <div class="contenido-right-container">
                                    <div class="contenido-titulo">
                                        <h1>${project[0].titulo}</h1>
                                        <p class="autor-contenido">${project[0].nombre_estudiante}</p>
                                    </div>

                                    <div class="contenido-info">
                                        <div class="contenido-info-u">
                                            <p>Alumno</p>
                                            <p>${project[0].nombre_estudiante}</p>
                                            <p>${project[0].correo_estudiante}</p>
                                            <p><a href="${project[0].redes_estudiante}">Perfil en redes sociales</a></p>
                                        </div>
                                        <div class="contenido-info-u">
                                            <p>Profesor</p>
                                            <p>${project[0].nombre_docente}</p>
                                            <p>${project[0].correo_docente}</p>
                                            <p>${project[0].otros_docente}</p>
                                        </div>
                                    </div>

                                    <div class="contenido-mas-info">
                                        <p>${project[0].especialidad}</p>
                                        <p>${project[0].asignatura}</p>
                                        <p>${project[0].curso}</p>
                                        <p>${project[0].palabras_clave}</p>
                                    </div>

                                    <div class="contenido-descripcion">
                                        <p>${project[0].descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                    <div class="footer-container">
                        <ul class="footer-links">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="https://esdmadrid.es/">Acerca de nosotros</a></li>
                            <li><a href="https://esdmadrid.es/">Servicios</a></li>
                            <li><a href="https://esdmadrid.es/">Contacto</a></li>
                        </ul>
                        <div class="footer-img">
                            <img src="/assets/img/esd invertido.png">
                        </div>
                    </div>
                </footer>
                `;
                document.body.innerHTML = estructura;
        })
    }
