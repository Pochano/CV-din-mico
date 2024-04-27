const btn_agregar = document.getElementById('agregar');
btn_agregar.addEventListener("click", function(){

    //Principal div y separador

    const div_experiencia = D.create('div');
    
    //Creación de Divs de cada miembro

    const div_nombre_empresa = D.create('div');
    const div_cargo_ocupado = D.create('div');
    const div_tipo_empleo = D.create('div');

    //Creación de Span de cada miembro

    const span_nombre_empresa = D.create('span', {innerHTML:'Nombre de Empresa'});
    
    const span_cargo_ocupado = D.create('span', {innerHTML : 'Cargo Ocupado'});

    const span_tipo_empleo = D.create('span', {innerHTML : 'Tipo de Empleo'});
    
    //Creación de los Inputs de Nombre de Empresa, Cargo Ocupado y Tipo de Empleo

    const input_nombre_empresa = D.create('input', {type: 'text', name: 'nombre_empresa[]', 
    placeholder: 'Ingrese nombre de la empresa'});

    const input_cargo_ocupado = D.create('input', {type: 'text', name: 'cargo_ocupado[]', 
    placeholder: 'Ingrese el cargo ocupado'});

    const input_tipo_empleo = D.create('select', {name: 'tipo_empleo[]'});
    const te_opcion_1 = D.create('option', {value: '0', innerHTML: '--Seleccion--'});
    const te_opcion_2 = D.create('option', {value: 'Jornada Completa', innerHTML: 'Jornada Completa'});
    const te_opcion_3 = D.create('option', {value: 'Jornada Parcial', innerHTML: '-Jornada Parcial'});
    const te_opcion_4 = D.create('option', {value: 'Autonomo', innerHTML: 'Autonomo'});
    const te_opcion_5 = D.create('option', {value: 'Profesional Independiente', innerHTML: 'Profesional Independiente'});
    const te_opcion_6 = D.create('option', {value: 'Contrato Temporal', innerHTML: 'Contrato Temporal'});
    const te_opcion_7 = D.create('option', {value: 'Contrato de Prácticas', innerHTML: 'Contrato de Prácticas'});
    const te_opcion_8 = D.create('option', {value: 'Contrato de Formación', innerHTML: 'Contrato de Formación'});
    const te_opcion_9 = D.create('option', {value: 'Temporal', innerHTML: 'Temporal'});


    const borrar = D.create('a', {href: 'javascript:void(0)', innerHTML: 'X',
    onclick: function(){ D.remove(div_experiencia);}})

    //A continuación agregamos cada etiqueta a su nodo padre

    D.append([span_nombre_empresa, input_nombre_empresa], div_nombre_empresa);
    D.append([span_cargo_ocupado, input_cargo_ocupado], div_cargo_ocupado);

    //Ingresar las opciones al input tipo empleo

    D.append([te_opcion_1, te_opcion_2, te_opcion_3, te_opcion_4,
    te_opcion_5, te_opcion_6, te_opcion_7, te_opcion_8, te_opcion_9], input_tipo_empleo);


    D.append([span_tipo_empleo, input_tipo_empleo], div_tipo_empleo);

    D.append([div_nombre_empresa, div_cargo_ocupado, div_tipo_empleo, borrar],  div_experiencia);

    //Unir todo a su nodo padre principal
    D.append(div_experiencia, D.id('Experiencia-Laboral') );

}

);

const btn_agregar_1 = document.getElementById('agregar1');
btn_agregar_1.addEventListener("click", function(){

    //Principal div y separador
    const div_formacion = E.create('div');

    //Creación de Divs de cada miembro

    const div_institucion = E.create('div');
    const div_carrera = E.create('div');
    const div_titulo = E.create('div');

    //Creación de Span de cada miembro

    const span_institucion = E.create('span', {innerHTML: 'Institucion'});
    const span_carrrera = E.create('span', {innerHTML: 'Carrera'});
    const span_titulo = E.create('span', {innerHTML: 'Título'});

    //Creacion de los inputs de la institución, carrrera y título

    const input_institucion = E.create('input', {type:'text', name: 'institucion[]',
    placeholder: 'Ingrese su institución'});
    const input_carrera = E.create('input', {type:'text', name: 'carrera[]',
    placeholder: 'Ingrese su carrera'});
    const input_titulo = E.create('input', {type:'text', name: 'titulo[]',
    placeholder: 'Ingrese su titulación'});

    //Boton de eliminar 

    const borrar1 = E.create('a', {href: 'javascript:void(0)', innerHTML: 'X',
    onclick: function(){ E.remove(div_formacion);}})

    //Agregamos etiquetas a su nodo padre

    E.append([span_institucion, input_institucion], div_institucion);
    E.append([span_carrrera, input_carrera], div_carrera);
    E.append([span_titulo, input_titulo], div_titulo);

    E.append([div_institucion, div_carrera, div_titulo, borrar1], div_formacion);


    //Unir todo al nodo principal

    E.append(div_formacion, E.id('Formacion'));

});

const btn_agregar_2 = document.getElementById('agregar2');
btn_agregar_2.addEventListener("click", function(){

    //Principal div y separador

    const div_idiomas = F.create('div');

    //Creación de Divs de cada miembro

    const div_idioma = F.create('div');
    const div_nivel = F.create('div');

    //Creación de Span de cada miembro

    const span_idioma = F.create('span', {innerHTML: 'Idioma'});
    const span_nivel = F.create('span', {innerHTML: 'Nivel'});

    //Creacion de los inputs de la institución, carrrera y título

    const input_idioma = F.create('input', {type: 'text', name: 'idioma[]',
    placeholder: 'Ingrese un idioma aprendido'});
    const input_nivel = F.create('select', {name: 'nivel'});
    const lvl_opcion_1 = D.create('option', {value: '0', innerHTML: '--Seleccion--'});
    const lvl_opcion_2 = D.create('option', {value: 'Basico', innerHTML: 'Básico'});
    const lvl_opcion_3 = D.create('option', {value: 'Intermedio', innerHTML: 'Intermedio'});
    const lvl_opcion_4 = D.create('option', {value: 'Avanzado', innerHTML: 'Avanzado'});
    const lvl_opcion_5 = D.create('option', {value: 'Fluido', innerHTML: 'Fluido'});

    //Boton de eliminar

    const borrar2 = F.create('a', {href: 'javascript:void(0)', innerHTML: 'X',
    onclick: function(){ F.remove(div_idiomas);}})

    //Agregamos etiquetas a su nodo padre

    F.append([span_idioma, input_idioma], div_idioma);

    //Agregamos las opciones al nivel de ingles

    F.append([lvl_opcion_1,lvl_opcion_2,lvl_opcion_3,lvl_opcion_4,lvl_opcion_5], input_nivel);

    F.append([span_nivel, input_nivel], div_nivel);

    F.append([div_idioma, div_nivel, borrar2], div_idiomas);

    //Unir todo al nodo principal

    F.append(div_idiomas, F.id('Idiomas'));
});

const btn_agregar_3 = document.getElementById('agregar3');
btn_agregar_3.addEventListener("click", function(){

    //Principal div y separador

    const div_aptitudes_general = G.create('div');

    //Creación de Divs de cada miembro

    const div_aptitudes = G.create('div');

    //Creación de Span de cada miembro

    const span_aptitudes = G.create('span', {innerHTML: 'Aptitud'});
    
    //Creación de los Inputs de Nombre de Empresa, Cargo Ocupado y Tipo de Empleo

    const input_aptitudes = G.create('input', {type: 'text', name:'aptitud[]'
    ,placeholder: 'Ingrese una aptitud'});

    //Crear boton de eliminar div

    const borrar3 = G.create('a', {href: 'javascript:void(0)', innerHTML: 'X',
    onclick: function(){ G.remove(div_aptitudes_general);}})

    //A continuación agregamos cada etiqueta a su nodo padre

    D.append([span_aptitudes, input_aptitudes], div_aptitudes);
    D.append([div_aptitudes, borrar3], div_aptitudes_general);

    //Unir todo a su nodo padre principal
    
    D.append(div_aptitudes_general, G.id('Aptitudes'));


});

const btn_agregar_4 = document.getElementById('agregar4');
btn_agregar_4.addEventListener("click", function(){

    //Principal div y separador

    const div_habilidades_general = H.create('div');

    //Creación de Divs de cada miembro

    const div_habilidades = H.create('div');

    //Creación de Span de cada miembro

    const span_habilidades = H.create('span', {innerHTML: 'Habilidad'});

    //Creación de los Inputs de Nombre de Empresa, Cargo Ocupado y Tipo de Empleo

    const input_habilidades = H.create('input', {type : 'text', name: 'habilidad[]',
    placeholder: 'Ingrese una habilidad'});

    //Crear boton de eliminar div}

    const borrar4 = H.create('a', {href: 'javascript:void(0)', innerHTML: 'X',
    onclick: function(){ H.remove(div_habilidades_general);}})

    //A continuación agregamos cada etiqueta a su nodo padre

    H.append([span_habilidades, input_habilidades], div_habilidades);
    H.append([div_habilidades, borrar4], div_habilidades_general);

    //Unir todo a su nodo padre principal

    H.append(div_habilidades_general, H.id('Habilidades'));

});