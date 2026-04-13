# ToDo
Eine ToDo Listen App im Aufbau

## Verwendung

Voraussetzungen:  
- node (z.B. Version 24 LTS)  
- npm (z.B. Version 11, kommt mit node Version 24 LTS)

Klonen der Repository

Danach

```bash
cd src
npm install
```

Starten der Anwendung (im Ordner src)

```bash
node server.js
```
oder starten mit
```bash
npm run start
```

Das Frontend ist erreichbar unter

```bash
http://localhost:3000/
```


## Geplante Features

- [ ] Tasks als erledigt markieren  
Eine Checkbox, die den Status anzeigt  
API Endpunkt: PATCH /api/tasks/:id  

- [ ] Tasks löschen  
Button zum Löschen  
API Endpunkt: DELETE /api/tasks/:id

- [ ] Daten persistent speichern  
Optionen für eine Datenbank: SQlite oder MySQL  
Anbindung der Datenbank im Backend umsetzen

- [ ] Filtern der Tasks  
Im Frontend soll es eine Möglichkeit geben, um die Tasks so zu filtern:  
  - Nur offene Tasks
  - Nur erledigte Tasks
  - Alle Tasks

- [ ] Styling  
CSS hinzufügen und ansprechend designen und kleine Animationen  
Pro Level: Tailwind

- [ ] Login  
Aufgaben sollen nur pro Benutzer mit einem Login hinzugefügt und angesehen werden können  
API Endpunkt: POST /login  
Die API Endpunkte müssen das auch beachten  
Umsetzung mit Token oder Session  
Erweiterung: Eine vorherige Registrierung ist erforderlich  

### Weitere Ideen

- Abschluss Datum

- Prioritäten

- Suche

- Statistik (z.B. erledigte Tasks)

- Responsive Design

- Dark Mode

- Reminder mit Benachrichtigung
