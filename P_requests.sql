/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.8-MariaDB : Database - requests
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`requests` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `requests`;

/*Table structure for table `card_tbl` */

DROP TABLE IF EXISTS `card_tbl`;

CREATE TABLE `card_tbl` (
  `index` int(11) DEFAULT NULL,
  `ID` varchar(45) DEFAULT NULL,
  `rqst_id` varchar(60) DEFAULT NULL,
  `campus` varchar(45) DEFAULT NULL,
  `service` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `DateApplied` date DEFAULT NULL,
  `DateApproved` date DEFAULT NULL,
  `DateFinished` date DEFAULT NULL,
  `image` varchar(135) DEFAULT NULL,
  `email` varchar(135) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `card_tbl` */

insert  into `card_tbl`(`index`,`ID`,`rqst_id`,`campus`,`service`,`status`,`DateApplied`,`DateApproved`,`DateFinished`,`image`,`email`) values 
(94,'ADS19B00205Y','Card-627fd2','KCC Campus','Replacement','','2023-07-06','2023-07-06','0000-00-00','lenovo t440.webp','ads19b00205y@ait.edu.gh'),
(95,'ADS19B00205Y','Card-5bdfc8','KCC Campus','Replacement','verified','2023-07-06','2023-07-06','0000-00-00','lenovo t440 3.jpg','agbesipreciousselasi@gmail.com'),
(96,'ENG12A00299Y','Card-72101c','SEAVIEW','Renewal','verified','2023-07-07','2023-07-07','0000-00-00','lenovo t440.jpg','something@yandex.com'),
(97,'ADS19B00476Y','Card-e6b5e0','KCC Campus','Replacement','Pending','2023-07-07',NULL,'0000-00-00','lenovo t440.jpg','something@yandex.com'),
(98,'ABS18B00371Y','Card-6ade94','SEAVIEW','Renewal','Pending','2023-07-07',NULL,'0000-00-00','lenovo t440.jpg','something@yandex.com'),
(99,'ABS18B00371Y','Card-595f78','KCC Campus','Renewal','pending','2023-07-07',NULL,'0000-00-00','lenovo t440 3.jpg','something@yandex.com'),
(100,'ENG12A00364Y','Card-9d6495','SEAVIEW','Replacement','verified','2023-07-07','2023-07-11','0000-00-00','lenovo t440 3.jpg','something@yandex.com'),
(101,'ADS19B00205Y','Card-1253c8','SEAVIEW','Replacement','verified','2023-07-07','2023-07-19','0000-00-00','com.gamedevltd.destinywarfare_Screenshot_2022','ads19b00205y@ait.edu.gh'),
(102,'ADS19B00205Y','Card-76917a','SEAVIEW','Renewal','Pending','2023-07-11',NULL,'0000-00-00','com.gamedevltd.destinywarfare_Screenshot_2022','agbesipreciousselasi@gmail.com');

/*Table structure for table `tbl_deferments` */

DROP TABLE IF EXISTS `tbl_deferments`;

CREATE TABLE `tbl_deferments` (
  `tblid` bigint(100) NOT NULL AUTO_INCREMENT,
  `rqst_id` varchar(50) NOT NULL,
  `stuid` varchar(20) DEFAULT NULL,
  `clevel` varchar(10) DEFAULT NULL,
  `csem` int(1) DEFAULT NULL,
  `defsem` int(1) DEFAULT NULL,
  `defyear` varchar(20) DEFAULT NULL,
  `retsem` int(1) DEFAULT NULL,
  `retyear` varchar(20) DEFAULT NULL,
  `prevdef` enum('yes','no') DEFAULT NULL,
  `prevdef_sem` varchar(1) DEFAULT NULL,
  `prevdef_year` varchar(20) DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  `reason_specify` varchar(100) DEFAULT NULL,
  `reciept_path` varchar(300) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'Pending',
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_deferments` */

insert  into `tbl_deferments`(`tblid`,`rqst_id`,`stuid`,`clevel`,`csem`,`defsem`,`defyear`,`retsem`,`retyear`,`prevdef`,`prevdef_sem`,`prevdef_year`,`reason`,`reason_specify`,`reciept_path`,`status`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values 
(3,'ADS19B00225Y-DEF-001','ADS19B00005Y','400',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-009','ADS19B00005Y','400',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-020','ADS19B00005Y','200',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-123','ADS19B00005Y','300',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-210','ADS19B00005Y','100',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-222','ADS19B00005Y','200',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-310','ADS19B00005Y','200',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(3,'ADS19B00225Y-DEF-991','ADS19B00005Y','200',2,1,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'pending',1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),
(4,'ADS19B00225Y-DEF-638','ADS19B00725Y','400',1,2,'2021/2022',1,'2022/2023','no',NULL,NULL,'financial',NULL,NULL,'verified',1,NULL,'2023-05-16 20:07:07','2023-05-16 20:07:07');

/*Table structure for table `tbl_introductory_requests` */

DROP TABLE IF EXISTS `tbl_introductory_requests`;

CREATE TABLE `tbl_introductory_requests` (
  `tblid` bigint(100) NOT NULL AUTO_INCREMENT,
  `rqst_id` varchar(30) NOT NULL,
  `stuid` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `for` varchar(50) DEFAULT NULL,
  `pnumber` varchar(20) DEFAULT NULL,
  `raddress` varchar(200) DEFAULT NULL,
  `bname` varchar(100) DEFAULT NULL,
  `eaddress` varchar(200) DEFAULT NULL,
  `reciept_path` varchar(300) DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_introductory_requests` */

insert  into `tbl_introductory_requests`(`tblid`,`rqst_id`,`stuid`,`phone`,`for`,`pnumber`,`raddress`,`bname`,`eaddress`,`reciept_path`,`status`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values 
(4,'ADS19B00225Y-INTRO-248','ADS19B00225Y','999','For Bank',NULL,'ff','RTT',NULL,NULL,'Pending',1,NULL,'2022-03-01 09:29:49','2022-03-01 09:29:49'),
(13,'ADS19B00205Y-INTRO-248','ADS19B00205Y','3221213','For Bank',NULL,NULL,'Ecobank',NULL,NULL,'Pending',1,NULL,NULL,NULL),
(14,'ADS19B00201Y-INTRO-248','ADS19B00201Y','231413','For Bank',NULL,NULL,'UBA',NULL,NULL,'Pending',1,NULL,NULL,NULL);

/*Table structure for table `tbl_requests_officers` */

DROP TABLE IF EXISTS `tbl_requests_officers`;

CREATE TABLE `tbl_requests_officers` (
  `id` int(1) NOT NULL,
  `officer` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tbl_requests_officers` */

insert  into `tbl_requests_officers`(`id`,`officer`) values 
(1,'Finance'),
(2,'Registrar'),
(3,'President');

/*Table structure for table `tbl_requests_states` */

DROP TABLE IF EXISTS `tbl_requests_states`;

CREATE TABLE `tbl_requests_states` (
  `id` int(1) NOT NULL,
  `state` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tbl_requests_states` */

insert  into `tbl_requests_states`(`id`,`state`) values 
(1,'Pending'),
(2,'Disapproved'),
(3,'Approved');

/*Table structure for table `tbltranscript_requests` */

DROP TABLE IF EXISTS `tbltranscript_requests`;

CREATE TABLE `tbltranscript_requests` (
  `tblid` bigint(100) NOT NULL AUTO_INCREMENT,
  `rqst_id` varchar(30) NOT NULL,
  `stuid` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `prog` varchar(30) DEFAULT NULL,
  `level` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `purpose` varchar(1000) DEFAULT NULL,
  `ogname` varchar(100) DEFAULT NULL,
  `ogcontact` varchar(100) DEFAULT NULL,
  `ogemail` varchar(50) DEFAULT NULL,
  `ogpostal` varchar(200) DEFAULT NULL,
  `ogphone` varchar(20) DEFAULT NULL,
  `deliv_mode` varchar(20) DEFAULT NULL,
  `mode_specify` varchar(1000) DEFAULT NULL,
  `reciept_path` varchar(300) DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `tbltranscript_requests` */

insert  into `tbltranscript_requests`(`tblid`,`rqst_id`,`stuid`,`name`,`prog`,`level`,`phone`,`purpose`,`ogname`,`ogcontact`,`ogemail`,`ogpostal`,`ogphone`,`deliv_mode`,`mode_specify`,`reciept_path`,`status`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values 
(1,'ADS19B00205Y-TRAN-248','ADS19B00205Y',NULL,'Information Technology','100','0342626272','Application to another School','KNUST','054233998','soething@yandex.com',NULL,'054233998','Post',NULL,NULL,'verified',1,NULL,NULL,NULL),
(2,'ADS19B00295Y-TRAN-248','ADS19B00295Y',NULL,'Computer Science','200','0342626272','Job Application','Soka International','05489633354','anything@yahoo.com',NULL,'054233998','Post',NULL,NULL,'Pending',1,NULL,NULL,NULL),
(3,'ADS19B00225Y-TRAN-258','ADS19B00225Y',NULL,'Information Technology','400','0342626272','Job application','AbuChuku International','5755386422','womething@gmail.com',NULL,'505538642','Email',NULL,NULL,'Pending',1,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
