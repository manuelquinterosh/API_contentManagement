-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: contentmanagement
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `content_items`
--

DROP TABLE IF EXISTS `content_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `category` varchar(50) DEFAULT NULL,
  `thumbnail_url` varchar(255) DEFAULT NULL,
  `content_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `content_items_chk_1` CHECK ((`category` in (_utf8mb4'game',_utf8mb4'video',_utf8mb4'artwork',_utf8mb4'music')))
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_items`
--

LOCK TABLES `content_items` WRITE;
/*!40000 ALTER TABLE `content_items` DISABLE KEYS */;
INSERT INTO `content_items` VALUES (1,'Epic Adventure','An epic adventure game with stunning visuals and engaging gameplay.','game','http://example.com/thumbnails/epic_adventure.jpg','http://example.com/content/epic_adventure','2024-05-23 21:00:50'),(2,'Nature Documentary','A documentary exploring the beauty of nature around the world.','video','http://example.com/thumbnails/nature_documentary.jpg','http://example.com/content/nature_documentary','2024-05-23 21:00:50'),(3,'Abstract Art','A collection of abstract art pieces.','artwork','http://example.com/thumbnails/abstract_art.jpg','http://example.com/content/abstract_art','2024-05-23 21:00:50'),(4,'Classical Symphony','A beautiful symphony performed by a renowned orchestra.','music','http://example.com/thumbnails/classical_symphony.jpg','http://example.com/content/classical_symphony','2024-05-23 21:00:50'),(5,'Space Exploration','A video about the latest discoveries in space exploration.','video','http://example.com/thumbnails/space_exploration.jpg','http://example.com/content/space_exploration','2024-05-23 21:00:50'),(6,'Street Photography','A gallery of stunning street photography from around the world.','artwork','http://example.com/thumbnails/street_photography.jpg','http://example.com/content/street_photography','2024-05-23 21:00:50'),(7,'Rock Concert','A live concert of a famous rock band.','music','http://example.com/thumbnails/rock_concert.jpg','http://example.com/content/rock_concert','2024-05-23 21:00:50'),(8,'Puzzle Game','A challenging puzzle game with hundreds of levels.','game','http://example.com/thumbnails/puzzle_game.jpg','http://example.com/content/puzzle_game','2024-05-23 21:00:50'),(9,'Wildlife Documentary','A documentary about the wildlife in the Amazon rainforest.','video','http://example.com/thumbnails/wildlife_documentary.jpg','http://example.com/content/wildlife_documentary','2024-05-23 21:00:50'),(10,'Digital Art','A collection of digital art created by various artists.','artwork','http://example.com/thumbnails/digital_art.jpg','http://example.com/content/digital_art','2024-05-23 21:00:50');
/*!40000 ALTER TABLE `content_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `content_item_id` bigint unsigned NOT NULL,
  `rating` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `content_item_id` (`content_item_id`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`content_item_id`) REFERENCES `content_items` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ratings_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,2,1,5,'2024-05-24 21:10:23');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'manuel','manuelq_hernandez@outlook.com','$2a$10$L5RBfRvUjRYds.wJVsHJAuOf3DyNdQ6L6u1AD2p.38MJ/k44p1KnG','Manuel','Quinteros','2024-05-24 19:37:51','2024-05-24 19:37:51'),(2,'manuelquinteros','manuelqh16@gmail.com','$2a$10$cu5wBTtRnkz/eaDM1SzZvOYEAOR.0oHTFyL34qmi4XzmVAmyXdfCe','Manuel Antonio','Quinteros Hernandez','2024-05-24 20:48:14','2024-05-24 20:48:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-25  3:45:17
