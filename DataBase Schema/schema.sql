CREATE DATABASE fleet_management;
USE fleet_management;

CREATE TABLE vehicles (
	vehicle_id VARCHAR(100) PRIMARY KEY NOT NULL,
    reg_no VARCHAR(100) NOT NULL UNIQUE,
    type VARCHAR(100),
    last_service_date DATE NOT NULL,
    current_odometer LONG,
    last_service_odometer LONG
);

CREATE TABLE trip (
	trip_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id VARCHAR(100) not null,
    driver_name varchar(100) not null,
    start_date date not null,
    end_date date not null,
    distance long not null check (distance > 0),
    constraint fk_trip_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
);

create table maintainence_alerts (
	alert_id int auto_increment primary key,
    vehicle_id varchar(100) not null,
    alert_date date not null,
    end_date date not null,
    distance_km long not null check (distance_km > 0),
    constraint fk_maintainence_alerts_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
);

create table service_history (
	service_id int auto_increment primary key,
    vehicle_id varchar(100) not null,
    service_date date not null,
    odometer_reading long,
    notes varchar(100),
    constraint fk_service_history_vehicles
		FOREIGN key (vehicle_id)
        references vehicles(vehicle_id)
);