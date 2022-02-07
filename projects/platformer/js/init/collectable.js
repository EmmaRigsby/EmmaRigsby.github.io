(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        createCollectable(type.db, 650, 625)
        createCollectable(type.max, 400, 425)
        createCollectable(type.steve, 750, 275, 6, 1)
        createCollectable(type.grace, 200, 140, 6, 0.3)
        createCollectable(type.kennedi, 700, 50)
        createCollectable(type.db, 300, 430)
        createCollectable(type.db, 200, 500)
        createCollectable(type.db, 400, 500)
        createCollectable(type.db, 200, 50)
        createCollectable(type.db, 615, 350)
        createCollectable(type.kennedi, 870, 550)
        // example: 
        //createCollectable(type.steve, 200, 170, 6, 0.7);
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);