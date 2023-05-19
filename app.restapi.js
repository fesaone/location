document.getElementById("app").innerHTML = `
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fesaone/location@main/app.function.js"></script>
`;

var scriptElement = document.createElement('script');
scriptElement.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
document.head.appendChild(scriptElement);

var bodyScriptElement = document.createElement('script');
bodyScriptElement.src = 'https://cdn.jsdelivr.net/gh/fesaone/location@main/app.function.js';
document.body.appendChild(bodyScriptElement);
