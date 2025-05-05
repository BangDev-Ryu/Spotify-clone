CREATE TABLE `albums` (
  `album_id` int(11) PRIMARY KEY NOT NULL,
  `artist_id` int(11) DEFAULT null,
  `name` varchar(50) NOT NULL,
  `release_date` date DEFAULT null,
  `image` varchar(255) DEFAULT null
);

CREATE TABLE `artists` (
  `artist_id` int(11) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL,
  `genre` varchar(50) DEFAULT null,
  `image_url` varchar(255) DEFAULT null
);

CREATE TABLE `followers` (
  `user_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`, `artist_id`)
);

CREATE TABLE `likes` (
  `user_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `like_date` datetime DEFAULT null,
  PRIMARY KEY (`user_id`, `track_id`)
);

CREATE TABLE `payment` (
  `payment_id` int(11) PRIMARY KEY NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `payment_date` date NOT NULL,
  `amount` decimal(10,2) NOT NULL
);

CREATE TABLE `playlists` (
  `playlist_id` int(11) PRIMARY KEY NOT NULL,
  `user_id` int(11) DEFAULT null,
  `name` varchar(50) NOT NULL,
  `iamge` blob DEFAULT null
);

CREATE TABLE `playlist_tracks` (
  `playlist_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `order` int(11) DEFAULT null,
  PRIMARY KEY (`playlist_id`, `track_id`)
);

CREATE TABLE `premium` (
  `premium_id` int(11) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `tracks` (
  `track_id` int(11) PRIMARY KEY NOT NULL,
  `album_id` int(11) DEFAULT null,
  `name` varchar(50) NOT NULL,
  `duration` int(11) NOT NULL,
  `path` varchar(255) DEFAULT null
);

CREATE TABLE `users` (
  `user_id` int(11) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_of_birth` date DEFAULT null,
  `iamge` blob DEFAULT null,
  `user_type` varchar(10) NOT NULL DEFAULT 'regular'
);

CREATE TABLE `user_premium` (
  `user_id` int(11) NOT NULL,
  `premium_id` int(11) NOT NULL,
  `start_date` date DEFAULT null,
  `end_date` date DEFAULT null,
  PRIMARY KEY (`user_id`, `premium_id`)
);

ALTER TABLE `albums` ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`artist_id`);

ALTER TABLE `followers` ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `followers` ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`artist_id`);

ALTER TABLE `likes` ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `likes` ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`track_id`);

ALTER TABLE `payment` ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `playlists` ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `playlist_tracks` ADD CONSTRAINT `playlist_tracks_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`playlist_id`);

ALTER TABLE `playlist_tracks` ADD CONSTRAINT `playlist_tracks_ibfk_2` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`track_id`);

ALTER TABLE `tracks` ADD CONSTRAINT `tracks_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `albums` (`album_id`);

ALTER TABLE `user_premium` ADD CONSTRAINT `user_premium_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `user_premium` ADD CONSTRAINT `user_premium_ibfk_2` FOREIGN KEY (`premium_id`) REFERENCES `premium` (`premium_id`);
