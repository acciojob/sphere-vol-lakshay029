function volume_sphere() {
    const radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        volumeField.value = "";
        return false;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);

    return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
