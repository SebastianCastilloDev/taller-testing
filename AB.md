# Resultados de la prueba de carga con Apache Benchmark

## URL probada: https://obscure-garbanzo-qr77v449g6xh9vr6-3000.app.github.dev/

- **Número de peticiones**: 100
- **Peticiones concurrentes**: 20

### Resultados de la prueba

```
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking obscure-garbanzo-qr77v449g6xh9vr6-3000.app.github.dev (be patient).....done


Server Software:        
Server Hostname:        obscure-garbanzo-qr77v449g6xh9vr6-3000.app.github.dev
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256
Server Temp Key:        X25519 253 bits
TLS Server Name:        obscure-garbanzo-qr77v449g6xh9vr6-3000.app.github.dev

Document Path:          /
Document Length:        0 bytes

Concurrency Level:      20
Time taken for tests:   0.223 seconds
Complete requests:      100
Failed requests:        0
Non-2xx responses:      100
Total transferred:      67571 bytes
HTML transferred:       0 bytes
Requests per second:    449.01 [#/sec] (mean)
Time per request:       44.542 [ms] (mean)
Time per request:       2.227 [ms] (mean, across all concurrent requests)
Transfer rate:          296.29 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        8   13   6.4     11      42
Processing:    12   21   7.5     19      50
Waiting:       12   20   7.0     19      48
Total:         21   34   9.4     32      61

Percentage of the requests served within a certain time (ms)
  50%     32
  66%     35
  75%     40
  80%     42
  90%     50
  95%     54
  98%     61
  99%     61
 100%     61 (longest request)
```

### Gráfico de tiempos de respuesta

![Gráfico de tiempos de respuesta](resultado.png)

Este gráfico muestra el tiempo de respuesta (ms) de las 100 peticiones realizadas de manera concurrente con 20 peticiones en paralelo.
