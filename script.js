 function mostrarCreditos() {
            alert("Vega Castellanos Segarra\n2ªB");
          }

          function ocultarDiv() {
            document.getElementById("bloque1").style.display = "none";
          }

          function mostrarDiv() {
            document.getElementById("bloque1").style.display = "";
          }

          function cambiarColor() {
            document.getElementById("bloque1").style.backgroundColor = "blue";
          }

          function date() {
            alert("05/02/2024");
          }

          function cambiaColor() {
            document.getElementById("bloque2").style.backgroundColor = "magenta";
          }

          function volverColor() {
            document.getElementById("bloque2").style.backgroundColor = "silver";
          }
function mostrarUbicacion() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (posicion) {
                var latitud = posicion.coords.latitude;
                var longitud = posicion.coords.longitude;

                // Mostrar latitud y longitud
                var ubicacionElement = document.getElementById('ubicacionActual');
                ubicacionElement.innerHTML = "Tu ubicación actual - Latitud: " + latitud + ", Longitud: " + longitud;

                // Inicializar el mapa con Leaflet
                var map = L.map('map').setView([latitud, longitud], 13);

                // Añadir un marcador al mapa en la ubicación actual
                L.marker([latitud, longitud]).addTo(map)
                    .bindPopup('Ubicación actual')
                    .openPopup();

                // Añadir capa de mapas base (puedes cambiar 'mapbox.streets' por otros estilos)
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);
            }, handleError);
        } else {
            alert("Geolocalización no es compatible con este navegador.");
        }
    }

    function handleError(error) {
        alert("Error al obtener la ubicación: " + error.message);
    }
