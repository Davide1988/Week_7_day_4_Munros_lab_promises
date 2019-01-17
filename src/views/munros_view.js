


const MunrosView = function(space, data){
  this.space = space
  this.data = data

}

MunrosView.prototype.render = function () {
this.space.innerHTML = " "
 this.data.forEach((object) => {


     const h1 = document.createElement('h3')
     h1.textContent = object.name
     this.space.appendChild(h1)

     const list = document.createElement('ul')
     this.space.appendChild(list)

     const meaning = document.createElement('li')
     meaning.textContent = `Meaning : ${object.meaning}`

     const height = document.createElement('li')
     height.textContent = `Height : ${object.height}`

     list.appendChild(meaning)
     list.appendChild(height)

     const linkmap = document.createElement('a')
     const lat = object.latlng_lat
     const long = object.latlng_lng
     linkmap.href = `https://www.google.com/maps/@${lat},${long},12z?hl=en`
     linkmap.textContent = 'Look me up on Google Map'

     this.space.appendChild(linkmap)


     const br = document.createElement('br')
     this.space.appendChild(br)

     const linkWiki = document.createElement('a')
     linkWiki.href = `https://en.wikipedia.org/wiki/${object.name}`
     linkWiki.textContent = 'WikiMe'

     this.space.appendChild(linkWiki)

 })
};

module.exports = MunrosView;
