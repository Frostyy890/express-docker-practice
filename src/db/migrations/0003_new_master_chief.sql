CREATE TABLE `test` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`completed` boolean NOT NULL DEFAULT false,
	CONSTRAINT `test_id` PRIMARY KEY(`id`)
);
