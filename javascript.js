function DropdownMenuCreator (heading, ...contents) {
  const body = document.querySelector('body')
  // create container div
  const container = document.createElement('div')
  container.classList.add('.container')
  body.append(container)
  // create title div
  const title = document.createElement('div')
  title.classList.add('.title')
  title.textContent = heading
  container.append(title)
  // create dropdown
  const dropdown = document.createElement('ul')
  dropdown.classList.add('.dropdown')
  container.append(dropdown)
  // create list items
  contents.forEach((content) => {
    const item = document.createElement('li')
    item.textContent = content
    dropdown.append(item)
  })
  // initially hide contents
  dropdown.style.display = 'none'
  // display contents when clicked; hide contents when clicked again
  container.addEventListener('click', () => {
    // add or remove class with each click
    dropdown.classList.toggle('visible')
    const visible = document.querySelectorAll('.visible')
    if (visible.length > 0) {
      visible.forEach((element) => {
        element.style.display = 'block'
      })
    } else {
      dropdown.style.display = 'none'
    }
  })
}

DropdownMenuCreator('Animals', 'cat', 'dog', 'mouse')
