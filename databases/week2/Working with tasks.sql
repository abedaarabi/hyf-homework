#Add a task with the these attributes: 
insert into task (title, description, created, updated, dueDate, statusID, userID) values ('Python 3,7', 'What is New In Python 3.7', 'C API Changes', now(), 1, 2 );
#Change the title of a task with these attributes:
update task  set title = 'hello world!' where id = 1;
#Change the task due date with these attributes:
update task set due_date = now() where id = 1;
#Change the task status with these attributes: 
update task  set status_id = 1 where id = 2; 
#Mark a task as complete with this attribute:
              T_T
#Delete task with this attribute:
delete from task where id = 4;

