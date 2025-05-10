-- criando as tabelas --
create table if not exists users (
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);

create table if not exists categories (
    id serial primary key,
    name varchar(100) not null,
    color varchar(100) not null
);

create table if not exists tasks (
    id serial primary key,
    title varchar(100) not null,
    description text,
    due_date date,
    status varchar(20),
    user_id int references users(id) ON delete cascade,
    category_id int references categories(id) on delete set null
);
----

