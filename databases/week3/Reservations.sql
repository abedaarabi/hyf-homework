select * from Reservation;
#insert into Reservation values (null, 6, 5, now());
select * from Reservation;
insert into Reservation values (null, 5, 3, now());
insert into Reservation values (null, 9, 2, now());
select * from Reservation;

select * from Reservation where Reservation.id = 1;
update Reservation set number_of_guests = 9 where Reservation.id = 1; 
select * from Reservation;
delete from Reservation where Reservation.id = 1;