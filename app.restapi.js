var appElement = document.getElementById("app");

    var leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    appElement.appendChild(leafletScript);

    var appScript = document.createElement('script');
    appScript.src = 'https://cdn.jsdelivr.net/gh/fesaone/location@main/app.function.js';
    appElement.appendChild(appScript);
