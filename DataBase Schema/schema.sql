CREATE DATABASE fleet_management;
USE fleet_management;

CREATE TABLE vehicles (
	vehicle_id VARCHAR(20) PRIMARY KEY NOT NULL,
    reg_no VARCHAR(100) NOT NULL UNIQUE,
    type ENUM('Truck', 'Van', 'Car') NOT NULL,
    status VARCHAR(30) NOT NULL,
    last_service_date DATE NOT NULL,
    current_odometer bigint,
    last_service_odometer bigint
);

CREATE TABLE trips (
	trip_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id VARCHAR(20) not null,
    driver_name varchar(100) not null,
    start_date date not null,
    end_date date not null,
    distance_km bigint not null check (distance_km > 0),
    constraint fk_trips_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
        on delete restrict
        on update cascade
);

create table maintainence_alerts (
	alert_id int auto_increment primary key,
    vehicle_id varchar(20) not null,
    alert_date date not null,
    reason varchar(100),
    constraint fk_maintainence_alerts_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
        on delete cascade
        on update cascade
);

create table service_history (
	service_id int auto_increment primary key,
    vehicle_id varchar(20) not null,
    service_date date not null,
    odometer_reading bigint,
    notes varchar(100),
    constraint fk_service_history_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
        on delete restrict
        on update cascade
);

insert into vehicles