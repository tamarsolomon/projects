use airport
create procedure PR_insertworker(@worker_id int,@first_name varchar(30),@last_name varchar(30),@city varchar(30),@street varchar(30),@phone varchar(15),@gmail varchar(30),@worker_houres int)
as
begin		
	if((select worker_id from Workers where worker_id=@worker_id)is null)
		insert into Workers(first_name,last_name,city,street,phone,gmail,worker_houres)
		values(@first_name,@last_name,@city,@street,@phone,@gmail,@worker_houres)

	else
		print('this is not a new worker');
end
go

exec PR_insertworker @worker_id=2,@first_name='michael',@last_name='myller',@city='new york',@street='15th ave',@phone='7185084454',@gmail='4tfgh@gmail.com',@worker_houres=60

select * from Workers

create view passangers_and_workers
as
select p.first_name,p.last_name,p.phone from Passanger p
union
select w.first_name,w.last_name, w.phone from Workers w
go

select * from passangers_and_workers

create view V_first_flight_for_passanger
as
select p.first_name,p.last_name,p.passanger_id,c.company_id,c.flight_id,c.flight_status,c.flight_time,c.gate_id from Passanger p join Tickets t on p.passanger_id=t.passanger_id
cross apply(
	select top 1 * from Flight f
	where f.flight_id=t.flight_id
	order by company_name desc,boarding desc
)c 
group by p.first_name,c.company_id,c.flight_id,c.flight_status,c.flight_time,c.gate_id,p.last_name,p.passanger_id
go

select *from V_first_flight_for_passanger

select w.first_name,w.last_name  from Workers w group by w.first_name,w.last_name
--**********************************************************************************************************************************************************
go
create procedure dbo.pr_insertcorrectvaluestotablepassanger (@pasport_number int,@phone varchar(15) ,@email varchar(30) ,@first_name varchar(30) ,@last_name varchar(30))
--returns int
as 
begin 
	begin try
		insert into Passanger (pasort_number,phone,email,first_name,last_name) 
		values(@pasport_number ,@phone ,@email ,@first_name ,@last_name)
	end try
	begin catch

	select @@ERROR, error_message(),error_procedure() , error_line() 
	print 'theres an invalid value'

	end catch
end

create table [dbo].[passanger_log](
	[passanger_id][int] not null,
	[pasort_number][int] not null,
	[phone][varchar](15) not null,
	[email][varchar](30) not null,
	[first_name][varchar](30) not null,
	[last_name][varchar](30) not null
)
go

--***********************************************************************************************************************************************************
create trigger TR_IUD_passangers_log
on Passanger
for insert,update,delete
as
begin 
insert into [passanger_log]([passanger_id],[pasort_number],[phone],[email],[first_name],[last_name],create_date,ho)
select [passanger_id],[pasort_number],[phone],[email],[first_name],[last_name],getdate(),HOST_NAME(),SUSER_NAME()
from inserted
union 
select [passanger_id],[pasort_number],[phone],[email],[first_name],[last_name],getdate(),HOST_NAME(),SUSER_NAME()
from deleted
end

--get the first worker that worked the most hours for every type
select c.worker_type_id ,c.worker_id,c.first_name,c.last_name,c.worker_houres
from (
	select ROW_NUMBER() over(partition by w.worker_type_id order by worker_houres desc,first_name asc,last_name asc) as RowNumber,
	w.worker_id,
	w.worker_type_id,
	first_name,
	last_name,
	worker_houres
	from Workers w
	join Worker_Type wt on wt.worker_type_id=w.worker_type_id

)c
where c.RowNumber=1

--select * from Workers