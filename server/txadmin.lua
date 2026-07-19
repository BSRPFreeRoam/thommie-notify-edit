--[[
    Route txAdmin announcements / DMs / warns / restart warnings → thommie-notify

    Hide default txAdmin UI via server.cfg (or txAdmin Settings → Game → Notifications):
      setr txAdmin-hideDefaultAnnouncement 1
      setr txAdmin-hideDefaultDirectMessage 1
      setr txAdmin-hideDefaultWarning 1
      setr txAdmin-hideDefaultScheduledRestartWarning 1
]]

local function send(src, text, nType, length)
    if src == -1 then
        TriggerClientEvent('thommie-notify:client:notify', -1, text, nType or 'admin', length or 7000)
    else
        TriggerClientEvent('thommie-notify:client:notify', src, text, nType or 'admin', length or 7000)
    end
end

local function fmt(title, body)
    title = tostring(title or 'txAdmin')
    body = tostring(body or '')
    if body == '' then return title end
    return ('%s\n%s'):format(title, body)
end

-- Server announcement
AddEventHandler('txAdmin:events:announcement', function(eventData)
    if type(eventData) ~= 'table' then return end
    local author = eventData.author or 'txAdmin'
    local message = eventData.message or ''
    send(-1, fmt(('Announcement — %s'):format(author), message), 'admin', 10000)
end)

-- Admin DM to a player
AddEventHandler('txAdmin:events:playerDirectMessage', function(eventData)
    if type(eventData) ~= 'table' then return end
    local target = tonumber(eventData.target)
    if not target then return end
    local author = eventData.author or 'Admin'
    local message = eventData.message or ''
    send(target, fmt(('Message from %s'):format(author), message), 'phone', 10000)
end)

-- Player warned
AddEventHandler('txAdmin:events:playerWarned', function(eventData)
    if type(eventData) ~= 'table' then return end
    local target = tonumber(eventData.targetNetId or eventData.target)
    if not target then return end
    local author = eventData.author or 'Admin'
    local reason = eventData.reason or 'No reason'
    local actionId = eventData.actionId or ''
    local body = reason
    if actionId ~= '' then
        body = ('%s\nAction ID: %s'):format(reason, actionId)
    end
    send(target, fmt(('Warned by %s'):format(author), body), 'error', 12000)
end)

-- Scheduled restart warnings
AddEventHandler('txAdmin:events:scheduledRestart', function(eventData)
    if type(eventData) ~= 'table' then return end
    local msg = eventData.translatedMessage
        or (eventData.secondsRemaining and ('Server restart in %s seconds'):format(eventData.secondsRemaining))
        or 'Scheduled server restart soon'
    send(-1, fmt('Scheduled Restart', msg), 'time', 10000)
end)

-- Shutdown notice
AddEventHandler('txAdmin:events:serverShuttingDown', function(eventData)
    if type(eventData) ~= 'table' then return end
    local author = eventData.author or 'txAdmin'
    local message = eventData.message or 'Server is shutting down'
    send(-1, fmt(('Shutdown — %s'):format(author), message), 'error', 12000)
end)
