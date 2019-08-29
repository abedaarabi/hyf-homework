show tables;
describe meal;
select * from meal;
insert into Meal values 
(null, 'brunch', 'hese brunch recipes will convince you to take your Sunday ritual back to the kitchen. From pancakes to waffles to egg bakes, these recipes make enough to feed a crowd...', 'København', '2019-09-02',6.5, now(), 11);
select * from meal;
update Meal 
set max_reservations = 7 where id = 1;
select * from meal;
update Meal 
set title = 'halloumi salad ' where id = 1;
select * from meal;
insert into Meal values 
(null, 'whatever', ' kitchen. From  to  to egg , these  make enough to feed a crowd...', 'København', '2019-09-02',6.5, now(), 11);

select * from Meal;
delete from meal where Meal.id = 3;
select * from Meal;