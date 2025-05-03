const express = require('express');
const { createWallpaper, getAllWallpapers, getWallpaperById, updateWallpaper, deleteWallpaper } = require('../models/wallpaper');

const router = express.Router();


router.post('/wallpaper/create', async (req, res) => {
    try {
        const { title, url, description } = req.body;
        const wallpaperData = { title, url, description };
        const result = await createWallpaper(wallpaperData);
        res.status(201).json(result);
    } catch (error) {
    
        res.status(500).json({ message: 'Failed to add wallpaper', error });
    }
});


router.get('/wallpapers', async (req, res) => {
    try {
        const wallpapers = await getAllWallpapers();
        res.status(200).json(wallpapers);
    } catch (error) {
        console.log("-------------------------------");
        console.log("error", error);
        console.log("-------------------------------");
        res.status(500).json({ message: 'Failed to fetch wallpapers', error });
    }
});


router.get('/wallpapers/:id', async (req, res) => {
    try {
        const wallpaper = await getWallpaperById(req.params.id);
        if (wallpaper) {
            res.status(200).json(wallpaper);
        } else {
            res.status(404).json({ message: 'Wallpaper not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch wallpaper', error });
    }
});


router.put('/wallpapers/:id', async (req, res) => {
    try {
        const { title, url, description } = req.body;
        const wallpaperData = { title, url, description };
        const result = await updateWallpaper(req.params.id, wallpaperData);
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: 'Wallpaper updated successfully' });
        } else {
            res.status(404).json({ message: 'Wallpaper not found or no changes made' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update wallpaper', error });
    }
});


router.delete('/wallpapers/:id', async (req, res) => {
    try {
        const result = await deleteWallpaper(req.params.id);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Wallpaper deleted successfully' });
        } else {
            res.status(404).json({ message: 'Wallpaper not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete wallpaper', error });
    }
});

module.exports = router;
