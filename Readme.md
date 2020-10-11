# COVID-19 Tracer

Source of the main site:
## https://covidtracer.netlify.com/
## https://mayurmadnani.github.io/covidtracer/

Data sources:

* Global: [Data Repository by Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19)

* India: [Ministry of Health and Family Welfare Government of India](https://www.mohfw.gov.in/)


# Docker build
You may build this site as a docker image with docker build
```bash
docker build . -t covidtracer
```

Run the docker image as a container
```bash
docker run -d -t -p 80:80 covidtracer:latest
```
