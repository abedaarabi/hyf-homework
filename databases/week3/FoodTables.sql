
use food;
/*CREATE TABLE `Meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) not null, 
  `description` text null default null,
  `location` varchar(255) not null,
  `then` date NOT NULL,
  `price` DECIMAL(5,2),
  `creayed_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
alter table `Meal` add `max_reservations` int(10) NOT NULL;

CREATE TABLE `Reservation`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`number_of_guests` int(10) unsigned not null,
`meal_id`  int(10) NOT NULL,
`created_date` date NOT NULL,
primary key (`id`)
#CONSTRAINT `fk_fk_mealId` FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;*/


CREATE TABLE `Review`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(255) not null, 
`description` text null default null,
`meal_id` int(10) not null,  
`stras` int(10) unsigned not null,
`created_date` date NOT NULL,
primary key (`id`),
CONSTRAINT `fk_mealId1` FOREIGN KEY (`meal_id`) REFERENCES `Reservation`(`meal_id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



