import pool from './dbConfig';

pool.query('DROP TABLE IF EXISTS Sales');
pool.query('DROP TABLE IF EXISTS Products');
pool.query('DROP TABLE IF EXISTS Users');
