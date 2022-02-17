create table if not exists users (
  id serial primary key,
  name varchar(255) not null,
  firebase_uid varchar(255) not null,
  profile_image_url varchar(255) not null
);

create table if not exists events(
  id serial primary key,
  title varchar(255) not null,
  description text,
  document text not null,
  datetime datetime not null,
  stream_url varchar(255) not null,
  organizer bigint unsigned not null,
  foreign key (organizer) references users(id)
);

create table if not exists event_users(
  event_id bigint unsigned not null,
  user_id bigint unsigned not null,
  foreign key (event_id) references events(id) on delete cascade,
  foreign key (user_id) references users(id) on delete cascade
);

create table if not exists tags(
  id serial primary key,
  tag varchar(255) not null
);

create table if not exists event_tags(
  event_id bigint unsigned not null,
  tag_id bigint unsigned not null,
  foreign key (event_id) references events(id) on delete cascade,
  foreign key (tag_id) references tags(id) on delete cascade
);

create table if not exists comments(
  event_id bigint unsigned not null,
  user_id bigint unsigned not null,
  comment text not null,
  foreign key (event_id) references events(id) on delete cascade,
  foreign key (user_id) references users(id) on delete cascade
);

create table if not exists feedbacks(
  event_id bigint unsigned not null,
  user_id bigint unsigned not null,
  stars tinyint(5) unsigned not null,
  feedback text not null,
  foreign key (event_id) references events(id) on delete cascade,
  foreign key (user_id) references users(id) on delete cascade
);

create table if not exists images(
  id serial primary key,
  image_url varchar(255) not null
);

create table if not exists event_images(
  event_id bigint unsigned not null,
  image_id bigint unsigned not null,
  foreign key (event_id) references events(id) on delete cascade,
  foreign key (image_id) references images(id) on delete cascade
);

create table if not exists badges(
  id serial primary key,
  badge varchar(255) not null
);

create table if not exists user_badges(
  user_id bigint unsigned not null,
  badge_id bigint unsigned not null,
  foreign key (user_id) references users(id) on delete cascade,
  foreign key (badge_id) references badges(id) on delete cascade
);
