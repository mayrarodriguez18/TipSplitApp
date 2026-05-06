# Welcome to your Expo app 👋
Tip & Split App 
Esta es una aplicación universal desarrollada con Expo y React Native diseñada para simplificar el cálculo de cuentas en grupo. Es una herramienta de utilidad financiera que permite calcular propinas y dividir gastos de forma instantánea.

Funciones Principales
Cálculo de Cuenta (Bill): Interfaz con teclado numérico personalizado para ingresar el monto total.

Gestión de Propinas (Tip): Selección rápida de porcentajes predeterminados (10%, 15%, 20%).

División de Gastos (Split): Contador dinámico para repartir el total entre varias personas.

Resultados en Tiempo Real: Visualización detallada del total por persona, monto de propina y total general.

Diseño Moderno: Interfaz optimizada en modo oscuro (Dark Mode) con colores de alta visibilidad.

Estructura del Proyecto
Este proyecto sigue una arquitectura modular de Ingeniería de Software:

app/index.tsx: Pantalla principal y UI de la calculadora.

app/hooks/useTipCalculator.ts: Lógica de negocio separada (Custom Hook) para cálculos matemáticos.

app/components/CalculatorButton.tsx: Componente reutilizable para el teclado numérico.

constants/: Definición de paleta de colores y estilos globales.











This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
