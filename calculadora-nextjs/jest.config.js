const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true, // Habilita la recopilación de cobertura
  coverageDirectory: 'coverage', // Carpeta donde se guardarán los reportes de cobertura
  coverageReporters: ['text', 'lcov', 'html'], // Formatos de reporte de cobertura
  verbose: true, // Habilita la salida detallada de los tests
};

module.exports = createJestConfig(customJestConfig);
