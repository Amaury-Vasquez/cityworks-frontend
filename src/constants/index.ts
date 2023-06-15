type statusValue = null | 'Aceptado' | 'En revisión' | 'Rechazado';

const nameProject = 'CityWorks';
const dates: Date = new Date();
const currently = dates.getDate(); /* Cambiar lineas 4, 5 y 7 del código por
los obtenidos del backend. */
const status: statusValue = null;
/* Aquellos objetos con el atributo status
se cambiarán su valor con respecto al backend*/
const operations = [
  // Main options.
  {
    ID: 0,
    name: 'Catalogo de conceptos',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Superintendente',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 1,
    name: 'Reportes',
    action: 'Visitar',
    isInteractive: true,
    entity: 'Superintendente',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 2,
    name: 'Próxima entrega',
    action: currently,
    isInteractive: false,
    entity: 'Superintendente',
    status: 'En revisión',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 3,
    name: 'Estimaciones',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Superintendente',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 4,
    name: 'Estado de la ultima estimación',
    action: status,
    isInteractive: false,
    status: 'En revisión',
    entity: 'Superintendente',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 0,
    name: 'Reportes',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Supervisor',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 1,
    name: 'Todos los documentos',
    action: 'Visitar',
    isInteractive: true,
    entity: 'Supervisor',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 2,
    name: 'Próxima entrega',
    action: currently,
    isInteractive: false,
    status: 'En revisión',
    entity: 'Supervisor',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 3,
    name: 'Incidencias',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Supervisor',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 4,
    name: 'Estimaciones',
    action: 'Validar',
    isInteractive: true,
    entity: 'Supervisor',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 5,
    name: 'Estatus de la ultima estimación',
    action: status,
    isInteractive: false,
    status: 'En revisión',
    entity: 'Supervisor',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 0,
    name: 'Estimaciones',
    action: 'Autorizar',
    isInteractive: true,
    entity: 'Residente',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 1,
    name: 'Avance',
    action: 'Visitar',
    isInteractive: true,
    entity: 'Residente',
    colorOption: 'colors2',
    section: 'main',
  },
  {
    ID: 2,
    name: 'Próxima entrega',
    action: currently,
    isInteractive: false,
    status: 'En revisión',
    entity: 'Residente',
    colorOption: 'colors1',
    section: 'main',
  },
  {
    ID: 3,
    name: 'Reporte global',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Residente',
    colorOption: 'colors2',
    section: 'main',
  },

  // Guess options.
  {
    ID: 0,
    name: 'Nueva estimación',
    action: 'Capturar',
    isInteractive: true,
    entity: 'Superintendente',
    colorOption: 'colors1',
    section: 'guess',
  },
  {
    ID: 1,
    name: 'Visualizar estimaciones',
    action: 'Visitar',
    isInteractive: true,
    entity: 'Superintendente',
    colorOption: 'colors2',
    section: 'guess',
  },
  {
    ID: 2,
    name: 'Próxima entrega',
    action: currently,
    isInteractive: false,
    status: 'En revisión',
    entity: 'Residente',
    colorOption: 'colors1',
    section: 'guess',
  },
];

const columns = [
  {
    ID: 0,
    value: 'Clave',
    tableType: 'same', // ['concepts', 'guess']
  },
  {
    ID: 1,
    value: 'Descripción',
    tableType: 'same',
  },
  {
    ID: 2,
    value: 'Unidad',
    tableType: 'same',
  },
  {
    ID: 3,
    value: 'Cantidad',
    tableType: 'concepts', // ['concepts']
  },
  {
    ID: 4,
    value: 'P.U.',
    tableType: 'same',
  },
  {
    ID: 5,
    value: 'Importe',
    tableType: 'same',
  },
  {
    ID: 6,
    value: 'Periodo',
    tableType: 'concepts',
  },
  {
    ID: 7,
    value: 'Programado',
    tableType: 'guess', // ['guess']
  },
  {
    ID: 8,
    value: 'Acumulado',
    tableType: 'guess',
  },
  {
    ID: 9,
    value: 'Estimado',
    tableType: 'guess',
  },
  {
    ID: 10,
    value: 'Total',
    tableType: 'guess',
  },
  {
    ID: 11,
    value: 'Por ejecutar',
    tableType: 'guess',
  },
];

export { nameProject, operations, columns };
