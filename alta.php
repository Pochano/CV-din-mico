<?php

$conex =mysqli_connect("localhost", "root", "", "formulario_a_cv");
    
    if(isset($_POST['nombre_empresa'])){

        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellido'];
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        $correo = $_POST['email'];
        $pais = $_POST['Pais'];
        $concatenado_experiencia = "";
        $concatenado_formacion = "";
        $concatenado_idiomas = "";
        $concatenado_aptitud = "";
        $concatenado_habilidad = "";

        foreach($_POST['nombre_empresa'] as $indice => $nombre_de_empresa){
            $cargo = $_POST['cargo_ocupado'][$indice];
            $tipo_empleo = $_POST['tipo_empleo'][$indice];
            $concatenado_experiencia .= $nombre_de_empresa . " - ".$cargo . " - ". $tipo_empleo. "\n";
        }

        foreach($_POST['institucion'] as $indice2 => $institucion){
            $carrera = $_POST['carrera'][$indice2];
            $titulo = $_POST['titulo'][$indice2];
            $concatenado_formacion .= $institucion . " - ".$carrera . " - ". $titulo. "\n";

        }

        foreach($_POST['idioma'] as $indice3 => $idioma){
            $nivel = $_POST['nivel'][$indice3];
            $concatenado_idiomas .= $idioma . " - ". $nivel. "\n"; 
        }

        foreach($_POST['aptitud'] as $indice4 => $aptitud){
            $concatenado_aptitud .= $aptitud ."\n";
        } 

        foreach($_POST['habilidad'] as $indice5 => $habilidad){
            $concatenado_habilidad .= $habilidad ."\n";
        } 

        $consulta_sql = "INSERT INTO informacion SET Nombre = '$nombre', Apellido = 
        '$apellidos', Fecha_Nacimiento = '$fecha_nacimiento', Correo = '$correo', 
        Pais = '$pais', Experiencia_Laboral = '$concatenado_experiencia', Formacion = '$concatenado_formacion'
        , Idiomas = '$concatenado_idiomas', Aptitudes = '$concatenado_aptitud', Habilidades = '$concatenado_habilidad'";

        mysqli_query($conex, $consulta_sql); 
    }
?>