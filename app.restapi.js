document.getElementById("app").innerHTML = `
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="src/script.js"></script>
`;

var scriptElement = document.createElement('script');
scriptElement.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
document.head.appendChild(scriptElement);

var bodyScriptElement = document.createElement('script');
bodyScriptElement.src = '/app.function.js';
document.body.appendChild(bodyScriptElement);
