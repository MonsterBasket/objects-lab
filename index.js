let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {[key]:value})
}
function deleteFromDriverByKey(driver, key){
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
    let newDriver = driver;
    delete newDriver[key];
    return newDriver;
}