# vanilla_js20_joke-teller
Infinity Scroll project from "JS 20 projects course"

Live-project: https://jlaguilargomez.github.io/vanilla_js20_joke-teller/

# Joke teller

### ¿De qué va esto?

Creamos una sencilla animación con un botón conectado a una API que reproduce bromas, de viva voz, al pulsarlo

### Ojo al detalle ...

- Uso de Fetch para petición
- Evento en AUDIO para chequear cuando ha terminado de reproducir

### GitHub

[jlaguilargomez/vanilla_js20_joke-teller](https://github.com/jlaguilargomez/vanilla_js20_joke-teller)

## Project

Utilizamos la API de Voice-Speech para devolver un audio con el texto mandado.

[Voice RSS - Text-to-speech (TTS) API documentation](http://www.voicerss.org/api/)

Vamos a usar `fetch()`para pedir los chistes a la siguiente API y procesarlos:

[JokeAPI](https://sv443.net/jokeapi/v2/)

Creamos una función tipo **ASYNC-AWAIT** con **TRY-CATCH**  ( **¡¡ obligatorio!!** )

```jsx
async function getJokes() {
  const apiUrl = 'http://api.icndb.com/jokes/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    
  } catch (error) {
    console.log('La has cagado... '+error)
  }
}

getJokes();
```

Tenemos un **EVENTO** que se encarga de chequear cuándo el audio se ha dejado de reproducir, y se lanza en ese momento:

```jsx
audioElement.addEventListener('ended', toggleButton)
```

## Para nota ...

No queremos exponer nuesta API Key de manera pública...

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1324d902-9bed-4dcc-84b9-6c2db3afcd51/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1324d902-9bed-4dcc-84b9-6c2db3afcd51/Untitled.png)

¿Cómo lo hacemos?

**Tendríamos que crear un Servidor y lanzar la petición con el código de la KEY, en este, así no estaría expuesto en nuestro FRONT**
