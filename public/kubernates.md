<style>
    .tooltip {
  position: relative;
}

.tooltiptext {
  visibility: hidden;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  z-index: 1;
   white-space: nowrap;
  overflow-x: auto;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>


<span class="tooltip"><strong> all words in bold have hints</strong>
  <span class="tooltiptext">wow really!:)</span>
</span>
# Docker

Docker is a platform that allows you to run and maintain applications in a consistent and isolated environment. It uses a technology called containerization, which encapsulates an application along with its dependencies, libraries, and configurations into a standalone unit called a <span class="tooltip">**container**<span class="tooltiptext">A container is an instance of a docker image that contains all the settings and dependencies. A container is an isolated area that provides a portable and reproducible application across different OSes.</span>
</span>. 

The difference between a <span class="tooltip">**Docker image**
  <span class="tooltiptext">
An image docker is a package that contains all the necessary files and settings to run any application.</span>
</span> and a Virtual Machine image is that Docker virtualizes the application layer of the OS, while Virtual Masine virtualizes both layers (application and kernel layer).


### Docker commands

- <span class="tooltip">**docker run "image name"**
  <span class="tooltiptext">
  <p>-p : means we can use host port to use container port</p>
  <p>--name : we can name our container </p>
  </span>
</span>: create and run a container with the image, -d means the container will run in
<span class="tooltip"> <strong>deamon mode</strong>
  <span class="tooltiptext">Any terminal input will not affect this app.</span>
</span> . When we use run, docker will pull and run a container.
- <span class="tooltip"><strong>docker ps</strong>
  <span class="tooltiptext">-a : will show all containers that are running or disabled</span>
</span> : shows all running containers.
- **docker stop "container ID"** : stops container
- **docker start "container ID"** : starts container
- **docker images** : shows all images available on system.
- **docker logs "id container"** : shows container logs
- <span class="tooltip"><strong>docker exe "container id" /bin/bash</strong>
  <span class="tooltiptext">-it : means that the host terminal will interact with the container terminal and display input and output correctly  </span>
</span> : use the terminal of the container 

# Kubernates
<span class="tooltip">deamon mode
  <span class="tooltiptext">Всплывающая подсказка</span>
</span>

## Commands

- **kubectl apply -f .** : Face update la toate fisierile yaml din directoriu.
- **kubectl get all** : Afiseaza taote datele despre pods si servicii rulate.
- **kubectl delete pod "pod name"** : Sterge un pod.
- **kubectl exec -it "pod name" sh"** : Accesarea instantei.
- **kube % kubectl delete all --all --namespace default** : delete all
- **docker image push bloodysoon/planner_api:0.1** : push images to docker hub
- **docker tag planner-api bloodysoon/planner_api:0.1** : tag the image
- **docker build -t planner-api .** : build the image

### Pod

Un "pod" în Kubernetes este o unitate de bază a infrastructurii de calcul. Poate fi comparat cu o cutie virtuală în care rulează unul sau mai multe containere.
Podurile sunt gestionate de către Kubernetes, care se asigură că sunt pornite, oprite și rulate corect. Ele pot fi redimensionate, reprogramate pe alte noduri ale clusterului, înlocuite cu versiuni actualizate sau reluate automat în cazul unor defecțiuni. Podurile oferă o abstractizare pentru gestionarea resurselor de calcul, permițând dezvoltatorilor să se concentreze mai mult asupra codului aplicației și mai puțin pe aspectele infrastructurii.
