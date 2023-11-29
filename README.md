# MovieAppAngular instrukcja uruchomienia oraz opis:

## Instrukcja uruchomienia:

1. Pobierz obrazy docker: 
docker pull ghcr.io/mgajowy/movie-backend:1.0
docker pull ghcr.io/mgajowy/movie-frontend:1.0

2. Po pobraniu repozytorium: MGajowy/MovieApp uruchom wiersz poleceń w ścieżce pobranego repozytorium 
    i uruchom polecenie : docker compose up

3. Urochom przeglądarkę pod adresem : 
    http://localhost:8080/

## Informacje techniczne: 

- NODEJS - backend
- Angular 12 - frontend
- Postgres - DB

## Opis aplikacji:

Aplikacja składa się z CRUD filmów oraz reżyserów. Baza danych zawiera dwie tabele: 
- movies
- directors
powiązanych ze soba relacją (one to many)



