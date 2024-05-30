create database airport collate hebrew_100_ci_as
use airport
go

create table Workers(
worker_id int identity not null constraint PK_Workers#worker_id primary key(worker_id),
first_name varchar(30) not null,
last_name varchar(30) not null,
city varchar(30) not null,
street varchar(30) not null,
phone varchar(15) not null,
gmail varchar(30),
worker_houres int not null,
)

alter table Workers
add worker_type_id int constraint FK_worker_tye_id foreign key(worker_type_id) references Worker_Type(worker_type_id)

create table Companys(
company_id int identity not null constraint PK_Company#company_id primary key(company_id),
company_name varchar(30) not null,
company_licens int not null,
worker_id int not null constraint FK_worker_id foreign key(worker_id) references Workers(worker_id)
)

create table Worker_Type(
worker_type_id int identity not null constraint PK_Worker_type#worker_type_id primary key(worker_type_id),
)

alter table Worker_Type
add worker_type_name varchar(30)

create table Desk(
Desk_id int not null constraint PK_Desk#desk_id primary key(desk_id),
worker_id int not null constraint FK_worker_id@desk foreign key(worker_id) references Workers(worker_id)
)

create table Flight(
flight_id varchar(30) not null constraint PK_Flight#flight_id primary key(flight_id),
company_id int not null constraint FK_companyId foreign key(company_id) references Companys(company_id),
flight_time time not null,
gate_id int not null,
flight_status varchar(30) not null
)

create table Passanger(
passanger_id int not null constraint PK_Passanger#passanger_id primary key(passanger_id),
pasort_number int not null,
phone varchar(15) not null,
email varchar(30) not null,
first_name varchar(30) not null,
last_name varchar(30)   not null
)
	
INSERT INTO Passanger (passanger_id, pasort_number, phone, email, first_name, last_name)
VALUES
    (1, '123456', '555-1234', 'john.doe@email.com', 'John', 'Doe'),
    (2, '789012', '555-5678', 'jane.smith@email.com', 'Jane', 'Smith');

create table Tickets(
ticket_id int identity constraint PK_Tickets#ticket_id primary key(ticket_id),
flight_id varchar(30) not null constraint FK_flightId@tickets foreign key(flight_id) references Flight(flight_id),
company_name varchar(30) not null,
seat_number varchar(30) not null,
luggage int ,
gate_id varchar(10),
boarding time not null,
passanger_id int not null constraint FK_passanger_id@tickets foreign key(passanger_id) references Passanger(passanger_id),
)

INSERT INTO Workers (first_name, last_name, city, street, phone, gmail, worker_houres,worker_type_id)
VALUES
  ('John', 'Doe', 'Jerusalem', 'HaNeviim St 12', '+972-54-1234567', 'johndoe@example.com', 40,1),
  ('Jane', 'Smith', 'Tel Aviv', 'HaBira St 34', '+972-3-9876543', 'janesmith@example.com', 35,1),
  ('Michael', 'Brown', 'Haifa', 'HaGefen St 56', '+972-4-7654321', 'michaelbrown@example.com', 30,2),
  ('John', 'Doe', 'New York', '123 Main St', '555-1234', 'johndoe@gmail.com', 40,2),
  ('Jane', 'Smith', 'Los Angeles', '456 Elm St', '555-5678', 'janesmith@gmail.com', 35,3),
  ( 'Bob', 'Johnson', 'Chicago', '789 Oak St', '555-9012', 'bobjohnson@gmail.com', 25,2);

INSERT INTO Tickets(flight_id, company_name, seat_number, luggage, gate_id, boarding, passanger_id)
VALUES ('JL123', 'Jet Airways', '12A', 2, 'A3', '18:00', 1),
('EK567', 'Emirates', '7B', 1, 'C15', '20:15', 2),
('AI456', 'Air India', '24D', 0, 'B7', '16:30', 3),
('AA747', 'American Airlines', '4G', 2, 'B3', '17:45', 10),
('QR193', 'Qatar Airways', '9D', 1, 'D12', '10:30', 9),
('CZ357', 'China Southern Airlines', '20A', 3, 'A5', '15:00', 8),
('LH789', 'Lufthansa', '8F', 0, 'C8', '21:30', 7),
('TK1011', 'Turkish Airlines', '31H', 2, 'B14', '11:15', 6),
('BA890', 'British Airways', '15C', 3, 'A1', '09:00', 4),
('QF321', 'Qantas', '6E', 1, 'D20', '13:45', 5),
  ('AC1234', 'Air Canada', '1A', 1, 'B45', 'Zone 1', 11),
  ('LH7890', 'Lufthansa', '23B', 0, 'C21', 'Zone 3', 12),
  ('UA5678', 'United Airlines', '15F', 2, 'A10', 'Zone 2', 13),
  ('BA9012', 'British Airways', '30C', 1, 'D32', 'Zone 4', 14),
  ('EK3456', 'Emirates', '7D', 0, 'B18', 'Zone 1', 15),
  ('SQ7890', 'Singapore Airlines', '12A', 2, 'C30', 'Zone 3', 16),
  ('NH1234', 'ANA', '20B', 1, 'A25', 'Zone 2', 17),
  ('OZ5678', 'Asiana Airlines', '35F', 0, 'D14', 'Zone 4', 18),
  ('DL9012', 'Delta Air Lines', '4C', 2, 'B50', 'Zone 1', 19),
('AI456', 'Air India', '1A', 2, 'A15', '16:30', 21),
('EK3456', 'Emirates', '7B', 1, 'B22', '20:15', 22),
('LH789', 'Lufthansa', '42C', 3, 'C31', '21:30', 23),
  ('AF3456', 'Air France', '18D', 1, 'C16', '16:30',20);

  INSERT INTO Companys(company_name,company_licens,worker_id)
VALUES
('Jet Airways',54736876,19),
('American Airlines',67356578,18),
('Qatar Airways',537254,17),
('China Southern Airlines',42365,16),
('Turkish Airlines',783647,4),
('Qantas',767826387,15),
('Air Canada',876437869,14),
('United Airlines',6243562,16),
('British Airways',7834687362,4),
('Singapore Airlines',892638,18),
('ANA',9874983,19),
('Asiana Airlines',26534675,1),
('Delta Air Lines',78523728,4),
('Air India',8726873,8),
('Emirates',827368,5),
('Lufthansa',7354873,5),
('Air France',37864873,4);

insert into Worker_Type(worker_type_name)
values
('air steward'),
('flight atendent'),
('manager');

select * from Worker_Type

--flight, desk