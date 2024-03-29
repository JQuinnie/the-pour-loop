---
title: Debugging Ruby with Pry
date: '2022-02-19'
tags: ['debugging', 'development', 'IDE', 'pry', 'Ruby', 'sinatra', 'snippets', 'tech']
drat: false
summary: Debugging Ruby with Pry and Byebug
layout: PostSimple
---

Hello friends! I thought I might talk about something different today, something that I've recently learned while developing in Ruby. I'm definitely a novice here and definitely trying to learn it as I go.

My go-to integrated development environment (IDE) is [VS Code](https://code.visualstudio.com/), I've got a whole slew of key bindings and shortcuts to make it efficient for my liking and for it to not be worth the additional cognitive load to switch to another IDE say like [RubyMine](https://www.jetbrains.com/ruby/), while developing in Ruby. Ruby is not my first language but I am starting to work more in Ruby. The issue I have is that I cannot figure out how to link the IDE debugger of VS Code to work so naturally in Ruby, I've tried many times and failed many times. The projects I work on are not simple template starter projects therefore making it even more complicated to spin up, especially if you throw containers and security and etc...

So what could I do? I could switch development to RubyMine (RM). RM does have a simplier, more intuitive way to hook up to bundler and execute the program. The drawback is that I can't navigate around RM fast enough and also that I am too stubborn to learn both VS Code and RM.

Good thing recently I found a sort of ~~happy~~ workable medium. I am using good ole Pry, but the supercharged with Byebug version, which allows you to 'next' and 'continue' your debugging session without starting over. These commands are immensely helpful while thinking in the flow and also more similar to what you could get with an interactive debugging session.

Furthermore, to improve how manual Pry is, I've also gone ahead and added User Snippets in VS Code to at least make calling these 'breakpoints' faster.

## Pry with Byebug

Source: [Pry-Byebug](https://github.com/deivid-rodriguez/pry-byebug)

- Add pry-byebug globally >> `gem install 'pry-byebug`
  - or add it in your gemfile >> `gem pry-byebug` && `bundle install`

Let's try it with a [Sinatra](http://sinatrarb.com/) App!

### Set up Sinatra

- install Sinatra >> `gem install sinatra`
- create the app file >> `touch app.rb`
- in your `app.rb` add the lines below:

```ruby
  require 'sinatra'

  get '/' do
    a = 'You'
    "Hello World, Hello #{a}!"
  end
```

- start the app >> `ruby app.rb`
- open browser and go to `localhost:4567`
- see your app load!

### Add Pry with byebug

- Add `pry-byebug` to the app and set binding

```ruby
  require 'sinatra'
  require 'pry-byebug'

  get '/' do
    a = 'You'
    binding.pry
    "Hello World, Hello #{a}!"
  end
```

- start the app >> `ruby app.rb`
- open browser and go to `localhost:4567`
- see that the app will stop in terminal at the `binding.pry`
- update in terminal >> `a = Me`
- continue the debugging session in terminal >> `continue`
- browser should load with new message `"Hello World, Hello Me!"`

isn't that cool?!

### Add User Snippet to VS Code

Let's simplify all the typing using Pry and add some user snippets.

- go to VS Code menu: `Code > Preferences > User Snippets`
- select `ruby.json`
- add these to the file:

```json
{
  "require pry-byebug": {
    "prefix": "rpb",
    "body": ["require 'pry-byebug'"],
    "description": "Requires pry-byebug"
  },
  "pry-byebug binding": {
    "prefix": "pry",
    "body": ["binding.pry"],
    "description": "Adds a pry binding"
  }
}
```

- the first item `require pry-byebug` will allow you to add the requirement at the top of the file by only typing `rpb` (or whichever letters/words that will allow you to remember).
- the second item `pry-byebug binding` will allow you to add `binding.pry` when you type `pry`.

## Sinatra with Bundler

What if you want to run Sinatra using [Bundler](https://bundler.io/guides/sinatra.html) and gemfile?

- create a gemfile >> `bundle init`

```gemfile
# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.1.0'

# gem "rails"
gem 'pry-byebug'
gem 'puma'
gem 'sinatra'
```

_Puma seems to be needed to run later with Bundler._

- add a `config.ru` for bundler to load Sinatra

```ruby
require 'rubygems'
require 'bundler'

Bundler.require

require './app'
run Sinatra::Application
```

- in your previous `app.rb`, you won't need to require 'sinatra' or 'pry-byebug' at the top since its already included in the gemfile.
- run the app >> `bundle exec rackup`
- debug per usual with your new snippet `pry`

🌶🌶 SPICY!🌶🌶
