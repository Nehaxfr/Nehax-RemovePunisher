exports.mod = () => {
    logger.logSuccess("[MOD] Removing Frank Castle aka Punisher... poor guy...");
    let cached_location = fileIO.readParsed(db.user.cache.locations)
    let settings = require("../setting.json");
    if (settings.remove_factory_day){
        logger.logSuccess("[MOD] Removing Frank from factory day time")
        for (let bot_wave of cached_location.factory4_day.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault"
            }
        }
    }
    if (settings.remove_factory_night){
        logger.logSuccess("[MOD] Removing Frank from factory night time")
        for (let bot_wave of cached_location.factory4_night.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault"
            }
        }
    }
    if (settings.remove_customs){
        logger.logSuccess("[MOD] Removing Frank from customs")
        for (let bot_wave of cached_location.bigmap.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault"
            }
        }
    }
    if (settings.remove_reserve){
        logger.logSuccess("[MOD] Removing Frank from reserve");
        for (let bot_wave of cached_location.rezervbase.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault";
            }
        }
    }
    if (settings.remove_shoreline){
        logger.logSuccess("[MOD] Removing Frank from shoreline");
        for (let bot_wave of cached_location.shoreline.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault";
            }
        }
    }
    if (settings.remove_interchange){
        logger.logSuccess("[MOD] Removing Frank from interchange");
        for (let bot_wave of cached_location.interchange.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault";
            }
        }
    }
    if (settings.laboratory){
        logger.logSuccess("[MOD] Removing Frank from laboratory");
        for (let bot_wave of cached_location.laboratory.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault";
            }
        }
    }
    if (settings.woods){
        logger.logSuccess("[MOD] Removing Frank from woods");
        for (let bot_wave of cached_location.woods.base.waves) {
            if (bot_wave.WildSpawnType == "followerGluharSnipe"){
                bot_wave.WildSpawnType = "assault";
            }
        }
    }
    fileIO.write(db.user.cache.locations, cached_location);

}