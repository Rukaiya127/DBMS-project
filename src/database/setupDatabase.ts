import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Database Setup
export  const setupDatabase = async () => {
  const db = await open({
    filename: './events.db',
    driver: sqlite3.Database,
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    date TEXT,
    location TEXT,
    description TEXT
  )`);

  return db;
};