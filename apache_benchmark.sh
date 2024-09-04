#!/bin/bash

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # Sin color

# Función para leer la URL
function obtener_url {
    echo -e "${BLUE}Por favor, ingresa la URL a testear (e.g., https://talonarios.cl/):${NC}"
    read url
    echo -e "${GREEN}URL ingresada: $url${NC}"
}

# Función para ejecutar la prueba con Apache Benchmark
function ejecutar_ab {
    echo -e "${YELLOW}Ejecutando prueba de carga con Apache Benchmark...${NC}"
    ab -g resultado.csv -c 20 -n 100 "$url" > ab_resultado.txt
    echo -e "${GREEN}Prueba completada y archivo resultado.csv generado.${NC}"
}

# Función para generar gráfico con gnuplot
function generar_grafico {
    echo -e "${YELLOW}Generando gráfico con gnuplot...${NC}"

    # Crear el archivo de configuración para gnuplot (plots.p)
    cat <<EOL > plots.p
set terminal png size 600,400
set output "resultado.png"
set title "100 peticiones, 20 peticiones concurrentes"
set size ratio 0.6
set grid y
set xlabel "peticiones"
set ylabel "tiempo de respuesta (ms)"
plot "resultado.csv" using 9 smooth sbezier with lines title "$url"
EOL

    # Ejecutar gnuplot con el archivo de configuración
    gnuplot plots.p
    echo -e "${GREEN}Gráfico generado: resultado.png${NC}"
}

# Función para crear un archivo Markdown con los resultados
function generar_markdown {
    echo -e "${YELLOW}Generando archivo Markdown con los resultados...${NC}"

    # Crear el archivo AB.md
    cat <<EOL > AB.md
# Resultados de la prueba de carga con Apache Benchmark

## URL probada: $url

- **Número de peticiones**: 100
- **Peticiones concurrentes**: 20

### Resultados de la prueba

\`\`\`
$(cat ab_resultado.txt)
\`\`\`

### Gráfico de tiempos de respuesta

![Gráfico de tiempos de respuesta](resultado.png)

Este gráfico muestra el tiempo de respuesta (ms) de las 100 peticiones realizadas de manera concurrente con 20 peticiones en paralelo.
EOL

    echo -e "${GREEN}Archivo AB.md generado con los resultados.${NC}"
}

# Inicio del script
clear
echo -e "${GREEN}Herramienta de pruebas de carga con Apache Benchmark y gnuplot${NC}"
obtener_url
ejecutar_ab
generar_grafico
generar_markdown
