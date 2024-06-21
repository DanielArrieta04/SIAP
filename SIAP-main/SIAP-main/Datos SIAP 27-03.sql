USE siap;

INSERT INTO categoria (NombreCategoria) 
values 
('Frutas'),
('Verduras'),
('Embutidos'),
('Lacteos'),
('Enlatados'),
('Cereales'),
('Bebidas'),
('Productos de aseo'),
('Ciudados del hogar'),
('Productos para mascotas'),
('Paqueteria'),
('Viveres'),
('Productos congelados'),
('Tabaco'),
('Sin Categoria');






SELECT idFacturaCompra FROM facturacompra;
SELECT * FROM producto;


INSERT INTO subcategoria (NombreSubCategoria,Categoria_idCategorias) 
values 
('Derivados lacteos','4'),
('Bebidas no alcoholicas','7'),
('Bebidas alcoholicas','7'),
('Higiene personal','8'),
('Productos de limpieza','8'),
('Juguete','10'),
('Comida para mascotas','10'),
('Harinas','12'),
('Granos','12'),
('Aceites','12'),
('Condimentos y especias','12'),
('Alimentos empaquetados','12'),
('Cigarrillos','14'),
('Sin categoria','15');


INSERT INTO Rol (nombreRol) 
values 
('Administrador'),
('Administrador de bodega'),
('Proveedor');

INSERT INTO tipodocumento (TipoDeDocumento) 
values 
('Cedula de ciudadania'),
('Cedula de extranjeria'),
('Tarjeta de identidad'),
('Pasaporte'),
('NUIP'),
('NIT'),
('Registro civil');

INSERT INTO tipocontrato (descripcionTipoContrato)
values
('Contrato a termino fijo'),
('Contrato a termino indefinido'),
('Contrato por obra o labor'),
('Contrato temporal, ocasional o accidental');


INSERT INTO persona (Nombre1,Nombre2,Apellido1,Apellido2,fechaNacimiento,Telefono,CorreoElectronico,Contrasena,DireccionResidencia,NumeroDocumentoIdentidad,tipoDocumento_idtipoDocumento,Rol_idRol)
values
('Ivan','Eduardo','Olmos','Martinez','1998-05-10','3115437598','ieom@gmail.com','10316447321ieoM','Cll 1 #01-01','10316447321','1','1'), 

('Daniel','Felipe','Lopez','Mosquera','1995-09-19','3115437553','dflm@gmail.com','10316447322dflM','Cll 2 #02-02','10316447322','1','2'), 
('Brayan','Stiven','Perez','Ortega','1996-11-20','3115437551','bspo@gmail.com','10316447343bspO','Cll 3 #03-03','10316447343','1','2'), 
('Nicol','Alejandra','Cardenas','Velasquez','1991-01-31','3115437501','nacv@gmail.com','10316447344nacV','Cll 4 #04-04','10316447344','1','2'),

('Harold','Sebastian','Monroy','Vega','1982-04-17','3115437561','hsmv@gmail.com','10316447355hsmV','Cll 5 #05-06','10316447355','1','3'),
('Dominic','Andres','Arrieta','Pantoja','2002-02-11','3115437590','daap@gmail.com','10316447366daaP','Cll 6 #06-06','10316447366','1','3'),

('Alejandro','Jose','Rodrigez','Perez','1978-05-31','3115437581','ajrp@gmail.com','10316447377ajrP','Cll 7 #07-07','10316447377','1','3'),
('Sofia','Maria','Perez','Rodriguez','1979-08-02','3115437574','smpr@gmail.com','10316447388smpR','Cll 8 #08-08','10316447388','1','3'),
('Juan','Andres','Gonzalez','Lopez','1980-09-01','3115437591','jagl@gmail.com','10316447399jagL','Cll 9 #09-09','10316447399','1','3'),
('Valentina','Andrea','Martinez','Gonzalez','1981-02-19','3115437592','vamg@gmail.com','10316447300vamG','Cll 10 #10-10','10316447300','1','3'),
('Martin','Jose','Lopez','Martinez','1982-04-16','3115437983','mjlm@gmail.com','10316447301mjlM','Cll 11 #11-11','10316447301','1','3'),
('Camila','Andrea','Sanchez','Fernandez','1983-10-15','3115437579','casf@gmail.com','10316447302casF','Cll 12 #12-12','10316447302','1','3'),
('Diego','Carlos','Fernandez','Garcia','1984-11-17','3115437021','dcfg@gmail.com','10316447303dcfG','Cll 13 #13-13','10316447303','1','3'),
('Isabela','Maria','Garcia','Sanchez','1985-11-13','3115437984','imgs@gmail.com','10316447304imgS','Cll 14 #14-14','10316447304','1','3'),
('Andres','Mateo','Torres','Ramirez','1986-01-11','3115437741','amtr@gmail.com','10316447305amtR','Cll 15 #15-15','10316447305','1','3'),
('Gabriela','Nicol','Ruiz','Torres','1987-05-10','3115437941','gnrt@gmail.com','10316447306gnrT','Cll 16 #16-16','10316447306','1','3'),
('Juan','Sebastian','Ramirez','Diaz','1988-06-04','3115437744','jsrd@gmail.com','10316447398jsrD','Cll 17 #17-17','10316447398','1','3'),
('Natalia','Isabel','Castro','Ruiz','1989-12-02','3115437000','nicr@gmail.com','10316447351nicR','Cll 18 #18-18','10316447351','1','3'),
('Anjhul','Lorena','Morales','Morales','1990-08-02','3115437841','almm@gmail.com','10316447362almM','Cll 19 #19-19','10316447362','1','3');



INSERT INTO contrato (Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona) 
values
('300000','2019-06-03','2025-11-26','1','1'),

('120000','2021-09-02','2023-11-26','1','2'),
('100000','2020-04-19','2022-11-26','3','3'),
('100000','2022-11-03','2025-11-26','2','4'),

('170000','2016-02-29','2019-11-26','1','5'),
('170000','2023-01-10','2024-11-26','1','6'),

('0','2012-02-29','2017-11-26','1','7'),
('0','2015-09-20','2019-12-22','1','8'),
('0','2011-07-30','2015-11-21','1','9'),
('0','2009-04-10','2018-02-20','1','10'),
('0','2013-10-11','2020-01-16','1','11'),
('0','2018-11-15','2021-06-13','1','12'),
('0','2020-11-28','2022-04-02','1','13'),
('0','2012-05-29','2018-03-11','1','14'),
('0','2017-04-21','2026-08-20','1','15'),
('0','2019-04-25','2020-09-30','1','16'),
('0','2008-03-11','2024-07-09','1','17'),
('0','2010-12-09','2015-11-02','1','18'),
('0','2019-10-16','2021-10-10','1','19');

INSERT INTO devolucion (DescripcionMotivoDevolucion,FechaDevolucion) 
VALUES
('Defectuoso','2016-08-21'),
('Caducado','2017-05-12'),
('Producto incorrecto recibido','2018-10-03'),
('Caducado','2019-02-17'),
('Defectuoso','2020-07-29'),

('Caducado','2021-11-05'),
('Producto incorrecto recibido','2016-12-14'),
('Fecha de vencimiento cercana','2017-09-08'),
('Caducado','2018-03-22'),
('Caducado','2019-06-10'),

('Producto incorrecto recibido','2020-04-01'),
('Fecha de vencimiento cercana','2021-01-27'),
('Defectuoso','2017-08-19'),
('Caducado','2018-06-07'),
('Producto incorrecto recibido','2019-12-25'),

('Fecha de vencimiento cercana','2020-09-13'),
('Defectuoso','2021-03-31'),
('Caducado','2016-10-02'),
('Caducado','2017-03-18'),
('Fecha de vencimiento cercana','2018-11-23'),

('Caducado','2019-07-07'),
('Caducado','2020-02-09'),
('Producto incorrecto recibido','2021-06-26'),
('Fecha de vencimiento cercana','2016-05-04'),
('Defectuoso','2017-01-11'),

('Caducado','2018-09-30'),
('Producto incorrecto recibido','2019-04-15'),
('Fecha de vencimiento cercana','2020-12-08'),
('Defectuoso', '2010-04-15'),
('Caducado', '2011-07-22'),

('Producto incorrecto recibido', '2012-09-03'),
('Fecha vencimiento cercana', '2013-12-10'),
('Defectuoso', '2014-02-28'),
('Caducado', '2015-05-17'),
('Producto incorrecto recibido', '2016-08-24'),

('Fecha vencimiento cercana', '2017-10-05'),
('Defectuoso', '2018-01-11'),
('Caducado', '2019-03-29'),
('Producto incorrecto recibido', '2020-06-08'),
('Fecha vencimiento cercana', '2021-09-14'),

('Defectuoso', '2010-11-07'),
('Caducado', '2011-04-26'),
('Producto incorrecto recibido', '2012-07-03'),
('Fecha vencimiento cercana', '2013-09-19'),
('Defectuoso', '2014-12-28'),

('Caducado', '2015-02-14'),
('Producto incorrecto recibido', '2016-04-01'),
('Fecha vencimiento cercana', '2017-06-20'),
('Defectuoso', '2018-08-09'),
('Caducado', '2019-10-27'),

('Producto incorrecto recibido', '2020-01-05'),
('Fecha vencimiento cercana', '2021-03-17'),
('Defectuoso', '2010-09-23'),
('Caducado', '2011-11-10'),
('Producto incorrecto recibido', '2012-02-08'),

('Fecha vencimiento cercana', '2013-05-26'),
('Fecha vencimiento cercana', '2017-06-20'),
('Fecha vencimiento cercana', '2021-09-14'),
('Producto incorrecto recibido', '2016-08-24'),
('Defectuoso', '2018-08-09'),

('Producto incorrecto recibido', '2012-02-08'),
('Caducado', '2019-10-27'),
('Caducado', '2015-02-14'),
('Caducado', '2011-04-26'),
('Fecha vencimiento cercana', '2013-09-19'),

('Defectuoso', '2014-12-28'),
('Producto incorrecto recibido', '2020-01-05'),
('Defectuoso', '2018-01-11'),
('Defectuoso', '2010-09-23'),
('Fecha vencimiento cercana', '2013-12-10'),

('Producto incorrecto recibido', '2016-04-01'),
('Defectuoso', '2014-02-28'),
('Fecha vencimiento cercana', '2017-10-05'),
('Caducado', '2011-07-22'),
('Fecha vencimiento cercana', '2021-03-17'),

('Defectuoso', '2010-04-15'),
('Producto incorrecto recibido', '2012-07-03'),
('Producto incorrecto recibido', '2012-09-03'),
('Caducado', '2019-03-29'),
('Fecha vencimiento cercana', '2010-11-07'),

('Defectuoso', '2016-08-21'),
('Caducado', '2018-03-22'),
('Producto incorrecto recibido', '2017-03-18'),
('Producto incorrecto recibido', '2016-02-09'),
('Defectuoso', '2019-02-17'),

('Caducado', '2017-09-08'),
('Fecha vencimiento cercana', '2013-05-26'),
('Fecha vencimiento cercana', '2015-05-17');

INSERT INTO proveedor (nombreEmpresa)
VALUES
('Alpina'),
('Nestlé'),
('Coca-Cola'),
('Frijoles El Tomate'),
('Pan Bimbo'),
('Doña Pepa'),
('La Costeña'),
('Alimentos Polar'),
('Colgate-Palmolive'),
('Procter & Gamble'),
('Unilever'),
('Diageo'),
('Johnson & Johnson'),
('Pernod Ricard'),
('Bacardi'),
('Brown-Forman'),
('Beam Suntory'),
('Alimentos Nutresa'),
('Productos Alimenticios Doria'),
('Alimentos Zenu'),
('Azucares Manuelita'),
('Aceites Palmar'),
('Aceites Cargil'),
('Harinas de Colombia'),
('Arroz Diana'),
('Arroz Roa'),
('Coltabaco'),
('Bavaria'),
('Postobon'),
('Alqueria'),
('Colombina'),
('CremHelado'),
('Productos Ramo'),
('Quala'),
('Kikes');




SET FOREIGN_KEY_CHECKS=0;


    
    INSERT INTO tienda (nombre,direccion)
    VALUES
    ('Tienda Santa Martha Sucursal 1','Cl 132B # 52-31'),
     ('Tienda Santa Martha Sucursal 2','Cl 129A # 61-20'),
      ('Tienda Santa Martha Sucursal 3','Cl 128C # 96-23');

      INSERT INTO facturacompra (idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor)
VALUES
(1,'adios', '2023-10-20', 7);

CALL InsertarFacturaDetalle(1, 1, 70, 70000, 'Prueba', 'Prueba','2024-06-25', 1 );

 INSERT INTO ordenDeSalida (idordenDeSalida,fechaSalida,tienda_idTienda)
      VALUES
      (1,'2022-09-25','1');


 SELECT * FROM Producto;
    SELECT * FROM facturadetalle;
      
      
      
      
	SELECT * FROM categoria;
    SELECT * FROM Subcategoria;
    SELECT * FROM Rol;
    SELECT * FROM Tipodocumento;
    SELECT * FROM TipoContrato;
    SELECT * FROM Persona;
    SELECT * FROM Contrato;
    SELECT * FROM Devolucion;
    SELECT * FROM Proveedor;
   
    SELECT * FROM DevolucionDetallada;
    SELECT * FROM facturacompra;
    
    SELECT * FROM gestionproducto;
    SELECT * FROM tienda;
    SELECT * FROM ordenDeSalida;
    SELECT * FROM ordenDeSalidaDetallada;
    
    
    




