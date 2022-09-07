import HamburgerMenu from '../support/pageObjects/HamburgerMenu'
import StoreSwitcher from '../support/pageObjects/StoreSwitcher'

describe('Homepage', () => {
  /** @type {HamburgerMenu} */
  let hamburgerMenu

  /** @type {StoreSwitcher} */
  let storeSwitcher

  beforeEach(() => {
    hamburgerMenu = new HamburgerMenu()
    storeSwitcher = new StoreSwitcher()

    cy.viewport('iphone-x')
    cy.visit('/')
  })

  it('opens and closes hamburger menu', () => {
    hamburgerMenu.open()
    hamburgerMenu.close()
  })

  it('switches stores', () => {
    storeSwitcher.selectDifferentStoreOnMobile()
  })
})
