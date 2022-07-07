-- Adminer 4.8.1 MySQL 8.0.29 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `OrdersProducts`;
CREATE TABLE `OrdersProducts` (
  `IdOrdersProducts` int NOT NULL AUTO_INCREMENT,
  `IdOrder` int NOT NULL,
  `ValueUnit` float NOT NULL,
  `Unit` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `SKU` varchar(255) NOT NULL,
  `Quantity` float NOT NULL,
  `QtyBox` float NOT NULL,
  `Weight` float NOT NULL,
  `Volumen` float NOT NULL,
  `Mark` varchar(255) NOT NULL,
  `Status` tinyint NOT NULL,
  `IsDelete` tinyint NOT NULL DEFAULT '0',
  `NumberPackage` varchar(255) NOT NULL,
  PRIMARY KEY (`IdOrdersProducts`),
  KEY `IdOrder` (`IdOrder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `OrdersProducts` (`IdOrdersProducts`, `IdOrder`, `ValueUnit`, `Unit`, `Description`, `SKU`, `Quantity`, `QtyBox`, `Weight`, `Volumen`, `Mark`, `Status`, `IsDelete`, `NumberPackage`) VALUES
(24,	1,	200,	'123456',	'13123',	'12312',	12,	12,	12,	12,	'nike',	1,	0,	'123456789'),
(25,	1,	500,	'23456',	'lorem',	'12313',	12,	12,	12,	12,	'nike',	1,	0,	'12123'),
(26,	1,	100,	'123456',	'13123',	'12312',	12,	12,	12,	12,	'nike',	1,	0,	'123456789');

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `IdUser` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Status` tinyint NOT NULL,
  PRIMARY KEY (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `User` (`IdUser`, `Name`, `Email`, `Status`) VALUES
(1,	'arian',	'arianvaldivieso@gmail.com',	1);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `IdOrder` int NOT NULL AUTO_INCREMENT,
  `IdUser` int NOT NULL,
  `OrderNumber` int NOT NULL,
  `DateTime` varchar(255) NOT NULL,
  `ProviderName` varchar(255) NOT NULL,
  `DateCreated` varchar(255) NOT NULL,
  `Observation` varchar(222) NOT NULL,
  `TotalValue` float NOT NULL,
  `Status` varchar(255) NOT NULL,
  `IsDeleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdOrder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orders` (`IdOrder`, `IdUser`, `OrderNumber`, `DateTime`, `ProviderName`, `DateCreated`, `Observation`, `TotalValue`, `Status`, `IsDeleted`) VALUES
(1,	1,	20,	'2019-12-10 00:00:00.000',	'Prveedor - 1',	'2022-07-07 18:18:35.287',	'prueba',	5000,	'pending',	0),
(2,	1,	12,	'1994-12-12 00:00:00.000',	'asdas',	'2022-07-07 18:22:50.019',	'asdasd',	123123,	'123123',	0),
(3,	1,	12,	'1994-12-12 00:00:00.000',	'asasd',	'2022-07-07 19:24:51.749',	'adsasd',	1,	'asd',	0);

-- 2022-07-07 19:31:41
