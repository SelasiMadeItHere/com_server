/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.8-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `card_tbl` (
	`index` int (11),
	`ID` varchar (45),
	`rqst_id` varchar (60),
	`campus` varchar (45),
	`service` varchar (45),
	`status` varchar (45),
	`DateApplied` date ,
	`DateApproved` date ,
	`DateFinished` date ,
	`image` varchar (135),
	`email` varchar (135)
); 
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('94','ADS19B00205Y','Card-627fd2','KCC Campus','Replacement','worked_on','2023-07-06','2023-07-06','0000-00-00','lenovo t440.webp','ads19b00205y@ait.edu.gh');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('95','ADS19B00205Y','Card-5bdfc8','KCC Campus','Replacement','verified','2023-07-06','2023-07-06','0000-00-00','lenovo t440 3.jpg','agbesipreciousselasi@gmail.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('96','ENG12A00299Y','Card-72101c','SEAVIEW','Renewal','verified','2023-07-07','2023-07-07','0000-00-00','lenovo t440.jpg','something@yandex.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('97','ADS19B00476Y','Card-e6b5e0','KCC Campus','Replacement','Pending','2023-07-07',NULL,'0000-00-00','lenovo t440.jpg','something@yandex.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('98','ABS18B00371Y','Card-6ade94','SEAVIEW','Renewal','Pending','2023-07-07',NULL,'0000-00-00','lenovo t440.jpg','something@yandex.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('99','ABS18B00371Y','Card-595f78','KCC Campus','Renewal','pending','2023-07-07',NULL,'0000-00-00','lenovo t440 3.jpg','something@yandex.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('100','ENG12A00364Y','Card-9d6495','SEAVIEW','Replacement','verified','2023-07-07','2023-07-11','0000-00-00','lenovo t440 3.jpg','something@yandex.com');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('101','ADS19B00205Y','Card-1253c8','SEAVIEW','Replacement','verified','2023-07-07','2023-07-19','0000-00-00','com.gamedevltd.destinywarfare_Screenshot_2022','ads19b00205y@ait.edu.gh');
insert into `card_tbl` (`index`, `ID`, `rqst_id`, `campus`, `service`, `status`, `DateApplied`, `DateApproved`, `DateFinished`, `image`, `email`) values('102','ADS19B00205Y','Card-76917a','SEAVIEW','Renewal','Pending','2023-07-11',NULL,'0000-00-00','com.gamedevltd.destinywarfare_Screenshot_2022','agbesipreciousselasi@gmail.com');
