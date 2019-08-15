
select * from user;
# 1.Find out how many tasks are in the task table
select count(title)  from task; 
# 2.Find out how many tasks in the task table do not have a valid due date
select COUNT(title) as nullDate from task where due_date is null;
# 3. Find all the tasks that are marked as done
select task.title, status.name from task inner join status on task.status_id = status.id where status.name = 'done';
#4.Find all the tasks that are not marked as done
select task.title, status.name from task inner join status on task.status_id = status.id where status.name != 'done';
# 5.Get all the tasks, sorted with the most recently created first
select * FROM task order by created desc;
# 6.Get the single most recently created task
select * FROM task order by created limit 1;
# 7.Get the title and due date of all tasks where the title or description contains database
select title, due_date from task where title like '%database%';
# 8.Get the title and status (as text) of all tasks
select title as 'Task' from task;
# 9.Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS 'Status', COUNT(task.status_id) AS 'Total_Status' FROM status INNER JOIN task ON status.id = task.status_id GROUP BY STATUS;
# 10.Get the names of all statuses, sorted by the status with most tasks first
select status.name as 'STATUS', count(task.status_id) as 'COUNT_STATUS' from status join task on status.id = task.status_id group by STATUS order by COUNT_STATUS desc;
