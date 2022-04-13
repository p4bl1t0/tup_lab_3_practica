import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;

// ### Tarea 4 - Reutilización de componentes

// * Refactorizar las propiedades `pageTitle` y `pageBody` de `Title` y `Body` respectivamente para que llamen `title` y `body`
// * Crear un componente `BlogPost` que renderice los componentes `Title` y `Body` pasando como paramétros `title` y `body` los datos de una noticia del diario seleccionada a la azar. Colocar `BlogPost` dentro de `Main` a continuación del `Body`
// * Realizar lo necesario para que el título de la página situado en `Header` se vea en mayúsculas mientras que el título del `BlogPost` se vea normal.
// * Realizar lo necesario para que el body de la página situado en `Main` se vea en mayúsculas en italics  mientras que el body del `BlogPost` se vea normal.
// BONUS: Utilizar CSS para agregar alguna diferenciación extra
