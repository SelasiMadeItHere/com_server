/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.18-MariaDB : Database - requests
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`requests` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `requests`;

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
  `state` int(1) DEFAULT 1,
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_deferments` */

insert  into `tbl_deferments`(`tblid`,`rqst_id`,`stuid`,`clevel`,`csem`,`defsem`,`defyear`,`retsem`,`retyear`,`prevdef`,`prevdef_sem`,`prevdef_year`,`reason`,`reason_specify`,`reciept_path`,`state`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values (1,'ADS19B00225Y-DEF-248','ADS19B00225Y','100',1,2,'2021/2022',1,'2022/2023',NULL,NULL,NULL,'financial',NULL,NULL,1,1,NULL,'2023-05-16 20:07:30','2023-05-16 20:07:30'),(3,'ADS19B00225Y-DEF-310','ADS19B00225Y',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,'2023-05-16 20:07:20','2023-05-16 20:07:20'),(4,'ADS19B00225Y-DEF-638','ADS19B00225Y',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,'2023-05-16 20:07:07','2023-05-16 20:07:07');

/*Table structure for table `tbl_introductory_requests` */

DROP TABLE IF EXISTS `tbl_introductory_requests`;

CREATE TABLE `tbl_introductory_requests` (
  `rqst_id` bigint(100) NOT NULL AUTO_INCREMENT,
  `rqst_id` varchar(30) NOT NULL,
  `stuid` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `for` varchar(50) DEFAULT NULL,
  `pnumber` varchar(20) DEFAULT NULL,
  `raddress` varchar(200) DEFAULT NULL,
  `bname` varchar(100) DEFAULT NULL,
  `eaddress` varchar(200) DEFAULT NULL,
  `reciept_path` varchar(300) DEFAULT NULL,
  `state` int(1) DEFAULT 1,
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_introductory_requests` */

insert  into `tbl_introductory_requests`(`tblid`,`rqst_id`,`stuid`,`phone`,`for`,`pnumber`,`raddress`,`bname`,`eaddress`,`reciept_path`,`state`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values (4,'ADS19B00225Y-INTRO-248','ADS19B00225Y','999','For Bank',NULL,'ff','RTT',NULL,NULL,1,1,NULL,'2022-03-01 09:29:49','2022-03-01 09:29:49');

/*Table structure for table `tbl_requests_officers` */

DROP TABLE IF EXISTS `tbl_requests_officers`;

CREATE TABLE `tbl_requests_officers` (
  `id` int(1) NOT NULL,
  `officer` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tbl_requests_officers` */

insert  into `tbl_requests_officers`(`id`,`officer`) values (1,'Finance'),(2,'Registrar'),(3,'President');

/*Table structure for table `tbl_requests_states` */

DROP TABLE IF EXISTS `tbl_requests_states`;

CREATE TABLE `tbl_requests_states` (
  `id` int(1) NOT NULL,
  `state` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tbl_requests_states` */

insert  into `tbl_requests_states`(`id`,`state`) values (1,'Pending'),(2,'Disapproved'),(3,'Approved');

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
  `state` int(1) DEFAULT 1,
  `officer` int(1) DEFAULT 1,
  `disapprove_reason` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tblid`,`rqst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `tbltranscript_requests` */

insert  into `tbltranscript_requests`(`tblid`,`rqst_id`,`stuid`,`name`,`prog`,`level`,`phone`,`purpose`,`ogname`,`ogcontact`,`ogemail`,`ogpostal`,`ogphone`,`deliv_mode`,`mode_specify`,`reciept_path`,`state`,`officer`,`disapprove_reason`,`created_at`,`updated_at`) values (1,'ADS19B00225Y-TRAN-248','ADS19B00225Y',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
