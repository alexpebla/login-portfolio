// importamos la librería
import preprocess from 'svelte-preprocess';

/* ... */

// ... y añadimos el "preprocess" como un plugin:
export default {
  /* ... */
  plugins: [
    svelte({
      /* ... */
      preprocess: preprocess()
    })
]}

  /* ... */
