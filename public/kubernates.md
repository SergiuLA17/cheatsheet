# Docker

Docker-ul este o platformă software care permite dezvoltatorilor să creeze, să ruleze și să gestioneze aplicații în containere. Un container Docker este o instanță a unei imagini Docker, care conține toate setările și dependențele necesare pentru a rula o aplicație.- pull images from doker-hub \

- **Imagine Docker** : O imagine Docker este un pachet format dintr-un sistem de fișiere și setările necesare pentru a rula o anumită aplicație. Imaginile pot fi construite manual sau descărcate din Docker Hub, care este un registru public de imagini Docker. Aceste imagini pot conține sistemul de operare, aplicațiile și toate dependențele necesare pentru a rula aplicația dorită.
- **Container Docker** : Un container Docker este o instanță a unei imagini Docker. Containerul este un mediu izolat în care aplicația rulează independent de alte aplicații și procese de pe sistemul gazdă. Isolarea oferită de containere face ca aplicațiile să fie portabile și reproducibile pe diferite medii.
- **Docker Daemon** : Este procesul care rulează pe sistemul gazdă și gestionează toate operațiunile Docker, inclusiv construirea, rularea și gestionarea containerelor.

```sh
    Extragerea imaginelor de pe docker hub
    docker pull "image name"
```

# Kubernates

### Pod

Un "pod" în Kubernetes este o unitate de bază a infrastructurii de calcul. Poate fi comparat cu o cutie virtuală în care rulează unul sau mai multe containere.
Podurile sunt gestionate de către Kubernetes, care se asigură că sunt pornite, oprite și rulate corect. Ele pot fi redimensionate, reprogramate pe alte noduri ale clusterului, înlocuite cu versiuni actualizate sau reluate automat în cazul unor defecțiuni. Podurile oferă o abstractizare pentru gestionarea resurselor de calcul, permițând dezvoltatorilor să se concentreze mai mult asupra codului aplicației și mai puțin pe aspectele infrastructurii.
