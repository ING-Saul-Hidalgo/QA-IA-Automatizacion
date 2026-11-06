// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Inicio de sesión exitoso con credenciales válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navegar a la página de inicio de sesión de SauceDemo
  await loginPage.goto();

  // 2. Ingresar credenciales válidas y hacer clic en el botón de login
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Validar que la URL cambió correctamente a la página de inventario
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});