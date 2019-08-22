-- create database schoolDataBase2;
use schoolDataBase2;
set names utf8mb4;
#ClassInfo
 CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` varchar(255) NOT NULL,
  `ends` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
#studentInfo
 CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` varchar(255) NULL,
  PRIMARY KEY (`class_id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
#Create index
alter table student add index index_name (name);
#Data Inputs
/*Class*/
insert into class (name, begins, ends) values ('09', now(), '2022-01-01');
insert into class (name, begins, ends) values ('10', now(), '2022-01-01');
insert into class (name, begins, ends) values ('11', now(), '2022-01-01');
/*Students*/
insert into student (name, email, phone, class_id) values ('Marc', 'ma@mtest.com', 'xxxxx', 1);
insert into student (name, email, phone, class_id) values ('martin', 'ma@test.com', 'xxxxx', 2);
insert into student (name, email, phone, class_id) values ('Abed', 'aba@test.com', 'xxxx', 3);
insert into student (name, email, phone, class_id) values ('Lærke', 'laa@test.com', 'xxxx', 4);
#Add a new column to the class table named status:
alter table class add column status enum('not-started', 'ongoing', 'finished' );

