import {mensajeAlerta,saludo} from './modulos/mensajeAlerta';
import Persona1 from './modulos/persona';

mensajeAlerta("Holi");
saludo();

const ser = new Persona1("Ser",31);
ser.info();