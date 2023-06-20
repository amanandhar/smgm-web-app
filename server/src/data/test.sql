CREATE TABLE `order_detail` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OrderNumber` bigint(20) NOT NULL,
  `OrderNumberDisplay` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `ContactNumber` bigint(20) NOT NULL,
  `Address` varchar(500) NOT NULL,
  `SubTotal` decimal(18,2) NOT NULL DEFAULT '0.00',
  `Discount` decimal(18,2) NOT NULL DEFAULT '0.00',
  `Tax` decimal(18,2) NOT NULL DEFAULT '0.00',
  `DeliveryCharge` decimal(18,2) NOT NULL DEFAULT '0.00',
  `IsSync` tinyint(4) NOT NULL DEFAULT '0',
  `CreatedDate` datetime NOT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


CREATE TABLE `order_item` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `OrderNumberDisplay` varchar(50) NOT NULL,
  `ItemId` bigint(20) NOT NULL,
  `Price` decimal(18,2) NOT NULL,
  `Quantity` decimal(18,2) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


SELECT * FROM smgm.order_detail;

TRUNCATE TABLE smgm.order_detail;

UPDATE smgm.order_detail SET IsSync = 0 WHERE Id = 1;
UPDATE smgm.order_detail SET IsSync = 0 WHERE Id = 2;
UPDATE smgm.order_detail SET IsSync = 0 WHERE Id = 3;
UPDATE smgm.order_detail SET IsSync = 0 WHERE Id = 4;

INSERT INTO `smgm`.`order_detail`
(`OrderNumber`,`OrderNumberDisplay`,`Name`,`ContactNumber`,`Address`,`SubTotal`,`Discount`,`Tax`,`DeliveryCharge`,`IsSync`,`CreatedDate`,`UpdatedBy`,`UpdatedDate`)
VALUES
(1,'0001','Adam Manandhar',9841272950,'Khusibhu-16, Kathmandu',100.00,0.00,0.00,5.00,0,'2023-06-17 02:04:16',null,null);

INSERT INTO `smgm`.`order_detail`
(`OrderNumber`,`OrderNumberDisplay`,`Name`,`ContactNumber`,`Address`,`SubTotal`,`Discount`,`Tax`,`DeliveryCharge`,`IsSync`,`CreatedDate`,`UpdatedBy`,`UpdatedDate`)
VALUES
(2,'0002','Bhai Raja Manandhar',9841862943,'Khusibhu-16, Kathmandu',200.00,0.00,0.00,0.00,0,'2023-06-17 02:04:16',null,null);

SELECT * FROM smgm.order_item;

INSERT INTO `smgm`.`order_item`
(`OrderNumberDisplay`,`ItemId`,`Price`,`Quantity`,`CreatedDate`,`UpdatedBy`,`UpdatedDate`)
VALUES
('0001', 489, 100.00, 1, '2023-06-17 02:06:18', null, null);
SELECT * FROM smgm.order_item;

INSERT INTO `smgm`.`order_item`
(`OrderNumberDisplay`,`ItemId`,`Price`,`Quantity`,`CreatedDate`,`UpdatedBy`,`UpdatedDate`)
VALUES
('0002', 489, 100.00, 1, '2023-06-17 02:06:18', null, null);
SELECT * FROM smgm.order_item;INSERT INTO `smgm`.`order_item`
(`OrderNumberDisplay`,`ItemId`,`Price`,`Quantity`,`CreatedDate`,`UpdatedBy`,`UpdatedDate`)
VALUES
('0002', 491, 100.00, 1, '2023-06-17 02:06:18', null, null);

