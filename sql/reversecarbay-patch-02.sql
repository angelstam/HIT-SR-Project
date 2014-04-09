SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

ALTER SCHEMA `reversecarbay`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

ALTER TABLE `reversecarbay`.`users` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

ALTER TABLE `reversecarbay`.`bids` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ,
DROP COLUMN `bid_amount`,
CHANGE COLUMN `bid_timestamp` `bid_timestamp` TIMESTAMP NOT NULL ,
ADD COLUMN `bid_amount` DOUBLE UNSIGNED NOT NULL AFTER `on_enquiry_id`;

ALTER TABLE `reversecarbay`.`enquiries` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ,
ADD COLUMN `enquiry_timestamp` TIMESTAMP NOT NULL AFTER `accepted_bid_id`;

ALTER TABLE `reversecarbay`.`cars` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
