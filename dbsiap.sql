-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: siap
-- ------------------------------------------------------
-- Server version	8.0.37

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Frutas'),(2,'Verduras'),(3,'Embutidos'),(4,'Lacteos'),(5,'Enlatados'),(6,'Cereales'),(7,'Bebidas'),(8,'Productos de aseo'),(9,'Ciudados del hogar'),(10,'Productos para mascotas'),(11,'Paqueteria'),(12,'Viveres'),(13,'Productos congelados'),(14,'Tabaco'),(15,'Sin Categoria'),(16,'Frutas'),(17,'Verduras'),(18,'Embutidos'),(19,'Lacteos'),(20,'Enlatados'),(21,'Cereales'),(22,'Bebidas'),(23,'Productos de aseo'),(24,'Ciudados del hogar'),(25,'Productos para mascotas'),(26,'Paqueteria'),(27,'Viveres'),(28,'Productos congelados'),(29,'Tabaco'),(30,'Sin Categoria');
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
/*!40000 ALTER TABLE `devoluciondetallada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturacompra`
--

DROP TABLE IF EXISTS `facturacompra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturacompra` (
  `idFacturaCompra` int NOT NULL,
  `observacionesCompra` varchar(45) DEFAULT NULL,
  `fechaCompra` date DEFAULT NULL,
  `proveedor_idProveedor` int NOT NULL,
  PRIMARY KEY (`idFacturaCompra`),
  KEY `fk_FacturaCompra_proveedor1_idx` (`proveedor_idProveedor`),
  CONSTRAINT `fk_FacturaCompra_proveedor1` FOREIGN KEY (`proveedor_idProveedor`) REFERENCES `proveedor` (`idProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturacompra`
--

LOCK TABLES `facturacompra` WRITE;
/*!40000 ALTER TABLE `facturacompra` DISABLE KEYS */;
INSERT INTO `facturacompra` VALUES (1,'adios','2023-10-20',7);
/*!40000 ALTER TABLE `facturacompra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturadetalle`
--

DROP TABLE IF EXISTS `facturadetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturadetalle` (
  `FacturaCompra_idFacturaCompra` int NOT NULL,
  `Producto_idProducto` int NOT NULL,
  `CantidadProductos` int DEFAULT NULL,
  `PrecioCompra` double DEFAULT NULL,
  `nomProducto` varchar(45) DEFAULT NULL,
  `descripcionProducto` varchar(100) DEFAULT NULL,
  `fechaVencimiento` date DEFAULT NULL,
  `categoria_idCategorias` int DEFAULT NULL,
  PRIMARY KEY (`FacturaCompra_idFacturaCompra`,`Producto_idProducto`),
  KEY `fk_FacturaDetalle_FacturaCompra1_idx` (`FacturaCompra_idFacturaCompra`),
  KEY `fk_FacturaDetalle_Producto1_idx` (`Producto_idProducto`),
  KEY `fk_FacturaDetalle_Categoria1` (`categoria_idCategorias`),
  CONSTRAINT `fk_FacturaDetalle_Categoria1` FOREIGN KEY (`categoria_idCategorias`) REFERENCES `categoria` (`idCategorias`),
  CONSTRAINT `fk_FacturaDetalle_FacturaCompra1` FOREIGN KEY (`FacturaCompra_idFacturaCompra`) REFERENCES `facturacompra` (`idFacturaCompra`),
  CONSTRAINT `fk_FacturaDetalle_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturadetalle`
--

LOCK TABLES `facturadetalle` WRITE;
/*!40000 ALTER TABLE `facturadetalle` DISABLE KEYS */;
INSERT INTO `facturadetalle` VALUES (1,1,70,70000,'Prueba','Prueba','2024-06-25',1),(1,2,70,70000,'Prueba2','Prueba2','2024-06-25',1),(1,4,123,123,'123','123','2024-06-29',1),(1,5,76,78,'87','87','2024-06-28',1),(1,6,10,123,'123','123','2024-06-23',1);
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
INSERT INTO `gestionproducto` VALUES (1,1,'Añadido'),(1,4,'Añadido'),(1,5,'Añadido'),(1,6,'Añadido'),(2,2,'Añadido');
/*!40000 ALTER TABLE `gestionproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordendesalida`
--

DROP TABLE IF EXISTS `ordendesalida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordendesalida` (
  `idordenDeSalida` int NOT NULL,
  `fechaSalida` datetime DEFAULT NULL,
  `tienda_idTienda` int NOT NULL,
  PRIMARY KEY (`idordenDeSalida`),
  KEY `fk__ordenDeSalida_tienda1_idx` (`tienda_idTienda`),
  CONSTRAINT `fk_ordenDeSalida_tienda1` FOREIGN KEY (`tienda_idTienda`) REFERENCES `tienda` (`idTienda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordendesalida`
--

LOCK TABLES `ordendesalida` WRITE;
/*!40000 ALTER TABLE `ordendesalida` DISABLE KEYS */;
INSERT INTO `ordendesalida` VALUES (1,'2022-09-25 00:00:00',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Prueba',70000,'Prueba','2024-06-25',70,1),(2,'Prueba2',70000,'Prueba2','2024-06-25',70,1),(4,'123',123,'123','2024-06-29',123,1),(5,'87',78,'87','2024-06-25',86,1),(6,'123',123,'123','2024-06-23',10,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administrador'),(2,'Administrador de bodega'),(3,'Proveedor'),(4,'Administrador'),(5,'Administrador de bodega'),(6,'Proveedor');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategoria`
--

LOCK TABLES `subcategoria` WRITE;
/*!40000 ALTER TABLE `subcategoria` DISABLE KEYS */;
INSERT INTO `subcategoria` VALUES (1,'Derivados lacteos',4),(2,'Bebidas no alcoholicas',7),(3,'Bebidas alcoholicas',7),(4,'Higiene personal',8),(5,'Productos de limpieza',8),(6,'Juguete',10),(7,'Comida para mascotas',10),(8,'Harinas',12),(9,'Granos',12),(10,'Aceites',12),(11,'Condimentos y especias',12),(12,'Alimentos empaquetados',12),(13,'Cigarrillos',14),(14,'Sin categoria',15),(15,'Derivados lacteos',4),(16,'Bebidas no alcoholicas',7),(17,'Bebidas alcoholicas',7),(18,'Higiene personal',8),(19,'Productos de limpieza',8),(20,'Juguete',10),(21,'Comida para mascotas',10),(22,'Harinas',12),(23,'Granos',12),(24,'Aceites',12),(25,'Condimentos y especias',12),(26,'Alimentos empaquetados',12),(27,'Cigarrillos',14),(28,'Sin categoria',15);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocontrato`
--

LOCK TABLES `tipocontrato` WRITE;
/*!40000 ALTER TABLE `tipocontrato` DISABLE KEYS */;
INSERT INTO `tipocontrato` VALUES (1,'Contrato a termino fijo'),(2,'Contrato a termino indefinido'),(3,'Contrato por obra o labor'),(4,'Contrato temporal, ocasional o accidental'),(5,'Contrato a termino fijo'),(6,'Contrato a termino indefinido'),(7,'Contrato por obra o labor'),(8,'Contrato temporal, ocasional o accidental');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipodocumento`
--

LOCK TABLES `tipodocumento` WRITE;
/*!40000 ALTER TABLE `tipodocumento` DISABLE KEYS */;
INSERT INTO `tipodocumento` VALUES (1,'Cedula de ciudadania'),(2,'Cedula de extranjeria'),(3,'Tarjeta de identidad'),(4,'Pasaporte'),(5,'NUIP'),(6,'NIT'),(7,'Registro civil'),(8,'Cedula de ciudadania'),(9,'Cedula de extranjeria'),(10,'Tarjeta de identidad'),(11,'Pasaporte'),(12,'NUIP'),(13,'NIT'),(14,'Registro civil');
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

-- Dump completed on 2024-06-23 22:03:48
