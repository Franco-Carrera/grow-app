# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<!-- -------THE BEGINNING OF MY PROYECT---------------------- -->

# My work in React grow-app

## In the beginning

Para comenzar con mi aplicación, instale React a través del comando ya mencionado, `npm install create-react-app`, empezando por crear mi menú, como componente _NavBar_, mediante enlances [NavLink], que contengan el home con todos mis productos, las categorias y un [Link] para el componente _CartWidget_ (carrito) que me lleva a la ruta del componente _Cart_ (El de la compra de los productos).

## Esto fue posible mediante la importación del [BrowserRouter], el cual me permitió ponerle una ruta exacta a cada _componente_ que creé.

Luego, aprendí a usar el contador, creando el componente _Count_ para sumar o disminuir el stock de cada producto, por medio de props para obtener el valor.
Más adelante mejoraría este código por medio de un estado seteado en (1) sobre count y setCount, implementando dos funciones, una que sume hasta el stock disponible y otra que reste hasta llegar a uno.

## Uso de hooks

Al tener ya, mi menú y mi contador, proseguí creando en un archivo data.js, con los datos de cada producto usando un array de objetos, e importandolos en otro archivo llamado getlist.js, resueltos en la promesa insertada dentro de un useEffect
a través de un estado que contiene esta función con la lista de productos y cada nuevo agregado en el componente _ItemListContainer_,
la cual los filtra por items que tengan igual categoría
y en caso contrario entrega los que no tengan categoría.

#### Props === propiedades

Este recibe al componente _ItemList_, al que le inserto los products como prop, y le hago un map al componente _Item_, obteniendo cada item individual con su prop key que guarda el id + la prop itemData. Finalmente este Item recibe la prop itemData, para usarla como objeto con cada parte del producto.

Siguiendo la lógica, en este mismo Item, agregué un [Link] Button, para viajar por ruta al producto seleccionado por medio de un id único.
Así genero el _ItemDetailContainer_ con la misma lógica que ItemListContainer, solo que obteniendo ahora, cada producto por medio de un find que nos trae su id propio. Este mismo lo recibe _ItemDetail_ con la prop key, + la prop item con cada item, renderizandose así, cada producto con su detalle específico.

Para recorrer y envolver la app en un contexto determinado, envolví cada componente como children del componente _CartContextProvider_. Aquí generé un estado con los productos agregados y otro estado con la cantidad.

- un useEffect para obtener los productos totales seteando su estado actual de totales agregados + su cantidad.

Seteándolos en funciones:

- para agregar al carrito,
- para ver por id que productos ya fueron agregados,
- para eliminar productos por su id único,
- para limpiar todo el carrito,
- Para obtener el precio total

Al evolucionar la lógica a la función addItem le setié una variable para obtener el nuevo producto y a los productos agregados, sumarle la variable anterior. Una vez encontrados con métodos find y findIndex le actualizo su cantidad a estos mismos seteando el estado actual. (Para que actúe en el CartWidget y Cart)

## Renderizando en Count funciones del CartContext

Luego de realizarlo, fui al componente Count para traer el estado de addItem y en un boton integré esa función con el callback de las props item(producto) y count(cantidad).

## Renderizando quantity en CartWidget, desde el estado en CartContext

Además, establecí el estado de cartQuantity en el CartWidget para que muestre el número de productos agregado al lado del carrito.

## Renderizando en Cart funciones del CartContext

Así este mismo carrito, me llevó al Cart, en el cual traje todas las funciones explicadas del CartContext para mostrar cada producto agregado, remover de uno en uno, o vaciar todo.

## Slider

-Comencé realizando un SliderData con las cuatro imágenes que voy a usar en el carrusel (como array de objetos).

--Aquí cree un componente _Slider_(carrusel), que contiene los estados de las imágenes del carrusel y funciones para navegar entre ellas.

La primera: para pasar a la próxima diapositiva, que me determina si la longitud de la imagen esta en la posición -1, se queda en 0, sino se le suma uno y pasa a la próxima imágen.

la segunda: para volver a la diapositiva anterior, me determina si la imagen esta en la posición 0, la longitud pasa a ser -1 volviendo a la imagen anterior,
sino la imagen esta en la posicion -1 y se queda en 0

---Entonces ahora renderizo estas funciones de next y prevSlide sumado al SliderData con un map de cada slide, comprobando que la posición, pasada con la prop key, sea igual a la imagen.

## Button onClickHandler

Creo un componente _Button_ que recibe las props `label y ClickHandler` para hacerlo funcional y pasarle estas mismas props luego como Button de agregar y vaciar el carrito

# <-----------Uso de firebase y userContext------------->

Por último, para mantener una base de datos sólida de cada producto, con cada categoría específica, integré firebase a mi proyecto, abstrayendo su lógica en un archivo firebase.js con la configuración personal de mi proyecto

Aquí utilicé las mismas funciones que en el itemListContainer, para traer o no por categoría e id, a través de [getProducts()], [getCategories()] en el useEffect del NavBar para encontrar cada category por separado, [getProductById()], para encontrar el detalle de cada producto y por último [createOrder()] para captar la compra específica de un producto, actualizar vacíando el Cart, con la renovación del stock que se compró.

# <-----------------User--------------->

Aquí decidí envolver mi App ahora con un estado de user, pasado por props al Cart en App.js, asignando en la orden de compra, a este user, que se registra por medio del componente _Login_, dándole la bienvenida con una notificación si se registra y despedida de la misma manera si se desloguea. Al comprar también se le envía una notificación, si realizó la compra con éxito

# <-------------------------------->

# <------------------ Librerías instaladas ------------------>

### 1) Fortawesome

---Para usar los íconos del CartWidget, el footer y las flechas del Carrusel instalé la librería @fortawesome

Comando completo de instalación: npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons

Página oficial de los paquetes a instalar: https://www.npmjs.com/package/@fortawesome/react-fontawesome

Página oficial de Font-Awesome (Donde puedes buscar los iconos que deseas agregar): https://fontawesome.com/icons?d=gallery

### 2) animate.css

-- Para animar las cards de mis productos, agregándole un efecto de fadeInUp.

Comando completo de instalación: npm i animate.css

Pagina oficial con los efectos a instalar: https://animate.style/

# <------------------------------------------------------------->

<!-- ---------------------------- -->
<!--Invitación a comentar cualquier sugerencia es bienvenida------------ -->

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
