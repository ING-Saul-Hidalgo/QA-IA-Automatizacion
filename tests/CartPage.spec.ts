// tests/cart.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';

test('Verificar que el producto agregado se visualice correctamente en la página del carrito', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // 1. Iniciar sesión y autenticarse en la plataforma
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Seleccionar el producto y navegar hacia el carrito de compras
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  // 3. Validar que nos encontramos en la sección del carrito ("Your Cart")
  await expect(cartPage.pageTitle).toHaveText('Your Cart');

  // 4. Validar que el nombre del producto dentro del carrito coincida con el agregado
  await expect(cartPage.cartItemName).toHaveText('Sauce Labs Backpack');
});