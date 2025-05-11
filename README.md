Ce projet d'application de modération et classification de contenu en temps réel est une démonstration des concepts de microservices en utilisant plusieurs types d'architectures : REST, GraphQL, gRPC et Kafka.
L'application simule un pipeline où un contenu est :
Classifié par type (ex: texte etc..)

Modéré pour détecter du contenu interdit (ex: violence, haine)

Et génère une notification via Kafka si nécessaire

⚙️ Technologies Utilisées
Node.js pour les microservices
gRPC pour la communication entre classification et moderation
Kafka (via Docker) pour la transmission d'événements au notification-service
GraphQL (via express-graphql) dans api-gateway
Docker / Docker Compose pour l’orchestration des services

🚀 Lancer le projet
1. Cloner le repo
git clone https://github.com/malekmani11/content-pipeline.git
cd content-pipeline
2. Lancer Kafka avec Docker
docker-compose up -d
3. Lancer chaque microservice
   
Classification Service
cd classification-service
npm install
npm start

Moderation Service
cd moderation-service
npm install
npm start

Notification Service
cd notification-service
npm install
npm start

API Gateway
cd api-gateway
npm install --legacy-peer-deps
npm start

Le serveur GraphQL est disponible sur : http://localhost:4000/graphql

✏️ Exemples d'appels GraphQL

Classification

query {
  classify(content: "Ceci est un contenu général")
}

Modération

query {
  moderate(content: "Ce texte contient de la violence")
}
