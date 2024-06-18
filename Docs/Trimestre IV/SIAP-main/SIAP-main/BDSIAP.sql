-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: siap
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategorias` int NOT NULL AUTO_INCREMENT,
  `nombreCategoria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Frutas'),(2,'Verduras'),(3,'Embutidos'),(4,'Lacteos'),(5,'Enlatados'),(6,'Cereales'),(7,'Bebidas'),(8,'Productos de aseo'),(9,'Ciudados del hogar'),(10,'Productos para mascotas'),(11,'Paqueteria'),(12,'Viveres'),(13,'Productos congelados'),(14,'Tabaco'),(15,'Sin Categoria');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrato`
--

DROP TABLE IF EXISTS `contrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contrato` (
  `idContrato` int NOT NULL AUTO_INCREMENT,
  `Salario` double DEFAULT NULL,
  `FechaInicioContrato` date DEFAULT NULL,
  `FechaFinalContrato` date DEFAULT NULL,
  `tipoContrato_idtipoContrato` int NOT NULL,
  `Persona_idPersona` int NOT NULL,
  PRIMARY KEY (`idContrato`),
  KEY `fk_Contrato_tipoContrato1_idx` (`tipoContrato_idtipoContrato`),
  KEY `fk_contrato_Persona1_idx` (`Persona_idPersona`),
  CONSTRAINT `fk_contrato_Persona1` FOREIGN KEY (`Persona_idPersona`) REFERENCES `persona` (`idPersona`) ON DELETE CASCADE,
  CONSTRAINT `fk_contrato_tipoContrato1` FOREIGN KEY (`tipoContrato_idtipoContrato`) REFERENCES `tipocontrato` (`idtipoContrato`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrato`
--

LOCK TABLES `contrato` WRITE;
/*!40000 ALTER TABLE `contrato` DISABLE KEYS */;
INSERT INTO `contrato` VALUES (1,300000,'2019-06-03','2025-11-26',1,1),(2,120000,'2021-09-02','2023-11-26',1,2),(3,100000,'2020-04-19','2022-11-26',3,3),(4,100000,'2022-11-03','2025-11-26',2,4),(5,170000,'2016-02-29','2019-11-26',1,5),(6,170000,'2023-01-10','2024-11-26',1,6),(7,0,'2012-02-29','2017-11-26',1,7),(8,0,'2015-09-20','2019-12-22',1,8),(9,0,'2011-07-30','2015-11-21',1,9),(10,0,'2009-04-10','2018-02-20',1,10),(11,0,'2013-10-11','2020-01-16',1,11),(12,0,'2018-11-15','2021-06-13',1,12),(13,0,'2020-11-28','2022-04-02',1,13),(14,0,'2012-05-29','2018-03-11',1,14),(15,0,'2017-04-21','2026-08-20',1,15),(16,0,'2019-04-25','2020-09-30',1,16),(17,0,'2008-03-11','2024-07-09',1,17),(18,0,'2010-12-09','2015-11-02',1,18),(19,0,'2019-10-16','2021-10-10',1,19);
/*!40000 ALTER TABLE `contrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devolucion`
--

DROP TABLE IF EXISTS `devolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devolucion` (
  `idDevolucion` int NOT NULL AUTO_INCREMENT,
  `DescripcionMotivoDevolucion` varchar(45) DEFAULT NULL,
  `FechaDevolucion` date DEFAULT NULL,
  PRIMARY KEY (`idDevolucion`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devolucion`
--

LOCK TABLES `devolucion` WRITE;
/*!40000 ALTER TABLE `devolucion` DISABLE KEYS */;
INSERT INTO `devolucion` VALUES (1,'Defectuoso','2016-08-21'),(2,'Caducado','2017-05-12'),(3,'Producto incorrecto recibido','2018-10-03'),(4,'Caducado','2019-02-17'),(5,'Defectuoso','2020-07-29'),(6,'Caducado','2021-11-05'),(7,'Producto incorrecto recibido','2016-12-14'),(8,'Fecha de vencimiento cercana','2017-09-08'),(9,'Caducado','2018-03-22'),(10,'Caducado','2019-06-10'),(11,'Producto incorrecto recibido','2020-04-01'),(12,'Fecha de vencimiento cercana','2021-01-27'),(13,'Defectuoso','2017-08-19'),(14,'Caducado','2018-06-07'),(15,'Producto incorrecto recibido','2019-12-25'),(16,'Fecha de vencimiento cercana','2020-09-13'),(17,'Defectuoso','2021-03-31'),(18,'Caducado','2016-10-02'),(19,'Caducado','2017-03-18'),(20,'Fecha de vencimiento cercana','2018-11-23'),(21,'Caducado','2019-07-07'),(22,'Caducado','2020-02-09'),(23,'Producto incorrecto recibido','2021-06-26'),(24,'Fecha de vencimiento cercana','2016-05-04'),(25,'Defectuoso','2017-01-11'),(26,'Caducado','2018-09-30'),(27,'Producto incorrecto recibido','2019-04-15'),(28,'Fecha de vencimiento cercana','2020-12-08'),(29,'Defectuoso','2010-04-15'),(30,'Caducado','2011-07-22'),(31,'Producto incorrecto recibido','2012-09-03'),(32,'Fecha vencimiento cercana','2013-12-10'),(33,'Defectuoso','2014-02-28'),(34,'Caducado','2015-05-17'),(35,'Producto incorrecto recibido','2016-08-24'),(36,'Fecha vencimiento cercana','2017-10-05'),(37,'Defectuoso','2018-01-11'),(38,'Caducado','2019-03-29'),(39,'Producto incorrecto recibido','2020-06-08'),(40,'Fecha vencimiento cercana','2021-09-14'),(41,'Defectuoso','2010-11-07'),(42,'Caducado','2011-04-26'),(43,'Producto incorrecto recibido','2012-07-03'),(44,'Fecha vencimiento cercana','2013-09-19'),(45,'Defectuoso','2014-12-28'),(46,'Caducado','2015-02-14'),(47,'Producto incorrecto recibido','2016-04-01'),(48,'Fecha vencimiento cercana','2017-06-20'),(49,'Defectuoso','2018-08-09'),(50,'Caducado','2019-10-27'),(51,'Producto incorrecto recibido','2020-01-05'),(52,'Fecha vencimiento cercana','2021-03-17'),(53,'Defectuoso','2010-09-23'),(54,'Caducado','2011-11-10'),(55,'Producto incorrecto recibido','2012-02-08'),(56,'Fecha vencimiento cercana','2013-05-26'),(57,'Fecha vencimiento cercana','2017-06-20'),(58,'Fecha vencimiento cercana','2021-09-14'),(59,'Producto incorrecto recibido','2016-08-24'),(60,'Defectuoso','2018-08-09'),(61,'Producto incorrecto recibido','2012-02-08'),(62,'Caducado','2019-10-27'),(63,'Caducado','2015-02-14'),(64,'Caducado','2011-04-26'),(65,'Fecha vencimiento cercana','2013-09-19'),(66,'Defectuoso','2014-12-28'),(67,'Producto incorrecto recibido','2020-01-05'),(68,'Defectuoso','2018-01-11'),(69,'Defectuoso','2010-09-23'),(70,'Fecha vencimiento cercana','2013-12-10'),(71,'Producto incorrecto recibido','2016-04-01'),(72,'Defectuoso','2014-02-28'),(73,'Fecha vencimiento cercana','2017-10-05'),(74,'Caducado','2011-07-22'),(75,'Fecha vencimiento cercana','2021-03-17'),(76,'Defectuoso','2010-04-15'),(77,'Producto incorrecto recibido','2012-07-03'),(78,'Producto incorrecto recibido','2012-09-03'),(79,'Caducado','2019-03-29'),(80,'Fecha vencimiento cercana','2010-11-07'),(81,'Defectuoso','2016-08-21'),(82,'Caducado','2018-03-22'),(83,'Producto incorrecto recibido','2017-03-18'),(84,'Producto incorrecto recibido','2016-02-09'),(85,'Defectuoso','2019-02-17'),(86,'Caducado','2017-09-08'),(87,'Fecha vencimiento cercana','2013-05-26'),(88,'Fecha vencimiento cercana','2015-05-17');
/*!40000 ALTER TABLE `devolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devoluciondetallada`
--

DROP TABLE IF EXISTS `devoluciondetallada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devoluciondetallada` (
  `Devolucion_idDevolucion` int NOT NULL,
  `Proveedor_idProveedor` int NOT NULL,
  `Producto_idProducto` int NOT NULL,
  `CantidadDevolver` int DEFAULT NULL,
  PRIMARY KEY (`Devolucion_idDevolucion`,`Proveedor_idProveedor`),
  KEY `fk_Devolucion_has_Proveedor_Proveedor1_idx` (`Proveedor_idProveedor`),
  KEY `fk_Devolucion_has_Proveedor_Devolucion1_idx` (`Devolucion_idDevolucion`),
  KEY `fk_Devolucion_has_Proveedor_Producto_idx` (`Producto_idProducto`),
  CONSTRAINT `fk_Devolucion_has_Proveedor_Devolucion1` FOREIGN KEY (`Devolucion_idDevolucion`) REFERENCES `devolucion` (`idDevolucion`),
  CONSTRAINT `fk_Devolucion_has_Proveedor_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `fk_Devolucion_has_Proveedor_Proveedor1` FOREIGN KEY (`Proveedor_idProveedor`) REFERENCES `proveedor` (`idProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devoluciondetallada`
--

LOCK TABLES `devoluciondetallada` WRITE;
/*!40000 ALTER TABLE `devoluciondetallada` DISABLE KEYS */;
INSERT INTO `devoluciondetallada` VALUES (1,20,1,10),(2,21,2,20),(3,10,3,10),(4,1,4,25),(5,8,5,30),(6,33,6,15),(7,32,7,15),(8,20,8,15),(9,19,9,40),(10,28,10,30),(11,16,11,50),(12,11,12,50),(13,9,13,20),(14,6,14,20),(15,7,15,10),(16,2,16,25),(17,1,17,45),(18,1,18,15),(19,20,19,5),(20,29,20,10),(21,30,21,30),(22,20,22,45),(23,30,23,50),(24,21,24,10),(25,11,25,25),(26,26,26,20),(27,16,27,30),(28,30,28,10),(29,30,29,5),(30,31,30,10),(31,23,31,40),(32,22,32,35),(33,3,33,55),(34,6,34,30),(35,9,35,20),(36,3,36,30),(37,8,37,25),(38,4,38,10),(39,5,39,30),(40,14,40,5),(41,17,41,25),(42,18,42,45),(43,24,43,30),(44,28,44,40),(45,30,45,60),(46,33,46,30),(47,21,47,5),(48,12,48,40),(49,16,49,35),(50,18,50,20),(51,29,51,25),(52,25,52,20),(53,22,53,20),(54,25,54,20),(55,24,55,20),(56,14,56,35),(57,20,57,40),(58,13,58,10),(59,12,59,5),(60,16,60,10),(61,30,61,10),(62,31,62,25),(63,31,63,25),(64,16,64,40),(65,29,65,40),(66,19,66,40),(67,20,67,55),(68,18,68,10),(69,16,69,30),(70,29,70,15),(71,30,71,20),(72,31,72,10),(73,31,73,5),(74,30,74,5),(75,14,75,5),(76,33,76,10),(77,10,77,30),(78,19,78,20),(79,28,79,15),(80,30,80,10),(81,17,81,40),(82,13,82,30),(83,17,83,20),(84,33,84,40),(85,25,85,20),(86,15,86,5),(87,17,87,15),(88,2,88,20);
/*!40000 ALTER TABLE `devoluciondetallada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturacompra`
--

DROP TABLE IF EXISTS `facturacompra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturacompra` (
  `idFacturaCompra` int NOT NULL AUTO_INCREMENT,
  `observacionesCompra` varchar(45) DEFAULT NULL,
  `fechaCompra` date DEFAULT NULL,
  `producto_idProducto` int NOT NULL,
  PRIMARY KEY (`idFacturaCompra`),
  KEY `fk_FacturaCompra_producto1_idx` (`producto_idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturacompra`
--

LOCK TABLES `facturacompra` WRITE;
/*!40000 ALTER TABLE `facturacompra` DISABLE KEYS */;
INSERT INTO `facturacompra` VALUES (1,'NA','2022-12-20',1),(2,'NA','2017-05-03',2),(3,'NA','2023-01-26',3),(4,'NA','2019-02-12',4),(5,'NA','2023-03-01',5),(6,'NA','2021-11-01',6),(7,'NA','2021-11-01',7),(8,'NA','2017-09-04',8),(9,'NA','2018-03-21',9),(10,'NA','2019-06-04',10),(11,'NA','2022-10-01',11),(12,'NA','2021-01-20',12),(13,'NA','2022-08-01',13),(14,'NA','2018-06-02',14),(15,'NA','2022-12-06',15),(16,'NA','2020-09-10',16),(17,'NA','2022-02-26',17),(18,'NA','2016-09-20',18),(19,'NA','2017-03-16',19),(20,'NA','2018-11-22',20),(21,'NA','2019-07-02',21),(22,'NA','2020-02-02',22),(23,'NA','2023-05-02',23),(24,'NA','2016-05-02',24),(25,'NA','2023-02-20',25),(26,'NA','2018-09-25',26),(27,'NA','2022-02-01',27),(28,'NA','2020-11-20',28),(29,'NA','2022-04-24',29),(30,'NA','2011-07-18',30),(31,'NA','2022-11-11',31),(32,'NA','2013-12-05',32),(33,'NA','2022-09-20',33),(34,'NA','2015-05-12',34),(35,'NA','2022-12-12',35),(36,'NA','2017-10-02',36),(37,'NA','2022-03-02',37),(38,'NA','2019-03-22',38),(39,'NA','2022-09-11',39),(40,'NA','2021-09-15',40),(41,'NA','2022-12-22',41),(42,'NA','2011-04-22',42),(43,'NA','2022-08-10',43),(44,'NA','2013-09-20',44),(45,'NA','2022-10-12',45),(46,'NA','2015-02-11',46),(47,'NA','2022-05-12',47),(48,'NA','2017-06-22',48),(49,'NA','2022-04-02',49),(50,'NA','2019-10-22',50),(51,'NA','2022-08-15',51),(52,'NA','2021-03-12',52),(53,'NA','2022-11-04',53),(54,'NA','2011-11-02',54),(55,'NA','2022-04-22',55),(56,'NA','2013-05-22',56),(57,'NA','2017-06-22',57),(58,'NA','2021-09-12',58),(59,'NA','2022-09-12',59),(60,'NA','2022-05-22',60),(61,'NA','2022-09-19',61),(62,'NA','2019-10-22',62),(63,'NA','2015-02-12',63),(64,'NA','2011-04-22',64),(65,'NA','2013-09-18',65),(66,'NA','2022-07-04',66),(67,'NA','2022-05-22',67),(68,'NA','2022-11-01',68),(69,'NA','2022-06-10',69),(70,'NA','2013-12-10',70),(71,'NA','2022-03-02',71),(72,'NA','2022-08-14',72),(73,'NA','2017-10-02',73),(74,'NA','2011-07-19',74),(75,'NA','2021-03-18',75),(76,'NA','2022-04-02',76),(77,'NA','2022-11-12',77),(78,'NA','2021-12-13',78),(79,'NA','2019-03-24',79),(80,'NA','2010-11-11',80),(81,'NA','2021-06-25',81),(82,'NA','2018-03-15',82),(83,'NA','2022-09-13',83),(84,'NA','2021-12-04',84),(85,'NA','2021-09-19',85),(86,'NA','2023-07-29',86),(87,'NA','2021-09-15',87),(88,'NA','2021-07-23',88),(89,'NA','2022-06-01',89),(90,'NA','2019-02-02',90),(91,'NA','2021-04-01',91),(92,'NA','2019-08-01',92),(93,'NA','2020-05-01',93),(94,'NA','2023-07-01',94),(95,'NA','2019-09-02',95),(96,'NA','2019-01-01',96),(97,'NA','2021-11-01',97),(98,'NA','2020-03-01',98),(99,'NA','2023-09-01',99),(100,'NA','2022-08-01',100),(101,'NA','2019-03-01',101),(102,'NA','2022-11-01',102),(103,'NA','2023-02-01',103),(104,'NA','2022-04-01',104),(105,'NA','2021-12-01',105),(106,'NA','2020-10-01',106),(107,'NA','2023-04-01',107),(108,'NA','2019-10-02',108),(109,'NA','2020-08-01',109),(110,'NA','2019-12-01',110),(111,'NA','2021-10-01',111),(112,'NA','2021-07-01',112),(113,'NA','2022-03-01',113),(114,'NA','2019-05-02',114),(115,'NA','2023-06-01',115),(116,'NA','2022-01-01',116),(117,'NA','2019-07-02',117),(118,'NA','2020-06-01',118),(119,'NA','2021-08-01',119),(120,'NA','2022-12-01',120),(121,'NA','2020-02-01',121),(122,'NA','2022-09-01',122),(123,'NA','2020-11-01',123),(124,'NA','2021-05-01',124),(125,'NA','2023-03-01',125),(126,'NA','2020-07-01',126),(127,'NA','2019-04-01',127),(128,'NA','2019-01-01',128),(129,'NA','2019-08-01',129),(130,'NA','2020-08-01',130),(131,'NA','2020-12-01',131),(132,'NA','2020-09-01',132),(133,'NA','2021-03-01',133),(134,'NA','2020-03-01',134),(135,'NA','2021-05-01',135),(136,'NA','2019-06-01',136),(137,'NA','2021-08-01',137),(138,'NA','2019-03-01',138),(139,'NA','2021-09-01',139),(140,'NA','2019-10-01',140),(141,'NA','2020-05-01',141),(142,'NA','2019-11-01',142),(143,'NA','2023-09-01',143),(144,'NA','2020-06-01',144),(145,'NA','2022-09-01',145),(146,'NA','2021-07-01',146),(147,'NA','2022-02-01',147),(148,'NA','2022-06-01',148),(149,'NA','2023-04-01',149),(150,'NA','2022-05-01',150),(151,'NA','2021-12-01',151),(152,'NA','2021-01-01',152),(153,'NA','2022-08-01',153),(154,'NA','2023-02-01',154),(155,'NA','2019-02-01',155),(156,'NA','2023-11-01',156),(157,'NA','2019-09-02',157),(158,'NA','2021-10-01',158);
/*!40000 ALTER TABLE `facturacompra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturadetalle`
--

DROP TABLE IF EXISTS `facturadetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturadetalle` (
  `Proveedor_idProveedor` int NOT NULL,
  `FacturaCompra_idFacturaCompra` int NOT NULL,
  `CantidadProductos` int DEFAULT NULL,
  `PrecioCompra` double DEFAULT NULL,
  PRIMARY KEY (`FacturaCompra_idFacturaCompra`,`Proveedor_idProveedor`),
  KEY `fk_Producto_has_FacturaCompra_FacturaCompra1_idx` (`FacturaCompra_idFacturaCompra`),
  KEY `fk_Producto_has_FacturaCompra_Producto1_idx` (`Proveedor_idProveedor`),
  CONSTRAINT `fk_Producto_has_FacturaCompra_Proveedor1` FOREIGN KEY (`Proveedor_idProveedor`) REFERENCES `proveedor` (`idProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturadetalle`
--

LOCK TABLES `facturadetalle` WRITE;
/*!40000 ALTER TABLE `facturadetalle` DISABLE KEYS */;
INSERT INTO `facturadetalle` VALUES (1,1,10,60000),(1,2,25,80000),(1,3,30,60000),(1,4,12,35000),(1,5,35,120000),(2,6,20,100000),(2,7,15,60000),(2,8,28,30000),(2,9,38,40000),(2,10,11,70000),(3,11,15,30000),(3,12,18,20500),(3,13,13,15500),(3,14,37,75000),(3,15,23,150000),(4,16,16,80000),(4,17,14,50000),(4,18,31,250000),(4,19,26,150000),(4,20,33,120000),(5,21,24,80000),(5,22,22,95000),(5,23,36,90000),(5,24,19,50000),(5,25,27,80000),(6,26,17,31850),(6,27,29,58780),(6,28,21,58600),(6,29,34,97800),(6,30,39,85250),(7,31,40,55200),(7,32,37,86524),(7,33,33,65200),(7,34,10,86500),(7,35,29,59999),(8,36,18,65000),(8,37,25,105500),(8,38,34,85000),(8,39,12,70000),(8,40,24,85000),(9,41,15,105500),(9,42,26,92500),(9,43,38,125650),(9,44,16,96500),(9,45,30,150250),(10,46,11,85000),(10,47,21,95600),(10,48,27,58600),(10,49,19,96800),(10,50,31,68420),(11,51,28,96200),(11,52,22,65400),(11,53,13,40500),(11,54,35,86450),(11,55,33,84250),(12,56,14,87650),(12,57,32,98750),(12,58,20,69200),(12,59,36,106800),(12,60,23,39600),(13,61,37,85700),(13,62,12,99600),(13,63,35,405200),(13,64,31,220330),(13,65,14,99700),(14,66,30,97600),(14,67,16,302600),(14,68,28,202600),(14,69,24,98700),(14,70,10,220600),(15,71,19,85600),(15,72,38,220000),(15,73,26,99999),(15,74,33,77500),(15,75,15,99700),(16,76,27,225000),(16,77,32,105700),(16,78,25,320600),(16,79,21,89900),(16,80,34,87000),(17,81,11,99700),(17,82,36,89900),(17,83,20,105200),(17,84,29,89800),(17,85,39,79900),(18,86,37,98700),(18,87,14,89900),(19,88,12,152000),(19,89,35,99999),(19,90,26,220700),(19,91,38,98800),(19,92,13,78600),(20,93,32,102500),(20,94,16,99800),(20,95,27,102700),(20,96,28,89700),(20,97,31,205700),(21,98,10,110700),(21,99,37,100000),(22,100,33,106700),(22,101,11,99800),(22,102,34,225600),(22,103,20,185600),(22,104,25,235700),(23,105,15,25700),(23,106,36,96300),(23,107,21,86750),(23,108,19,101300),(23,109,26,235700),(24,110,30,97700),(24,111,12,45000),(24,112,24,87700),(24,113,16,62500),(24,114,29,102200),(25,115,27,97600),(25,116,14,62300),(26,117,37,87700),(26,118,35,98400),(27,119,38,76700),(27,120,13,99800),(27,121,28,99500),(27,122,10,75700),(27,123,32,99700),(28,124,15,150500),(28,125,26,230800),(28,126,21,98800),(28,127,36,221000),(28,128,33,150800),(29,129,19,89900),(29,130,11,125600),(29,131,37,190999),(29,132,34,235000),(29,133,12,150700),(30,134,28,89900),(30,135,14,170500),(30,136,27,146750),(30,137,20,155650),(30,138,30,202900),(31,139,31,89900),(31,140,25,135600),(31,141,16,151800),(31,142,22,89600),(32,143,10,108700),(32,144,39,101900),(32,145,15,99800),(32,146,24,163500),(32,147,28,185600),(33,148,11,255600),(33,149,27,189900),(33,150,19,250600),(33,151,31,110200),(33,152,14,103280),(34,153,12,75600),(34,154,29,110485),(34,155,37,280200),(34,156,34,55202),(34,157,16,75500),(35,158,35,380600);
/*!40000 ALTER TABLE `facturadetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gestionproducto`
--

DROP TABLE IF EXISTS `gestionproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestionproducto` (
  `Persona_idPersona` int NOT NULL,
  `Producto_idProducto` int NOT NULL,
  `Estado` enum('Añadido','Actualizado','Eliminado') DEFAULT NULL,
  PRIMARY KEY (`Persona_idPersona`,`Producto_idProducto`),
  KEY `fk_Persona_has_Producto_Producto1_idx` (`Producto_idProducto`),
  KEY `fk_Persona_has_Producto_Persona1_idx` (`Persona_idPersona`),
  CONSTRAINT `fk_Persona_has_Producto_Persona1` FOREIGN KEY (`Persona_idPersona`) REFERENCES `persona` (`idPersona`) ON DELETE CASCADE,
  CONSTRAINT `fk_Persona_has_Producto_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestionproducto`
--

LOCK TABLES `gestionproducto` WRITE;
/*!40000 ALTER TABLE `gestionproducto` DISABLE KEYS */;
INSERT INTO `gestionproducto` VALUES (1,1,'Eliminado'),(1,2,'Eliminado'),(1,3,'Eliminado'),(1,4,'Eliminado'),(1,5,'Eliminado'),(1,6,'Eliminado'),(1,7,'Eliminado'),(1,8,'Eliminado'),(1,9,'Eliminado'),(1,10,'Eliminado'),(1,11,'Eliminado'),(1,12,'Eliminado'),(1,13,'Eliminado'),(1,14,'Eliminado'),(1,15,'Eliminado'),(1,16,'Eliminado'),(1,17,'Eliminado'),(1,18,'Eliminado'),(1,19,'Eliminado'),(1,20,'Eliminado'),(1,21,'Eliminado'),(1,22,'Eliminado'),(1,23,'Eliminado'),(1,24,'Eliminado'),(1,25,'Eliminado'),(1,26,'Eliminado'),(1,27,'Eliminado'),(1,28,'Eliminado'),(1,29,'Eliminado'),(1,30,'Eliminado'),(1,31,'Eliminado'),(1,32,'Eliminado'),(1,33,'Eliminado'),(1,34,'Eliminado'),(1,35,'Eliminado'),(1,36,'Eliminado'),(1,37,'Eliminado'),(1,38,'Eliminado'),(1,39,'Eliminado'),(1,40,'Eliminado'),(1,41,'Eliminado'),(1,42,'Eliminado'),(1,43,'Eliminado'),(1,44,'Eliminado'),(1,45,'Eliminado'),(1,46,'Eliminado'),(1,47,'Eliminado'),(1,48,'Eliminado'),(1,49,'Eliminado'),(1,50,'Eliminado'),(1,51,'Eliminado'),(1,52,'Eliminado'),(1,53,'Eliminado'),(1,54,'Eliminado'),(1,55,'Eliminado'),(1,56,'Eliminado'),(1,57,'Eliminado'),(1,58,'Eliminado'),(1,59,'Eliminado'),(1,60,'Eliminado'),(1,61,'Eliminado'),(1,62,'Eliminado'),(1,63,'Eliminado'),(1,64,'Eliminado'),(1,65,'Eliminado'),(1,66,'Eliminado'),(1,67,'Eliminado'),(1,68,'Eliminado'),(1,69,'Eliminado'),(1,70,'Eliminado'),(1,71,'Eliminado'),(1,72,'Eliminado'),(1,73,'Eliminado'),(1,74,'Eliminado'),(1,75,'Eliminado'),(1,76,'Eliminado'),(1,77,'Eliminado'),(1,78,'Eliminado'),(1,79,'Eliminado'),(1,80,'Eliminado'),(1,81,'Eliminado'),(1,82,'Eliminado'),(1,83,'Eliminado'),(1,84,'Eliminado'),(1,85,'Eliminado'),(1,86,'Eliminado'),(1,87,'Eliminado'),(1,88,'Eliminado'),(1,89,'Añadido'),(1,90,'Actualizado'),(1,91,'Añadido'),(1,92,'Actualizado'),(1,93,'Añadido'),(1,94,'Actualizado'),(1,95,'Añadido'),(1,96,'Actualizado'),(1,97,'Añadido'),(1,98,'Actualizado'),(1,99,'Añadido'),(1,100,'Actualizado'),(1,101,'Añadido'),(1,102,'Actualizado'),(1,103,'Añadido'),(1,104,'Actualizado'),(1,105,'Añadido'),(1,106,'Actualizado'),(1,107,'Añadido'),(1,108,'Actualizado'),(1,109,'Añadido'),(1,110,'Actualizado'),(1,111,'Añadido'),(1,112,'Actualizado'),(1,113,'Añadido'),(1,114,'Actualizado'),(1,115,'Añadido'),(1,116,'Actualizado'),(1,117,'Añadido'),(1,118,'Actualizado'),(1,119,'Añadido'),(1,120,'Actualizado'),(1,121,'Añadido'),(1,122,'Actualizado'),(1,123,'Añadido'),(1,124,'Actualizado'),(1,125,'Añadido'),(1,126,'Actualizado'),(1,127,'Añadido'),(1,128,'Actualizado'),(1,129,'Añadido'),(1,130,'Actualizado'),(1,131,'Añadido'),(1,132,'Actualizado'),(1,133,'Añadido'),(1,134,'Actualizado'),(1,135,'Añadido'),(1,136,'Actualizado'),(1,137,'Añadido'),(1,138,'Actualizado'),(1,139,'Añadido'),(1,140,'Actualizado'),(1,141,'Añadido'),(1,142,'Actualizado'),(1,143,'Añadido'),(1,144,'Actualizado'),(1,145,'Añadido'),(1,146,'Actualizado'),(1,147,'Añadido'),(1,148,'Actualizado'),(1,149,'Añadido'),(1,150,'Actualizado'),(1,151,'Añadido'),(1,152,'Actualizado'),(1,153,'Añadido'),(1,154,'Actualizado'),(1,155,'Añadido'),(1,156,'Actualizado'),(1,157,'Añadido'),(1,158,'Actualizado');
/*!40000 ALTER TABLE `gestionproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordendesalida`
--

DROP TABLE IF EXISTS `ordendesalida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordendesalida` (
  `idordenDeSalida` int NOT NULL AUTO_INCREMENT,
  `fechaSalida` datetime DEFAULT NULL,
  `tienda_idTienda` int NOT NULL,
  PRIMARY KEY (`idordenDeSalida`),
  KEY `fk__ordenDeSalida_tienda1_idx` (`tienda_idTienda`),
  CONSTRAINT `fk_ordenDeSalida_tienda1` FOREIGN KEY (`tienda_idTienda`) REFERENCES `tienda` (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordendesalida`
--

LOCK TABLES `ordendesalida` WRITE;
/*!40000 ALTER TABLE `ordendesalida` DISABLE KEYS */;
INSERT INTO `ordendesalida` VALUES (1,'2022-09-25 00:00:00',1),(2,'2022-09-28 00:00:00',1),(3,'2022-10-13 00:00:00',1),(4,'2022-10-29 00:00:00',1),(5,'2022-11-08 00:00:00',1),(6,'2022-09-26 00:00:00',2),(7,'2022-09-29 00:00:00',2),(8,'2022-10-14 00:00:00',2),(9,'2022-10-30 00:00:00',2),(10,'2022-11-09 00:00:00',2),(11,'2022-09-27 00:00:00',3),(12,'2022-09-30 00:00:00',3),(13,'2022-09-15 00:00:00',3),(14,'2022-09-26 00:00:00',3),(15,'2022-09-10 00:00:00',3);
/*!40000 ALTER TABLE `ordendesalida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordendesalidadetallada`
--

DROP TABLE IF EXISTS `ordendesalidadetallada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordendesalidadetallada` (
  `Producto_idProducto` int NOT NULL,
  `ordenDeSalida_idordenDeSalida` int NOT NULL,
  `Cantidad` int DEFAULT NULL,
  PRIMARY KEY (`Producto_idProducto`,`ordenDeSalida_idordenDeSalida`),
  KEY `fk_Producto_has_ordenDeSalida_producto1_idx` (`Producto_idProducto`),
  KEY `fk_Producto_has_ordenDeSalida_ordenDeSalida1_idx` (`ordenDeSalida_idordenDeSalida`),
  CONSTRAINT `fk_Producto_has_ordenDeSalida_ordenDeSalida1` FOREIGN KEY (`ordenDeSalida_idordenDeSalida`) REFERENCES `ordendesalida` (`idordenDeSalida`),
  CONSTRAINT `fk_Producto_has_ordenDeSalida_producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordendesalidadetallada`
--

LOCK TABLES `ordendesalidadetallada` WRITE;
/*!40000 ALTER TABLE `ordendesalidadetallada` DISABLE KEYS */;
INSERT INTO `ordendesalidadetallada` VALUES (92,1,40),(97,1,30),(98,3,20),(100,1,30),(100,3,30),(101,3,45),(102,1,15),(104,1,20),(109,2,25),(119,3,30),(120,2,25),(122,2,30),(130,2,10),(142,2,25),(154,3,50);
/*!40000 ALTER TABLE `ordendesalidadetallada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idPersona` int NOT NULL AUTO_INCREMENT,
  `Nombre1` varchar(45) DEFAULT NULL,
  `Nombre2` varchar(45) DEFAULT NULL,
  `Apellido1` varchar(45) DEFAULT NULL,
  `Apellido2` varchar(45) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `Telefono` bigint DEFAULT NULL,
  `CorreoElectronico` varchar(45) DEFAULT NULL,
  `Contrasena` varchar(255) DEFAULT NULL,
  `DireccionResidencia` varchar(45) DEFAULT NULL,
  `NumeroDocumentoIdentidad` bigint DEFAULT NULL,
  `tipoDocumento_idtipoDocumento` int NOT NULL,
  `Rol_idRol` int NOT NULL,
  PRIMARY KEY (`idPersona`,`tipoDocumento_idtipoDocumento`,`Rol_idRol`),
  UNIQUE KEY `Telefono` (`Telefono`),
  UNIQUE KEY `CorreoElectronico` (`CorreoElectronico`),
  UNIQUE KEY `Contrasena` (`Contrasena`),
  UNIQUE KEY `NumeroDocumentoIdentidad` (`NumeroDocumentoIdentidad`),
  KEY `fk_Persona_tipoDocumento1_idx` (`tipoDocumento_idtipoDocumento`),
  KEY `fk_Persona_Rol1_idx` (`Rol_idRol`),
  CONSTRAINT `fk_Persona_Rol1` FOREIGN KEY (`Rol_idRol`) REFERENCES `rol` (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'Ivan','Eduardo','Olmos','Martinez','1998-05-10',3115437598,'ieom@gmail.com','10316447321ieoM','Cll 1 #01-01',10316447321,1,1),(2,'Daniel','Felipe','Lopez','Mosquera','1995-09-19',3115437553,'dflm@gmail.com','10316447322dflM','Cll 2 #02-02',10316447322,1,2),(3,'Brayan','Stiven','Perez','Ortega','1996-11-20',3115437551,'bspo@gmail.com','10316447343bspO','Cll 3 #03-03',10316447343,1,2),(4,'Nicol','Alejandra','Cardenas','Velasquez','1991-01-31',3115437501,'nacv@gmail.com','10316447344nacV','Cll 4 #04-04',10316447344,1,2),(5,'Harold','Sebastian','Monroy','Vega','1982-04-17',3115437561,'hsmv@gmail.com','10316447355hsmV','Cll 5 #05-06',10316447355,1,3),(6,'Dominic','Andres','Arrieta','Pantoja','2002-02-11',3115437590,'daap@gmail.com','10316447366daaP','Cll 6 #06-06',10316447366,1,3),(7,'Alejandro','Jose','Rodrigez','Perez','1978-05-31',3115437581,'ajrp@gmail.com','10316447377ajrP','Cll 7 #07-07',10316447377,1,3),(8,'Sofia','Maria','Perez','Rodriguez','1979-08-02',3115437574,'smpr@gmail.com','10316447388smpR','Cll 8 #08-08',10316447388,1,3),(9,'Juan','Andres','Gonzalez','Lopez','1980-09-01',3115437591,'jagl@gmail.com','10316447399jagL','Cll 9 #09-09',10316447399,1,3),(10,'Valentina','Andrea','Martinez','Gonzalez','1981-02-19',3115437592,'vamg@gmail.com','10316447300vamG','Cll 10 #10-10',10316447300,1,3),(11,'Martin','Jose','Lopez','Martinez','1982-04-16',3115437983,'mjlm@gmail.com','10316447301mjlM','Cll 11 #11-11',10316447301,1,3),(12,'Camila','Andrea','Sanchez','Fernandez','1983-10-15',3115437579,'casf@gmail.com','10316447302casF','Cll 12 #12-12',10316447302,1,3),(13,'Diego','Carlos','Fernandez','Garcia','1984-11-17',3115437021,'dcfg@gmail.com','10316447303dcfG','Cll 13 #13-13',10316447303,1,3),(14,'Isabela','Maria','Garcia','Sanchez','1985-11-13',3115437984,'imgs@gmail.com','10316447304imgS','Cll 14 #14-14',10316447304,1,3),(15,'Andres','Mateo','Torres','Ramirez','1986-01-11',3115437741,'amtr@gmail.com','10316447305amtR','Cll 15 #15-15',10316447305,1,3),(16,'Gabriela','Nicol','Ruiz','Torres','1987-05-10',3115437941,'gnrt@gmail.com','10316447306gnrT','Cll 16 #16-16',10316447306,1,3),(17,'Juan','Sebastian','Ramirez','Diaz','1988-06-04',3115437744,'jsrd@gmail.com','10316447398jsrD','Cll 17 #17-17',10316447398,1,3),(18,'Natalia','Isabel','Castro','Ruiz','1989-12-02',3115437000,'nicr@gmail.com','10316447351nicR','Cll 18 #18-18',10316447351,1,3),(19,'Anjhul','Lorena','Morales','Morales','1990-08-02',3115437841,'almm@gmail.com','10316447362almM','Cll 19 #19-19',10316447362,1,3);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nomProducto` varchar(45) DEFAULT NULL,
  `precioProducto` double DEFAULT NULL,
  `descripcionProducto` varchar(100) DEFAULT NULL,
  `fechaVencimiento` date DEFAULT NULL,
  `cantidadExistente` int DEFAULT NULL,
  `categoria_idCategorias` int NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `fk_Producto_Categoria1_idx` (`categoria_idCategorias`),
  CONSTRAINT `fk_Producto_categorias1` FOREIGN KEY (`categoria_idCategorias`) REFERENCES `categoria` (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=451 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Yogurt Alpina',4000,'Alimento Natural 200g','2023-01-01',20,4),(2,'Leche Alpina',3500,'Leche Entera 1L','2017-05-12',30,4),(3,'Arequipe Alpina',5000,'Dulce de leche tradicional 20g','2023-02-02',40,4),(4,'Queso Alpina',6000,'Queso fresco semiduro 250g','2019-02-17',25,4),(5,'Leche Achocolatada',4000,'Bebida lactea saborizada 330g','2023-03-03',33,4),(6,'KitKat',7000,'Barra de chocolate con galleta 41g','2021-11-05',25,15),(7,'Nesquik',10000,'Bebida de chocolate en polvo 20g','2021-11-05',20,15),(8,'Maggi',500,'Condimento 70g','2017-09-10',80,12),(9,'La lechera',6000,'Producto lacteo 400g','2018-03-22',40,4),(10,'Nestle Nido',8000,'Leche en polvo para niños 370g','2019-06-10',20,4),(11,'Coca-Cola',5000,'Bebida carbonatada 250ml','2025-10-04',60,7),(12,'Sprite',4000,'Bebida gaseosa sabor limos 355ml','2021-01-30',60,7),(13,'Fanta',4000,'Bebida gaseosa sabor a frutas 355ml','2025-08-02',15,7),(14,'Del Valle',2500,'Agua mineral con sabor a frutas 1.5l','2018-06-07',30,7),(15,'Ades',5000,'Bebida vegetal 250ml','2025-12-06',15,7),(16,'Frijoles horneados en salsa de tomate',4000,'Plato tradicional de la cocina mexicana 400g','2020-09-15',10,12),(17,'Frijoles refritos con tocino',5500,'Plato tradicional mexicano 400g','2025-02-26',10,12),(18,'Frijoles con chorizo',6000,'Plato mexicano 500g','2016-10-02',10,12),(19,'Frijoles con mole',4500,'Plato tradicional mexicano 450g','2017-03-18',10,12),(20,'Frijoles con queso',6000,'Plato mexicano 300g','2018-11-25',10,12),(21,'Pan de caja blanco',11000,'Pan de molde 620g','2019-07-07',10,12),(22,'Pan de caja integral',15000,'Pan elaborado con harina de trigo 500g','2020-02-09',10,12),(23,'Pan de caja multigrano',18000,'Pan hecho con multiples granos 400g','2023-05-05',10,12),(24,'Pan dulce',12000,'Reposteria mexicana','2016-05-08',15,12),(25,'Bollería',16000,'Conjunto de piezas de reposteria 500g','2025-02-26',16,12),(26,'Turrón de Doña Pepa',11000,'Dulce tradicional peruano 250g','2018-09-30',17,12),(27,'King Kong',15000,'Dulce tipíco peruano 500g','2026-02-07',28,12),(28,'Arequipeñitas',8000,'Galletas dulces rellenas de arequipe 250g','2020-12-10',26,12),(29,'Sucrecitos',9000,'Golosinas dulces 100g','2025-04-28',28,12),(30,'Mantecados',4500,'Dulce tradicional español 15g','2011-07-22',24,12),(31,'Chiles jalapeños en vinagre',5000,'Chiles jalapeños 300g','2026-11-16',42,12),(32,'Frijoles refritos',6000,'Guarnicion tipica mexicana 290g','2013-12-10',31,12),(33,'Salsa verde',16000,'Salsa tradicional mexicana 250ml','2025-10-03',25,12),(34,'Mayonesa La Costeña',7000,'Aderezo cremoso 385g','2015-05-17',46,12),(35,'Tomates enlatados',9500,'Tomates pelados enteros 397g','2026-12-17',14,12),(36,'Harina P.A.N',13500,'Harina de maiz 1kg','2017-10-09',30,12),(37,'Mazorca Polar',6000,'Harina de maiz precocida 500g','2026-03-08',35,12),(38,'Aceite Mazeite',4000,'Aceite vegetal refinado 600ml','2019-03-29',16,12),(39,'Mayonesa Mavesa',7000,'Salsa a base de huevo 500g','2021-09-20',30,12),(40,'Pasta de dientes Colgate Total',3000,'Pasta dental para la limpieza 100ml','2026-12-29',20,8),(41,'Cepillo de dientes Colgate 360',2500,'Cepillo de dientes manual 25g','2011-04-26',30,8),(42,'Enjuagues bucales Colgate Plax',6000,'Enjuages bucales sin alcohol 500ml','2026-08-13',25,8),(43,'Jabón líquido Protex',3800,'Jabon liquido antibacterial 221ml','2013-09-23',24,8),(44,'Desodorante Lady Speed Stick',2000,'Desodorante antitranspirante 45g','2026-10-15',19,8),(45,'Pampers',19000,'Pañales para niños 22g','2015-02-14',15,8),(46,'Tide',12000,'Detergente para ropa liquida 1.5L','2024-05-17',23,8),(47,'Gillette',2500,'Maquina para afeitar 100g','2017-06-25',90,8),(48,'Oral-B',3000,'Cepillo de dientes electronico 200 g','2026-04-09',34,8),(49,'Pantene',7500,'Producto para el cuidado del cabello 200g','2019-10-27',36,8),(50,'Rexona',4500,'Desodorante antitranspirante 150ml','2024-08-20',28,8),(51,'Jabon Dove',3000,'Jabon en barra 100g','2025-10-03',21,8),(52,'Knorr Crema de Pollo',3500,'Crema de pollo instantanea 57g','2023-11-11',40,15),(53,'Hellmanns Salsa de Tomate',5500,'Salsa de tomate tipo ketchup 400g','2011-11-10',41,15),(54,'Helado Magnum',5500,'Helado cremoso 440ml','2025-04-28',10,4),(55,'Johnnie Walker',230000,'Whisky escoces 700ml','2013-05-28',3,7),(56,'Smirnoff',8000,'Vodka de origen ruso 700ml','2017-06-24',10,7),(57,'Guinness',5200,'Cerveza negra irlandesa 330ml','2021-09-18',24,7),(58,'Baileys',80000,'Licor irlandes de crema 700ml','2026-09-14',6,7),(59,'Tanqueray',140000,'Ginebra seca 700ml','2025-05-29',7,7),(60,'Listerine',9500,'Enjuage bucal antiseptico 500ml','2024-09-21',16,8),(61,'Band-Aid',1500,'Venda adhesiva 2g','2019-10-27',16,8),(62,'Neutrogena',16000,'Producto para el cuidado de la piel 250ml','2015-02-14',15,8),(63,'Johnsons Baby',11500,'Productos para el cuidado de la piel del bebe 200ml','2013-09-21',26,8),(64,'Absolut Vodka',180000,'Vodka de origen sueco 700ml','2026-07-12',9,7),(65,'Beefeater Gin',130000,'Ginebra inglesa 700ml','2025-05-29',11,7),(66,'Chivas Regal Scotch Whisky',360000,'Whisky escoces 700ml','2025-11-04',14,7),(67,'Havana Club Rum',260000,'Ron cubano 750ml','2026-06-11',12,7),(68,'Ricard',120000,'Licor anisado frances 700ml','2013-12-15',23,7),(69,'Bacardi Superior',160000,'Ron blanco 980ml','2026-03-08',13,7),(70,'Bacardi Gold',190000,'Ron dorado 750ml','2025-09-02',15,7),(71,'Bacardi Black',160000,'Ron oscuro 700ml','2017-10-07',13,7),(72,'Bacardi Spiced',160000,'Ron especiado con sabos a vainilla 700ml','2011-07-22',15,7),(73,'Bacardi Reserva Ocho',170000,'Ron dorado complejo 750ml','2021-03-20',3,7),(74,'Jack Daniels',240000,'Whisky estadounidense 750ml','2026-04-09',7,7),(75,'Woodford Reserve',200000,'Bourbon whisky de Kentucky 750ml','2026-11-16',7,7),(76,'El Jimador',190000,'Tequila agave azul 750ml','2019-03-29',9,7),(77,'Early Times',210000,'Whisky bourbon estadounidense 750ml','2010-11-19',14,7),(78,'Jim Beam',300000,'Whisky bourbon estadounidense 750ml','2025-06-30',16,7),(79,'Makers Mark',260000,'Bourbon de Kentucky 750ml','2018-03-22',12,7),(80,'Hakushu',270000,'Whisky single mal japones 700ml','2024-09-21',15,7),(81,'Talisker',270000,'Whisky escoces 700ml','2023-12-12',12,7),(82,'Sauza',190000,'Tequila de agave 750ml','2024-09-21',21,7),(83,'Colcafé',5000,'Cafe instantaneo 100g','2025-08-01',30,15),(84,'Helados La Lechera',3500,'Helado cremoso 5.5L','2024-09-21',15,4),(85,'Pastas Doria',4000,'Pastas elaboradas con semola 1kg','2024-07-28',25,12),(86,'Harinas Doria',5500,'Harinas de trigo 500g','2023-09-12',20,12),(87,'Cremas Doria',6500,'Cremas listas 500g','2024-01-20',21,12),(88,'Semillas Doria',7800,'Mezclas de semillas de linaza 210g','2025-03-06',20,15),(89,'Pasta integral Doria',6500,'Pasta larga hecha con harina 500g','2026-02-02',10,12),(90,'Atún en aceite de oliva',7500,'Pescaod conservado en aceite de olvia 80g','2025-01-29',19,5),(91,'Salchicha tipo alemana',4500,'Salchicha elaborada con carne de cerdo 360g','2025-07-14',20,3),(92,'Jamon Practicarne',7800,'Jamon elaborado con patas de cerdo 50g','2025-09-29',30,3),(93,'Frijoles Zenu',7500,'Frijoles cargamanto rojos 310g','2026-02-20',25,12),(94,'Palitos de queso',8500,'Bocadillos crijiente 10g','2024-02-22',35,4),(95,'Manuelita Alta Pureza',4000,'Azucar refinado 1kg','2025-06-27',13,12),(96,'Manuelita Morena',4500,'Azucar morena no refinada 1kg','2023-09-26',16,12),(97,'Aceite de palma refinado',8000,'Aceita vegetal 1l','2026-03-10',28,12),(98,'Aceite de palma en crudo',11000,'Aceite vegetal 1l','2024-09-13',30,12),(99,'Aceite de palmiste refinado',22000,'Aceite vegetal 1l','2025-11-23',24,12),(100,'Aceite de palmiste en crudo',26000,'Aceite vegetal 1l','2024-09-14',14,12),(101,'Margarina',4500,'Grasa vegetal comestible 250g','2024-02-15',12,12),(102,'Aceite de girasol',3500,'Aceite vegetal 1l ','2025-11-10',28,12),(103,'Aceite de canola',4000,'Aceite vegetal 1l','2023-11-16',21,12),(104,'Aceite de soya',6500,'Aceite vegetal 1l','2024-12-26',30,12),(105,'Aceite de maíz',4500,'Aceite vegetal 1l','2024-05-18',37,12),(106,'Aceite de oliva',8500,'Aceite vegetal 1l','2024-08-18',25,12),(107,'Harina de trigo blanca',4000,'Polvo fino hecho de la molienda de trigo 1kg','2023-09-27',28,12),(108,'Harina de trigo integral',4500,'Harina molida 1kg','2026-01-19',24,12),(109,'Harina de maíz',5000,'Polvo fino obtenido del maiz 1kg','2025-08-01',26,12),(110,'Harina de arroz',4500,'Harina elaborada a partir de arroz 1kg','2024-01-20',29,12),(111,'Harina de papa',5500,'Harina elaborada a partir de papa 1kg','2023-09-26',49,12),(112,'Arroz Diana Blanco',4500,'Arroz blanco de grano largo 1kg','2025-01-29',41,12),(113,'Arroz Diana integral',6500,'Arroz integral de grano largo 1kg','2024-07-28',21,12),(114,'Arroz Roa Blanco',4500,'Arroz blanco de grano largo 1kg','2025-04-13',14,12),(115,'Arroz Roa Integral',7500,'Arroz integral de grano largo 1kg','2025-11-23',26,12),(116,'Marlboro',6000,'Cigarrilo de tabaco enrollado 70g','2025-09-29',76,14),(117,'Chesterfield',5000,'Cigarrilo de tabaco enrollado 70g','2024-09-14',54,14),(118,'L&M',5500,'Cigarrilo de tabaco enrollado 70g','2025-11-23',39,14),(119,'Philip Morris',4500,'Cigarrilo de tabaco enrollado 70g','2025-09-29',40,14),(120,'Parliament',5000,'Cigarrilo de tabaco enrollado 70g','2026-02-27',47,14),(121,'Cerveza Águila',1800,'Cerveza lager dorada 330ml','2025-08-01',30,7),(122,'Pony Malta',2500,'Bebida maltosa no alcoholica 330ml','2025-07-14',26,7),(123,'Pilsen',2200,'Cerveza tipo pilsener 330ml','2025-09-29',20,7),(124,'Costeña',2500,'Cerveza lager colombiana 350ml','2024-12-26',28,7),(125,'Club Colombia',2500,'Cerveza premium tipo lager 330ml','2025-08-01',38,7),(126,'Manzana Postobón',3500,'Bebida carbonatada 250ml','2023-11-16',48,7),(127,'7UP',5000,'Bebida gaseosa 3550ml','2023-09-26',39,7),(128,'Guaraná Postobón',4500,'Bebida carbonatada sabor guarana 250ml','2024-03-25',39,7),(129,'Agua Cristal con Gas',2500,'Agua mineral natural con gas 600ml','2027-04-15',20,7),(130,'Leche Alquería Balance',5000,'Leche semidescremada 1100ml','2024-10-29',58,4),(131,'Leche Alquería Deslactosada',6000,'Leche de vaca deslactosada 1100ml','2024-03-04',45,4),(132,'Leche Alquería Deslactosada 0% Grasa',7000,'Leche alqueria deslactosada 1100ml','2026-02-27',20,4),(133,'Yogurt Alquería Frutas',6500,'Yogurt natural 150g','2026-03-10',42,4),(134,'Arequipe Alquería',8500,'Dulce de leche tradicional colombiano 400g','2024-02-15',15,11),(135,'Bon Bon Bum',500,'Caramelo relleno de chicle 20g','2024-12-26',90,11),(136,'Nucita',1000,'Crema de cholocate con avellanas 200g','2024-08-18',70,11),(137,'Chocomelo',500,'Chocolate con leche en polvo 20g','2025-01-29',90,11),(138,'Ponky',1800,'Pastelito de hojaldre 132g','2025-10-09',40,11),(139,'Helado de vainilla con brownie',4500,'Helado de vainilla 500g','2025-06-27',24,4),(140,'Helado de chocolate con cookies',4500,'Helado cremoso con chocolate 500g','2025-04-13',24,4),(141,'Helado de fresa con crema',3000,'Postre cremoso 250g','2026-01-27',22,4),(142,'Helado de limón con arequipe',5000,'Postre cremoso y refrescante 500g','2025-11-23',21,4),(143,'Helado de mora con chocolate',3500,'Helado cremoso 500g','2024-10-29',25,4),(144,'Chocoramo',3000,'Ponque de chocolate 420g','2024-05-18',21,11),(145,'Mogolla Ramo',2500,'Pan dulce tradicional colombiano 60g','2024-02-22',29,11),(146,'Tostadas Ramo',4500,'Tajadas de pan de molde blanco','2025-09-10',28,11),(147,'Choco Brownie Arequipe',5500,'Postre dulce elaborado a base de chocolate 65g','2024-03-04',26,11),(148,'Galletas Artesanales Ramo',5500,'Galletas elaboradas con ingredientes naturales','2025-01-29',31,11),(149,'Frutiño',1000,'Bebida en polvo saborizada a frutas','2024-01-19',13,7),(150,'Ricostilla',400,'Caldo con sabor a costilla de res 84g','2026-01-22',47,12),(151,'Boka',600,'Bebida en polvo 18g','2025-06-29',11,7),(152,'Panelada',1200,'Bebida en polvo 29g','2025-05-29',11,7),(153,'Spartan',1200,'Bebida energizante 150ml','2025-01-01',15,7),(154,'Huevos Kikes AA',12000,'Huevo fresco de gallina 55g','2024-12-08',45,12),(155,'Manzana',3000,'Manzanas frescas 1kg','2023-09-01',50,1),(156,'Plátanos',2500,'Plátanos maduros 1kg','2023-09-01',40,1),(157,'Fresas',4500,'Fresas frescas 250g','2023-09-01',30,1),(158,'Uvas',6000,'Uvas rojas sin semillas 500g','2023-09-01',25,1),(159,'Papayas',3500,'Papayas frescas 1kg','2023-09-01',35,1),(160,'Mangos',4000,'Mangos frescos 1kg','2023-09-01',45,1),(161,'Kiwi',7000,'Kiwi fresco 200g','2023-09-01',20,1),(162,'Piñas',4500,'Piñas frescas 1kg','2023-09-01',28,1),(163,'Cerezas',8000,'Cerezas frescas 300g','2023-09-01',15,1),(164,'Naranjas',3000,'Naranjas frescas 1kg','2023-09-01',55,1),(165,'Bananos',2000,'Bananos frescos 1kg','2023-09-01',60,1),(166,'Limones',2500,'Limones frescos 500g','2023-09-01',40,1),(167,'Sandías',6000,'Sandías frescas 5kg','2023-09-01',10,1),(168,'Melones',4500,'Melones frescos 2kg','2023-09-01',25,1),(169,'Granadillas',3500,'Granadillas frescas 200g','2023-09-01',30,1),(170,'Duraznos',5000,'Duraznos frescos 1kg','2023-09-01',35,1),(171,'Cocos',7500,'Cocos frescos','2023-09-01',18,1),(172,'Mandarinas',4000,'Mandarinas frescas 1kg','2023-09-01',42,1),(173,'Guayabas',3500,'Guayabas frescas 1kg','2023-09-01',38,1),(174,'Frutas Mixtas',8500,'Mezcla de frutas frescas 500g','2023-09-01',22,1),(175,'Tomates',2000,'Tomates frescos 1kg','2023-09-01',65,2),(176,'Papas',1800,'Papas frescas 1kg','2023-09-01',50,2),(177,'Zanahorias',2500,'Zanahorias frescas 500g','2023-09-01',40,2),(178,'Cebollas',2200,'Cebollas frescas 1kg','2023-09-01',55,2),(179,'Espinacas',3500,'Espinacas frescas 200g','2023-09-01',30,2),(180,'Lechugas',3000,'Lechugas frescas','2023-09-01',38,2),(181,'Pepinos',1800,'Pepinos frescos 500g','2023-09-01',48,2),(182,'Acelgas',2800,'Acelgas frescas 300g','2023-09-01',35,2),(183,'Brócolis',4000,'Brócolis frescos 500g','2023-09-01',25,2),(184,'Calabacines',3500,'Calabacines frescos 1kg','2023-09-01',32,2),(185,'Coliflores',4500,'Coliflores frescos 500g','2023-09-01',28,2),(186,'Pimientos',3000,'Pimientos frescos 500g','2023-09-01',45,2),(187,'Ajos',2200,'Ajos frescos 200g','2023-09-01',60,2),(188,'Hojas de Laurel',1500,'Hojas de laurel secas 20g','2023-09-01',70,2),(189,'Berros',2800,'Berros frescos 150g','2023-09-01',50,2),(190,'Aguacates',4500,'Aguacates frescos','2023-09-01',22,2),(191,'Rábanos',2000,'Rábanos frescos 300g','2023-09-01',42,2),(192,'Habichuelas',3500,'Habichuelas frescas 500g','2023-09-01',38,2),(193,'Champiñones',4000,'Champiñones frescos 250g','2023-09-01',30,2),(194,'Coles de Bruselas',5000,'Coles de Bruselas frescas 300g','2023-09-01',28,2),(195,'Salchichón',7000,'Salchichón ahumado 300g','2023-09-01',30,3),(196,'Chorizo Español',8000,'Chorizo español picante 250g','2023-09-01',25,3),(197,'Jamón Serrano',12000,'Jamón serrano cortado 200g','2023-09-01',20,3),(198,'Salami',9000,'Salami italiano 350g','2023-09-01',35,3),(199,'Mortadela',6000,'Mortadela de pollo 200g','2023-09-01',40,3),(200,'Panceta',10000,'Panceta ahumada 300g','2023-09-01',28,3),(201,'Lomo Embuchado',11000,'Lomo embuchado curado 250g','2023-09-01',30,3),(202,'Butifarra',7500,'Butifarra fresca 300g','2023-09-01',32,3),(203,'Salchichas Frankfurt',5000,'Salchichas Frankfurt 400g','2023-09-01',45,3),(204,'Chorizo Colombiano',8500,'Chorizo colombiano 300g','2023-09-01',22,3),(205,'Longaniza',7000,'Longaniza fresca 250g','2023-09-01',38,3),(206,'Salchichas de Pavo',6000,'Salchichas de pavo 300g','2023-09-01',40,3),(207,'Cecina',12000,'Cecina ahumada 200g','2023-09-01',25,3),(208,'Coppa',11000,'Coppa italiana curada 250g','2023-09-01',30,3),(209,'Salchichas de Pollo',5500,'Salchichas de pollo 350g','2023-09-01',35,3),(210,'Jamón de Pavo',8000,'Jamón de pavo cortado 200g','2023-09-01',28,3),(211,'Fuet',9000,'Fuet catalán curado 300g','2023-09-01',32,3),(212,'Lomo Adobado',10000,'Lomo adobado fresco 250g','2023-09-01',30,3),(213,'Salchichas Vegetarianas',6500,'Salchichas vegetarianas 250g','2023-09-01',28,3),(214,'Chorizo de Soja',7500,'Chorizo de soja 200g','2023-09-01',25,3),(215,'Leche de Almendras',9000,'Leche de almendras natural 1L','2023-09-01',30,4),(216,'Yogurt Griego',6500,'Yogurt griego natural 500g','2023-09-01',25,4),(217,'Queso Gouda',11000,'Queso gouda holandés 250g','2023-09-01',20,4),(218,'Mantequilla',8000,'Mantequilla sin sal 200g','2023-09-01',35,4),(219,'Yogurt de Fresa',7000,'Yogurt sabor fresa 250g','2023-09-01',40,4),(220,'Crema Agria',7500,'Crema agria 200g','2023-09-01',38,4),(221,'Queso Roquefort',12000,'Queso roquefort francés 150g','2023-09-01',25,4),(222,'Leche de Cabra',10000,'Leche de cabra natural 1L','2023-09-01',28,4),(223,'Yogurt de Vainilla',6000,'Yogurt sabor vainilla 200g','2023-09-01',32,4),(224,'Queso Parmesano',13000,'Queso parmesano italiano 200g','2023-09-01',30,4),(225,'Leche de Soja',8500,'Leche de soja enriquecida 1L','2023-09-01',22,4),(226,'Yogurt de Coco',7500,'Yogurt sabor coco 250g','2023-09-01',28,4),(227,'Queso de Cabra',11000,'Queso de cabra francés 200g','2023-09-01',30,4),(228,'Leche Evaporada',4000,'Leche evaporada 400ml','2023-09-01',45,4),(229,'Yogurt de Durazno',7000,'Yogurt sabor durazno 250g','2023-09-01',22,4),(230,'Queso Azul',14000,'Queso azul danés 150g','2023-09-01',20,4),(231,'Leche de Avena',9000,'Leche de avena natural 1L','2023-09-01',28,4),(232,'Yogurt Natural',5000,'Yogurt natural sin azúcar 200g','2023-09-01',35,4),(233,'Queso Cheddar',10000,'Queso cheddar inglés 250g','2023-09-01',32,4),(234,'Leche de Coco',8000,'Leche de coco en lata 400ml','2023-09-01',30,4),(235,'Tomates Pelados',3000,'Tomates pelados en lata 400g','2023-09-01',40,5),(236,'Maíz en Conserva',2500,'Maíz en conserva 300g','2023-09-01',35,5),(237,'Sardinas en Tomate',4000,'Sardinas en salsa de tomate en lata 200g','2023-09-01',30,5),(238,'Champiñones enlatados',3500,'Champiñones enlatados 250g','2023-09-01',28,5),(239,'Aceitunas Rellenas',4500,'Aceitunas rellenas de pimiento 150g','2023-09-01',22,5),(240,'Pimientos enlatados',3800,'Pimientos enlatados 200g','2023-09-01',32,5),(241,'Habichuelas enlatadas',3200,'Habichuelas enlatadas 300g','2023-09-01',38,5),(242,'Sopa de Lentejas enlatada',5000,'Sopa de lentejas enlatada 400g','2023-09-01',25,5),(243,'Peras en Almíbar',4500,'Peras en almíbar enlatadas 300g','2023-09-01',28,5),(244,'Melocotones enlatados',4200,'Melocotones enlatados 250g','2023-09-01',20,5),(245,'Puré de Tomate',2800,'Puré de tomate enlatado 350g','2023-09-01',32,5),(246,'Sopa de Guisantes enlatada',3800,'Sopa de guisantes enlatada 400g','2023-09-01',30,5),(247,'Espárragos enlatados',5500,'Espárragos enlatados 200g','2023-09-01',22,5),(248,'Ciruelas enlatadas',4800,'Ciruelas enlatadas 300g','2023-09-01',25,5),(249,'Sopa de Tomate enlatada',4200,'Sopa de tomate enlatada 400g','2023-09-01',28,5),(250,'Chiles Jalapeños enlatados',3000,'Chiles jalapeños enlatados 250g','2023-09-01',35,5),(251,'Sopa de Champiñones enlatada',4800,'Sopa de champiñones enlatada 350g','2023-09-01',30,5),(252,'Puré de Calabaza',4200,'Puré de calabaza enlatado 300g','2023-09-01',28,5),(253,'Sopa de Pollo enlatada',3500,'Sopa de pollo enlatada 400g','2023-09-01',25,5),(254,'Alubias Rojas enlatadas',3800,'Alubias rojas enlatadas 350g','2023-09-01',32,5),(255,'Avena',4000,'Avena en hojuelas 500g','2023-09-01',40,6),(256,'Cereal Integral',3500,'Cereal integral con frutas 300g','2023-09-01',35,6),(257,'Granola',4500,'Granola con frutos secos 400g','2023-09-01',30,6),(258,'Muesli',3800,'Muesli con pasas y frutas secas 350g','2023-09-01',28,6),(259,'Cereal de Maíz',3200,'Cereal de maíz con azúcar 300g','2023-09-01',32,6),(260,'Hojuelas de Maíz',2800,'Hojuelas de maíz azucaradas 250g','2023-09-01',22,6),(261,'Cereal de Arroz',3500,'Cereal de arroz con miel 400g','2023-09-01',30,6),(262,'Cereal de Trigo',4200,'Cereal de trigo con frutas 350g','2023-09-01',20,6),(263,'Cereal de Centeno',4800,'Cereal de centeno con pasas 300g','2023-09-01',28,6),(264,'Cereal Multigrano',3800,'Cereal multigrano con nueces 350g','2023-09-01',32,6),(265,'Cereal de Cebada',3200,'Cereal de cebada con frutas secas 300g','2023-09-01',25,6),(266,'Cereal sin Azúcar',3000,'Cereal sin azúcar añadido 250g','2023-09-01',35,6),(267,'Cereal de Quinoa',4500,'Cereal de quinoa con almendras 400g','2023-09-01',28,6),(268,'Cereal de Espelta',4200,'Cereal de espelta con bayas 350g','2023-09-01',22,6),(269,'Cereal de Kamut',5000,'Cereal de kamut con frutas secas 300g','2023-09-01',30,6),(270,'Cereal de Soja',3800,'Cereal de soja con pasas 350g','2023-09-01',28,6),(271,'Cereal de Amaranto',3200,'Cereal de amaranto con miel 250g','2023-09-01',25,6),(272,'Cereal de Sorgo',3500,'Cereal de sorgo con frutas secas 400g','2023-09-01',32,6),(273,'Cereal de Mijo',2800,'Cereal de mijo con almendras 350g','2023-09-01',30,6),(274,'Cereal de Cáñamo',4500,'Cereal de cáñamo con bayas 300g','2023-09-01',22,6),(275,'Agua Mineral',1000,'Agua mineral natural 1L','2023-09-01',50,7),(276,'Refresco de Cola',2000,'Refresco de cola 2L','2023-09-01',45,7),(277,'Jugo de Naranja',2500,'Jugo de naranja natural 1L','2023-09-01',35,7),(278,'Cerveza',3000,'Cerveza en lata 500ml','2023-09-01',30,7),(279,'Vino Tinto',8000,'Vino tinto reserva 750ml','2023-09-01',28,7),(280,'Café Molido',3500,'Café molido 250g','2023-09-01',22,7),(281,'Té Negro',2500,'Té negro en bolsitas 100g','2023-09-01',32,7),(282,'Leche',1800,'Leche entera UHT 1L','2023-09-01',30,7),(283,'Yogur Natural',1500,'Yogur natural 500g','2023-09-01',28,7),(284,'Batido de Frutas',2800,'Batido de frutas variadas 1L','2023-09-01',25,7),(285,'Energizante',3500,'Bebida energizante 250ml','2023-09-01',30,7),(286,'Té Verde',2000,'Té verde en bolsitas 50g','2023-09-01',22,7),(287,'Licor de Whisky',12000,'Licor de whisky 750ml','2023-09-01',18,7),(288,'Café Instantáneo',2800,'Café instantáneo 200g','2023-09-01',25,7),(289,'Sidra',4500,'Sidra natural 750ml','2023-09-01',28,7),(290,'Agua Saborizada',1500,'Agua saborizada 500ml','2023-09-01',35,7),(291,'Café Descafeinado',3000,'Café descafeinado molido 250g','2023-09-01',32,7),(292,'Whisky',15000,'Whisky escocés 750ml','2023-09-01',22,7),(293,'Té de Hierbas',1800,'Té de hierbas en bolsitas 50g','2023-09-01',30,7),(294,'Refresco de Naranja',2000,'Refresco de naranja 2L','2023-09-01',28,7),(295,'Jabón de manos',1500,'Jabón líquido para manos 250ml','2023-09-01',70,8),(296,'Champú',3000,'Champú revitalizante 400ml','2023-09-01',60,8),(297,'Papel higiénico',2000,'Rollo de papel higiénico 4 capas','2023-09-01',80,8),(298,'Cepillo de dientes',1000,'Cepillo de dientes suave','2023-09-01',90,8),(299,'Pasta dental',2500,'Pasta dental blanqueadora 150g','2023-09-01',75,8),(300,'Desodorante',3500,'Desodorante en aerosol 150ml','2023-09-01',65,8),(301,'Toallas de papel',1800,'Toallas de papel absorbentes 100 unidades','2023-09-01',85,8),(302,'Acondicionador',2800,'Acondicionador hidratante 300ml','2023-09-01',55,8),(303,'Jabón en barra',1200,'Jabón en barra con aloe vera 100g','2023-09-01',95,8),(304,'Crema para manos',2000,'Crema humectante para manos 150ml','2023-09-01',75,8),(305,'Limpiador multiusos',3000,'Limpiador multiusos en spray 500ml','2023-09-01',50,8),(306,'Cera para pisos',2500,'Cera para pisos brillante 1L','2023-09-01',65,8),(307,'Gel de ducha',2200,'Gel de ducha refrescante 250ml','2023-09-01',70,8),(308,'Pañales',5000,'Pañales desechables para bebés Talla M','2023-09-01',40,8),(309,'Alcohol en gel',3500,'Alcohol en gel desinfectante 100ml','2023-09-01',60,8),(310,'Cotonetes',1000,'Cotonetes de algodón 200 unidades','2023-09-01',90,8),(311,'Espuma de afeitar',2000,'Espuma de afeitar para piel sensible 150ml','2023-09-01',75,8),(312,'Tinte para cabello',4000,'Tinte para cabello color castaño 200ml','2023-09-01',55,8),(313,'Bálsamo labial',1500,'Bálsamo labial hidratante con SPF 15','2023-09-01',80,8),(314,'Detergente para ropa',2500,'Detergente líquido para ropa 1L','2023-09-01',65,9),(315,'Suavizante de telas',2000,'Suavizante de telas floral 500ml','2023-09-01',75,9),(316,'Escoba',1500,'Escoba de cerdas duras','2023-09-01',90,9),(317,'Recogedor',1000,'Recogedor de basura con mango','2023-09-01',95,9),(318,'Desinfectante',3000,'Desinfectante para superficies 750ml','2023-09-01',60,9),(319,'Trapo de piso',1200,'Trapo de microfibra para pisos','2023-09-01',85,9),(320,'Esponjas de cocina',800,'Esponjas de cocina multiusos 3 unidades','2023-09-01',100,9),(321,'Limpia vidrios',1800,'Líquido limpiador de vidrios 500ml','2023-09-01',70,9),(322,'Bolsas de basura',1000,'Bolsas de basura resistentes 30L (paquete de 50)','2023-09-01',95,9),(323,'Papel absorbente',1500,'Papel absorbente multiusos 100 hojas','2023-09-01',80,9),(324,'Velas aromáticas',3500,'Velas aromáticas de lavanda (juego de 3)','2023-09-01',55,9),(325,'Insecticida',2000,'Insecticida en aerosol para interiores 300ml','2023-09-01',75,9),(326,'Ambientador',2500,'Ambientador en gel aroma a manzana','2023-09-01',65,9),(327,'Cepillo de lavado',1200,'Cepillo de lavado de cerdas duras','2023-09-01',90,9),(328,'Pala para nieve',3000,'Pala para nieve con mango ergonómico','2023-09-01',60,9),(329,'Repelente de mosquitos',1500,'Repelente de mosquitos en spray 150ml','2023-09-01',80,9),(330,'Almohadillas para muebles',800,'Almohadillas adhesivas para muebles (juego de 16)','2023-09-01',100,9),(331,'Limpiador de baño',1800,'Limpiador de baño en gel 500ml','2023-09-01',70,9),(332,'Antical',2000,'Antical líquido para grifos y duchas 250ml','2023-09-01',75,9),(333,'Fregonas',2500,'Fregonas de microfibra de alta absorción','2023-09-01',55,9),(334,'Comida para perros',5000,'Comida balanceada para perros 2kg','2023-09-01',40,10),(335,'Comida para gatos',4500,'Comida premium para gatos 1.5kg','2023-09-01',45,10),(336,'Arena para gatos',3000,'Arena aglomerante para gatos 5kg','2023-09-01',30,10),(337,'Juguetes para perros',2000,'Juguetes masticables para perros (juego de 3)','2023-09-01',50,10),(338,'Collar para perro',1500,'Collar ajustable para perros pequeños','2023-09-01',55,10),(339,'Arena para hamster',1200,'Arena para hámster 1kg','2023-09-01',60,10),(340,'Huesos para perros',1800,'Huesos naturales para perros (juego de 2)','2023-09-01',35,10),(341,'Cama para gatos',3500,'Cama suave y acolchada para gatos','2023-09-01',25,10),(342,'Comedero automático',2500,'Comedero automático para mascotas','2023-09-01',40,10),(343,'Juguete para gatos',1000,'Juguete con plumas para gatos','2023-09-01',50,10),(344,'Shampoo para perros',2000,'Shampoo suave para perros 250ml','2023-09-01',45,10),(345,'Arnés para gatos',1800,'Arnés ajustable para gatos','2023-09-01',35,10),(346,'Bol para mascotas',1500,'Bol para comida o agua para mascotas','2023-09-01',55,10),(347,'Correa para perros',1200,'Correa extensible para perros pequeños','2023-09-01',60,10),(348,'Juguetes para pájaros',1000,'Juguetes coloridos para pájaros (juego de 3)','2023-09-01',50,10),(349,'Cepillo para gatos',1500,'Cepillo suave para gatos','2023-09-01',45,10),(350,'Casa para hamster',2500,'Casa de plástico para hámster','2023-09-01',30,10),(351,'Transportadora para mascotas',3500,'Transportadora plegable para perros pequeños','2023-09-01',25,10),(352,'Pañales para perros',3000,'Pañales desechables para perros (paquete de 10)','2023-09-01',35,10),(353,'Papas fritas extra crujientes',1200,'Bolsa de papas fritas sabor original 200g','2023-09-01',50,11),(354,'Chocolates variados',2500,'Caja de chocolates surtidos 250g','2023-09-01',40,11),(355,'Galletas de chocolate',1800,'Galletas rellenas de chocolate 300g','2023-09-01',55,11),(356,'Cacahuetes cubiertos de chocolate',2000,'Bolsa de cacahuetes cubiertos de chocolate 150g','2023-09-01',45,11),(357,'Gomitas de frutas',1500,'Bolsa de gomitas de frutas surtidas 200g','2023-09-01',60,11),(358,'Piruletas gigantes',3000,'Piruletas de colores y sabores surtidos (unidad)','2023-09-01',30,11),(359,'Galletas saladas con queso',1200,'Galletas saladas con sabor a queso 250g','2023-09-01',70,11),(360,'Palomitas con caramelo',1800,'Bolsa de palomitas de maíz con caramelo 120g','2023-09-01',65,11),(361,'Donuts surtidos',2500,'Paquete de donuts surtidos (media docena)','2023-09-01',48,11),(362,'Chocolate blanco',2000,'Tableta de chocolate blanco 100g','2023-09-01',50,11),(363,'Galletas rellenas de crema',1500,'Galletas rellenas de crema de vainilla 200g','2023-09-01',58,11),(364,'Bombones de licor',3000,'Caja de bombones rellenos de licor 150g','2023-09-01',42,11),(365,'Malvaviscos',1200,'Bolsa de malvaviscos suaves y esponjosos 250g','2023-09-01',68,11),(366,'Barra de cereal',1800,'Barra de cereal con frutas y nueces','2023-09-01',55,11),(367,'Jalea de frutas',2500,'Frascos de jalea de frutas surtidas 350g','2023-09-01',38,11),(368,'Galletas integrales',2000,'Galletas integrales con avena y miel 300g','2023-09-01',47,11),(369,'Galletas de arroz',1500,'Galletas de arroz inflado sin gluten 150g','2023-09-01',62,11),(370,'Chocolate con almendras',3000,'Tableta de chocolate con almendras enteras 120g','2023-09-01',45,11),(371,'Twistos',1200,'Snack de maíz horneado sabor queso 100g','2023-09-01',72,11),(372,'Arroz Amarillo',4000,'Arroz amarillo precocido 500g','2024-05-15',30,12),(373,'Sopa de Letras',2500,'Sopa de letras instantánea 200g','2024-09-10',25,12),(374,'Sal refinada',1500,'Sal de cocina refinada 1kg','2023-12-01',40,12),(375,'Azúcar glass',1800,'Azúcar glass finamente molida 500g','2024-02-20',35,12),(376,'Miel de abeja pura',5500,'Miel de abeja 500ml','2025-01-28',20,12),(377,'Aceitunas verdes rellenas',3500,'Aceitunas verdes rellenas de pimiento 250g','2023-10-15',28,12),(378,'Salsa de tomate casera',2800,'Salsa de tomate preparada con ingredientes naturales 400g','2024-08-30',30,12),(379,'Pasta de albahaca',3200,'Pasta de albahaca para untar 200g','2024-06-18',22,12),(380,'Vinagre de manzana',2500,'Vinagre de manzana orgánico 500ml','2024-11-25',40,12),(381,'Café tostado molido',4800,'Café tostado molido 250g','2023-07-12',30,12),(382,'Mantequilla de maní',3000,'Mantequilla de maní suave 400g','2024-03-28',25,12),(383,'Mermelada de fresa',3800,'Mermelada de fresa sin azúcar añadido 350g','2023-12-10',32,12),(384,'Puré de tomate',2200,'Puré de tomate natural 200g','2024-05-02',35,12),(385,'Aceitunas negras deshuesadas',3200,'Aceitunas negras deshuesadas 250g','2023-10-15',28,12),(386,'Harina de maíz precocida',2800,'Harina de maíz precocida 1kg','2024-09-15',38,12),(387,'Sopa de lentejas',3500,'Sopa de lentejas lista para cocinar 300g','2023-11-20',25,12),(388,'Sazonador para carne',2500,'Sazonador para carne con hierbas y especias 150g','2024-02-18',40,12),(389,'Cereal de avena',3800,'Cereal de avena integral con frutas 500g','2023-09-10',28,12),(390,'Pasta de curry',3000,'Pasta de curry picante 200g','2024-06-18',22,12),(391,'Canela molida',2200,'Canela molida 100g','2024-05-02',35,12),(392,'Papas fritas congeladas',3000,'Papas fritas congeladas listas para freír 500g','2024-07-01',15,13),(393,'Vegetales mixtos congelados',2500,'Mezcla de vegetales congelados (zanahorias, guisantes, maíz) 400g','2024-10-15',20,13),(394,'Pescado empanizado',6000,'Filetes de pescado empanizados congelados 300g','2023-12-05',10,13),(395,'Hamburguesas de carne',4500,'Hamburguesas de carne de res congeladas (paquete de 4)','2024-06-30',18,13),(396,'Pizza Hawaiana',8000,'Pizza congelada de jamón y piña 400g','2023-11-15',12,13),(397,'Helado de chocolate y almendras',7000,'Helado de chocolate con almendras congelado 1L','2025-02-28',8,13),(398,'Camarones congelados',12000,'Camarones pelados y congelados 500g','2024-09-20',6,13),(399,'Empanadas de pollo',3500,'Empanadas de pollo congeladas (paquete de 6)','2024-03-12',15,13),(400,'Tarta de frutas',5500,'Tarta de frutas mixtas congelada 800g','2023-10-25',10,13),(401,'Pollo a la parrilla',4800,'Muslos de pollo a la parrilla congelados 800g','2024-08-15',12,13),(402,'Espinacas congeladas',2200,'Espinacas picadas congeladas 300g','2023-09-30',25,13),(403,'Tortellini de queso',4000,'Tortellini relleno de queso congelado 500g','2024-05-18',15,13),(404,'Surtido de mariscos',9000,'Mezcla de mariscos congelados (calamares, mejillones, langostinos) 700g','2023-12-28',8,13),(405,'Pan de ajo',2500,'Pan de ajo congelado listo para hornear 250g','2024-11-10',20,13),(406,'Ensalada de frutas congelada',3500,'Ensalada de frutas variadas congelada 500g','2023-11-05',18,13),(407,'Croquetas de jamón y queso',3200,'Croquetas de jamón y queso congeladas (paquete de 10)','2024-03-22',15,13),(408,'Filetes de salmón',7000,'Filetes de salmón congelados 400g','2024-09-15',10,13),(409,'Horchata en cubitos',1800,'Cubitos de horchata congelada (para preparar bebida)','2025-01-12',30,13),(410,'Calamares rellenos',5500,'Calamares rellenos congelados 600g','2024-06-18',12,13),(411,'Fresas congeladas',3000,'Fresas enteras congeladas 250g','2023-10-30',22,13),(412,'Marlboro Light',6500,'Cigarrillo de tabaco suave 70g','2025-07-01',50,14),(413,'Camel',5500,'Cigarrillo de tabaco suave 70g','2024-10-15',45,14),(414,'Winston',6000,'Cigarrillo de tabaco fuerte 70g','2023-12-05',40,14),(415,'Lucky Strike',7000,'Cigarrillo de tabaco extra fuerte 70g','2024-06-30',35,14),(416,'Pall Mall',5000,'Cigarrillo de tabaco regular 70g','2023-11-15',55,14),(417,'Dunhill',7500,'Cigarrillo de tabaco de lujo 70g','2025-02-28',30,14),(418,'Rothmans',6000,'Cigarrillo de tabaco suave 70g','2024-09-20',42,14),(419,'Parliament Light',6500,'Cigarrillo de tabaco suave 70g','2024-03-12',48,14),(420,'Benson & Hedges',7000,'Cigarrillo de tabaco fuerte 70g','2023-10-25',38,14),(421,'Kent',5500,'Cigarrillo de tabaco regular 70g','2024-08-15',50,14),(422,'Chesterfield Red',6000,'Cigarrillo de tabaco fuerte 70g','2023-09-30',40,14),(423,'Viceroy',6500,'Cigarrillo de tabaco regular 70g','2024-05-18',45,14),(424,'Davidoff Classic',8000,'Cigarrillo de tabaco de lujo 70g','2023-12-28',28,14),(425,'Salem',5500,'Cigarrillo de tabaco suave mentolado 70g','2024-11-10',55,14),(426,'Virginia Slims',7500,'Cigarrillo de tabaco para mujeres 70g','2023-11-05',35,14),(427,'Montana',6000,'Cigarrillo de tabaco fuerte 70g','2024-03-22',42,14),(428,'Kool Menthol',6500,'Cigarrillo de tabaco mentolado 70g','2024-09-15',48,14),(429,'Djarum Black',8000,'Cigarrillo kretek de tabaco y clavo 70g','2024-06-18',30,14),(430,'Gauloises',7000,'Cigarrillo de tabaco fuerte 70g','2023-10-30',38,14),(431,'Tarjetas de felicitación variadas',2500,'Paquete de tarjetas de felicitación surtidas (10 unidades)','2024-09-01',20,15),(432,'Globos de colores',1500,'Paquete de globos surtidos (50 unidades)','2024-08-01',30,15),(433,'Llaveros variados',1800,'Llaveros con diseños variados','2024-07-01',25,15),(434,'Anteojos de sol de moda',8000,'Anteojos de sol con estilo y diseño moderno','2024-06-01',15,15),(435,'Juego de dados',3000,'Juego de dados para entretenimiento','2024-05-01',18,15),(436,'Mini linternas LED',2000,'Linternas pequeñas con luz LED (paquete de 3)','2024-04-01',22,15),(437,'Porta retratos variados',3500,'Porta retratos de diferentes tamaños y estilos','2024-03-01',12,15),(438,'Pelotas de ping pong',1000,'Paquete de pelotas de ping pong (6 unidades)','2024-02-01',40,15),(439,'Baraja de cartas',1500,'Baraja de cartas estándar para juegos de mesa','2024-01-01',30,15),(440,'Gafas de lectura',4500,'Gafas para lectura con diferentes graduaciones','2023-12-01',15,15),(441,'Pañuelos de papel decorados',1200,'Paquete de pañuelos de papel con diseños (6 cajas)','2023-11-01',28,15),(442,'Cajas de regalo surtidas',3000,'Paquete de cajas de regalo de diferentes tamaños (10 unidades)','2023-10-01',20,15),(443,'Lápices de colores',2000,'Caja de lápices de colores variados (24 unidades)','2023-09-01',35,15),(444,'Adornos navideños',3500,'Juego de adornos para árbol de navidad','2023-08-01',10,15),(445,'Juguetes para mascotas',2500,'Set de juguetes variados para perros y gatos','2023-07-01',15,15),(446,'Imanes decorativos',1000,'Imanes con diseños decorativos (paquete de 5)','2023-06-01',25,15),(447,'Pilas alcalinas AA',500,'Paquete de pilas alcalinas AA (10 unidades)','2023-05-01',50,15),(448,'Cintas adhesivas de colores',1800,'Paquete de cintas adhesivas de colores (5 unidades)','2023-04-01',18,15),(449,'Revistas de crucigramas',2500,'Pack de revistas de crucigramas para entretenimiento','2023-03-01',12,15),(450,'Máscaras de carnaval',3000,'Juego de máscaras variadas para carnaval (5 unidades)','2023-02-01',15,15);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `idProveedor` int NOT NULL AUTO_INCREMENT,
  `NombreEmpresa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,'Alpina'),(2,'Nestlé'),(3,'Coca-Cola'),(4,'Frijoles El Tomate'),(5,'Pan Bimbo'),(6,'Doña Pepa'),(7,'La Costeña'),(8,'Alimentos Polar'),(9,'Colgate-Palmolive'),(10,'Procter & Gamble'),(11,'Unilever'),(12,'Diageo'),(13,'Johnson & Johnson'),(14,'Pernod Ricard'),(15,'Bacardi'),(16,'Brown-Forman'),(17,'Beam Suntory'),(18,'Alimentos Nutresa'),(19,'Productos Alimenticios Doria'),(20,'Alimentos Zenu'),(21,'Azucares Manuelita'),(22,'Aceites Palmar'),(23,'Aceites Cargil'),(24,'Harinas de Colombia'),(25,'Arroz Diana'),(26,'Arroz Roa'),(27,'Coltabaco'),(28,'Bavaria'),(29,'Postobon'),(30,'Alqueria'),(31,'Colombina'),(32,'CremHelado'),(33,'Productos Ramo'),(34,'Quala'),(35,'Kikes');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administrador'),(2,'Administrador de bodega'),(3,'Proveedor');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategoria`
--

DROP TABLE IF EXISTS `subcategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategoria` (
  `idsubCategoria` int NOT NULL AUTO_INCREMENT,
  `NombreSubCategoria` varchar(45) DEFAULT NULL,
  `Categoria_idCategorias` int NOT NULL,
  PRIMARY KEY (`idsubCategoria`),
  KEY `fk_subCategoria_Categoria1_idx` (`Categoria_idCategorias`),
  CONSTRAINT `fk_subCategoria_Categoria1` FOREIGN KEY (`Categoria_idCategorias`) REFERENCES `categoria` (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategoria`
--

LOCK TABLES `subcategoria` WRITE;
/*!40000 ALTER TABLE `subcategoria` DISABLE KEYS */;
INSERT INTO `subcategoria` VALUES (1,'Derivados lacteos',4),(2,'Bebidas no alcoholicas',7),(3,'Bebidas alcoholicas',7),(4,'Higiene personal',8),(5,'Productos de limpieza',8),(6,'Juguete',10),(7,'Comida para mascotas',10),(8,'Harinas',12),(9,'Granos',12),(10,'Aceites',12),(11,'Condimentos y especias',12),(12,'Alimentos empaquetados',12),(13,'Cigarrillos',14),(14,'Sin categoria',15);
/*!40000 ALTER TABLE `subcategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tienda`
--

DROP TABLE IF EXISTS `tienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tienda` (
  `idTienda` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tienda`
--

LOCK TABLES `tienda` WRITE;
/*!40000 ALTER TABLE `tienda` DISABLE KEYS */;
INSERT INTO `tienda` VALUES (1,'Tienda Santa Martha Sucursal 1','Cl 132B # 52-31'),(2,'Tienda Santa Martha Sucursal 2','Cl 129A # 61-20'),(3,'Tienda Santa Martha Sucursal 3','Cl 128C # 96-23');
/*!40000 ALTER TABLE `tienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocontrato`
--

DROP TABLE IF EXISTS `tipocontrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipocontrato` (
  `idtipoContrato` int NOT NULL AUTO_INCREMENT,
  `descripcionTipoContrato` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipoContrato`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocontrato`
--

LOCK TABLES `tipocontrato` WRITE;
/*!40000 ALTER TABLE `tipocontrato` DISABLE KEYS */;
INSERT INTO `tipocontrato` VALUES (1,'Contrato a termino fijo'),(2,'Contrato a termino indefinido'),(3,'Contrato por obra o labor'),(4,'Contrato temporal, ocasional o accidental');
/*!40000 ALTER TABLE `tipocontrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipodocumento`
--

DROP TABLE IF EXISTS `tipodocumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipodocumento` (
  `idtipoDocumento` int NOT NULL AUTO_INCREMENT,
  `TipoDeDocumento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipoDocumento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipodocumento`
--

LOCK TABLES `tipodocumento` WRITE;
/*!40000 ALTER TABLE `tipodocumento` DISABLE KEYS */;
INSERT INTO `tipodocumento` VALUES (1,'Cedula de ciudadania'),(2,'Cedula de extranjeria'),(3,'Tarjeta de identidad'),(4,'Pasaporte'),(5,'NUIP'),(6,'NIT'),(7,'Registro civil');
/*!40000 ALTER TABLE `tipodocumento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-04 13:07:38
