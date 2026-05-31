# EP2 DevOps
Aqui se desarrollará la evaluacion parcial 2 de ingenieria DevOps
## Tecnologías
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
Este pipeline va a ejecutar:
1. Build
2. Tests automáticos
3. Auditoría de seguridad
4. Construcción Docker
5. Despliegue simulado
