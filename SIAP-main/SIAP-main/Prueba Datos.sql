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

INSERT INTO tienda (nombre,direccion)
    VALUES
    ('Tienda Santa Martha Sucursal 1','Cl 132B # 52-31'),
     ('Tienda Santa Martha Sucursal 2','Cl 129A # 61-20'),
      ('Tienda Santa Martha Sucursal 3','Cl 128C # 96-23');
      
      INSERT INTO ordenDeSalida (idordenDeSalida,fechaSalida,tienda_idTienda)
      VALUES
      (1,'2022-09-25','1');

INSERT INTO facturacompra (idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor)
VALUES
(1,'adios', '2023-10-20', 7);

CALL InsertarFacturaDetalle(1, 1, 70, 70000, 'Prueba', 'Prueba', 1);



SELECT idFacturaCompra FROM facturacompra;
SELECT * FROM producto;





    
     
     
	SELECT * FROM categoria;
    SELECT * FROM Subcategoria;
    SELECT * FROM Rol;
    SELECT * FROM Tipodocumento;
    SELECT * FROM TipoContrato;
    SELECT * FROM Persona;
    SELECT * FROM Contrato;
    SELECT * FROM Devolucion;
    SELECT * FROM Proveedor;
    SELECT * FROM Producto;
    SELECT * FROM DevolucionDetallada;
    SELECT * FROM facturacompra;
    SELECT * FROM facturadetalle;
    SELECT * FROM gestionproducto;
    SELECT * FROM tienda;
    SELECT * FROM ordenDeSalida;
    SELECT * FROM ordenDeSalidaDetallada;
    
    
    




