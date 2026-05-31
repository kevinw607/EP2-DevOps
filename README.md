## Pipeline CI/CD - Ingeniería DevOps
Aqui se desarrollará la evaluacion parcial 2 de ingenieria DevOps. Este proyecto consiste en la automatización completa del ciclo de vida de un microservicio construido sobre una arquitectura basada en contenedores.

## Estructura de la Solución

El proyecto consta de las siguientes capas técnicas implementadas en la raíz del repositorio:
- Dockerfile: Configuración multi-stage optimizada utilizando "node:20-alpine" como imagen base para reducir la superficie de ataque y el peso del artefacto de software.
- docker-compose.yml: Este es el archivo de orquestación encargado de levantar el entorno simulado de producción, aislando los servicios en redes locales seguras y configurando políticas de tolerancia a fallos.
- .github/workflows/ci-cd.yml: Es el flujo de trabajo nativo de GitHub Actions que ejecuta las etapas secuenciales de integración, análisis estático y entrega.

## Arquitectura del Pipeline Automatizado

El pipeline de CI/CD está dividido en dos Jobs principales que se ejecutan automáticamente ante cualquier evento de "push" o "pull_request" en las ramas principales:

1. Job: build-test-security (Integración Continua)
- Instalación y Pruebas Unitarias: Se levanta un entorno limpio de Node.js, se instalan de forma limpia las dependencias mediante "npm ci" y se ejecutan las pruebas unitarias automatizadas ("npm test"). Si un test crítico falla, el pipeline interrumpe el flujo de inmediato.
- Análisis de Seguridad y Gobernanza: Se integra de forma automatizada "Snyk CLI" El escaneo está configurado de manera estricta bajo la política "--severity-threshold=high". Esto asegura que ante cualquier vulnerabilidad crítica o dependencia comprometida en el ecosistema, el pipeline rompa el ciclo de ejecución y bloquee el paso a la fase de despliegue.

2. Job: deploy (Entrega/Despliegue Continuo)
- Despliegue Automático: Una vez que las fases de pruebas y seguridad se completan con éxito, se inicia el despliegue automático en el runner mediante el comando "docker compose up -d --build".
- Orquestación de Contenedores: Se gestiona el ciclo de vida, variables de entorno y mapeo de puertos del aplicativo asegurando la estabilidad operativa.

## Garantía de Trazabilidad y Calidad

- Trazabilidad Absoluta: Cada ejecución y despliegue del microservicio está directamente vinculada al hash único e inmutable del commit de GitHub. Al inicializar el despliegue el pipeline registra dicho hash, permitiendo rastrear con precisión milimétrica qué versión exacta del código fuente se encuentra activa en el entorno simulado.
- Políticas de Calidad: La automatización actúa como un filtro de calidad estricto; ningún código que no pase las pruebas de software locales o que vulnere los estándares mínimos de seguridad de Snyk podrá ser empaquetado ni desplegado.

## Tecnologías Utilizadas
- Node.js
- Express
- Docker
- GitHub Actions
- Jest
- Dependabot

## Ejecutar
npm install
npm start

## Docker
docker build -t servidor-notas .
docker run -p 3000:3000 servidor-notas

## CI/CD
1. Build
2. Tests automáticos
3. Auditoría de seguridad
4. Construcción Docker
5. Despliegue simulado