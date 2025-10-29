self.addEventListener('install', (event) => {
  // This event listener is required to make the service worker installable.
  // It doesn't need to do anything for this local notification setup.
  console.log('Service Worker installing.');
});
