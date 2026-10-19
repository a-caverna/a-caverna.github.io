self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('push', event => {
  let payload = { title: 'CAVERNA', body: 'Está na hora de cumprir seu compromisso.', url: './' };
  try { if (event.data) payload = { ...payload, ...event.data.json() }; } catch (_) {}
  event.waitUntil(self.registration.showNotification(payload.title || 'CAVERNA', {
    body: payload.body || 'Está na hora de cumprir seu compromisso.',
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: { url: payload.url || './' }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || './', self.location.href).href;
  event.waitUntil((async () => {
    const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clientsList) { if ('focus' in client) { await client.focus(); client.navigate(target); return; } }
    if (self.clients.openWindow) await self.clients.openWindow(target);
  })());
});
