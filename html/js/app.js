/* Futuristic thommie-notify — free solid icons only (FA6 free + inline SVG fallback) */

/* Compact inline SVGs so icons work even if CDN fonts fail in FiveM CEF */
const SVG = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h16.9a2 2 0 001.7-3L12.7 3.9a2 2 0 00-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14v-5l-2-5H7L5 12v5z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/><path d="M5 12h14"/></svg>',
    warehouse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-8h6v8"/><path d="M3 8h18"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19l-4 1 1-4 7.7-9.7z"/><path d="M12 12l-4 4"/></svg>',
    brush: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 21a3.5 3.5 0 01-3.5-3.5V14h7v3.5A3.5 3.5 0 019.5 21z"/><path d="M14 14l5.5-5.5a2.1 2.1 0 000-3L17.5 3.5a2.1 2.1 0 00-3 0L9 9"/></svg>',
    tint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7C12 2.7 5 10 5 14.5A7 7 0 0012 21a7 7 0 007-6.5C19 10 12 2.7 12 2.7z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a4 4 0 100-8 5.5 5.5 0 00-10.7 1.5A3.5 3.5 0 006.5 18H17z"/><path d="M12 2v4M8 5l1.5 2.5M16 5l-1.5 2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></svg>',
    gas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V6a2 2 0 012-2h7a2 2 0 012 2v14"/><path d="M4 20h13"/><path d="M15 10h2a2 2 0 012 2v5a2 2 0 002 2"/><path d="M7 8h5"/></svg>',
    siren: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h12l-1-7a5 5 0 00-10 0l-1 7z"/><path d="M6 18h12v2H6z"/><path d="M12 3v2M5 6l1.5 1.5M19 6l-1.5 1.5"/></svg>',
    med: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v8M8 12h8"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v2a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 013.1 3.2 2 2 0 015.1 1h2a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 8.5a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0122 16.9z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
    gavel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 13l-8 8M16 3l5 5-8 8-5-5 8-8z"/><path d="M2 22h8"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2l2.4 12.2a2 2 0 002 1.6h8.8a2 2 0 002-1.6L21 8H7"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3.3 7.5L12 12l8.7-4.5M12 12v10"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-6 9 6"/><path d="M5 10v8h14v-8"/><path d="M3 20h18"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 10h4M14 14h3"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11.5 12.5L21 3M17 3h4v4"/></svg>',
    coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v4c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 10v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4"/></svg>',
    gun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h14l2-3h3v5h-3l-1 4H9l-1-4H3v-2z"/></svg>',
    tweet: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.7-6.1L5.2 22H2.4l7-8L2 2h7l4.2 5.6L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.4 7.4L16 4h-2l-2 2-2-2H8L3.6 7.4 6 10v10h12V10l2.4-2.6z"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v7a4 4 0 004 4v7"/><path d="M8 3v7"/><path d="M16 3v18"/><path d="M20 3c0 4-2 6-4 7"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.8c.6.5 1 1.2 1.1 2h4.8c.1-.8.5-1.5 1.1-2A6 6 0 0012 3z"/></svg>',
    bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="16.5" r="3.5"/><circle cx="17.5" cy="16.5" r="3.5"/><path d="M6.5 16.5L11 7h3l3 6M12 12h5"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16"/><path d="M10 21V11h8v10"/><path d="M8 7h2M8 11h2M14 14h2M14 17h2"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.7L21 9.6l-4.5 4.2L17.7 21 12 17.8 6.3 21l1.2-7.2L3 9.6l6.4-.9L12 3z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    toilet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a2 2 0 012 2v4H6V4z"/><path d="M4 10h16v2a6 6 0 01-6 6h-4a6 6 0 01-6-6v-2z"/><path d="M10 18v3M14 18v3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
    life: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>',
};

const TYPE_META = {
    success:     { title: 'System',        svg: SVG.check },
    error:       { title: 'System',        svg: SVG.warn },
    primary:     { title: 'System',        svg: SVG.info },
    info:        { title: 'System',        svg: SVG.info },
    admin:       { title: 'System',        svg: SVG.warn },
    garage:      { title: 'Garage',        svg: SVG.warehouse },
    cardealer:   { title: 'Cardealer',     svg: SVG.car },
    car:         { title: 'Vehicle',       svg: SVG.car },
    bike:        { title: 'Garage',        svg: SVG.bike },
    tow:         { title: 'Mechanic',      svg: SVG.wrench },
    paint:       { title: 'Paint',         svg: SVG.brush },
    carwash:     { title: 'Carwash',       svg: SVG.tint },
    weather:     { title: 'Weather',       svg: SVG.cloud },
    time:        { title: 'Time',          svg: SVG.clock },
    gps:         { title: 'GPS',           svg: SVG.pin },
    map:         { title: 'Map',           svg: SVG.map },
    fuel:        { title: 'Gasstation',    svg: SVG.gas },
    dispatch:    { title: 'Emergency',     svg: SVG.siren },
    emergency:   { title: 'Emergency',     svg: SVG.med },
    police:      { title: 'Police',        svg: SVG.shield },
    phone:       { title: 'Phone',         svg: SVG.phone },
    status:      { title: 'Health',        svg: SVG.heart },
    house:       { title: 'Houses',        svg: SVG.home },
    judge:       { title: 'Judge',         svg: SVG.gavel },
    shop:        { title: 'Shop',          svg: SVG.cart },
    item:        { title: 'Item',          svg: SVG.box },
    bank:        { title: 'Bank',          svg: SVG.bank },
    card:        { title: 'Card',          svg: SVG.id },
    keys:        { title: 'Keys',          svg: SVG.key },
    blackmarket: { title: 'Black market',  svg: SVG.coins },
    gun:         { title: 'Weapon',        svg: SVG.gun },
    pawnshop:    { title: 'PawnShop',      svg: SVG.coins },
    post:        { title: 'Lifeinvader',   svg: SVG.life },
    twitter:     { title: 'Twitter',       svg: SVG.tweet },
    outfit:      { title: 'Outfit',        svg: SVG.shirt },
    food:        { title: 'Food',          svg: SVG.food },
    depot:       { title: 'Depot',         svg: SVG.light },
    prop:        { title: 'Prop',          svg: SVG.star },
    view:        { title: 'View Distance', svg: SVG.eye },
    elevator:    { title: 'Elevator',      svg: SVG.building },
    toilet:      { title: 'Toilet',        svg: SVG.toilet },
    stash:       { title: 'Stash',         svg: SVG.box },
};

function ensureStack() {
    let stack = document.querySelector('.notif-stack');
    if (!stack) {
        stack = document.createElement('div');
        stack.className = 'notif-stack';
        document.body.appendChild(stack);
    }
    return stack;
}

function resolveMeta(type) {
    const t = (type || 'primary').toLowerCase();
    return TYPE_META[t] || {
        title: 'System',
        svg: SVG.x,
    };
}

function ShowNotif(data) {
    const type = (data.type || 'primary').toLowerCase();
    const length = data.length != null ? Number(data.length) : 3500;
    const text = data.text != null ? String(data.text) : '';
    const meta = resolveMeta(type);

    const $notification = $('<div class="notification"></div>');
    $notification.addClass(type);

    $notification.append(
        '<div class="edge edge-top"></div>' +
        '<div class="edge edge-bottom"></div>' +
        '<div class="bignotif-container">' +
            '<div class="bignotif-icon">' + meta.svg + '</div>' +
            '<div class="bignotif-message">' +
                '<div class="bignotif-title">' + meta.title + '</div>' +
                '<div class="bignotif-text"></div>' +
            '</div>' +
        '</div>' +
        '<div class="progress-bar"><div class="progress"></div></div>'
    );

    $notification.find('.bignotif-text').text(text);

    const stack = ensureStack();
    $notification.css('display', 'block').appendTo(stack);

    const $progress = $notification.find('.progress');
    $progress.css('animation-duration', length + 'ms');

    setTimeout(function () {
        $notification.addClass('leaving');
        setTimeout(function () {
            $notification.remove();
        }, 320);
    }, length);
}

window.addEventListener('message', function (event) {
    const data = event.data || {};
    if (data.action === 'show' || data.text != null) {
        ShowNotif(data);
    }
});
