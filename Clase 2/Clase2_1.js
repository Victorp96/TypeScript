function calcularSueldo(x) {
    if (x.edad > 18)
        return 100;
    else
        return x.edad * 5;
}
var p = {
    nombre: "Victor Perez",
    edad: 22,
    sexo: "Masculino"
};
console.log("El valor del sueldo es ", calcularSueldo(p));
p.edad = 15;
console.log("El valor del sueldo es ", calcularSueldo(p));
