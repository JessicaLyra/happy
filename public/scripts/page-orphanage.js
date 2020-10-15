const options = {
	dragging:false,
	touchZoom:false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}
//create map
const map = L.map('mapid',options).setView([-23.7127634,-46.5678092], 16);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon 
const icon = L.icon({
	iconUrl:"./public/images/map-marker.svg",
	iconSize: [58,68],
	iconAnchor: [29,68],
	popupAnchor:[170,2]
})


//create and add marker
L.marker([-23.7127634,-46.5678092], {icon})
.addTo(map)

/*image gallery */
function selectImage(event) {
	const button = event.currentTarget

	//remover todas as classes .active
	const buttons - document.querySelectorAll(".images button")
	//selecionar a imagem clicada
	//atualziar o container de imagem
	//adicionar de volta a classe .acitve para o botão q foi clicado
}