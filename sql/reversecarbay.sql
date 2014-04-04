SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `reversecarbay` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `reversecarbay` ;

-- -----------------------------------------------------
-- Table `reversecarbay`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reversecarbay`.`users` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reversecarbay`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reversecarbay`.`cars` (
  `car_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand_name` VARCHAR(45) NULL,
  `model_name` VARCHAR(45) NULL,
  `car_properties` TEXT NULL,
  PRIMARY KEY (`car_id`),
  UNIQUE INDEX `brand_model_UNIQUE` (`brand_name` ASC, `model_name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reversecarbay`.`enquiries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reversecarbay`.`enquiries` (
  `enquiry_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `car_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `target_price` INT UNSIGNED NULL,
  `color` VARCHAR(45) NULL,
  `milage` INT UNSIGNED NULL,
  `from_year` YEAR NULL,
  `accepted_bid_id` INT UNSIGNED NULL,
  PRIMARY KEY (`enquiry_id`, `car_id`, `user_id`),
  INDEX `fk_enquiry_cars_idx` (`car_id` ASC),
  INDEX `fk_enquiry_users_idx` (`user_id` ASC),
  UNIQUE INDEX `fk_enquiry_bid_idx` (`accepted_bid_id` ASC),
  CONSTRAINT `fk_enquiry_cars`
    FOREIGN KEY (`car_id`)
    REFERENCES `reversecarbay`.`cars` (`car_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_enquiry_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `reversecarbay`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_enquiry_bid`
    FOREIGN KEY (`accepted_bid_id`)
    REFERENCES `reversecarbay`.`bids` (`bid_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reversecarbay`.`bids`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reversecarbay`.`bids` (
  `bid_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `on_enquiry_id` INT UNSIGNED NOT NULL,
  `enquiry_configuration` TEXT NULL,
  PRIMARY KEY (`bid_id`, `user_id`, `on_enquiry_id`),
  INDEX `fk_bids_user_idx` (`user_id` ASC),
  INDEX `fk_bids_enquiry_idx` (`on_enquiry_id` ASC),
  CONSTRAINT `fk_bids_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `reversecarbay`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bids_enquiry`
    FOREIGN KEY (`on_enquiry_id`)
    REFERENCES `reversecarbay`.`enquiries` (`enquiry_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `reversecarbay`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `reversecarbay`;
INSERT INTO `reversecarbay`.`users` (`user_id`, `username`, `password`) VALUES (1, 'test', NULL);
INSERT INTO `reversecarbay`.`users` (`user_id`, `username`, `password`) VALUES (2, 'admin', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `reversecarbay`.`cars`
-- -----------------------------------------------------
START TRANSACTION;
USE `reversecarbay`;
INSERT INTO `reversecarbay`.`cars` (`car_id`, `brand_name`, `model_name`, `car_properties`) VALUES (1, 'Ford', 'Mondeo', NULL);
INSERT INTO `reversecarbay`.`cars` (`car_id`, `brand_name`, `model_name`, `car_properties`) VALUES (2, 'Ford', 'Mustang', NULL);
INSERT INTO `reversecarbay`.`cars` (`car_id`, `brand_name`, `model_name`, `car_properties`) VALUES (3, 'Volvo', '240', NULL);
INSERT INTO `reversecarbay`.`cars` (`car_id`, `brand_name`, `model_name`, `car_properties`) VALUES (4, 'Volvo', 'Amazon', NULL);
INSERT INTO `reversecarbay`.`cars` (`car_id`, `brand_name`, `model_name`, `car_properties`) VALUES (5, 'Audi', '100', NULL);

COMMIT;

