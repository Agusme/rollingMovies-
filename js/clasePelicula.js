export class Pelicula{
  constructor(
    codigo,
    nombre,
    destacada,
    srcImage,
    description,
    released,
    trailerLink
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.destacada = destacada;
    this.srcImage = srcImage;
    this.description = description;
    this.released = released;
    this.trailerLink = trailerLink;
  }

  get mostrarCodigo() {
    return this.codigo;
  }
  get mostrarNombre() {
    return this.nombre;
  }
  get mostrarDestacada() {
    return this.destacada;
  }
  get mostrarSrcImage() {
    return this.srcImage;
  }
  get mostrarDescription() {
    return this.description;
  }
  get mostrarReleased() {
    return this.released;
  }
  get mostrarTrailerLink() {
    return this.trailerLink;
  }
  set modificarCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarDestacada(nuevoDestacada) {
    this.destacada = nuevoDestacada;
  }
  set modificarSrcImage(nuevoSrcImage) {
    this.srcImage = nuevoSrcImage;
  }
  set modificarDescription(nuevaDescription) {
    this.description= nuevaDescription;
  }
  set modificarReleased(nuevaReleased) {
    this.released = nuevaReleased;
  }
  set modificarTrailerLink(nuevaTrailerLink) {
    this.trailerLink = nuevaTrailerLink;
  }
}
