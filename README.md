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
exports['thommie-notify']:notify(
    "Client Side",
    "car",
    2500
)
```

---

### Event Usage

```lua
TriggerEvent('notify', text, type, length)
```

Example:

```lua
TriggerEvent(
    'notify',
    'Notification Message',
    'house',
    2500
)
```

---

## Server Side

Send notifications to players from server scripts:

```lua
TriggerClientEvent(
    'notify',
    source,
    text,
    type,
    length
)
```

Example:

```lua
TriggerClientEvent(
    'notify',
    source,
    'Server Notification',
    'post',
    2500
)
```

---

## Notification Types

Available notification styles:

| Type | Description |
| ---- | ----------- |
| car | Vehicle notification |
| post | Message notification |
| house | Property notification |
| status | Status notification |

Example:

```lua
exports['thommie-notify']:notify(
    "Vehicle Spawned",
    "car",
    2500
)
```

---

## Examples

```lua
exports['thommie-notify']:notify(
    "Client Side",
    "car",
    2500
)

TriggerClientEvent(
    'notify',
    source,
    "Vehicle Purchased",
    "car",
    2500
)

TriggerClientEvent(
    'notify',
    source,
    "New Message",
    "post",
    2500
)

exports['thommie-notify']:notify(
    "House Purchased",
    "house",
    2500
)
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

exports['thommie-notify']:notify(
    message,
    "status",
    2500
)
```

For server-side notifications:

```lua
TriggerClientEvent(
    'notify',
    source,
    "Action completed",
    "status",
    2500
)
```

Always validate notification messages server-side when using player-generated content.
