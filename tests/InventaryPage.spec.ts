// tests/inventory.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

test('Agregar un producto al carrito desde el inventario', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // 1. Iniciar sesión previamente para acceder al catálogo
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Validar que el título de la página sea "Products"
  await expect(inventoryPage.pageTitle).toHaveText('Products');

  // 3. Agregar el primer producto (mochila) al carrito
  await inventoryPage.addBackpackToCart();

  // 4. Validar que el contador del icono del carrito cambió a "1"
  await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
});