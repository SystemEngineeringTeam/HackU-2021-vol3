create table if not exists users (
  id serial primary key,
  name varchar(255) not null,
  firebase_uid varchar(255) not null,
  profile_image_url varchar(255) not null
);

create table if not exists images(
  id serial primary key,
  image_url varchar(255) not null
);

create table if not exists events(
  id serial primary key,
  title varchar(255) not null,
  description text,
  document text not null,
  datetime datetime not null,
  stream_url varchar(255) not null,
  image_id bigint unsigned not null,
  organizer bigint unsigned not null,
  foreign key (image_id) references images(id),
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

insert into users (name, firebase_uid, profile_image_url) values ('admin', 'admin', 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y');
insert into images (image_url) values ('https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y');
insert into events (title, description, document, datetime, stream_url, image_id, organizer) values ('Test Event', 'Test Description', 'Test Document', '2020-01-01 00:00:00', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',1, 1);
insert into event_users (event_id, user_id) values (1, 1);
insert into tags (tag) values ('Test Tag'),('Go'),('Node'),('PHP'),('Begginer');
insert into event_tags (event_id, tag_id) values (1, 1);
insert into comments (event_id, user_id, comment) values (1, 1, 'Test Comment');
insert into feedbacks (event_id, user_id, stars, feedback) values (1, 1, 5, 'Test Feedback');
insert into badges (badge) values ('Test Badge');
insert into user_badges (user_id, badge_id) values (1, 1);
