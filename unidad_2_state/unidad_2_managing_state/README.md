# Unidad 2 - Manejo de estados - Práctica


## Pre-requisitos

Instalar las dependencias del ejercicio:

```
npm install
```

Considerando el JSX brindado en `App.js` 


### Tarea 1
- Crear un state para el valor del `input1` definirle un valor inicial random (1 o 0).
- Permitir que el usuario pueda cambiarle el valor a `input1` definiendo 1 o 0. Si el usuario cargase otra cosa setear el valor 0.


### Tarea 2
- Capturar el valor del `checkbox` en un estado de React si el input está seleccionado guardar 1 sino guardar 0.
- Completar los valores posibles del `select` para elegir algunas de las compuertas lógicas (or, and, nand, nor y xor). Ver: https://en.wikipedia.org/wiki/Logic_gate


### Tarea 3
- Capturar el evento de cambio del contenido del `select` y mostrar el resultado de aplicar la puerta lógica seleccionada al valor del estado de `input1` y el de `checkboc` de  en el espacio reservado para tar fin
- Bonus: Refactorizar la selección y el cálculo de la compuerta lógica como un componente.