export class ContratoModel {

    constructor(
      public idContrato: string,
      public Salario: string,
      public FechaInicioContrato: string,
      public FechaFinalContrato: string,
      public tipoContrato_idtipoContrato: string,
      public Persona_idPersona: string
    ) { }
  
  }
  