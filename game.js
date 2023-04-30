const gameState = {
	score: 0
}

function preload () {
	this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png');
	this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png');
	this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png');
	this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
	this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png');
  this.load.image('bald', './resources/images/bald.jpg');
  this.load.image('banana', './resources/images/banana.jpg');
  this.load.image('bull', './resources/images/bull.jpg');
  this.load.image('cafe', './resources/images/cafe.jpg');
  this.load.image('cape', './resources/images/cape.jpg');
  this.load.image('card', './resources/images/card.jpg');
  this.load.image('city', './resources/images/city.jpg');
  this.load.image('colors', './resources/images/colors.jpg');
  this.load.image('dress', './resources/images/dress.jpg');
  this.load.image('eiffel', './resources/images/eiffel.jpg');
  this.load.image('fringe', './resources/images/fringe.jpg');
  this.load.image('gold', './resources/images/gold.jpg');
  this.load.image('hair', './resources/images/hair.jpg');
  this.load.image('klimt', './resources/images/klimt.jpg');
  this.load.image('lady', './resources/images/lady.jpg');
  this.load.image('madame', './resources/images/madame.jpg');
  this.load.image('magritte', './resources/images/magritte.jpg');
  this.load.image('man', './resources/images/man.jpg');
  this.load.image('marilyn', './resources/images/marilyn.jpg');
  this.load.image('mona', './resources/images/mona.jpg');
  this.load.image('munch', './resources/images/munch.jpg');
  this.load.image('pattern', './resources/images/pattern.jpg');
  this.load.image('pearl', './resources/images/pearl.jpg');
  this.load.image('picasso', './resources/images/picasso.jpg');
  this.load.image('pipe', './resources/images/pipe.jpg');
  this.load.image('portrait', './resources/images/portrait.jpg');
  this.load.image('ships', './resources/images/ships.jpg');
  this.load.image('soup', './resources/images/soup.jpg');
  this.load.image('stars', './resources/images/stars.jpg');
  this.load.image('sunflower', './resources/images/sunflower.jpg');
  this.load.image('umbrella', './resources/images/umbrella.jpg');
  this.load.image('vincent', './resources/images/vincent.jpg');
  this.load.image('walk', './resources/images/walk.jpg');
  
}

function create () {

  this.pictures = ['bald', 'banana', 'bull', 'cafe', 'cape', 'card', 'city', 'colors', 'dress', 'eiffel', 'fringe', 'gold', 'hair', 'klimt', 'lady', 'madame', 'magritte', 'man', 'marilyn', 'mona', 'munch', 'pattern', 'pearl', 'picasso', 'pipe', 'portrait', 'ships', 'soup', 'stars', 'sunflower', 'umbrella', 'vincent', 'walk'];

  this.paintings = this.add.group();

  this.cursors = this.input.keyboard.createCursorKeys();

  // this.div = document.createElement('div');
  this.snapHistory = [];
	
  const painting1 = this.add.image(300, Math.random() * 100 + 100, Phaser.Math.RND.pick(this.pictures)).setScale(Math.random() * 0.2 + 0.1);
  const painting2 = this.add.image(Math.random() * 50 + 500, Math.random() * 100 + 100, Phaser.Math.RND.pick(this.pictures)).setScale(Math.random() * 0.2 + 0.1);
  const painting3 = this.add.image(Math.random() * 50 + 700, Math.random() * 100 + 100, Phaser.Math.RND.pick(this.pictures)).setScale(Math.random() * 0.2 + 0.1);
  this.paintings.add(painting1);
  this.paintings.add(painting2);
  this.paintings.add(painting3);
  
  this.platforms = this.add.group();
  this.legs = this.add.group();
 
	// this.platforms.create(320, 250, 'platform').setScale(2, 0.5).refreshBody();

  const plat1 = this.add.rectangle(175, 250, 250, 20, 0xFFF000).setOrigin(0);
  this.physics.add.existing(plat1);
  this.platforms.add(plat1);
  
  const leg1 = this.add.rectangle((plat1.x + 20), plat1.y + 30, 20, 360 - (plat1.y + 30), 0xFFF000).setOrigin(0);
  this.physics.add.existing(leg1);
  this.legs.add(leg1);

  const leg2 = this.add.rectangle((plat1.x + plat1.width - 40), plat1.y + 30, 20, 360 - (plat1.y + 30), 0xFFF000).setOrigin(0);
  this.physics.add.existing(leg2);
  this.legs.add(leg2);

  const plat2 = this.add.rectangle(555, 200, 200, 20, 0xFFF000).setOrigin(0);
  this.physics.add.existing(plat2);
  this.platforms.add(plat2);

  const leg3 = this.add.rectangle((plat2.x + 20), plat2.y + 30, 20, 360 - (plat2.y + 30), 0xFFF000).setOrigin(0);
  this.physics.add.existing(leg3);
  this.legs.add(leg3);

  const leg4 = this.add.rectangle((plat2.x + plat2.width - 40), plat2.y + 30, 20, 360 - (plat2.y + 30), 0xFFF000).setOrigin(0);
  this.physics.add.existing(leg4);
  this.legs.add(leg4);

  ///

  this.bottomBoundary = this.physics.add.staticGroup();
  const bottomLine = this.add.rectangle(-1280, 360, 2560, 20, 0x000000).setOrigin(0);
  this.bottomBoundary.add(bottomLine);

  const chameleonOutlineData = [
    'AAAAAAAAAAAAA',
    'A...........A',
    'A...........A',
    'A...........A',
    'A...........A',
    'AAAAAAAAAAAAA'
  ];

  const chameleonTransparentFillData = [
    '...........',
    '...........',
    '...........',
    '...........'
  ];

  const chameleonFillData = [
    'BBBBBBBBBBB',
    'BBBBBBBBBBB',
    'BBBBBBBBBBB',
    'BBBBBBBBBBB',
  ];

  
  this.textures.generate('chameleonOutline', { data: chameleonOutlineData, pixelWidth: 6 });
  this.textures.generate('chameleonTransparentFill', { data: chameleonTransparentFillData, pixelWidth: 6 });
  this.textures.generate('chameleonFill', { data: chameleonFillData, pixelWidth: 6 });

  // this.chameleon = this.physics.add.image(400, 200, 'chameleonOutline').setScale(1).setAlpha(1);
  
  this.chameleonOutline = this.add.image(0, 0, 'chameleonOutline').setScale(1).setAlpha(1);
  this.chameleonSnapshot = this.add.image(0, 0, 'chameleonTransparentFill').setScale(1).setAlpha(1);
  this.chameleonFill = this.add.image(0, 0, 'chameleonFill').setScale(1).setAlpha(1);
  this.chameleon = this.add.container(300, 200, [this.chameleonOutline, this.chameleonSnapshot, this.chameleonFill]);
  
  //  A Container has a default size of 0x0, so we need to give it a size before enabling a physics
  //  body or it'll be given the default body size of 64x64.
  this.chameleon.setSize(80, 36);

  this.physics.world.enable(this.chameleon);

  this.isChameleonDisguised = false;
  this.doesChameleonMatchBackground = false;
  this.isChameleonTransitioning = false;

	gameState.scoreText = this.add.text(320, 340, 'Score: 0', { fontSize: '15px', fill: '#000' })

	// this.player = this.physics.add.sprite(320, 200, 'codey').setScale(.5);
	
	// this.physics.add.collider(this.player, platforms)

  this.physics.add.collider(this.chameleon, this.platforms);
  this.physics.add.collider(this.chameleon, this.bottomBoundary);
  this.physics.add.collider(this.platforms, this.bottomBoundary);
  this.physics.add.collider(this.platforms, this.legs);
  this.physics.add.collider(this.legs, this.bottomBoundary);

}

function update () {

  // console.log(this.platforms.children.entries[0].x, this.platforms.children.entries[0].width )
  if ((this.platforms.children.entries[0].x >= 0 && this.platforms.children.entries[0].x <= 2)) {
    console.log("Now")
    createPlatform(this);
    
  }

  if (this.platforms.children.entries[0].x < -this.platforms.children.entries[0].width) {
    // createPlatform(this);
    console.log("Deleting");
    this.platforms.children.entries[0].destroy();
    // createPlatform(this);
    console.log(this.platforms);
  }
  // console.log(this.chameleon.body.touching.down);

  if (this.cursors.right.isDown) {
    this.doesChameleonMatchBackground = false;
    if (this.chameleon.x < 300) {
      if (this.isChameleonDisguised) {
        this.chameleon.x += 1;
      } else {
        this.chameleon.x += 2.5;
      }
    } else {
      if (this.isChameleonDisguised) {
        this.paintings.children.entries.forEach(painting => {
          painting.x -= 1;
        })
        this.platforms.children.entries.forEach(platform => {
          platform.x -= 1;
        })
        this.legs.children.entries.forEach(leg => {
          leg.x -= 1;
        })
      } else {
        this.paintings.children.entries.forEach(painting => {
          painting.x -= 2.5;
        })
        this.platforms.children.entries.forEach(platform => {
          platform.x -= 2.5;
        })
        this.legs.children.entries.forEach(leg => {
          leg.x -= 2.5;
        })
      }
    }
  } else if (this.cursors.left.isDown && this.chameleon.x > this.chameleon.width / 2) {
    this.doesChameleonMatchBackground = false;
    if (this.isChameleonDisguised) {
      this.chameleon.x -= 1;
    } else {
      this.chameleon.x -= 2.5;
    }
  } else if (!this.cursors.right.isDown && !this.cursors.left.isDown && this.isChameleonDisguised && !this.doesChameleonMatchBackground && this.chameleon.body.touching.down) {
    if (!this.isChameleonTransitioning) {
      this.tweens.add({
        targets: this.chameleonSnapshot,
        duration: 500,
        alpha: 0,
        onStart: () => {
          this.isChameleonTransitioning = true;
        },
        onComplete: () => {
          // this.isChameleonDisguised = true;
          const textureManager = this.textures;
          const chameleonX = this.chameleon.x;
          const chameleonY = this.chameleon.y;
          const chameleonWidth = this.chameleon.width - 16;
          const chameleonHeight = this.chameleon.height - 12 ;
          game.renderer.snapshotArea(chameleonX - chameleonWidth/2 , chameleonY - chameleonHeight/2, chameleonWidth, chameleonHeight, image =>
            {
              image.style.width = '98px';
              image.style.height = '30px';
              if (textureManager.exists('chameleonSnapshot'))
              {
                textureManager.remove('chameleonSnapshot');
              }
              textureManager.addImage('chameleonSnapshot', image);
              this.chameleonSnapshot.setTexture('chameleonSnapshot');
              this.chameleonSnapshot.setAlpha(1);
            });
          this.isChameleonTransitioning = false;
          this.doesChameleonMatchBackground = true;
        }
      })
    }
  }

  if (this.cursors.up.isDown && this.chameleon.body.touching.down) {
    this.chameleon.body.setVelocityY(-400);
  }

  if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
    console.log(this.isChameleonDisguised, this.doesChameleonMatchBackground);
    this.isChameleonTransitioning = true;
    if (!this.isChameleonDisguised) {
      this.tweens.add({
        targets: this.chameleonFill,
        duration: 1500,
        alpha: 0,
        onComplete: () => {
          this.isChameleonDisguised = true;
          const textureManager = this.textures;
          const chameleonX = this.chameleon.x;
          const chameleonY = this.chameleon.y;
          const chameleonWidth = this.chameleon.width - 16;
          const chameleonHeight = this.chameleon.height - 12 ;
          game.renderer.snapshotArea(chameleonX - chameleonWidth/2 , chameleonY - chameleonHeight/2, chameleonWidth, chameleonHeight, image =>
            {
              image.style.width = '98px';
              image.style.height = '30px';
              if (textureManager.exists('chameleonSnapshot'))
              {
                textureManager.remove('chameleonSnapshot');
              }
              textureManager.addImage('chameleonSnapshot', image);
              this.chameleonSnapshot.setTexture('chameleonSnapshot');
            });
          this.isChameleonTransitioning = false;
          this.doesChameleonMatchBackground = true;
        }
      })
    } else {
      this.tweens.add({
        targets: this.chameleonFill,
        duration: 1500,
        alpha: 1,
        onComplete: () => {
          this.chameleonSnapshot.setTexture('chameleonTransparentFill');
          this.isChameleonDisguised = false;
          this.doesChameleonMatchBackground = false;
          this.isChameleonTransitioning = false;
        }
      })
    }
  }
}

function createPlatform(scene) {
  const randomNumberY = Math.random() * 100;
  const plat = scene.add.rectangle(Math.random() * 50 + 600, 150 + randomNumberY, Math.random() * 150 + 200, 20, 0xFFF000).setOrigin(0);
  scene.physics.add.existing(plat);
  scene.platforms.add(plat);

  const leg1 = scene.add.rectangle((plat.x + 20), plat.y + 30, 20, 360 - (plat.y + 30), 0xFFF000).setOrigin(0);
  scene.physics.add.existing(leg1);
  scene.legs.add(leg1);

  const leg2 = scene.add.rectangle((plat.x + plat.width - 40), plat.y + 30, 20, 360 - (plat.y + 30), 0xFFF000).setOrigin(0);
  scene.physics.add.existing(leg2);
  scene.legs.add(leg2);

}

const config = {
  type: Phaser.AUTO,
  width: 640,
	height: 360,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 800},
			enableBody: true,
			debug: true,
		}
	},
  scene: {
		preload,
		create,
		update
	}
}

const game = new Phaser.Game(config)
