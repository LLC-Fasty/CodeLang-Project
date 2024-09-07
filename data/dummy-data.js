import Category from "../models/category";
import Language from "../models/language";

export const CATEGORIES = [
  new Category("c1", "JavaScript", "#f0db4f", "#323330"),
  new Category("c2", "Python", "#4584b6", "#ffde57"),
  new Category("c3", "Java", "#007396", "#ED8B00"),
  new Category("c4", "C#", "#682876", "#ffffff"),
  new Category("c5", "Ruby", "#9B1010", "#ffffff"),
  new Category("c6", "PHP", "#8993be", "#232531"),
  new Category("c7", "Go", "#00ADD8", "#000000"),
  new Category("c8", "Swift", "#f05138", "#ffffff"),
  new Category("c9", "Kotlin", "#7F52FF", "#FFFFFF"),
  new Category("c10", "TypeScript", "#007acc", "#ffffff"),
];

export const LANGUAGES = [
  new Language(
    "l1",
    ["c1"],
    "React JS",
    "Facebook",
    2013,
    "Very Popular",
    "React is a JavaScript library for building user interfaces, known for its efficiency in rendering and component-based architecture.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/reactjs.png?t=2024-08-27T06%3A42%3A30.290Z",
    ["npm install react", "import React from 'react'"],
    ["Web", "Mobile"]
  ),

  new Language(
    "l2",
    ["c1"],
    "Vue JS",
    "Evan You",
    2014,
    "Popular",
    "Vue is a progressive JavaScript framework used for building user interfaces and single-page applications, with a flexible architecture.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/vuejs.png?t=2024-08-27T06%3A43%3A03.756Z",
    ["npm install vue", "import Vue from 'vue'"],
    ["Web"]
  ),

  new Language(
    "l4",
    ["c1", "c10"],
    "Next JS",
    "Vercel",
    2016,
    "Very Popular",
    "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/nextjs.png?t=2024-08-27T06%3A42%3A43.307Z",
    ["npm install next", "import Next from 'next'"],
    ["Web"]
  ),

  new Language(
    "l5",
    ["c1", "c10"],
    "Angular JS",
    "Google",
    2010,
    "Very Popular",
    "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Angularjs.png?t=2024-08-27T07%3A13%3A33.941Z",
    ["npm install @angular/core", "import { Component } from '@angular/core'"],
    ["Web"]
  ),

  new Language(
    "l6",
    ["c2"],
    "Django",
    "Adrian Holovaty, Simon Willison",
    2005,
    "Popular",
    "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/django.png?t=2024-08-27T11%3A23%3A25.405Z",
    ["pip install django", "import django"],
    ["Web", "Desktop"]
  ),

  new Language(
    "l7",
    ["c2"],
    "Pyramid",
    "Agendaless Consulting",
    2010,
    "Popular",
    "Pyramid is a lightweight, scalable Python web framework, suitable for both small applications and large enterprise projects.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/pyramid.png?t=2024-08-27T11%3A27%3A30.820Z",
    ["pip install pyramid", "import pyramid"],
    ["Web"]
  ),

  new Language(
    "l8",
    ["c2"],
    "FastAPI",
    "Sebastián Ramírez",
    2018,
    "Rising",
    "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/FastAPIicon.png?t=2024-08-27T11%3A27%3A06.870Z",
    ["pip install fastapi", "import fastapi"],
    ["Web", "APIs"]
  ),

  new Language(
    "l9",
    ["c2"],
    "Tornado",
    "Facebook",
    2009,
    "Popular",
    "Tornado is a Python web framework and asynchronous networking library, originally developed for building scalable web services.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/tornado.webp?t=2024-08-27T11%3A30%3A43.904Z",
    ["pip install tornado", "import tornado"],
    ["Web", "APIs"]
  ),

  new Language(
    "l10",
    ["c2"],
    "Flask",
    "Armin Ronacher",
    2010,
    "Popular",
    "Flask is a lightweight WSGI web application framework in Python, known for its simplicity and flexibility.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Flask.png?t=2024-08-27T11%3A31%3A38.288Z",
    ["pip install flask", "import flask"],
    ["Web"]
  ),

  new Language(
    "l11",
    ["c2"],
    "Bottle",
    "Marcel Hellkamp",
    2009,
    "Simple",
    "Bottle is a fast, simple, and lightweight WSGI micro web-framework for Python, making it ideal for small applications and prototyping.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Bottle.png?t=2024-08-27T11%3A33%3A23.978Z",
    ["pip install bottle", "import bottle"],
    ["Web"]
  ),

  new Language(
    "l12",
    ["c3"],
    "Spring",
    "Rod Johnson",
    2002,
    "Very Popular",
    "Spring is a powerful, feature-rich framework for building Java applications, particularly enterprise-level and microservices.",
    ["Hibernate", "Struts", "JavaServer Faces (JSF)", "Vaadin"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Spring.png?t=2024-08-27T11%3A36%3A47.745Z",
    ["mvn install spring-boot-starter", "import org.springframework"],
    ["Web", "Enterprise"]
  ),

  new Language(
    "l13",
    ["c3"],
    "Grails",
    "Grails Foundation",
    2006,
    "Popular",
    "Grails is a powerful web framework for the Groovy language, often used with Java to build scalable, high-performance applications.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Grails.png?t=2024-08-27T11%3A38%3A52.812Z",
    ["mvn install grails", "import org.grails"],
    ["Web", "Enterprise"]
  ),

  new Language(
    "l14",
    ["c4"],
    "ASP.NET",
    "Microsoft",
    2002,
    "Popular",
    "ASP.NET is a robust web framework for building dynamic web applications and services with .NET and C#.",
    ["Blazor", "Xamarin", "Nancy"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/ASPdotNet.png?t=2024-08-27T11%3A42%3A12.979Z",
    ["nuget install Microsoft.AspNetCore", "using Microsoft.AspNetCore"],
    ["Web", "Enterprise"]
  ),

  new Language(
    "l15",
    ["c5"],
    "Ruby on Rails",
    "David Heinemeier Hansson",
    2005,
    "Popular",
    "Ruby on Rails is a server-side web application framework written in Ruby, known for its convention over configuration and ease of use.",
    ["Sinatra", "Hanami", "Padrino"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/RubyonRails.png",
    ["gem install rails", "require 'rails'"],
    ["Web"]
  ),

  new Language(
    "l16",
    ["c6"],
    "Laravel",
    "Taylor Otwell",
    2011,
    "Popular",
    "Laravel is a PHP web framework known for its elegant syntax, rich feature set, and ease of use for building modern web applications.",
    ["Symfony", "CodeIgniter", "Yii"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Laravel.png?t=2024-08-27T11%3A45%3A20.182Z",
    [
      "composer create-project laravel/laravel",
      "use IlluminateSupportFacadesRoute",
    ],
    ["Web"]
  ),

  new Language(
    "l17",
    ["c7"],
    "Go",
    "Google",
    2009,
    "Popular",
    "Go, also known as Golang, is a statically typed, compiled programming language designed at Google that is syntactically similar to C.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Go.png?t=2024-08-27T11%3A45%3A31.542Z",
    ["go get", "import 'fmt'"],
    ["Web", "System Programming"]
  ),

  new Language(
    "l18",
    ["c8"],
    "Vapor",
    "Tanner Nelson",
    2016,
    "Rising",
    "Vapor is a modern, lightweight framework for building web applications and APIs in Swift.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Vapor.png?t=2024-08-27T11%3A47%3A57.650Z",
    ["swift package init --type executable", "import Vapor"],
    ["Web", "APIs"]
  ),

  new Language(
    "l19",
    ["c9"],
    "Ktor",
    "JetBrains",
    2018,
    "Rising",
    "Ktor is an asynchronous framework for creating microservices and web applications in Kotlin.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Ktor.png?t=2024-08-27T11%3A54%3A48.293Z",
    ["gradle install ktor", "import io.ktor.application"],
    ["Web", "APIs"]
  ),

  new Language(
    "l20",
    ["c10"],
    "NestJS",
    "Kamil Myśliwiec",
    2017,
    "Rising",
    "NestJS is a progressive Node.js framework for building efficient and scalable server-side applications, heavily inspired by Angular.",
    [],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/NestJS.png?t=2024-08-27T11%3A55%3A04.846Z",
    ["npm install @nestjs/core", "import { Module } from '@nestjs/common'"],
    ["Web", "APIs"]
  ),

  new Language(
    "l21",
    ["c8"],
    "Kitura",
    "IBM",
    2015,
    "Popular",
    "Kitura is a Swift web framework and HTTP server, designed for building web services and REST APIs.",
    ["Vapor", "Perfect", "SwiftNIO"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Kitura.png?t=2024-08-27T11%3A57%3A15.050Z",
    ["swift package init --type executable", "import Kitura"],
    ["Web", "APIs"]
  ),

  new Language(
    "l22",
    ["c8"],
    "Perfect",
    "PerfectlySoft Inc.",
    2015,
    "Popular",
    "Perfect is a powerful, full-featured server-side Swift framework, ideal for creating high-performance applications.",
    ["Vapor", "Kitura", "SwiftNIO"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Perfect.png?t=2024-08-27T12%3A00%3A18.366Z",
    ["swift package init --type executable", "import Perfect"],
    ["Web", "APIs"]
  ),

  new Language(
    "l23",
    ["c8"],
    "SwiftNIO",
    "Apple Inc.",
    2018,
    "Rising",
    "SwiftNIO is a low-level Swift framework that provides the fundamental building blocks for developing network applications.",
    ["Vapor", "Kitura", "Perfect"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/swiftNIO.png?t=2024-08-27T12%3A01%3A40.793Z",
    ["swift package init --type executable", "import NIO"],
    ["Web", "System Programming"]
  ),

  new Language(
    "l24",
    ["c8"],
    "Hummingbird",
    "Adam Fowler",
    2020,
    "Emerging",
    "Hummingbird is a lightweight and flexible web server framework for Swift, inspired by SwiftNIO.",
    ["Vapor", "SwiftNIO", "Kitura"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Hummingbird.png?t=2024-08-28T08%3A47%3A35.659Z",
    ["swift package init --type executable", "import Hummingbird"],
    ["Web", "APIs"]
  ),

  new Language(
    "l25",
    ["c5"],
    "Sinatra",
    "Blake Mizerany",
    2007,
    "Popular",
    "Sinatra is a lightweight and flexible web application framework in Ruby, providing minimal effort for building simple web applications.",
    ["Ruby on Rails", "Padrino", "Hanami"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Sinatra.png?t=2024-08-28T08%3A48%3A05.653Z",
    ["gem install sinatra", "require 'sinatra'"],
    ["Web"]
  ),

  new Language(
    "l26",
    ["c5"],
    "Padrino",
    "Nathan Esquenazi",
    2010,
    "Moderately Popular",
    "Padrino is a Ruby web framework built on top of Sinatra, offering additional features and tools for more complex applications.",
    ["Sinatra", "Ruby on Rails", "Hanami"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Padrino.png?t=2024-08-28T08%3A49%3A07.507Z",
    ["gem install padrino", "require 'padrino'"],
    ["Web"]
  ),

  new Language(
    "l27",
    ["c5"],
    "Hanami",
    "Luca Guidi",
    2014,
    "Rising",
    "Hanami is a modern Ruby web framework focused on simplicity, speed, and security, with a lightweight and modular design.",
    ["Ruby on Rails", "Sinatra", "Padrino"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Hanami.png?t=2024-08-28T08%3A53%3A00.176Z",
    ["gem install hanami", "require 'hanami'"],
    ["Web"]
  ),

  new Language(
    "l28",
    ["c5"],
    "Ruby Grape",
    "Intridea, Inc.",
    2010,
    "Popular",
    "Grape is a REST-like API framework for Ruby, designed to run on Rack or complement existing web application frameworks such as Rails and Sinatra.",
    ["Sinatra", "Ruby on Rails", "Hanami"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Grape.png?t=2024-08-28T08%3A54%3A23.748Z",
    ["gem install grape", "require 'grape'"],
    ["APIs", "Web"]
  ),

  new Language(
    "l29",
    ["c5"],
    "Ramaze",
    "Michael Fellinger",
    2007,
    "Less Known",
    "Ramaze is a simple and modular Ruby web framework, designed to be minimalistic and extensible.",
    ["Sinatra", "Padrino", "Hanami"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Ramaze.png?t=2024-08-28T08%3A57%3A41.038Z",
    ["gem install ramaze", "require 'ramaze'"],
    ["Web"]
  ),

  new Language(
    "l30",
    ["c7"],
    "Beego",
    "Beego Community",
    2012,
    "Popular",
    "Beego is a full-featured web framework for Go, offering a range of functionalities such as RESTful support, MVC architecture, and an ORM for database interactions.",
    ["Gin", "Revel", "Echo"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/beego.png?t=2024-08-28T08%3A59%3A25.303Z",
    [
      "go get -u github.com/beego/beego/v2",
      "import 'github.com/beego/beego/v2'",
    ],
    ["Web", "APIs"]
  ),

  new Language(
    "l31",
    ["c7"],
    "Revel",
    "Revel Community",
    2013,
    "Popular",
    "Revel is a high-productivity web framework for Go, designed to make it easy to build robust web applications with built-in tools for routing, validation, and testing.",
    ["Gin", "Beego", "Echo"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/revelhat.png?t=2024-08-28T09%3A00%3A40.023Z",
    ["go get -u github.com/revel/revel", "import 'github.com/revel/revel'"],
    ["Web"]
  ),

  new Language(
    "l32",
    ["c7"],
    "Echo",
    "Labstack",
    2015,
    "Popular",
    "Echo is a high-performance, minimalist web framework for Go, known for its simplicity, efficiency, and middleware support.",
    ["Gin", "Beego", "Revel"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Echo.png?t=2024-08-28T09%3A01%3A58.494Z",
    [
      "go get -u github.com/labstack/echo/v4",
      "import 'github.com/labstack/echo/v4'",
    ],
    ["Web", "APIs"]
  ),

  new Language(
    "l33",
    ["c7"],
    "Fiber",
    "Fenny",
    2020,
    "Rising",
    "Fiber is an Express-inspired web framework for Go, designed to be both simple and fast, making it ideal for developing web applications and APIs.",
    ["Gin", "Echo", "Beego"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Fiber.png?t=2024-08-28T09%3A02%3A59.584Z",
    [
      "go get -u github.com/gofiber/fiber/v2",
      "import 'github.com/gofiber/fiber/v2'",
    ],
    ["Web", "APIs"]
  ),

  new Language(
    "l34",
    ["c7"],
    "Buffalo",
    "Mark Bates",
    2015,
    "Popular",
    "Buffalo is a Go web framework designed to help developers quickly build and deploy web applications, with a focus on developer productivity.",
    ["Gin", "Revel", "Echo"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Buffalo.png?t=2024-08-28T09%3A05%3A45.441Z",
    [
      "go get -u github.com/gobuffalo/buffalo",
      "import 'github.com/gobuffalo/buffalo'",
    ],
    ["Web", "APIs"]
  ),

  new Language(
    "l35",
    ["c7"],
    "Martini",
    "Codegangsta",
    2013,
    "Less Known",
    "Martini is a lightweight web framework for Go, known for its simplicity and ability to handle small applications with minimal overhead.",
    ["Gin", "Beego", "Echo"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Martini.png?t=2024-08-28T09%3A10%3A40.101Z",
    [
      "go get -u github.com/go-martini/martini",
      "import 'github.com/go-martini/martini'",
    ],
    ["Web"]
  ),

  new Language(
    "l36",
    ["c6"],
    "Symfony",
    "Fabien Potencier",
    2005,
    "Very Popular",
    "Symfony is a high-performance PHP framework for web applications, providing reusable components and a robust architecture for enterprise-level projects.",
    ["Laravel", "Zend Framework", "CodeIgniter"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/symfony.png?t=2024-08-28T09%3A11%3A46.966Z",
    [
      "composer create-project symfony/website-skeleton",
      "use SymfonyComponentHttpFoundationRequest",
    ],
    ["Web"]
  ),

  new Language(
    "l37",
    ["c6"],
    "CodeIgniter",
    "EllisLab",
    2006,
    "Popular",
    "CodeIgniter is a lightweight PHP framework known for its small footprint and ease of use, suitable for rapid application development.",
    ["Laravel", "Symfony", "Zend Framework"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/CodeIgniter.png?t=2024-08-28T09%3A12%3A22.737Z",
    [
      "composer create-project codeigniter4/appstarter",
      "use CodeIgniterController",
    ],
    ["Web"]
  ),

  new Language(
    "l38",
    ["c6"],
    "Yii",
    "Qiang Xue",
    2008,
    "Popular",
    "Yii is a high-performance PHP framework that supports rapid application development with a focus on security, performance, and extensibility.",
    ["Laravel", "Symfony", "CodeIgniter"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/yii.png?t=2024-08-28T09%3A13%3A08.939Z",
    ["composer create-project yiisoft/yii2-app-basic", "use yiiwebController"],
    ["Web"]
  ),

  new Language(
    "l39",
    ["c6"],
    "Zend Framework",
    "Zend Technologies",
    2006,
    "Popular",
    "Zend Framework is a robust PHP framework designed for enterprise-level applications, offering a wide range of components and services.",
    ["Laravel", "Symfony", "CodeIgniter"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Zend.png?t=2024-08-28T09%3A15%3A20.742Z",
    [
      "composer require zendframework/zendframework",
      "use ZendMvcControllerAbstractActionController",
    ],
    ["Web"]
  ),

  new Language(
    "l40",
    ["c6"],
    "Phalcon",
    "Andres Gutierrez",
    2012,
    "Moderately Popular",
    "Phalcon is a PHP framework delivered as a C extension, providing high performance and low overhead for web application development.",
    ["Laravel", "Symfony", "CodeIgniter"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Phalcon.png?t=2024-08-28T09%3A16%3A11.438Z",
    ["composer require phalcon/devtools", "use PhalconMvcController"],
    ["Web"]
  ),

  new Language(
    "l41",
    ["c6"],
    "Slim",
    "Josh Lockhart",
    2010,
    "Moderately Popular",
    "Slim is a micro PHP framework that is lightweight and flexible, designed for creating small and simple web applications and APIs.",
    ["Laravel", "Symfony", "CodeIgniter"],
    "https://zjppruaqgutqtsjsriyn.supabase.co/storage/v1/object/public/Frameworks%20Logo/Slim.png?t=2024-08-28T09%3A19%3A29.071Z",
    ["composer require slim/slim", "use SlimFactoryAppFactory"],
    ["Web", "APIs"]
  ),
];
