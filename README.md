## A Minimal Facebook Clone

### Features

- User Authentication
- Post Status
- Post Stories

### Technologies Used

- React
- Express
- Node
- MongoDB
- Nginx
- Docker

<img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" />
<img width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/1280px-Nginx_logo.svg.png" />
<img width="200px" src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" />

### Run on Your Machine

#### System Requirements

- Linux distro running on a x86_64 architecture CPU
- Around 2GB RAM
- [More Details](https://docs.docker.com/desktop/install/linux-install/#system-requirements)

#### Software Dependencies

- [docker engine](https://docs.docker.com/engine/install/#server)
- [docker compose plugin](https://docs.docker.com/compose/install/linux/#install-using-the-repository)

#### Deploy Locally

- Activate the docker daemon by running `sudo systemctl start docker`
- Clone the repo `git clone https://github.com/rudrowo/mock-book.git`
- `cd ./mock-book`
- `sudo docker compose up -d` &nbsp; :warning: This will take some time
- After that, visit `localhost:6969` to view deployment
- kill deployment with `sudo docker compose down`

### :eyes: :eyes:

<div >
<img src="https://drive.google.com/uc?id=13qYOIfnqjNze3Xrjdag57BPr6CX2uu2Q" />

### Microservices Architecture

```mermaid
graph TD

Client[Client]-->Nginx[Reverse Proxy]
Nginx-->User[User Service]
Nginx-->Status[Status Service]
Nginx-->Story[Story Service]
User-->UserDB[(User DB)]
Status-->User
Story-->User
Status-->StatusDB[(Status DB)]
Story-->StoryDB[(Story DB)]
Story-->ObjectDB[(Object DB)]
```

</div>
