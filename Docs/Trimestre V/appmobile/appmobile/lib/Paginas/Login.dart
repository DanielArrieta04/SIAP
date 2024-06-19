import 'package:flutter/material.dart';
import 'Registro.dart';
import 'Principal.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  Future<void> _login() async {
    final String username = _usernameController.text;
    final String password = _passwordController.text;

    final response = await http.post(
      Uri.parse('http://192.168.2.8:4004/login'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'correoElectronico': username,
        'contrasena': password,
      }),
    );

    if (response.statusCode == 200) {
      // Si la solicitud fue exitosa, redirigir a la página principal
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => Menu()),
      );
    } else {
      // Si la solicitud no fue exitosa, mostrar un mensaje de error
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Error de inicio de sesión'),
            content: Text('Correo electrónico o contraseña incorrectos.'),
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

  void _Registro() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => Registro()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Inicio de Sesión'),
      ),
      body: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage('assets/imagenes/fondo.jpeg'),
              fit: BoxFit.cover,
            ),
          ),
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.all(18.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset(
                        'assets/imagenes/imagilogo.png',
                        height: 150.0,
                        fit: BoxFit.cover,
                      ),
                      SizedBox(height: 2.0),
                      Text(
                        'Inicio Sesión',
                        style: TextStyle(fontSize: 27.0, color: Colors.white),
                      ),
                    ],
                  ),
                  TextField(
                    controller: _usernameController,
                    decoration: InputDecoration(
                      labelText: 'Correo Electrónico',
                      filled: true,
                      fillColor: Colors.lightBlue[50],
                      contentPadding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0),
                    ),
                  ),
                  SizedBox(height: 10.0),
                  TextField(
                    controller: _passwordController,
                    decoration: InputDecoration(
                      labelText: 'Contraseña',
                      filled: true,
                      fillColor: Colors.lightBlue[50],
                      contentPadding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0),
                    ),
                    obscureText: true,
                  ),
                  SizedBox(height: 15.0),
                  ElevatedButton(
                    onPressed: _login,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue[800],
                    ),
                    child: Text(
                      'Iniciar Sesión',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  SizedBox(height: 10.0),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        '¿No tienes cuenta? ',
                        style: TextStyle(color: Colors.black),
                      ),
                      TextButton(
                        onPressed: _Registro,
                        child: Text(
                          'Regístrate',
                          style: TextStyle(color: Colors.blue, decoration: TextDecoration.underline),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
