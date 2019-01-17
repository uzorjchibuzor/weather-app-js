

const elementFactory = (tag, className = null, id = null) => {
  let element = document.createElement(tag)

  element.className = className
  element.id = id

  return element;

}

export default elementFactory;