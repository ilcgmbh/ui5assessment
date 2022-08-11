## Voraussetzungen

* [nodejs](https://nodejs.org/en/) muss installiert sein

## Abhängigkeiten installieren 

__Einmalig:__
```
npm install -g gulp

```

__Für das Projekt:__
```
npm install
```

## Entwicklungsserver starten

```
gulp server
```

## Anwendung aufrufen

[http://localhost:8088](http://localhost:8088)

## Ressourcen

* Dokumentation zu UI5 der SAP: https://sapui5.hana.ondemand.com/
    * Binding: https://sapui5.hana.ondemand.com/#/topic/68b9644a253741e8a4b9e4279a35c247
    * FlexibleColumnLayout: https://sapui5.hana.ondemand.com/#/api/sap.f.FlexibleColumnLayout
    * Filtern: https://sapui5.hana.ondemand.com/#/topic/ec79a5d5918f4f7f9cbc2150e66778cc
* Datenmodell des Northwind-Service als [Metadaten](https://services.odata.org/V2/Northwind/Northwind.svc/$metadata)


## Die Aufgabe

Im Internet ist unter [https://services.odata.org/V2/Northwind/Northwind.svc/](https://services.odata.org/V2/Northwind/Northwind.svc/)
ein öffentlicher OData-Service mit Testdaten erreichbar. Dieser bietet ein recht komplexes Datenmodell, von dem zwei Entitätssets
dargestellt werden sollen: Kunden (Customers) und ihre Bestellungen (Orders).

Es ist eine sog. Master-Detail-App mittels sap.f.FlexibleColumnLayout vorbereitet. Setze die folgenden User-Stories um:

### 1 Kundenliste anzeigen

Als Anwender möchte ich aus einer Liste von Kunden einen auswählen können, damit ich mir dessen Bestellungen ansehen kann.

__Erläuterung:__

* Im Master-Bereich (links) soll die Liste der Kunden dargestellt werden, so wie sie vom OData-Service kommt
* Klicke ich auf einen der Kundeneinträge so soll im Detail-Bereich (rechts) die Informationen zum Kunden dargestellt werden
    * CustomerID
    * CompanyName
    * ContactTitle
    * Address
    * City
    * Region
    * Country
    * Phone
* Ebenfalls im Detail möchte ich die Liste der Bestellungen dieses Kunden sehen

### 2 Kundenliste filtern

Als Anwender möchte ich die Kundenliste filtern um schneller den Kunden zu finden, der mich interessiert.

__Erläuterung:__

* Der Filter soll mindestens auf das Feld CompanyName filtern

### 3 Anzahl der Bestellungen direkt in der Liste anzeigen

Als Anwender möchte ich direkt in der Kundenliste sehen, wieviele Bestellungen der Kunde hat.

Bspw. als Zahl in Klammern.


### 4 Details zu einer Bestellung (Bonus)

Als Anwender möchte ich zu einer Bestellung die Detailinformationen sehen.

__Erläuterung:__

* Ich klicke auf eine der Bestellungen im Detail zum Kunden
* Es geht rechts ein weiterer Bereich auf in dem Details zur Bestellung angezeigt werden.

### 5 Einzelne Bereiche maximieren

Als Anwender möchte ich einen Bereich (Master, Detail) auf die gesamte Bildschirmbreite bringen können damit ich mehr sehe.

__Erläuterung:__

* Pro Bereich habe ich die Möglichkeit, diesen per Klick zu maximieren
* Pro Bereich habe ich die Möglichkeit, diesen per Klick wieder auf die ursprüngliche Größe zu bringen

## Mögliche Fragen

Hier Beispiele zu Fragen die wir besprechen könnten:

* Beschreibe was passiert, wenn die Anwendungs-URL aufgerufen wird.
* Wo im Projekt wird der OData-Service referenziert?
* Warum ist der Zugriff auf den OData-Service so gestaltet, wie er ist?
* Wie hast du die Navigation zu einem der Kundendetails abgebildet?


