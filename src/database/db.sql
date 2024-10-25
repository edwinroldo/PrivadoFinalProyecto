create database proyectofinal

create table tarea(
    id_tarea serial primary key,
    nombre_tarea varchar(255) unique,
    descripcion_tarea varchar(255) 
)