exports.mod = (mod_data) => {
    logger.logSuccess('[MOD] Removing Frank Castle aka The Punisher... poor guy...');

    let cached_location = fileIO.readParsed(db.user.cache.locations); // Read cached locations.json file

    const mapArray = {
        removeFrom_customs: 'bigmap',
        removeFrom_factory_day: 'factory4_day',
        removeFrom_factory_night: 'factory4_night',
        removeFrom_interchange: 'interchange',
        removeFrom_labs: 'laboratory',
        removeFrom_reserve: 'rezervbase',
        removeFrom_shoreline: 'shoreline',
        removeFrom_woods: 'woods'
    };

    for (const thisMapSetting in mapArray) {
        const bsgMapName = mapArray[thisMapSetting];
        if (mod_data.settings[thisMapSetting]) { // If the setting is toggled true
            for (let bot_wave of cached_location[bsgMapName].base.waves) {
                if (bot_wave.WildSpawnType == 'followerGluharSnipe') {
                    bot_wave.WildSpawnType = 'assault' // Replace punisher with a scav
                }
            }
            if (mod_data.settings.showRemoveMessage) {
                logger.logSuccess('[MOD] Removing Frank from ' + thisMapSetting.replace('removeFrom_', '').replace('_', ' '));
            }
        }
    }

    fileIO.write(db.user.cache.locations, cached_location, true); // Write changes back to cache
}