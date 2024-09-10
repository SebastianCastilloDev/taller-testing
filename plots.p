set terminal png size 600,400
set output "resultado.png"
set title "100 peticiones, 20 peticiones concurrentes"
set size ratio 0.6
set grid y
set xlabel "peticiones"
set ylabel "tiempo de respuesta (ms)"
plot "resultado.csv" using 9 smooth sbezier with lines title "http://talonarios.cl/"
