// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]"}},
{"name":"QMovement","status":true,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"30\",\"Height\":\"30\",\"Offset X\":\"8\",\"Offset Y\":\"-55\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"false"}},
{"name":"QM+CollisionMap","status":true,"description":"<QMCollisionMap>\nQMovement Addon: Adds image collision map feature","parameters":{"Scan Size":"4","Folder":"img/parallaxes/"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QInput","status":true,"description":"<QInput>\r\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"#z\", \"$A\"]","Escape / Cancel":"[\"#esc\",\"#insert\",\"#x\",\"#num0\",\"$B\",\"\"]","Menu":"[\"#esc\", \"$Y\"]","Shift":"[\"#shift\",\"#cancel\",\"$X\",\"#g\",\"\",\"#b\"]","Control":"[\"#ctrl\", \"#alt\"]","Tab":"[\"#tab\",\"#h\",\"#V\"]","Pageup":"[\"#pageup\", \"#q\", \"$L1\"]","Pagedown":"[\"#pagedown\", \"#w\", \"$R1\"]","Left":"[\"#left\", \"#num4\", \"$LEFT\",\"#a\"]","Right":"[\"#right\", \"#num6\", \"$RIGHT\",\"#d\"]","Up":"[\"#up\", \"#num8\", \"$UP\",\"#w\"]","Down":"[\"#down\", \"#num2\", \"$DOWN\",\"#s\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"QInputRemap","status":true,"description":"<QInputRemap>\r\nQInput Addon: Adds Key remapping to Options menu","parameters":{"Hide Keys":"[]","Disable Keys":"[\"ok\", \"escape\"]","Vocab":"","Vocab: Ok":"Action","Vocab: Escape":"Cancel","Vocab: Shift":"Run","Vocab: Control":"Control","Vocab: Tab":"Tab","Vocab: Pageup":"Next","Vocab: Pagedown":"Prev","Vocab: Up":"Up","Vocab: Down":"Down","Vocab: Left":"Left","Vocab: Right":"Right"}},
{"name":"QNameInput","status":true,"description":"<QNameInput>\nQInput addon: Adds Keyboard Input to Name Input Scene","parameters":{"Show Window with Keys":"false","Window Width":"480"}},
{"name":"QTouch","status":true,"description":"<QTouch>\r\nBetter mouse handling for MV","parameters":{"Mouse Decay":"60","Default Cursor":"","Pointer Cursor":""}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QMap","status":false,"description":"<QMap>\r\nCreates maps made with QMap Editor","parameters":{}},
{"name":"QSprite","status":true,"description":"<QSprite>\nLets you configure Spritesheets","parameters":{"File Name Identifier":"%{config}-","Random Idle Interval":"","Use New Adjust":"true"}},
{"name":"QAudio","status":true,"description":"<QAudio>\r\nFew new audio features","parameters":{"Default Radius":"5","Default Max Volume":"100"}},
{"name":"QSpeed","status":true,"description":"<QSpeed>\r\nAllows for custom Move speeds and an acceleration effect","parameters":{"Acceleration":"true","Duration":"30","Dash Inc":"1"}},
{"name":"QCamera","status":true,"description":"<QCamera>\r\nBetter Camera control","parameters":{"Offset":"0.5","Shift Y":"0","Shift X":"0"}},
{"name":"QYScale","status":true,"description":"<QYScale>\r\nChange characters scale based off their Y value","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPathfind","status":true,"description":"<QPathfind>\nA* Pathfinding algorithm","parameters":{"Diagonals":"false","Any Angle":"false","Intervals":"100","Smart Wait":"60","Dash on Mouse":"true"}},
{"name":"QSight","status":true,"description":"<QSight>\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"false"}},
{"name":"QImport","status":true,"description":"<QImport>\nLets you import text from other game objects or txt files","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QABS","status":true,"description":"<QABS>\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"false","Aim with Mouse":"false","Aim with Analog":"false","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"true","Loot Touch Trigger":"true","Gold Icon":"321","Level Animation":"200","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"30","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"#space\\\",\\\"Gamepad Input\\\":\\\"$R2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"12\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#v\\\",\\\"Gamepad Input\\\":\\\"$L2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"13\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#g\\\",\\\"Gamepad Input\\\":\\\"$R3\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"23\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#q\\\",\\\"Gamepad Input\\\":\\\"$L1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"7\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#e\\\",\\\"Gamepad Input\\\":\\\"$R1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"9\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#b\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"24\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#2\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"21\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#3\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"22\\\"}\"]"}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\r\nQABS Addon: Adds a skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"true"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>\nQABS Addon: Adds hp gauges to enemies","parameters":{"Gauge Configs":"","Gauge Width":"48","Gauge Height":"4","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"-48","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"GameFont","Font Size":"14","Font Color":"#ffffff","Boss Text Font":"GameFont","Boss Font Size":"18","Boss Font Color":"#ffffff"}},
{"name":"QUpdate","status":false,"description":"<QUpdate>\r\nChecks QPlugins for updates","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"MOG_ActorHud","status":true,"description":"(v1.8) Adiciona uma Hud com os parâmetros do personagem.","parameters":{"Initial Visible":"true","Hud X-Axis":"0","Hud Y-Axis":"535","Fade Limit":"60",">> FACE ===================":"","Face Visible":"false","Face X-Axis":"55","Face Y-Axis":"100","Face Priority":"1",">> NAME ===================":"","Name Visible":"false","Name X-Axis":"5","Name Y-Axis":"20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"143","HP Meter Y-Axis":"85","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number X-Axis":"270","HP Number Y-Axis":"70","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","HP Icon Visible":"false","HP Icon Half Mode":"false","HP Icon Max Colors":"2","HP Icon Max Rows":"10","HP Icon Max Columns":"2","HP Icon X-Axis":"143","HP Icon Y-Axis":"85","HP Icon Space X":"0","HP Icon Space Y":"0","HP Icon Zoom Anime":"true",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"160","MP Meter Y-Axis":"115","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number X-Axis":"287","MP Number Y-Axis":"100","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","MP Icon Visible":"false","MP Icon Half Mode":"false","MP Icon Max Colors":"2","MP Icon Max Rows":"10","MP Icon Max Columns":"2","MP Icon X-Axis":"143","MP Icon Y-Axis":"120","MP Icon Space X":"0","MP Icon Space Y":"0","MP Icon Zoom Anime":"true",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"143","TP Meter Y-Axis":"145","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number X-Axis":"270","TP Number Y-Axis":"130","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116","TP Icon Visible":"false","TP Icon Half Mode":"false","TP Icon Max Colors":"2","TP Icon Max Rows":"10","TP Icon Max Columns":"2","TP Icon X-Axis":"143","TP Icon Y-Axis":"50","TP Icon Space X":"0","TP Icon Space Y":"0","TP Icon Zoom Anime":"true",">> EXP ===================":"","EXP Meter Visible":"true","EXP Meter X-Axis":"127","EXP Meter Y-Axis":"173","EXP Meter Angle":"0","Level Number Visible":"true","Level Number X-Axis":"65","Level Number Y-Axis":"153",">> STATES ===================":"","States Visible":"true","States X-Axis":"5","States Y-Axis":"64"}},
{"name":"MOG_BossHP","status":true,"description":"(v2.1) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"false","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"0","Layout Y-Axis":"200","BHP Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32"}},
{"name":"MOG_MapNameHud","status":true,"description":"(v1.2) Apresenta uma Hud com o nome do mapa.","parameters":{"Hud X-Axis":"500","Hud Y-Axis":"60","Name X-Axis":"80","Name Y-Axis":"15","Duration":"160","Font Size":"20","Font Italic":"false","Slide Animation":"true","Zoom Animation":"false","Zoom Text Animation":"true","Particle Animation":"true","Particles Number":"15","Circle Animation":"true","Circle X-Axis":"-120","Circle Y-Axis":"0","Circle Z-Index":"0","Circle Rotation Speed":"0.01"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"1280","screenHeight":"720","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MOG_GoldHud","status":true,"description":"(v1.5) Apresenta uma Hud com a quantidade de dinheiro.","parameters":{"Initial Visible":"true","Hud X-Axis":"1000","Hud Y-Axis":"635","Number X-Axis":"240","Number Y-Axis":"24","Fade Limit":"60"}},
{"name":"QPopup","status":true,"description":"<QPopup>\nLets you create popups in the map or on screen","parameters":{"Presets":"[]"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"-TITLE SCREEN","status":true,"description":"","parameters":{}},
{"name":"MOG_TitleLayers","status":false,"description":"(v1.0) Adiciona multiplas camadas na tela de título.","parameters":{"Screen Movement":"false","Screen Move Speed":"1","Screen Move Duration":"160","---------------------------------------------------------------------":"","L1 Visible":"true","L1 Mode":"1","L1 File Name":"Layer1","L1 Z Index":"0","L1 X-axis / Scroll":"0","L1 Y-axis / Scroll":"0","L1 Blend Mode":"0","L1 Transition Time":"0","L1 Animated":"true","L1 Frames":"4","L1 Animation Speed":"20","L2 Visible":"true","L2 Mode":"0","L2 File Name":"Layer2","L2 Z Index":"1","L2 X-axis / Scroll":"0.5","L2 Y-axis / Scroll":"0","L2 Blend Mode":"0","L2 Transition Time":"0","L2 Animated":"false","L2 Frames":"4","L2 Animation Speed":"20","L3 Visible":"false","L3 Mode":"1","L3 File Name":"Layer3","L3 Z Index":"2","L3 X-axis / Scroll":"0","L3 Y-axis / Scroll":"0","L3 Blend Mode":"0","L3 Transition Time":"0","L3 Animated":"false","L3 Frames":"4","L3 Animation Speed":"20","L4 Visible":"false","L4 Mode":"0","L4 File Name":"Layer3","L4 Z Index":"3","L4 X-axis / Scroll":"0.9","L4 Y-axis / Scroll":"0","L4 Blend Mode":"0","L4 Transition Time":"0","L4 Animated":"false","L4 Frames":"4","L4 Animation Speed":"20","L5 Visible":"false","L5 Mode":"0","L5 File Name":"Layer5","L5 Z Index":"4","L5 X-axis / Scroll":"1.1","L5 Y-axis / Scroll":"0","L5 Blend Mode":"0","L5 Transition Time":"0","L5 Animated":"false","L5 Frames":"4","L5 Animation Speed":"20","L6 Visible":"false","L6 Mode":"0","L6 File Name":"Layer6","L6 Z Index":"5","L6 X-axis / Scroll":"1.3","L6 Y-axis / Scroll":"0","L6 Blend Mode":"0","L6 Transition Time":"0","L6 Animated":"false","L6 Frames":"4","L6 Animation Speed":"20","L7 Visible":"false","L7 Mode":"0","L7 File Name":"Layer7","L7 Z Index":"6","L7 X-axis / Scroll":"1.5","L7 Y-axis / Scroll":"0","L7 Blend Mode":"0","L7 Transition Time":"0","L7 Animated":"false","L7 Frames":"4","L7 Animation Speed":"20","L8 Visible":"false","L8 Mode":"0","L8 File Name":"Layer8","L8 Z Index":"7","L8 X-axis / Scroll":"1.7","L8 Y-axis / Scroll":"0","L8 Blend Mode":"0","L8 Transition Time":"0","L8 Animated":"false","L8 Frames":"4","L8 Animation Speed":"20","L9 Visible":"false","L9 Mode":"0","L9 File Name":"Layer9","L9 Z Index":"8","L9 X-axis / Scroll":"1.9","L9 Y-axis / Scroll":"0","L9 Blend Mode":"0","L9 Transition Time":"0","L9 Animated":"false","L9 Frames":"4","L9 Animation Speed":"20","L10 Visible":"false","L10 Mode":"0","L10 File Name":"Layer10","L10 Z Index":"9","L10 X-axis / Scroll":"2.1","L10 Y-axis / Scroll":"0","L10 Blend Mode":"0","L10 Transition Time":"0","L10 Animated":"false","L10 Frames":"4","L10 Animation Speed":"20"}},
{"name":"MOG_TitleMagicCircles","status":false,"description":"(v1.0) Adiciona círculos mágicos na tela de título.","parameters":{"Circle 1 Visible":"true","Circle 1 File Name":"MCircle1","Circle 1 Z-Index":"10","Circle 1 X-Axis":"790","Circle 1 Y-Axis":"600","Circle 1 Rotation":"0.01","Circle 1 Blend Mode":"1","Circle 1 Transition Time":"0","Circle 1 Pulse Mode":"2","---------------------------------------------------------------------":"","Circle 2 Visible":"true","Circle 2 File Name":"MCircle2","Circle 2 Z-Index":"11","Circle 2 X-Axis":"790","Circle 2 Y-Axis":"600","Circle 2 Rotation":"-0.01","Circle 2 Blend Mode":"0","Circle 2 Transition Time":"0","Circle 2 Pulse Mode":"0","Circle 3 Visible":"false","Circle 3 File Name":"MCircle3","Circle 3 Z-Index":"12","Circle 3 X-Axis":"200","Circle 3 Y-Axis":"200","Circle 3 Rotation":"0.01","Circle 3 Blend Mode":"1","Circle 3 Transition Time":"0","Circle 3 Pulse Mode":"0","Circle 4 Visible":"false","Circle 4 File Name":"MCircle4","Circle 4 Z-Index":"13","Circle 4 X-Axis":"300","Circle 4 Y-Axis":"300","Circle 4 Rotation":"0.01","Circle 4 Blend Mode":"1","Circle 4 Transition Time":"0","Circle 4 Pulse Mode":"0","Circle 5 Visible":"false","Circle 5 File Name":"MCircle5","Circle 5 Z-Index":"14","Circle 5 X-Axis":"400","Circle 5 Y-Axis":"400","Circle 5 Rotation":"0.01","Circle 5 Blend Mode":"1","Circle 5 Transition Time":"0","Circle 5 Pulse Mode":"0","Circle 6 Visible":"false","Circle 6 File Name":"MCircle6","Circle 6 Z-Index":"15","Circle 6 X-Axis":"500","Circle 6 Y-Axis":"500","Circle 6 Rotation":"0.01","Circle 6 Transition Time":"0","Circle 6 Pulse Mode":"0","Circle 7 Visible":"false","Circle 7 File Name":"MCircle7","Circle 7 Z-Index":"16","Circle 7 X-Axis":"550","Circle 7 Y-Axis":"550","Circle 7 Rotation":"0.01","Circle 7 Blend Mode":"1","Circle 7 Transition Time":"0","Circle 7 Pulse Mode":"0","Circle 8 Visible":"false","Circle 8 File Name":"MCircle8","Circle 8 Z-Index":"17","Circle 8 X-Axis":"600","Circle 8 Y-Axis":"600","Circle 8 Rotation":"0.01","Circle 8 Blend Mode":"1","Circle 8 Transition Time":"0","Circle 8 Pulse Mode":"0","Circle 9 Visible":"false","Circle 9 File Name":"MCircle9","Circle 9 Z-Index":"18","Circle 9 X-Axis":"620","Circle 9 Y-Axis":"620","Circle 9 Rotation":"0.01","Circle 9 Blend Mode":"1","Circle 9 Transition Time":"0","Circle 9 Pulse Mode":"0","Circle 10 Visible":"false","Circle 10 File Name":"MCircle10","Circle 10 Z-Index":"19","Circle 10 X-Axis":"650","Circle 10 Y-Axis":"600","Circle 10 Rotation":"0.01","Circle 10 Blend Mode":"1","Circle 10 Transition Time":"0","Circle 10 Pulse Mode":"0"}},
{"name":"MOG_TitleParticles","status":true,"description":"(v2.0) Adiciona partículas na tela de título.","parameters":{"P1 Visible":"true","P1 File Name":"Particles","P1 Amount":"25","P1 Z Index":"20","P1 X Speed":"-10","P1 Y Speed":"-1","P1 Rotation Speed":"0.02","P1 Blend Mode":"1","P1 Anchor":"0","P1 Leaf Mode":"false","P1 Transition Time":"0","---------------------------------------------------------------------":"","P2 Visible":"true","P2 File Name":"Particles2","P2 Amount":"5","P2 Z Index":"21","P2 X Speed":"2","P2 Y Speed":"2","P2 Rotation Speed":"0.01","P2 Blend Mode":"0","P2 Anchor":"0","P2 Leaf Mode":"false","P2 Transition Time":"0","P3 Visible":"true","P3 File Name":"Particles3","P3 Amount":"5","P3 Z Index":"22","P3 X Speed":"0.5","P3 Y Speed":"0.5","P3 Rotation Speed":"0.006","P3 Blend Mode":"0","P3 Anchor":"0","P3 Leaf Mode":"true","P3 Transition Time":"0","P4 Visible":"false","P4 File Name":"Particles4","P4 Amount":"25","P4 Z Index":"23","P4 X Speed":"2","P4 Y Speed":"0.3","P4 Rotation Speed":"0.3","P4 Blend Mode":"1","P4 Anchor":"0","P4 Leaf Mode":"true","P4 Transition Time":"0","P5 Visible":"false","P5 File Name":"Particles5","P5 Amount":"25","P5 Z Index":"24","P5 X Speed":"4","P5 Y Speed":"0","P5 Rotation Speed":"0","P5 Blend Mode":"1","P5 Anchor":"0","P5 Leaf Mode":"false","P5 Transition Time":"0","P6 Visible":"false","P6 File Name":"Particles6","P6 Amount":"25","P6 Z Index":"25","P6 X Speed":"4","P6 Y Speed":"0","P6 Rotation Speed":"0","P6 Blend Mode":"1","P6 Anchor":"0","P6 Leaf Mode":"false","P6 Transition Time":"0"}},
{"name":"MOG_TitlePictureCom","status":true,"description":"(v1.4) Adiciona comandos em imagens no lugar da janela.","parameters":{"Title Sprite":"true","Title Sprite X-Axis":"0","Title Sprite Y-Axis":"0","Cursor Visible":"true","Cursor Wave Animation":"true","Cursor X-Axis":"8","Cursor Y-Axis":"-10","Command Pos 1":"650,460","Command Pos 2":"660,490","Command Pos 3":"665,520","Command Pos 4":"670,550","Command Pos 5":"345,498","Command Pos 6":"345,530","Command Pos 7":"0,192","Command Pos 8":"0,224","Command Pos 9":"0,256","Command Pos 10":"0,288"}},
{"name":"MOG_TitleSplashScreen","status":true,"description":"(v1.0) Adiciona logos antes da tela de título.","parameters":{"Splash Frames":"1","Slash Duration":"60","Splash Fade Duration":"2","Full Screen Mode":"false"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"OrangeOverlay","status":true,"description":"v1.1.4 - Adds overlay images to the map <OrangeOverlay>","parameters":{"Organized Folders":"true","Parallax Layer Filename":"pars","Ground Layer Filename":"grounds","Light Layer Filename":"lights","Shadow Layer Filename":"shadows","Light Opacity":"185","Quick Start":"true","Bush Region ID":"7","Fog Switch ID":"1","Light Switch ID":"2","Parallax Switch ID":"3","Shadow Switch ID":"4"}},
{"name":"YEP_GridFreeDoodads","status":true,"description":"v1.05 Place Grid-Free Doodads into your game using an\nin-game editor. Static and animated doodads can be used!","parameters":{"---General---":"","Doodads Folder":"img/doodads/","Doodads Smoothing":"false","Alphabetical Settings":"false","---Grid Snap---":"","Default Grid Snap":"false","Grid Snap Width":"48","Grid Snap Height":"48"}}
];
