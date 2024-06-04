create database if not exists comentarios
default character set utf8
default collate utf8_general_ci;
use comentarios;
create table pessoas (
id int not null auto_increment,
primary key(id),
nome varchar(30) not null,
email text,
comentario text not null
)default charset = utf8;
insert into pessoas values
(default,'Manuel','teste@gmail.com','o manuel é um excelente professor');

desc pessoas;
select * from pessoas;
