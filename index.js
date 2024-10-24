// Define la función que se ejecutará al cargar la página
function redirectToIframe() {
  const codigo = 'ajfevhu39ha4';
  const urlfilemoon = 'https://filemoon.sx/e/' + codigo;

  fetch(urlfilemoon)
    .then(response => response.text())
    .then(contenido => {
      // Utiliza una expresión regular para buscar el src del iframe
      const regex = /<iframe[^>]+src="([^"]+)"/;
      const coincidencias = contenido.match(regex);
      
      if (coincidencias && coincidencias[1]) {
        const iframeSrc = coincidencias[1];
        
        // Redirige al usuario a la URL del iframe
        window.location.href = iframeSrc;
      } else {
        console.error('No se encontró el iframe en el contenido.');
      }
    })
    .catch(error => {
      console.error('Error al obtener el contenido:', error);
    });
}

// Llama a la función al cargar la página
window.onload = redirectToIframe;
