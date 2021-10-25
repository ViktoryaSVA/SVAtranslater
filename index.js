require('dotenv').config();
const { Telegraf } = require('telegraf');
const mysqlClient = require('./config/db_backend');
const connectMongoose = require('./config/connection');
const translatorBOT = require('./app');

const bot = new Telegraf(process.env.BOT_TOKEN);
const { qwertyArray } = require('./keyBoard');

translatorBOT(bot, qwertyArray, mysqlClient, connectMongoose);
