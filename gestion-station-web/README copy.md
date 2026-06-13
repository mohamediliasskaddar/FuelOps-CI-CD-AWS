

---

# 🛠️ Application de Gestion des Stations-Service

Une application **Full Stack** permettant de gérer les **stations-service**, les **carburants**, et leurs **prix journaliers**, développée avec **Spring Boot (backend)** et **Angular (frontend)**.

---

## 🚀 Objectif du projet

Créer un système complet qui permet :

* De gérer les **stations-service** (nom, ville, adresse).
* De gérer les **carburants** (type, description).
* De suivre l’**historique des prix** du carburant dans chaque station.

---

## ⚙️ Stack Technique

| Côté               | Technologie         | Détails                             |
| ------------------ | ------------------- | ----------------------------------- |
| 🧩 Backend         | **Spring Boot 3**   | REST API, JPA/Hibernate, PostgreSQL |
| 💾 Base de données | **PostgreSQL**      | Stockage des entités                |
| 🧠 ORM             | **Hibernate / JPA** | Mapping des entités                 |
| 🎨 Frontend        | **Angular 17**      | Interface utilisateur dynamique     |
| 🔗 Communication   | **REST / JSON**     | Entre backend et frontend           |
| 🧪 Tests           | **Postman**         | Vérification des endpoints          |

---

## 🧱 Architecture du Projet

### 📦 Backend (Spring Boot)

```
src/main/java/ma/fstt/gestionstation/
│
├── controller/
│   ├── StationController.java
│   ├── CarburantController.java
│   └── HistoCarbController.java
│
├── entity/
│   ├── Station.java
│   ├── Carburant.java
│   └── HistoCarb.java
│
├── service/
│   ├── StationService.java
│   ├── CarburantService.java
│   └── HistoCarbService.java
│
├── repository/
│   ├── StationRepository.java
│   ├── CarburantRepository.java
│   └── HistoCarbRepository.java
│
└── GestionStationApplication.java
```

### 🧩 Frontend (Angular)

```
src/app/
├── components/
│   ├── stations/
│   ├── carburants/
│   └── hsito-carbs/
│
├── models/
│   └── model.ts
│
├── services/
│   ├── station.service.ts
│   ├── carburant.service.ts
│   └── histo-carb.service.ts
│
├── lists.css
├── forms.css
└── app.routes.ts
```

---

## 🧠 Fonctionnalités principales

### 📍 Stations

* Ajouter, modifier, supprimer, et lister les stations.

### ⛽ Carburants

* Gérer les différents types de carburants.

### 💰 Historique des Prix

* Ajouter ou modifier un prix journalier par station et carburant.
* Filtrer les historiques par **ville** ou **station** côté frontend.

---

## 💾 Base de Données

**PostgreSQL**

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/stationdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 🔌 Endpoints REST (Backend)

| Méthode | URL                                                       | Description                                  |
| ------- | --------------------------------------------------------- | -------------------------------------------- |
| GET     | `/api/stations`                                           | Liste des stations                           |
| POST    | `/api/stations`                                           | Créer une station                            |
| PUT     | `/api/stations/{id}`                                      | Modifier une station                         |
| DELETE  | `/api/stations/{id}`                                      | Supprimer une station                        |
| GET     | `/api/carburants`                                         | Liste des carburants                         |
| POST    | `/api/carburants`                                         | Créer un carburant                           |
| GET     | `/api/prix/full`                                          | Historique complet avec station et carburant |
| POST    | `/api/prix/stations/{stationId}/carburants/{carburantId}` | Ajouter un prix                              |

et d'autres APIs ...

---

## 💻 Installation et Lancement

### 🧩 Backend

```bash
cd gestion-station
mvn spring-boot:run
```

L’API sera disponible sur [http://localhost:8080](http://localhost:8080)

### 🎨 Frontend

```bash
cd gestion-station-web
npm install
ng serve
```

Le frontend sera disponible sur [http://localhost:4200](http://localhost:4200)

---

## 🧪 Tests avec Postman

Exemple de requête POST :

```
POST http://localhost:8080/api/prix/stations/1/carburants/2
Content-Type: application/json

{
  "date": "2025-11-05",
  "prix": 14.55
}
```

---

## 🖥️ Interface utilisateur

* **Barre de navigation** : permet de naviguer entre Stations, Carburants, Historique, et Accueil.
* **Tables dynamiques** : affichage clair des listes avec boutons d’action.
* **Formulaires réactifs (Reactive Forms)** : validation et saisie sécurisée.
* **Filtres (ville / station)** : sur la liste des prix.
* **Design uniforme** : couleurs bleu et blanc avec styles partagés (`lists.css`, `forms.css`).

---

## 📚 Bonnes pratiques utilisées

* Architecture **3-tiers** : Controller → Service → Repository.
* **DTOs** pour éviter les problèmes de sérialisation JSON.
* Gestion des erreurs avec **@ExceptionHandler**.
* Utilisation de **RxJS / Observables** côté Angular.
* Navigation fluide avec **Angular Router**.

---

## ✨ Améliorations possibles

* Authentification / JWT (Admin, Opérateur).
* Graphiques de suivi de prix (Chart.js).
* Pagination et tri dans les tables.
* Déploiement sur serveur cloud (Render / Railway / Vercel).

---

## 👨‍💻 Auteurs

**Projet académique — FSTT (Faculté des Sciences et Techniques de Tanger)**
Développé avec ❤️ en **Java Spring Boot** et **Angular**.

---

