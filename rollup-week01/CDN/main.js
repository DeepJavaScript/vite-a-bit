const shop = document.querySelector('#shop')
const tooltip = document.querySelector('#tooltip')
const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'))
const directions = [
  'top-start',
  'top',
  'top-end',
  'left',
  'right',
  'bottom-start',
  'bottom',
  'bottom-end'
]
const popperInstance = Popper.createPopper(shop, tooltip, {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }
  ]
})

// toggle popper toolbox display
function togglePopper (event) {
  resetInputState(event.target)

  if (event.target.checked === true) {
    changePopperArrowDirections(event.target.dataset.index)
    tooltip.setAttribute('data-show', '')
  } else {
    tooltip.removeAttribute('data-show')
  }
}

// reset input checked value, because checkbox only has one
function resetInputState (target) {
  checkboxes.map((item) => {
    if (item !== target) item.checked = false
  })
}

// change popper arrow direction by popper api
function changePopperArrowDirections (index) {
  popperInstance.setOptions({ placement: directions[index] })
}

checkboxes.map((checkbox) => checkbox.addEventListener('change', togglePopper))
