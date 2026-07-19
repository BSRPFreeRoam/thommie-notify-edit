--[[
    thommie-notify — client
    exports['thommie-notify']:notify(text, type, length)
]]

RegisterNetEvent('notify', function(text, nType, length)
    notify(text, nType, length)
end)

RegisterNetEvent('thommie-notify:client:notify', function(text, nType, length)
    notify(text, nType, length)
end)

--- @param text string
--- @param texttype string|nil  success|error|info|primary|admin|...
--- @param length number|nil   ms
function notify(text, texttype, length)
    local ttype = texttype ~= nil and texttype or 'primary'
    local dur = length ~= nil and length or 5000
    SendNuiMessage(json.encode({
        action = 'show',
        type = ttype,
        length = dur,
        text = tostring(text or ''),
    }))
end

exports('notify', notify)
exports('Notify', notify)
