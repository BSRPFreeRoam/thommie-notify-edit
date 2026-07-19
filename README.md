# thommie-notify
Free fivem notification system


# How to use
You can use in any client file: exports['thommie-notify']:notify(text, type, length) or TriggerEvent('notify', text, type, length)
Or use in any server file: TriggerClientEvent('notify', source, text, type, length)
```
exports['thommie-notify']:notify("Client Side", 'car', 2500)
TriggerClientEvent('notify', source, "", 'car', 2500)
TriggerClientEvent('notify', source, "", 'post', 2500)
exports['thommie-notify']:notify("Client Side", 'house', 2500)
TriggerClientEvent('notify', source, "", 'status', 2500)
TriggerClientEvent('notify', source, "", 'house', 2500)
exports['thommie-notify']:notify("Client Side", 'post', 2500)
```