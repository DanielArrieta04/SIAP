import 'package:flutter/material.dart';
import 'Personas.dart';

class Menu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Menu'),
      ),
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/imagenes/fondo.jpeg'),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Wrap(
            alignment: WrapAlignment.center,
            spacing: 16.0,
            runSpacing: 16.0,
            children: [
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => Personas()),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.lightBlue,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.person),
                label: Text('Personas'),
              ),
              ElevatedButton.icon(
                onPressed: () {

                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.teal,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.loop),
                label: Text('Devoluciones'),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  // Agregar funcionalidad para Categorías
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.category),
                label: Text('Categorías'),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  // Agregar funcionalidad para Proveedores
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.greenAccent,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.people),
                label: Text('Proveedores'),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  // Agregar funcionalidad para Tienda
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amber,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.store),
                label: Text('Tienda'),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  // Agregar funcionalidad para Facturas
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.grey,
                  fixedSize: Size(160, 80),
                  elevation: 5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  shadowColor: Colors.black,
                ),
                icon: Icon(Icons.receipt),
                label: Text('Facturas'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
