import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Registro extends StatefulWidget {
  @override
  _RegistroState createState() => _RegistroState();
}

class _RegistroState extends State<Registro> {
  final TextEditingController _nombre1Controller = TextEditingController();
  final TextEditingController _nombre2Controller = TextEditingController();
  final TextEditingController _apellido1Controller = TextEditingController();
  final TextEditingController _apellido2Controller = TextEditingController();
  final TextEditingController _fechaNacimientoController = TextEditingController();
  final TextEditingController _telefonoController = TextEditingController();
  final TextEditingController _correoElectronicoController = TextEditingController();
  final TextEditingController _contrasenaController = TextEditingController();
  final TextEditingController _direccionResidenciaController = TextEditingController();
  final TextEditingController _numeroDocumentoIdentidadController = TextEditingController();
  final TextEditingController _tipoDocumentoIdController = TextEditingController();
  final TextEditingController _rolIdController = TextEditingController();

  Future<void> _registro() async {
    final String nombre1 = _nombre1Controller.text;
    final String nombre2 = _nombre2Controller.text;
    final String apellido1 = _apellido1Controller.text;
    final String apellido2 = _apellido2Controller.text;
    final String fechaNacimiento = _fechaNacimientoController.text;
    final String telefono = _telefonoController.text;
    final String correoElectronico = _correoElectronicoController.text;
    final String contrasena = _contrasenaController.text;
    final String direccionResidencia = _direccionResidenciaController.text;
    final String numeroDocumentoIdentidad = _numeroDocumentoIdentidadController.text;
    final String tipoDocumentoId = _tipoDocumentoIdController.text;
    final String rolId = _rolIdController.text;

    final response = await http.post(
      Uri.parse('http://192.168.2.8:4004/personaAG'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'Nombre1': nombre1,
        'Nombre2': nombre2,
        'Apellido1': apellido1,
        'Apellido2': apellido2,
        'fechaNacimiento': fechaNacimiento,
        'Telefono': telefono,
        'CorreoElectronico': correoElectronico,
        'Contrasena': contrasena,
        'DireccionResidencia': direccionResidencia,
        'NumeroDocumentoIdentidad': numeroDocumentoIdentidad,
        'tipoDocumento_idtipoDocumento': tipoDocumentoId,
        'Rol_idRol': rolId,
      }),
    );

    if (response.statusCode == 201) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Registro exitoso'),
            content: Text('¡Usuario registrado correctamente!'),
            actions: <Widget>[
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('Aceptar'),
              ),
            ],
          );
        },
      );
    } else {
      final Map<String, dynamic> responseData = json.decode(response.body);
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Error de registro'),
            content: Text(responseData['error']),
            actions: <Widget>[
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('Aceptar'),
              ),
            ],
          );
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Registro de Usuario'),
      ),
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/imagenes/fondo.jpeg'),
            fit: BoxFit.cover,
          ),
        ),
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                SizedBox(height: 40.0),
                TextField(
                  controller: _nombre1Controller,
                  decoration: InputDecoration(
                    labelText: 'Nombre 1',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _nombre2Controller,
                  decoration: InputDecoration(
                    labelText: 'Nombre 2',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _apellido1Controller,
                  decoration: InputDecoration(
                    labelText: 'Apellido 1',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _apellido2Controller,
                  decoration: InputDecoration(
                    labelText: 'Apellido 2',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _fechaNacimientoController,
                  decoration: InputDecoration(
                    labelText: 'Fecha de Nacimiento',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _telefonoController,
                  decoration: InputDecoration(
                    labelText: 'Teléfono',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _correoElectronicoController,
                  decoration: InputDecoration(
                    labelText: 'Correo Electrónico',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _contrasenaController,
                  decoration: InputDecoration(
                    labelText: 'Contraseña',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                  obscureText: true,
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _direccionResidenciaController,
                  decoration: InputDecoration(
                    labelText: 'Dirección de Residencia',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _numeroDocumentoIdentidadController,
                  decoration: InputDecoration(
                    labelText: 'Número de Documento de Identidad',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _tipoDocumentoIdController,
                  decoration: InputDecoration(
                    labelText: 'ID Tipo de Documento',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 10.0),
                TextField(
                  controller: _rolIdController,
                  decoration: InputDecoration(
                    labelText: 'ID Rol',
                    filled: true,
                    fillColor: Colors.lightBlue[50],
                  ),
                ),
                SizedBox(height: 20.0),
                ElevatedButton(
                  onPressed: _registro,
                  child: Text('Registrar'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
