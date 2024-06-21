CREATE DATABASE siap;

-- Construccion de la base de datos --

USE siap ;
-- Tabla #1
CREATE TABLE categoria (
    idCategorias INT NOT NULL AUTO_INCREMENT,
    nombreCategoria VARCHAR(45) ,
    PRIMARY KEY (idCategorias)
);
select * from categoria;
--

-- Tabla #2
CREATE TABLE  subcategoria (
  idsubCategoria INT NOT NULL AUTO_INCREMENT,
  NombreSubCategoria VARCHAR(45) ,
  Categoria_idCategorias INT NOT NULL ,
  PRIMARY KEY (idsubCategoria),
  INDEX fk_subCategoria_Categoria1_idx (Categoria_idCategorias ASC) ,
  CONSTRAINT fk_subCategoria_Categoria1
    FOREIGN KEY (Categoria_idCategorias)
    REFERENCES categoria (idCategorias));
   
    -- Esta tabla tiene una llave foranea, proveniente de la tabla #1 --
    --
   
    --

 -- Tabla #3
CREATE TABLE rol (
    idRol INT NOT NULL AUTO_INCREMENT,
    nombreRol VARCHAR(45) ,
    PRIMARY KEY (idRol)
);
--

-- Tabla #4
CREATE TABLE tipodocumento (
    idtipoDocumento INT NOT NULL AUTO_INCREMENT,
    TipoDeDocumento VARCHAR(45) ,
    PRIMARY KEY (idtipoDocumento)
);
--

-- Tabla #5
CREATE TABLE  persona (
  idPersona INT NOT NULL AUTO_INCREMENT,
  Nombre1 VARCHAR(45) ,
  Nombre2 VARCHAR(45) ,
  Apellido1 VARCHAR(45) ,
  Apellido2 VARCHAR(45) ,
  fechaNacimiento DATE ,
  Telefono BIGINT UNIQUE,
  CorreoElectronico VARCHAR(45) UNIQUE,
  Contrasena VARCHAR (255) UNIQUE,
  DireccionResidencia VARCHAR(45) ,
  NumeroDocumentoIdentidad BIGINT UNIQUE,
  tipoDocumento_idtipoDocumento INT NOT NULL,
  Rol_idRol INT NOT NULL,
  PRIMARY KEY (idPersona, tipoDocumento_idtipoDocumento, Rol_idRol),
  INDEX fk_Persona_tipoDocumento1_idx (tipoDocumento_idtipoDocumento ASC),
  INDEX fk_Persona_Rol1_idx (Rol_idRol ASC),
  CONSTRAINT fk_Persona_Rol1
    FOREIGN KEY (Rol_idRol)
    REFERENCES rol (idRol),
  CONSTRAINT fk_Persona_tipoDocumento1
    FOREIGN KEY (tipoDocumento_idtipoDocumento)
    REFERENCES tipodocumento (idtipoDocumento));


    SET foreign_key_checks = 0;
   ALTER TABLE persona DROP FOREIGN KEY fk_Persona_tipoDocumento1;
   SET foreign_key_checks = 1;
    
    select * from persona;
   
-- Esta tabla tiene dos llaves foraneas, provenientes de las tablas #3 y #4 --
    --
   
   
-- Tabla #6
CREATE TABLE tipocontrato (
    idtipoContrato INT NOT NULL AUTO_INCREMENT,
    descripcionTipoContrato VARCHAR(45) ,
    PRIMARY KEY (idtipoContrato)
);
--

-- Tabla #7
CREATE TABLE  contrato (
  idContrato INT NOT NULL AUTO_INCREMENT,
  Salario DOUBLE NULL ,
  FechaInicioContrato DATE ,
  FechaFinalContrato DATE ,
  tipoContrato_idtipoContrato INT NOT NULL,
  Persona_idPersona INT NOT NULL,
  PRIMARY KEY (idContrato),
  INDEX fk_Contrato_tipoContrato1_idx (tipoContrato_idtipoContrato ASC) ,
  INDEX fk_contrato_Persona1_idx (Persona_idPersona ASC) ,
  CONSTRAINT fk_contrato_Persona1
    FOREIGN KEY (Persona_idPersona)
    REFERENCES persona (idPersona),
  CONSTRAINT fk_contrato_tipoContrato1
    FOREIGN KEY (tipoContrato_idtipoContrato)
    REFERENCES tipocontrato (idtipoContrato));
    
    SET foreign_key_checks = 0;
    ALTER TABLE contrato DROP FOREIGN KEY fk_contrato_Persona1;
   ALTER TABLE contrato ADD CONSTRAINT fk_contrato_Persona1 FOREIGN KEY (Persona_idPersona) REFERENCES persona (idPersona) ON DELETE CASCADE ;
   SET foreign_key_checks = 1;
   
-- Esta tabla tiene dos llaves foraneas, provenientes de las tablas #6 y #5 --
    --
   
-- Tabla #8
CREATE TABLE devolucion (
    idDevolucion INT NOT NULL AUTO_INCREMENT,
    DescripcionMotivoDevolucion VARCHAR(45) ,
    FechaDevolucion DATE ,
    PRIMARY KEY (idDevolucion)
);
--

-- Tabla #9
CREATE TABLE proveedor (
    idProveedor INT NOT NULL AUTO_INCREMENT,
    NombreEmpresa VARCHAR(45) ,
    PRIMARY KEY (idProveedor)
);
--

-- Tabla #10
CREATE TABLE  producto (
  idProducto INT NOT NULL AUTO_INCREMENT,
  nomProducto VARCHAR(45) ,
  precioProducto DOUBLE ,
  descripcionProducto VARCHAR (100),
  fechaVencimiento DATE ,
  cantidadExistente INT ,
  categoria_idCategorias INT NOT NULL ,
  PRIMARY KEY (idProducto),
  INDEX fk_Producto_Categoria1_idx (categoria_idCategorias ASC) ,
  CONSTRAINT fk_Producto_categorias1
    FOREIGN KEY (categoria_idCategorias)
    REFERENCES categoria (idCategorias));
    
   
-- Esta tabla tiene dos llaves foraneas, provenientes de las tablas #1 y #9 --
    --
   
    -- Table #11
    CREATE TABLE facturacompra (
    idFacturaCompra INT NOT NULL,
    observacionesCompra VARCHAR(45),
    fechaCompra DATE,
    proveedor_idProveedor INT NOT NULL,
    PRIMARY KEY (idFacturaCompra),
    INDEX fk_FacturaCompra_proveedor1_idx (proveedor_idProveedor ASC),
    CONSTRAINT fk_FacturaCompra_proveedor1
        FOREIGN KEY (proveedor_idProveedor)
        REFERENCES proveedor (idProveedor)
);

-- Esta tabla tiene una llave foranea, proveniente de la tabla #10 --
    --

-- Tabla #12
  CREATE TABLE  devoluciondetallada (
  Devolucion_idDevolucion INT NOT NULL,
  Proveedor_idProveedor INT NOT NULL,
  Producto_idProducto INT NOT NULL,
  CantidadDevolver INT ,
  PRIMARY KEY (Devolucion_idDevolucion, Proveedor_idProveedor),
  INDEX fk_Devolucion_has_Proveedor_Proveedor1_idx (Proveedor_idProveedor ASC) ,
  INDEX fk_Devolucion_has_Proveedor_Devolucion1_idx (Devolucion_idDevolucion ASC) ,
  INDEX fk_Devolucion_has_Proveedor_Producto_idx(Producto_idProducto ASC),
  CONSTRAINT fk_Devolucion_has_Proveedor_Devolucion1
    FOREIGN KEY (Devolucion_idDevolucion)
    REFERENCES devolucion (idDevolucion),
  CONSTRAINT fk_Devolucion_has_Proveedor_Proveedor1
    FOREIGN KEY (Proveedor_idProveedor)
    REFERENCES proveedor (idProveedor),
  CONSTRAINT fk_Devolucion_has_Proveedor_Producto1
    FOREIGN KEY (Producto_idProducto)
    REFERENCES producto (idProducto));
   
    -- Esta tabla es compuesta, proveniente de las tablas #8, #9 y #10 --
    --

-- Tabla #13
CREATE TABLE facturadetalle (
    FacturaCompra_idFacturaCompra INT NOT NULL,
    Producto_idProducto INT NOT NULL,
    CantidadProductos INT,
    PrecioCompra DOUBLE,
    nomProducto VARCHAR(45),
    descripcionProducto VARCHAR(100),
    fechaVencimiento DATE,
    categoria_idCategorias INT,
    PRIMARY KEY (FacturaCompra_idFacturaCompra, Producto_idProducto),
    INDEX fk_FacturaDetalle_FacturaCompra1_idx (FacturaCompra_idFacturaCompra ASC),
    INDEX fk_FacturaDetalle_Producto1_idx (Producto_idProducto ASC),
    CONSTRAINT fk_FacturaDetalle_FacturaCompra1
        FOREIGN KEY (FacturaCompra_idFacturaCompra)
        REFERENCES facturacompra (idFacturaCompra),
    CONSTRAINT fk_FacturaDetalle_Producto1
        FOREIGN KEY (Producto_idProducto)
        REFERENCES producto (idProducto),
    CONSTRAINT fk_FacturaDetalle_Categoria1
        FOREIGN KEY (categoria_idCategorias)
        REFERENCES categoria (idCategorias)
);


   
-- Esta tabla es compuesta, proveniente de las tablas #9 y #11 --
    --

-- Tabla #14
CREATE TABLE  gestionproducto (
  Persona_idPersona INT NOT NULL,
  Producto_idProducto INT NOT NULL,
  Estado ENUM('Añadido', 'Actualizado', 'Eliminado') ,
  PRIMARY KEY (Persona_idPersona, Producto_idProducto),
  INDEX fk_Persona_has_Producto_Producto1_idx (Producto_idProducto ASC) ,
  INDEX fk_Persona_has_Producto_Persona1_idx (Persona_idPersona ASC) ,
  CONSTRAINT fk_Persona_has_Producto_Persona1
    FOREIGN KEY (Persona_idPersona)
    REFERENCES persona (idPersona),
  CONSTRAINT fk_Persona_has_Producto_Producto1
    FOREIGN KEY (Producto_idProducto)
    REFERENCES producto (idProducto));
    
    SET foreign_key_checks = 0;
    ALTER TABLE gestionproducto DROP FOREIGN KEY fk_Persona_has_Producto_Persona1;
   ALTER TABLE gestionproducto ADD CONSTRAINT fk_Persona_has_Producto_Persona1 FOREIGN KEY (Persona_idPersona) REFERENCES persona (idPersona) ON DELETE CASCADE ;
   SET foreign_key_checks = 1;
   
-- Esta tabla es compuesta, proveniente de las tablas #10 y #5 --
    --
   
    -- Tabla #15
    CREATE TABLE tienda (
    idTienda INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50),
    direccion VARCHAR (65),
    PRIMARY KEY (idTienda));
    --
   
    -- Tabla #16
    CREATE TABLE ordenDeSalida (
    idordenDeSalida INT NOT NULL,
    fechaSalida DATETIME,
    tienda_idTienda INT NOT NULL,
    PRIMARY KEY (idordenDeSalida),
    INDEX fk__ordenDeSalida_tienda1_idx (tienda_idTienda ASC),
    CONSTRAINT fk_ordenDeSalida_tienda1
    FOREIGN KEY (tienda_idTienda)
    REFERENCES tienda (idTienda)
    );
   
-- Esta tabla tiene una llave foranea, proveniente de la tabla #15 --
    --
   
    -- Tabla #17
    CREATE TABLE ordenDeSalidaDetallada (
    Producto_idProducto INT NOT NULL,
    ordenDeSalida_idordenDeSalida INT NOT NULL,
    Cantidad INT,
    PRIMARY KEY (Producto_idProducto,ordenDeSalida_idordenDeSalida),
    INDEX fk_Producto_has_ordenDeSalida_producto1_idx (Producto_idProducto ASC),
    INDEX fk_Producto_has_ordenDeSalida_ordenDeSalida1_idx (ordenDeSalida_idordenDeSalida ASC),
    CONSTRAINT fk_Producto_has_ordenDeSalida_producto1
    FOREIGN KEY (Producto_idProducto)
    REFERENCES producto (idProducto),
    CONSTRAINT fk_Producto_has_ordenDeSalida_ordenDeSalida1
    FOREIGN KEY (ordenDeSalida_idordenDeSalida)
    REFERENCES ordenDeSalida (idordenDeSalida));
   
-- Esta tabla es compuesta, proveniente de las tablas #5 y #16 --
    --
-- Cambiar el delimitador temporalmente
-- Cambiar el delimitador temporalmente
DELIMITER //

-- Crear el procedimiento almacenado actualizado
CREATE PROCEDURE InsertarFacturaDetalle(
    IN p_FacturaCompra_id INT,
    IN p_Producto_id INT,                
    IN p_Cantidad INT,                    
    IN p_Precio DOUBLE,                        
    IN p_nomProducto VARCHAR(45),              
    IN p_descripcionProducto VARCHAR(100),
    IN p_fechaVencimiento DATE,
    IN p_categoria_id INT                   
 )
BEGIN
    DECLARE v_cantidadExistente INT;           -- Declarar una variable para la cantidad existente

    -- Verificar la cantidad existente actual del producto
    SELECT cantidadExistente INTO v_cantidadExistente
    FROM producto
    WHERE idProducto = p_Producto_id;

    -- Insertar o actualizar el producto según exista o no
    IF v_cantidadExistente IS NULL THEN
        -- Insertar el producto si no existe
        INSERT INTO producto (idProducto, nomProducto, precioProducto, descripcionProducto, fechaVencimiento, cantidadExistente, categoria_idCategorias)
        VALUES (p_Producto_id, p_nomProducto, p_Precio, p_descripcionProducto, p_fechaVencimiento, p_Cantidad, p_categoria_id);
    ELSE
        -- Actualizar la cantidad existente del producto
        UPDATE producto
        SET cantidadExistente = v_cantidadExistente + p_Cantidad,
            fechaVencimiento = p_fechaVencimiento -- Actualizar también la fecha de vencimiento
        WHERE idProducto = p_Producto_id;
    END IF;

    -- Insertar en facturadetalle
    INSERT INTO facturadetalle (FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, fechaVencimiento, categoria_idCategorias)
    VALUES (p_FacturaCompra_id, p_Producto_id, p_Cantidad, p_Precio, p_nomProducto, p_descripcionProducto, p_fechaVencimiento, p_categoria_id);

END //

-- Restablecer el delimitador al punto y coma predeterminado
DELIMITER ;

DELIMITER //
CREATE PROCEDURE InsertarActualizarOrdenSalidaDetallada(
    IN in_Producto_idProducto INT,
    IN in_ordenDeSalida_idordenDeSalida INT,
    IN in_Cantidad INT
)
BEGIN
    DECLARE v_Existente INT;

    -- Check if the product exists in the order details
    SELECT COUNT(*) INTO v_Existente
    FROM ordenesalidadetallada
    WHERE Producto_idProducto = in_Producto_idProducto
    AND ordenDeSalida_idordenDeSalida = in_ordenDeSalida_idordenDeSalida;

    IF v_Existente > 0 THEN
        -- Update the order detail if it exists
        UPDATE ordenesalidadetallada
        SET Cantidad = in_Cantidad
        WHERE Producto_idProducto = in_Producto_idProducto
        AND ordenDeSalida_idordenDeSalida = in_ordenDeSalida_idordenDeSalida;
    ELSE
        -- Insert a new order detail if it does not exist
        INSERT INTO ordenesalidadetallada (Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad)
        VALUES (in_Producto_idProducto, in_ordenDeSalida_idordenDeSalida, in_Cantidad);
    END IF;

    -- If Cantidad is zero, delete the product from the table
    IF in_Cantidad = 0 THEN
        -- Delete dependent records in facturadetalle
        DELETE FROM facturadetalle
        WHERE Producto_idProducto = in_Producto_idProducto;

        -- Delete the product from the product table
        DELETE FROM producto
        WHERE idProducto = in_Producto_idProducto;
    END IF;
END //
DELIMITER ;














