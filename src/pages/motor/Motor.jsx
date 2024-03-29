import { Categorias } from "../../components/categorias/Categorias"

export const Motor = () => {

  const categories = {
    type: 'Motor',
    sections: [
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/12094.png', title: 'Aceites de motor'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10589.png', title: 'Cárter de aceite'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10578.png', title: 'Sensor de presión de aceite'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10504.png', title: 'Correa distribución'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/15053.png', title: 'Piñón arbol de levas'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10854.png', title: 'Sistema eléctrico del motor'},
      {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10148.png', title: 'Sonda lambda'},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
    ]
  }
  
  return(
    <Categorias categories={categories.sections}/>
  )
}