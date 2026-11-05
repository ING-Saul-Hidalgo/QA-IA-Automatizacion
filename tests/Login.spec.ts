// tests/Login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Debe iniciar sesión exitosamente con credenciales válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navegar a la página de SauceDemo
  await loginPage.goto();

  // 2. Ingresar usuario y contraseña estándar
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Verificar que la URL cambió a la página de inventario
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});