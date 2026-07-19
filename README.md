# 🔔 Thommie Notify

A modern notification system for **FiveM servers**.

Thommie Notify provides a simple, lightweight, and customizable notification solution designed for developers and server owners. Built for easy integration, it allows any resource to send clean notifications through client-side exports, events, or server-side triggers.

## Preview 

<img width="261" height="97" alt="image" src="https://github.com/user-attachments/assets/0bb9c37a-c522-40d9-9000-a4b5697fdd56" />


---

## Features
* 🔔 Custom notification system
* ⚡ Lightweight performance
* 🎨 Multiple notification types
* 🖥️ Client-side export support
* 🌐 Server-side notification support
* 🔄 Event-based integration
* ⏱️ Custom notification duration
* 🛠️ Easy developer integration

---

## Requirements
This resource requires:
* FiveM Server

Optional:
* Any framework
* Any inventory system
* Any job system

Thommie Notify is framework-independent and can be used with:
* QBCore
* ESX
* BSRP Framework
* Standalone resources

---

## Installation

### 1. Place Resource
```text
resources/
└── thommie-notify/
```

### 2. Ensure Resource
Add to your `server.cfg`:
```cfg
ensure thommie-notify
```
> Thommie Notify should start before any resource that uses its exports.

---

## Usage
Thommie Notify can be used from:
* Client files
* Server files
* Any FiveM resource

---

## Client Side

### Export Usage
```lua
exports['thommie-notify']:notify(text, type, length)
```

Example:
```lua
exports['thommie-notify']:notify("Client Side", "car", 2500)
```

---

### Event Usage
```lua
TriggerEvent('notify', text, type, length)
```

Example:
```lua
TriggerEvent('notify', 'Notification Message', 'house', 2500)
```

---

## Server Side
Send notifications to players from server scripts:
```lua
TriggerClientEvent('notify', source, text, type, length)
```

Example:
```lua
TriggerClientEvent('notify', source, 'Server Notification', 'post', 2500)
```

---

## Notification Types
Available notification styles:

## Notification Types
Available notification styles:

| Type | Description |
| ---- | ----------- |
| success | Success notification |
| error | Error notification |
| primary | Primary notification |
| info | Info notification |
| admin | Admin notification |
| garage | Garage notification |
| cardealer | Car dealer notification |
| car | Vehicle notification |
| bike | Bike notification |
| tow | Tow notification |
| paint | Paint notification |
| carwash | Car wash notification |
| weather | Weather notification |
| time | Time notification |
| gps | GPS notification |
| map | Map notification |
| fuel | Fuel notification |
| dispatch | Dispatch notification |
| emergency | Emergency notification |
| police | Police notification |
| phone | Phone notification |
| status | Status notification |
| house | Property notification |
| judge | Judge notification |
| shop | Shop notification |
| item | Item notification |
| bank | Bank notification |
| card | Card notification |
| keys | Keys notification |
| blackmarket | Blackmarket notification |
| gun | Gun notification |
| pawnshop | Pawnshop notification |
| post | Message notification |
| twitter | Twitter notification |
| outfit | Outfit notification |
| food | Food notification |
| depot | Depot notification |
| prop | Prop notification |
| view | View notification |
| elevator | Elevator notification |
| toilet | Toilet notification |
| stash | Stash notification |


Example:
```lua
exports['thommie-notify']:notify("Vehicle Spawned", "car", 2500)
```

---

## Examples
```lua
exports['thommie-notify']:notify("Client Side", "car", 2500)
TriggerClientEvent('notify', source, "Vehicle Purchased", "car", 2500)
TriggerClientEvent('notify', source, "New Message", "post", 2500)
exports['thommie-notify']:notify("House Purchased", "house", 2500)
exports['thommie-notify']:notify("Action Successful", "success", 2500)
TriggerClientEvent('notify', source, "An Error Occurred", "error", 2500)
exports['thommie-notify']:notify("Primary Notification", "primary", 2500)
TriggerClientEvent('notify', source, "Info Notification", "info", 2500)
exports['thommie-notify']:notify("Admin Action Performed", "admin", 2500)
TriggerClientEvent('notify', source, "Garage Opened", "garage", 2500)
exports['thommie-notify']:notify("Welcome to Cardealer", "cardealer", 2500)
TriggerClientEvent('notify', source, "Bike Spawned", "bike", 2500)
exports['thommie-notify']:notify("Vehicle Towed", "tow", 2500)
TriggerClientEvent('notify', source, "Vehicle Painted", "paint", 2500)
exports['thommie-notify']:notify("Vehicle Washed", "carwash", 2500)
TriggerClientEvent('notify', source, "Weather Changed", "weather", 2500)
exports['thommie-notify']:notify("Time Updated", "time", 2500)
TriggerClientEvent('notify', source, "GPS Set", "gps", 2500)
exports['thommie-notify']:notify("Map Marker Added", "map", 2500)
TriggerClientEvent('notify', source, "Fuel Refilled", "fuel", 2500)
exports['thommie-notify']:notify("Dispatch Sent", "dispatch", 2500)
TriggerClientEvent('notify', source, "Emergency Alert", "emergency", 2500)
exports['thommie-notify']:notify("Police Notified", "police", 2500)
TriggerClientEvent('notify', source, "Incoming Call", "phone", 2500)
exports['thommie-notify']:notify("Status Updated", "status", 2500)
TriggerClientEvent('notify', source, "Judge Ruling", "judge", 2500)
exports['thommie-notify']:notify("Item Purchased", "shop", 2500)
TriggerClientEvent('notify', source, "Item Added", "item", 2500)
exports['thommie-notify']:notify("Bank Deposit Made", "bank", 2500)
TriggerClientEvent('notify', source, "Card Used", "card", 2500)
exports['thommie-notify']:notify("Keys Received", "keys", 2500)
TriggerClientEvent('notify', source, "Blackmarket Deal", "blackmarket", 2500)
exports['thommie-notify']:notify("Gun Purchased", "gun", 2500)
TriggerClientEvent('notify', source, "Item Pawned", "pawnshop", 2500)
exports['thommie-notify']:notify("New Post", "post", 2500)
TriggerClientEvent('notify', source, "New Tweet", "twitter", 2500)
exports['thommie-notify']:notify("Outfit Saved", "outfit", 2500)
TriggerClientEvent('notify', source, "Food Purchased", "food", 2500)
exports['thommie-notify']:notify("Depot Accessed", "depot", 2500)
TriggerClientEvent('notify', source, "Prop Placed", "prop", 2500)
exports['thommie-notify']:notify("View Changed", "view", 2500)
TriggerClientEvent('notify', source, "Elevator Called", "elevator", 2500)
exports['thommie-notify']:notify("Toilet Used", "toilet", 2500)
TriggerClientEvent('notify', source, "Stash Opened", "stash", 2500)
```

---

## Compatibility

| Resource Type | Supported |
| ------------- | --------- |
| FiveM         | ✅ |
| Standalone    | ✅ |
| QBCore        | ✅ |
| ESX           | ✅ |
| BSRP Framework| ✅ |

---

## Development
When creating resources that use notifications:
```lua
local message = "Action completed"
exports['thommie-notify']:notify(message, "status", 2500)
```

For server-side notifications:
```lua
TriggerClientEvent('notify', source, "Action completed", "status", 2500)
```

Always validate notification messages server-side when using player-generated content.
Always validate notification messages server-side when using player-generated content.
