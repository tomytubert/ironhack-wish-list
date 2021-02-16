# Wish List

Crea una **wish list** para practicar manejo de estado en React.

La **App** debe permitir al usuario:

- Completar un formulario con el deseo
- Visualizar la lista de deseos
- Eliminar el deseo de la lista

## Componentes

La **App** debe contener los siguientes componentes:

````
- App
    - Props: {
        children: [
            *List*,
            *Form*,
        ]
    }
- List
    - Props: {
        wishes: [{}],
        children: [
            *ListItem*
        ]
    }
- ListItem
    - Props: {
        whish: string,
        onRemove: callback
    }
- Form
    - Props: {
        onSubmit: callback
        children: [
            input,
            *button*
        ]
    }
- Button
    - Props: {
        onSubmit: callback
    }
````

### Folder structure

````
-   public
    |-index.html
-   src
    |- components
    |   |-List
    |   |   |-List.js
    |   |   |-List.css
    |   |
    |   |-ListItem
    |   |   |-ListItem.js
    |   |   |-List.css
    |   |    
    |   |-Form
    |   |   |-Form.js
    |   |   |-Form.css
    |   |
    |   |-Button
    |       |-Button.js
    |       |-Button.css
    |
    |
    |-App.js
    |-App.css
    |-index.js

````

#### Tips

- La informacion entre componentes se comparte a traves de sus props.
- La informacion por props viaja unicamente de padre a hijo, no puede pasar de hermano a hermano.
- Si yo quiero enviar informacion de un hijo a un padre, el padre pasa al hijo por props un callback y el hijo la ejecuta para enviarle la informacion al padre.
