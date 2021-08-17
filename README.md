# aframe-glitch-server-sync

This project shows with a customized aframe-inspector how to use glitch to sync inspector changes to the server.

Have a look into `public/aframe-inspector.js` line 21745 where the saving process starts.

On saving the entire file content is sent to the server instead of only incremental changes.
