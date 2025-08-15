# copilotInstructions

Este archivo es para registrar configuraciones, reglas y buenas prácticas del proyecto.

## Reglas y configuraciones

- Agrega aquí cualquier instrucción especial para el equipo o para la configuración del proyecto.
- Ejemplo: "Usar siempre npm start para levantar el proyecto."
- Ejemplo: "No modificar archivos en la carpeta /dist."

---
Agrega nuevas reglas o configuraciones debajo de esta línea según sea necesario.

## Reglas básicas para proyectos Angular + Java Spring Boot

- Mantener el frontend (Angular) y backend (Spring Boot) en repositorios o carpetas separadas.
- Usar `npm start` para levantar Angular y `./mvnw spring-boot:run` para levantar el backend.
- Configurar CORS en el backend para permitir peticiones desde el frontend.
- No subir archivos `node_modules`, `dist`, `.idea`, `.vscode`, `target` ni `out` al repositorio (agregar al `.gitignore`).
- Usar variables de entorno o archivos de configuración para URLs y credenciales.
- Documentar endpoints REST en el backend y rutas principales en el frontend.
- Mantener actualizado el README con instrucciones de instalación y ejecución para ambos entornos.
- Hacer pruebas unitarias en Angular (`ng test`) y en Spring Boot (`./mvnw test`).
