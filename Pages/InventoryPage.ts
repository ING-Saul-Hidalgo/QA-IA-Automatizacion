import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly addBackpackButton: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}