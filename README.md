# Advancements Aggegrated

A webpage to view advancement details of a server.

## Description

Pulls Minecraft advancement data from a world or multiple worlds and loads it into a web viewer. Can navigate the advancements by world, player, and view aggregate stats on who have which achievements, or which parts of an achievement.

## Getting Started

### Setting up static data

Softlink "newWorld" to a world folder
>mklink /D ./newWorld /path/to/world

Softlink "oldWorlds" to a folder of worlds
>mklink /D ./oldWorlds /path/to/worlds

Add "whitelist.json" from the server to ./static/whitelist.json

### Executing program

Open index.html in a web browser
