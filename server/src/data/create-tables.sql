CREATE DATABASE `smgm` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `item` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ItemId` bigint(20) NOT NULL,
  `Code` varchar(50) NOT NULL,
  `CategoryId` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` decimal(18,2) NOT NULL,
  `ImagePath` varchar(500) DEFAULT NULL,
  `AddedBy` varchar(50) NOT NULL,
  `AddedDate` datetime NOT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

CREATE TABLE `item_category` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

CREATE TABLE `order_number` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `OrderNumber` bigint NOT NULL,
  `OrderNumberString` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `order_details` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `OrderNumber` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `ContactNumber` bigint NOT NULL,
  `Address` varchar(500) NOT NULL,
  `SubTotal` decimal(18,2) NOT NULL DEFAULT '0.00',
  `Discount` decimal(18,2) NOT NULL DEFAULT '0.00',
  `Tax` decimal(18,2) NOT NULL DEFAULT '0.00',
  `DeliveryCharge` decimal(18,2) NOT NULL DEFAULT '0.00',
  `Status` varchar(45) NOT NULL,
  `AddedDate` datetime NOT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `order_items` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OrderId` bigint(20) NOT NULL,
  `ItemId` bigint(20) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `AddedDate` datetime NOT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
