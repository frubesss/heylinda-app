const { reloadApp } = require('detox-expo-helpers')

describe('e2e', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await reloadApp()
  })

  it('should show title', async () => {
    await expect(element(by.text('Home'))).toBeVisible()
  })
})
