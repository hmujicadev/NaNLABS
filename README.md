# NaNLABS | NaNLABS challenge :punch:

### Tabla de contenido :rocket:

- [Instalación](#instalación-wrench)
- [Librerías](#librerías-package)


### Instalación :wrench:

Recomiendo usar [yarn](https://yarnpkg.com/) a la hora de iniciar el proyecto por ser más rápido y seguro que sobre [npm](https://www.npmjs.com/), de igual forma siéntase libre de usar el que guste, para efectos de esta guía estaré usando *yarn*.

#### Scripts disponibles:

Antes de ejecutar cualquier script del proyecto es necesario *instalar las dependencias* del mismo:

bash
yarn install / npm install


##### Start

Con este script usamos `webpack-dev-server` pero con un bundle optimizado para producción, también cuenta con watchers activos.

bash
yarn start


##### Build

Este script usa webpack para crear un empaquetado del proyecto en la carpeta *build* listo para ser puesto en producción

bash
yarn build


##### Lint

Se usa para detectar errores de formato con [ESlint](https://eslint.org/).

bash
yarn lint


##### Lint:fix

Se usa para darle el formato correcto al proyecto.

bash
yarn lint:fix
### Librerías :package:

Librerías usadas en el proyecto:

- [React](https://es.reactjs.org/), librería de Javascript para la creación de interfaces de usuario. Se usó para crear los distintos componentes que requería la app.
- [React-hook-form](https://react-hook-form.com/), librería de React para la validación de formularios, en su página oficial muestran su rendimiento frente a otras populares como Formik o Redux-form.
- [Axios](https://github.com/axios/axios), cliente http para Javascript, empleado para hacer llamadas a servicios externos, ahorra mucho trabajo.
- [Tailwind](https://tailwindcss.com/), Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.

Como dependecias de desarrollo tenemos:

- [Webpack](https://webpack.js.org/), un empaquetador de módulos estáticos para aplicaciones de Javascript modernas, sirve para automatizar tareas, procesar, minificar y optimizar archivos quedando listos para producción.
- [Babel](https://babeljs.io/docs/en/), es un transpilador de Javascript moderno (ES10) a versiones con mayor compatibilidad (ES5).
- [ESlint](https://eslint.org/), herramienta de análisis de código estático, ayuda a escribir código consistente a lo largo del proyecto.
- [Prettier](https://prettier.io/), herramienta para formatear el código de forma automática.
