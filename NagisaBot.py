import sys

import settings
import discord
from discord.ext import commands
import message_handler

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from events.base_event              import BaseEvent
from events                         import *
from multiprocessing                import Process

bot = commands.Bot(command_prefix = settings.COMMAND_PREFIX)

@bot.event
async def on_ready():
    """print message when client is connected"""
    currentDT = DT.datetime.now()
    print('------')
    print (currentDT.strftime("%Y-%m-%d %H:%M:%S"))
    print("Logged in as")
    print(bot.user.name)
    print(bot.user.id)
    await bot.change_presence(activity = discord.Game(name = settings.COMMAND_PREFIX + "help"))
    print('------')

@bot.command()
async def catCount(ctx, myCat:str):
    '''
    Return the number of channels in that category
    '''
    currGuild = ctx.guild
    currGuildCats = currGuild.categories
    for (idx, cat) in enumerate(currGuildCats):
        if cat.name == myCat:
            ctx.send(len(cat.text_channels))

bot.run(settings.BOT_TOKEN, reconnect = True)