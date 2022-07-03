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
  PRIMARY KEY (`IdOrdersProducts`),
  KEY `IdOrder` (`IdOrder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `OrdersProducts` (`IdOrdersProducts`, `IdOrder`, `ValueUnit`, `Unit`, `Description`, `SKU`, `Quantity`, `QtyBox`, `Weight`, `Volumen`, `Mark`, `Status`, `IsDelete`) VALUES
(3,	44,	90,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(4,	50,	20,	'KG',	'hola mundo',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(5,	41,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(6,	41,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(7,	41,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(8,	41,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(9,	42,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(11,	50,	31231,	'1231',	'123123',	'123123',	123,	123,	123123,	123,	'12312',	1,	1),
(12,	42,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(13,	42,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(14,	42,	20,	'KG',	'hola',	'1236612',	10,	5,	20,	30,	'nike',	1,	0),
(15,	50,	3123,	'1231',	'12313',	'1231',	31231,	312312,	3123120,	123123,	'123',	1,	0),
(16,	50,	12312,	'123',	'3123123',	'12312',	123123,	1231,	1231,	123123,	'123123',	0,	0),
(17,	58,	123,	'132',	'123123',	'123123',	123,	123,	123,	123123,	'123123',	1,	1),
(18,	58,	2312,	'asdasd',	'1231',	'123123',	123123,	123,	123132,	123123,	'123123',	0,	1),
(19,	58,	123,	'123',	'123',	'123',	123,	123123,	123123,	123123,	'123132',	1,	1),
(20,	58,	1231,	'132123',	'32',	'123123',	123123,	123123,	123,	123123,	'123123',	1,	1),
(21,	58,	3123,	'1231',	'1123',	'123123',	123,	123,	123,	123123,	'123123',	1,	1),
(22,	58,	123,	'1231',	'123',	'123123',	123,	123123,	123123,	123123,	'123123',	1,	1),
(23,	58,	123123,	'12313',	'123123',	'123123',	123123,	123123,	123123,	123123,	'12312',	1,	0);

-- 2022-07-03 22:48:32
