import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const setupDatabase = async () => {
  const db = await open({
    filename: './events.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      date TEXT,
      location TEXT,
      description TEXT
    )
  `);

  return db;
};

app.get('/events', async (req, res) => {
  const db = await setupDatabase();
  const events = await db.all('SELECT * FROM events');
  res.json(events);
});

app.post('/events', async (req, res) => {
  const { name, date, location, description } = req.body;
  const db = await setupDatabase();
  await db.run('INSERT INTO events (name, date, location, description) VALUES (?, ?, ?, ?)', [
    name,
    date,
    location,
    description,
  ]);
  res.status(201).json({ message: 'Event added successfully' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
