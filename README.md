# PYTHON MAZE GAME

This is a 3D-maze game written in Python using a Digital Differential Analyzer algorithm for raycasting.

## INSTALLATION

- To install the game, one can download the ZIP file by pressing the green button and extracting all the files once the download is completed.

- Another way is by cloning the repository and pasting in the terminal if you have git installed in your computer.
- Install PyGame with command `pip3 install pygame` on linux or `pip install pygame` on Windows.
- Run `python3 __main__.py` to start the game.

## CONTROLS

The following keys help with the games controls:

- **WASD** or **up** and **down** arrow keys - move front and back respectively.- **Left** and **right** arrow keys or mouse - move left, right or around
- **Left** mouse click or **ESC** - to toggle mouse control( can be used to fire gun or free mouse from game)
- **[** and **]** - change to previous ([) or next (]) level
- **F** - place or pick flag to remember direction
- **Q** - place a temporary barricade
- **T** - To shoot
- **R** - pause game
- **Y** - reset level
- **Shift** - run while held
- **CTRL** - crawl while held
- **Space bar** - toggle map
- **C** - Toggle moster compass
- **E** - toggle statistics (time, movement, key count)

## INSTRUCTIONS

This is a game with a simple objective. Collect all the golden keys before reaching the exit with the least time and movement without being caught by the moster.

In most levels, after a specific amount of time has passed, a monster spawns.The monsters tries to find you and when caught you can spam W to attempt a getaway. There are however limited tried to spamming and trying to run away and when eventually caught you die and have to restart hte level.

You can place flags along the way to help you navigate along the maze. However if the monster comes to contact with one of these flags they will destory them.

You have a compass that points towwards the mosters location though it has a limited amount of time to use before it has to recharge again. This is indicated by it being red as it decreases.

You can also place a temporary barricade which will act as a wall to deter the moster until it breaks after some time. You can only build one barricade at a time which cannot be broken early but if it does, it knocks you and the monster.

Some levels contain a key sensor that shows where the keys are on the map for a limited amount of time. They are however a one time use.

Some levels contain a gun that can be fired only once. If you are able to shoot the monster it wiil send it back to its respawn location.
