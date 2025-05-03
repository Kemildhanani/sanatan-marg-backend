const { connectToDB } = require('../config/db');


const getCollection = async () => {
    const db = await connectToDB();
    return db.collection('wallpapers');
};

const createWallpaper = async (wallpaperData) => {
    const collection = await getCollection();
    const result = await collection.insertOne(wallpaperData);
    return result;
};

const getAllWallpapers = async () => {
    const collection = await getCollection();
    const wallpapers = await collection.find().toArray();
    return wallpapers;
};

const getWallpaperById = async (id) => {
    const collection = await getCollection();
    const wallpaper = await collection.findOne({ _id: id });
    return wallpaper;
};

const updateWallpaper = async (id, wallpaperData) => {
    const collection = await getCollection();
    const result = await collection.updateOne({ _id: id }, { $set: wallpaperData });
    return result;
};

const deleteWallpaper = async (id) => {
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: id });
    return result;
};

module.exports = {
    createWallpaper,
    getAllWallpapers,
    getWallpaperById,
    updateWallpaper,
    deleteWallpaper
};
