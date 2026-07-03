# Música de Catussi OS

Esta playlist es **pública**: quien visite el portafolio puede escucharla en Webamp.

## Añadir canciones

1. Copia tus `.mp3` aquí (`public/Users/Public/Music/`).
2. Ejecuta `npm run build:prebuild`.
3. Se regenera **`Catussi.m3u`** con todas las pistas.
4. Haz commit de los `.mp3` y la playlist para que lleguen a Vercel.
5. En el OS: **Inicio → Apagar** y vuelve a entrar.

## Formato de nombres

`01 - Justin Bieber - Peaches.mp3` — el número se omite en la playlist; artista y título quedan legibles.

Los metadatos ID3 también se leen al reproducir.

## Webamp

- Acceso directo **Webamp** en el escritorio.
- Arrastra `.mp3` o `.m3u` sobre la ventana para añadir más.
