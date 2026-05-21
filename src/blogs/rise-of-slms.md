---
title: "Stop Using the Azure Portal to Clear Your DLQ (Do This in Python Instead)"
date: "2026-05-21"
description: "Clear you DLQ fastest way possible."
tags: ["DevOps", "Azure", "Python"]
cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
---

You select the dead-lettered messages in the Azure Portal... 

You hit "Resend"... 

You take a sip of coffee, expecting the queue to drain.... 

Then, you watch in horror as every single message fails again. Congratulations, your DLQ is now twice as big.

<p align="center"> 
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hxNXh0dHlhcWxza3IzdDNiNHc2Z2dwNWQ4M2IwajF1NjRweDh5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iJJ6E58EttmFqgLo96/giphy.gif" alt="The Desription" width="200" height="240"> 
</p>

## The Root Cause: Custom Properties

I've recently come across such issue with my azurr portal. After an hour of debugging, i found the culprit: malformed custom properties. Azure's native UI doesn't let you inject these in bulk. The portal gives you exactly one highly depressing option: fix and send them manually. One. By. One.

## The Portal UI is a Trap

If you rely on the Azure interface to fix this, your night looks like this:

- Copying the DLQ message body to your clipboard.

- Manually adding the required custom properties to the message envelope.

- Hitting send.

- Waiting to see if it processes.

- Repeating this 500 times while questioning your life choices.

Trust me, I know exactly how it feels to stay awake all night doing mindless data entry to clear a queue. We aren't doing that anymore. Code is superior.


## UI vs Code

This is where code become superior. you can overcome the hassle of

- copy pasting the DLQ message body
- adding the custom properties to the message individually.
- sending the message and wait till it's reprocessed. 

by just coding the solution. trust me i know how to feels to stay awake whole night to do the same shitty task to process the messages one  by one. So Now you have the ultimate solution for it !

![hacking](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjgwOWJqY2JnczZhMXB1cGFjc2NzY2JkdDJ2bWQ2YW9sZTF6MmdoYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13HgwGsXF0aiGY/giphy.gif)

## The Hero Code!

I've written a python code which will resend the messages to the desired queue, and add the desired custom properites. but for that you'd have to gather the few values digging the azure portal and drop it in you env variables for it to work. 

> "The best model is the smallest one that solves your problem."

Next time, we will look at how to fine-tune Mistral-7B for niche domain tasks.
