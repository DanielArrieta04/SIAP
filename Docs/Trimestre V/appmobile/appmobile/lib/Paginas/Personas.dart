import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class Personas extends StatefulWidget {
  @override
  _PersonasState createState() => _PersonasState();
}

class _PersonasState extends State<Personas> {
  List<dynamic> personas = [];
  Map<int, String> tiposDocumento = {
    1: 'CC',
    2: 'CE',
    3: 'TI',
    4: 'PAS',
    5: 'NUIP',
    6: 'NIT',
    7: 'RC',
  };
  Map<int, String> roles = {
    1: 'Administrador',
    2: 'Administrador-Bodega',
    3: 'Proveedor',
  };

  @override
  void initState() {
    super.initState();
    obtenerPersonas();
  }

  Future<void> obtenerPersonas() async {
    final response = await http.get(Uri.parse('http://192.168.2.8:4004/personas'));
    if (response.statusCode == 200) {
      final responseData = json.decode(response.body);
      setState(() {
        personas = responseData['personas'];
      });
    } else {
      throw Exception('Error al obtener las personas desde el servidor');
    }
  }

  Future<void> eliminarPersona(int index) async {
    final response = await http.delete(Uri.parse('http://192.168.2.8:4004/personaEl/${personas[index]['idPersona']}'));
    if (response.statusCode == 201) {
      setState(() {
        personas.removeAt(index);
      });
    } else {
      throw Exception('Error al eliminar la persona desde el servidor');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista de Personas'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            ListView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemCount: personas.length,
              itemBuilder: (context, index) {
                return Card(
                  child: ListTile(
                    title: Text(
                      ' ${personas[index]['idPersona']}.${personas[index]['Nombre1']} ${personas[index]['Nombre2']} ${personas[index]['Apellido1']} ${personas[index]['Apellido2']} \n${roles[personas[index]['Rol_idRol']]}',
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12.0),
                    ),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Email: ${personas[index]['CorreoElectronico']}', style: TextStyle(fontSize: 12.0)),
                        Text('Tel: ${personas[index]['Telefono']}', style: TextStyle(fontSize: 12.0)),
                        Text('Dir: ${personas[index]['DireccionResidencia']}', style: TextStyle(fontSize: 12.0)),
                        Text('${tiposDocumento[personas[index]['tipoDocumento_idtipoDocumento']]}:${personas[index]['NumeroDocumentoIdentidad']}', style: TextStyle(fontSize: 12.0)),
                      ],
                    ),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: Icon(Icons.edit),
                          color: Colors.amber, // Color amarillo
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => EditarPersona(persona: personas[index])),
                            ).then((value) {
                              obtenerPersonas(); // Actualiza la lista después de editar
                            });
                          },
                        ),
                        IconButton(
                          icon: Icon(Icons.delete),
                          color: Colors.red, // Color rojo
                          onPressed: () {
                            showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                return AlertDialog(
                                  title: Text('Eliminar Persona'),
                                  content: Text('¿Estás seguro de que quieres eliminar a esta persona?'),
                                  actions: [
                                    TextButton(
                                      onPressed: () {
                                        Navigator.of(context).pop();
                                      },
                                      child: Text('Cancelar'),
                                    ),
                                    TextButton(
                                      onPressed: () {
                                        eliminarPersona(index);
                                        Navigator.of(context).pop();
                                      },
                                      child: Text('Eliminar'),
                                    ),
                                  ],
                                );
                              },
                            );
                          },
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
            SizedBox(height: 16), // Espacio entre el ListView y el final de la Column
          ],
        ),
      ),
    );
  }
}

class EditarPersona extends StatefulWidget {
  final Map<String, dynamic> persona;

  EditarPersona({required this.persona});

  @override
  _EditarPersonaState createState() => _EditarPersonaState();
}

class _EditarPersonaState extends State<EditarPersona> {
  TextEditingController nombre1Controller = TextEditingController();
  TextEditingController nombre2Controller = TextEditingController();
  TextEditingController apellido1Controller = TextEditingController();
  TextEditingController apellido2Controller = TextEditingController();
  TextEditingController fechaNacimientoController = TextEditingController();
  TextEditingController telefonoController = TextEditingController();
  TextEditingController correoController = TextEditingController();
  TextEditingController contrasenaController = TextEditingController();
  TextEditingController direccionController = TextEditingController();
  TextEditingController numeroDocumentoController = TextEditingController();
  TextEditingController tipoDocumentoController = TextEditingController();
  TextEditingController rolController = TextEditingController();

  // Método para mostrar un SnackBar
  void _mostrarSnackBar(String message) {
    final snackBar = SnackBar(content: Text(message));
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
  }

  @override
  void initState() {
    super.initState();
    nombre1Controller.text = widget.persona['Nombre1'];
    nombre2Controller.text = widget.persona['Nombre2'] ?? '';
    apellido1Controller.text = widget.persona['Apellido1'];
    apellido2Controller.text = widget.persona['Apellido2'] ?? '';
    fechaNacimientoController.text = widget.persona['fechaNacimiento'] ?? '';
    telefonoController.text = widget.persona['Telefono'].toString();
    correoController.text = widget.persona['CorreoElectronico'];
    contrasenaController.text = widget.persona['Contrasena'];
    direccionController.text = widget.persona['DireccionResidencia'] ?? '';
    numeroDocumentoController.text =
        widget.persona['NumeroDocumentoIdentidad'].toString();
    tipoDocumentoController.text =
        widget.persona['tipoDocumento_idtipoDocumento'].toString();
    rolController.text = widget.persona['Rol_idRol'].toString();
  }

  @override
  void dispose() {
    nombre1Controller.dispose();
    nombre2Controller.dispose();
    apellido1Controller.dispose();
    apellido2Controller.dispose();
    fechaNacimientoController.dispose();
    telefonoController.dispose();
    correoController.dispose();
    contrasenaController.dispose();
    direccionController.dispose();
    numeroDocumentoController.dispose();
    tipoDocumentoController.dispose();
    rolController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Editar Persona'),
      ),
      body: SingleChildScrollView(
        child: ConstrainedBox(
          constraints: BoxConstraints(
            minHeight: MediaQuery
                .of(context)
                .size
                .height,
          ),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                TextField(
                  controller: nombre1Controller,
                  decoration: InputDecoration(labelText: 'Nombre 1'),
                ),
                TextField(
                  controller: nombre2Controller,
                  decoration: InputDecoration(labelText: 'Nombre 2'),
                ),
                TextField(
                  controller: apellido1Controller,
                  decoration: InputDecoration(labelText: 'Apellido 1'),
                ),
                TextField(
                  controller: apellido2Controller,
                  decoration: InputDecoration(labelText: 'Apellido 2'),
                ),
                TextField(
                  controller: fechaNacimientoController,
                  decoration: InputDecoration(labelText: 'Fecha de Nacimiento'),
                ),
                TextField(
                  controller: telefonoController,
                  decoration: InputDecoration(labelText: 'Teléfono'),
                ),
                TextField(
                  controller: correoController,
                  decoration: InputDecoration(labelText: 'Correo Electrónico'),
                ),
                TextField(
                  controller: contrasenaController,
                  decoration: InputDecoration(labelText: 'Contraseña'),
                ),
                TextField(
                  controller: direccionController,
                  decoration: InputDecoration(
                      labelText: 'Dirección de Residencia'),
                ),
                TextField(
                  controller: numeroDocumentoController,
                  decoration: InputDecoration(
                      labelText: 'Número de Documento de Identidad'),
                ),
                TextField(
                  controller: tipoDocumentoController,
                  decoration: InputDecoration(labelText: 'ID Tipo Documento'),
                ),
                TextField(
                  controller: rolController,
                  decoration: InputDecoration(labelText: 'ID Rol'),
                ),
                ElevatedButton(
                  onPressed: () async {
                    await actualizarPersona(); // Envía la solicitud para actualizar la persona
                    Navigator.pop(context); // Cierra el formulario

                  },
                  child: Container(
                    height: 40,
                    width: double.infinity,
                    child: Center(
                      child: Text('Actualizar'),
                    ),
                  ),
                ),

              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> actualizarPersona() async {
    final Map<String, dynamic> requestBody = {
      'Nombre1': nombre1Controller.text,
      'Nombre2': nombre2Controller.text,
      'Apellido1': apellido1Controller.text,
      'Apellido2': apellido2Controller.text,
      'fechaNacimiento': fechaNacimientoController.text,
      'Telefono': int.parse(telefonoController.text),
      'CorreoElectronico': correoController.text,
      'Contrasena': contrasenaController.text,
      'DireccionResidencia': direccionController.text,
      'NumeroDocumentoIdentidad': int.parse(numeroDocumentoController.text),
      'tipoDocumento_idtipoDocumento': int.parse(tipoDocumentoController.text),
      'Rol_idRol': int.parse(rolController.text),
    };

    final response = await http.put(
      Uri.parse('http://192.168.2.8:4004/personaAc/${widget.persona['idPersona']}'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(requestBody),
    );


    if (response.statusCode == 200) {
      _mostrarSnackBar('Persona actualizada correctamente');
    } else {
      throw Exception('Error al actualizar la persona: ${response.statusCode}');
    }
  }

}

void main() {
  runApp(MaterialApp(
    title: 'Lista de Personas',
    home: Personas(),
  ));
}
