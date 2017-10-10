// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]"}},
{"name":"QMovement","status":true,"description":"<QMovement>\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"45\",\"Offset X\":\"6\",\"Offset Y\":\"-50\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"false"}},
{"name":"QM+CollisionMap","status":true,"description":"<QMCollisionMap>\nQMovement Addon: Adds image collision map feature","parameters":{"Scan Size":"4","Folder":"img/parallaxes/"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QInput","status":true,"description":"<QInput>\r\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"#z\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"#insert\", \"#x\", \"#num0\", \"$B\"]","Menu":"[\"#esc\", \"$Y\"]","Shift":"[\"#shift\",\"#cancel\",\"$X\",\"#g\"]","Control":"[\"#ctrl\", \"#alt\"]","Tab":"[\"#tab\",\"#h\",\"#V\"]","Pageup":"[\"#pageup\", \"#q\", \"$L1\"]","Pagedown":"[\"#pagedown\", \"#w\", \"$R1\"]","Left":"[\"#left\", \"#num4\", \"$LEFT\",\"#a\"]","Right":"[\"#right\", \"#num6\", \"$RIGHT\",\"#d\"]","Up":"[\"#up\", \"#num8\", \"$UP\",\"#w\"]","Down":"[\"#down\", \"#num2\", \"$DOWN\",\"#s\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
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
{"name":"QABS","status":true,"description":"<QABS>\r\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"false","Aim with Mouse":"false","Aim with Analog":"false","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"true","Loot Touch Trigger":"true","Gold Icon":"321","Level Animation":"200","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"30","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"#space\\\",\\\"Gamepad Input\\\":\\\"$R2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"12\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#v\\\",\\\"Gamepad Input\\\":\\\"$L2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"13\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#g\\\",\\\"Gamepad Input\\\":\\\"$R3\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"17\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#q\\\",\\\"Gamepad Input\\\":\\\"$L1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"7\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#e\\\",\\\"Gamepad Input\\\":\\\"$R1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"9\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#1\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"2\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#2\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"21\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#3\\\",\\\"Gamepad Input\\\":\\\"\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"22\\\"}\"]"}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\r\nQABS Addon: Adds a skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"true"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>\nQABS Addon: Adds hp gauges to enemies","parameters":{"Gauge Configs":"","Gauge Width":"48","Gauge Height":"4","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"-48","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"GameFont","Font Size":"14","Font Color":"#ffffff","Boss Text Font":"GameFont","Boss Font Size":"18","Boss Font Color":"#ffffff"}},
{"name":"QUpdate","status":false,"description":"<QUpdate>\nChecks QPlugins for updates","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"MOG_ActorHud","status":true,"description":"(v1.8) Adiciona uma Hud com os parâmetros do personagem.","parameters":{"Initial Visible":"true","Hud X-Axis":"0","Hud Y-Axis":"535","Fade Limit":"60",">> FACE ===================":"","Face Visible":"false","Face X-Axis":"55","Face Y-Axis":"100","Face Priority":"1",">> NAME ===================":"","Name Visible":"false","Name X-Axis":"5","Name Y-Axis":"20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"143","HP Meter Y-Axis":"85","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number X-Axis":"270","HP Number Y-Axis":"70","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","HP Icon Visible":"false","HP Icon Half Mode":"false","HP Icon Max Colors":"2","HP Icon Max Rows":"10","HP Icon Max Columns":"2","HP Icon X-Axis":"143","HP Icon Y-Axis":"85","HP Icon Space X":"0","HP Icon Space Y":"0","HP Icon Zoom Anime":"true",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"160","MP Meter Y-Axis":"115","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number X-Axis":"287","MP Number Y-Axis":"100","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","MP Icon Visible":"false","MP Icon Half Mode":"false","MP Icon Max Colors":"2","MP Icon Max Rows":"10","MP Icon Max Columns":"2","MP Icon X-Axis":"143","MP Icon Y-Axis":"120","MP Icon Space X":"0","MP Icon Space Y":"0","MP Icon Zoom Anime":"true",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"143","TP Meter Y-Axis":"145","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number X-Axis":"270","TP Number Y-Axis":"130","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116","TP Icon Visible":"false","TP Icon Half Mode":"false","TP Icon Max Colors":"2","TP Icon Max Rows":"10","TP Icon Max Columns":"2","TP Icon X-Axis":"143","TP Icon Y-Axis":"50","TP Icon Space X":"0","TP Icon Space Y":"0","TP Icon Zoom Anime":"true",">> EXP ===================":"","EXP Meter Visible":"true","EXP Meter X-Axis":"127","EXP Meter Y-Axis":"173","EXP Meter Angle":"0","Level Number Visible":"true","Level Number X-Axis":"65","Level Number Y-Axis":"153",">> STATES ===================":"","States Visible":"true","States X-Axis":"5","States Y-Axis":"64"}},
{"name":"MOG_BossHP","status":true,"description":"(v2.1) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"false","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"0","Layout Y-Axis":"200","BHP Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32"}},
{"name":"MOG_MapNameHud","status":true,"description":"(v1.2) Apresenta uma Hud com o nome do mapa.","parameters":{"Hud X-Axis":"500","Hud Y-Axis":"60","Name X-Axis":"80","Name Y-Axis":"15","Duration":"160","Font Size":"20","Font Italic":"false","Slide Animation":"true","Zoom Animation":"false","Zoom Text Animation":"true","Particle Animation":"true","Particles Number":"15","Circle Animation":"true","Circle X-Axis":"-120","Circle Y-Axis":"0","Circle Z-Index":"0","Circle Rotation Speed":"0.01"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"1280","screenHeight":"720","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MOG_GoldHud","status":true,"description":"(v1.5) Apresenta uma Hud com a quantidade de dinheiro.","parameters":{"Initial Visible":"true","Hud X-Axis":"1000","Hud Y-Axis":"635","Number X-Axis":"240","Number Y-Axis":"24","Fade Limit":"60"}},
{"name":"Alpha_ABS","status":false,"description":"ABS \"Alpha\"","parameters":{"Enemy Dead Switch":"B","After Dead Map":"0","Cast Animation":"0","Level Up Animation":"49","Revive Animation":"45","Use default cast SE":"true","Auto loot enemies":"false","UI visibility control":"true","UI position control":"true","Force English":"false"}},
{"name":"QPopup","status":true,"description":"<QPopup>\nLets you create popups in the map or on screen","parameters":{"Presets":"[]"}}
];
