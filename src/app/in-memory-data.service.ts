import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let gallery = [
      {
        id: 1,
        featured: 1,
        name: "Spiritual Me",
        client: "App Store",
        bulletPoints:[{name:"role", value:"Creator"},
                      {name:"stores", value:"App Store, Google Play, Amazon Underground"},
                      {name:"year", value:"2016"}
        ],
        type: "Mobile App",
        description: ["Spiritual Me",
          "Developed Spiritual Me App (Lifestyle app) that guides users through a series of exercises allowing them to practice meditation, whilst being inspired by nature, art and spiritual quotes. The exercises range from drawing to games of physics. Launched in the Android and Apple AppStore which ranked #1 in its category - Responsible for all phases, from design, writing code, testing, debugging and deployment - Localized the app for seven languages - Implemented in-app-purchases and push notification",
          "Technology",
          ["Objective-C" , "Haxe", "openFL"]],
        technology: ["Objective-C" , "Haxe", "openFL"],
        techIcon: [{name:"Apple", link:"devicon-apple-original"},
          {name:"android", link:"devicon-android-plain"},
          {name:"photoshop", link:"devicon-photoshop-plain"},
          {name:"illustrator", link:"devicon-illustrator-plain"}],
        imageFull: ["../assets/images/gallery/slides/spiritual-me/iphone-perspective-screen-1.jpg","app-main-img-vertical border-bottom"],
        imageThumb: "../assets/images/gallery/slides/spiritual-me/sm-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"Spiritual Me",
                  link:"https://www.youtube.com/embed/B9n1lJ_FLNM?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        quotes:[{cite:"byPusspot - Nov 23, 2016, App Store user", title:"Simply relaxing.... ",
                text:"I've been meditating for about 5 years now. I like the simplistic techniques the app offers which I believe are beneficial for both beginners and pros. I also like that you can track your progress. Love the creative part as well!",
                image:"../assets/images/gallery/slides/spiritual-me/app-store-icon.jpg"}],
        carousel:[{ title:"Spiritual Me", image:"../assets/images/gallery/slides/spiritual-me/screenshots1-3.jpg"},
          { title:"Spiritual Me", image:"../assets/images/gallery/slides/spiritual-me/screenshots4-5.jpg"},
        ],
        awards:"",
        urls: [{ title:"View on the App Store",
                 image:"../assets/images/gallery/slides/spiritual-me/app_store.png",
                 link: "https://itunes.apple.com/us/app/spiritual-me-guided-meditations/id985365789?ls=1&mt=8"
              },
              { title:"View on Google Play",
                image:"../assets/images/gallery/slides/spiritual-me/google_play.png",
                link: "https://play.google.com/store/apps/details?id=com.spiritualmeapp.masters"
              }],
        statements:[{text:"Spiritual Me app is localized 7 different languages.",
                    image:""}],
      },
      {
        id: 2,
        featured: 1,
        type: "website",
        name: "Union Gospel Mission",
        client: "UGM Dallas",
        bulletPoints:[{name:"role", value:"Front-end Developer"},
          {name:"agency", value:"Russ Reid"},
          {name:"year", value:"2016"}
        ],
        description: [ "Union Gospel Mission",
                       "Union Gospel Mission is a nonprofit organization with the goal to feed, clothe and house the homeless people of Dallas. The organization was in need of a mobile friendly website where there staff could easily updated and add new content. I took on the challenge of developing there new responsive website in one month. In the developed of there website I used WordPress, PHP, CSS3 and LESS.  PhpStorm was my IDE of choice. My job was also making sure the front-end development stay true to the graphic design comps for mobile, tablet and desktop.","Technology",
          ["JavaScript", "HTML5", "CSS3", "LESS", "Gulp", "WordPress", "PHP"]],
        technology: ["WordPress", "HTML5", "CSS3", "LESS", "Gulp", "PHP", "Bootstrap"],
        techIcon: [{name:"WordPress", link:"devicon-wordpress-plain"},
          {name:"less", link:"devicon-less-plain-wordmark"},
          {name:"CSS3", link:"devicon-css3-plain-wordmark"},
          {name:"PHP", link:"devicon-php-plain"},
          {name:"Bootstrap", link:"devicon-bootstrap-plain-wordmark"}],
        imageFull: ["../assets/images/gallery/slides/ugm/ugm.jpg","app-main-img-horiz"],
        imageThumb: "../assets/images/gallery/slides/ugm/ugm2-thumb.jpg",
        imageDescription: "",
        awards:"",
        urls: [{ title:"View Site",
          image:"",
          link:"https://www.ugmdallas.org"}],
        statements:[{text:'"I used PhpStorm and live watch for rapid a development process"',
          image:""}],
      }, {
        id: 3,
        name: "Google vote",
        client: "Google",
        type: "Rich Media Ads",
        bulletPoints:[{name:"role", value:"Rich Media Ad Developer"},
          {name:"agency", value:"Axis Studios"},
          {name:"year", value:"2016"}
        ],
        description: [ "Google vote",
          "#EveryoneIn2016 is the Google ad campaign for the 2016 Elections. The campaign brought awareness of the registration rules, and voting deadlines of the users current locations. The Ad campaign was in English and Spanish. I was responsible for the coding, animation, QA, and deployment with DoubleClick Creative Solutions. The campaign included 10 unique ads with 5 different sizes. I developed the ads in groups with modular code and made use of gulp for automating task.",
          "Technology",
          ["JavaScript", "HTML5", "CSS3", "SASS", "Gulp"]],
        technology: ["JavaScript", "HTML5", "CSS3", "SASS", "Gulp"],
        statements:[{text:"",
          image:""}],
        techIcon: [{name:"Javascript", link:"devicon-javascript-plain"},
          {name:"HTML5", link:"devicon-html5-plain-wordmark"},
          {name:"Gulp", link:"devicon-gulp-plain"},
          {name:"CSS3", link:"devicon-css3-plain-wordmark"},
          {name:"Chrome", link:"devicon-chrome-plain-wordmark"}],
        imageFull: ["../assets/images/gallery/slides/axis-studios/google-vote.jpg","app-main-img-vertical"],
        imageThumb: "../assets/images/gallery/slides/axis-studios/google-vote-thumb.jpg",
        imageDescription: "",
        carousel:[{ title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/Countdown_To_Vote-Flip_Clock_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/Absentee_voting_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/Countdown_register-Alt_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/Countdown_register-Days_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/Early_voting_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/FindPollingPlace_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/VoterID_1_EN_320x480_HTML5/index.html"},
          { title:"Google", iframe:"../assets/images/gallery/slides/axis-studios/ads/google/WhosOnBallot_1_EN_320x480_HTML5/index.html"},
        ]
      },
      {
        id: 4,
        featured: 1,
        name: "Truth",
        client: "72andSunny",
        type: "Rich Media Ads",
        bulletPoints:[{name:"role", value:"Rich Media Ad Developer"},
          {name:"agency", value:"72andSunny & Axis Studios"},
          {name:"year", value:"2016"}
        ],
        urls:[{ title:"Ad of the Day",
          link:"http://www.adweek.com/news/advertising-branding/ad-day-millennial-smokers-get-left-out-truths-new-fomo-filled-ads-173136"}],
        iframeFull: ["../assets/images/gallery/slides/axis-studios/ads/truth/Truth_SquadLess_WATCH_1_EN_300x600_HTML5/index.html",
                    "app-iframe-300x600 drop-shadow"],
        description: [ "Truth Ad Campaign",
          "The Truth #Squadless campaign focuses on the fact that people who habitually smoke cigarettes have significantly less cash than people who don't. My job was to program the mobile ads and keep the feel of animation consistent with the video ad the campaign. I use JavaScript and CSS3 for the animation. Sublime Text 2 was my IDE of choice. Chrome Dev Tools was an important part of the development process.",
          "Technology",
          ["JavaScript", "HTML5", "CSS3", "SASS", "Gulp"]],
        technology: ["CSS3", "JavaScript", "HTML5", "SASS", "Gulp"],
        statements:[{text:"",
          image:""}],
        techIcon: [ {name:"CSS3", link:"devicon-css3-plain"},
          {name:"Javascript", link:"devicon-javascript-plain"},
          {name:"HTML5", link:"devicon-html5-plain-wordmark"},
          {name:"Gulp", link:"devicon-gulp-plain"},
          {name:"Chrome", link:"devicon-chrome-plain-wordmark"}],
        imageThumb: "../assets/images/gallery/slides/axis-studios/truth-thumb.jpg",
        imageDescription: "",

      },
      {
        id: 5,
        name: "Teavana Tea",
        client: "Starbucks",
        type: "Rich Media Ads",
        bulletPoints:[{name:"role", value:"Rich Media Ad Developer"},
          {name:"agency", value:"Axis Studios"},
          {name:"year", value:"2016"}
        ],
        iframeFull: ["../assets/images/gallery/slides/axis-studios/ads/starbucks/Starbucks_Teavana_BerrySangria_1_EN_300x600_HTML5/index.html",
                    "app-iframe-300x600 drop-shadow"],
        description: [ "Teavana Ad Campaign",
          "Teavana® Berry Sangria is a Starbucks ad campaign for there summer Herbal Iced Tea. I programed and animated the ads to show the refreshing feel of ice and berries stirring in a clear cup. I created a sequence of images on a sprite sheet and programed the animation with JavaScript. One of the challenges was optimizing the file size of the animation without completely losing the image quality.",
          "Technology",
          ["JavaScript", "HTML5", "CSS3", "SASS", "Gulp"]],
        technology: ["CSS3", "JavaScript", "HTML5", "SASS", "Gulp"],
        statements:[{text:"",
          image:""}],
        techIcon: [ {name:"HTML5", link:"devicon-html5-plain"},
          {name:"Javascript", link:"devicon-javascript-plain"},
          {name:"CSS3", link:"devicon-css3-plain-wordmark"},
          {name:"Gulp", link:"devicon-gulp-plain"},
          {name:"Chrome", link:"devicon-chrome-plain-wordmark"}],
        imageThumb: "../assets/images/gallery/slides/axis-studios/teavana-thumb.jpg",
        imageDescription: "",

      },
      { id: 6,
        name: "Audi Financial Course",
        client: "Audi Academy",
        type: "Website",
        bulletPoints:[{name:"role", value:"Senior Developer"},
          {name:"agency", value:"CraneMorley"},
          {name:"year", value:"2015"}
        ],
        description: [ "Audi Financial Course",
          '"Reading the Audi Dealer Financial Statement” is one of several Onboarding & Coaching applications developed for the Audi Academy. This course is approximately 2 hours long with eight modules. Each course includes videos, audio content, interactive charts, calculators, drag and drop diagrams, knowledge checks and a final exam. This course was developed with AngularJS and bootstrap. It was programed with a modular framework to easily add or update content.',
          "Technology",
          ["AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "Git"]],
        technology: ["jQuery", "AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "CSS3", "LESS", "Git"],
        techIcon: [ {name:"AngularJS", link:"devicon-angularjs-plain"},
          {name:"HTML5", link:"devicon-html5-plain-wordmark"},
          {name:"Javascript", link:"devicon-javascript-plain"},
          {name:"Bootstrap", link:"devicon-bootstrap-plain"}],
        imageFull: ["../assets/images/gallery/slides/cranemorley/audi-full.jpg","app-main-img-horiz"],
        imageThumb: "../assets/images/gallery/slides/cranemorley/audi-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:"",
        statements:[{text:"",
          image:""}],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/cranemorley/audi-carousel-img2.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/audi-carousel-img3.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/audi-carousel-img1.jpg"}]
      },
      { id: 7,
        featured: 1,
        name: "Yamaha Boats",
        client: "Yamaha",
        type: "Website",
        bulletPoints:[{name:"role", value:"Senior Developer"},
          {name:"agency", value:"CraneMorley"},
          {name:"year", value:"2015"}
        ],
        description: [ "Yamaha Boats Course",
          "The 2015 Yamaha 242 and 240 Boat Series was one of three walk-around apps developed for Yamaha. The app is designed to enhance customer’s showroom experience by helping them explore the new innovation features of the product. The walk-around is a HTML5 Mobile App built with Bootstrap and Angular JS.",
          "Technology",
          ["AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "Git"]],
        technology: ["jQuery", "AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "CSS3", "LESS", "Git"],
        techIcon: [ {name:"AngularJS", link:"devicon-angularjs-plain"},
          {name:"HTML5", link:"devicon-html5-plain-wordmark"},
          {name:"Javascript", link:"devicon-javascript-plain"},
          {name:"Bootstrap", link:"devicon-bootstrap-plain"}],
        imageFull: ["../assets/images/gallery/slides/cranemorley/yamaha-full.jpg","app-main-img-vertical"],
        imageThumb: "../assets/images/gallery/slides/cranemorley/yamaha-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:"",
        statements:[{text:"",
          image:""}],
        urls: [{ title:"View Project",
          link:"../YMA242-240/index.html"}],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/cranemorley/yamaha-carousel-img1.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/yamaha-carousel-img2.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/yamaha-carousel-img3.jpg"}]
      },
      { id: 8,
        name: "Motorcycle Safety",
        client: "MSF",
        type: "Website",
        bulletPoints:[{name:"role", value:"Senior Developer"},
          {name:"agency", value:"CraneMorley"},
          {name:"year", value:"2015"}
        ],
        description: [ "MSF Basic eCourse",
          "The MSF Basic eCourse is a highly interactive 3-hr. online program that provides riders of all skill levels with the basics of motorcycling. The program includes animated graphics, photos, voice-overs and videos to illustrate the lessons. The MSF course was built with AngularJS and bootstrap using a MVVM framework.",
          "Technology",
          ["AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "Git"]],
        technology: ["jQuery", "AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "CSS3", "LESS", "Git"],
        techIcon: [ {name:"AngularJS", link:"devicon-angularjs-plain"},
          {name:"HTML5", link:"devicon-html5-plain-wordmark"},
          {name:"Javascript", link:"devicon-javascript-plain"},
          {name:"Bootstrap", link:"devicon-bootstrap-plain-wordmark"}],
        imageFull: ["../assets/images/gallery/slides/cranemorley/msf-full.jpg","app-main-img-vertical"],
        imageThumb: "../assets/images/gallery/slides/cranemorley/msf-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:"",
        statements:[{text:"",
          image:""}],
        urls: [{ title:"Basic eCourse Enrollment",
          link:"https://www.msf-usa.org/ecourse.aspx"}],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/cranemorley/msf-carousel-img1.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/msf-carousel-img2.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/msf-carousel-img3.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cranemorley/msf-carousel-img4.jpg"}]
      }, {
        id: 9,
        featured: 1,
        name: "Noog Network Games",
        client: "Noog Network LLC",
        type: "ios App",
        bulletPoints:[{name:"role", value:"App Developer"},
          {name:"store", value:"App Store"},
          {name:"year", value:"2015"}
        ],
        description: [ "NoogNetwork",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          [ "XCode", "OpenFl", "Haxe", "Git"]],
        technology: ["OpenFl", "Haxe", "XCode", "Git"],
        techIcon: [{ name:"Apple", link:"devicon-apple-original"},
          {name:"illustrator", link:"devicon-illustrator-plain"}],
        imageFull: ["../assets/images/gallery/slides/noog-network/noog-full.jpg","app-main-img-horiz"],
        imageThumb: "../assets/images/gallery/slides/noog-network/noog-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"Noog Network",
          link:"https://www.youtube.com/embed/fHk4r90rStk?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        awards:"",
        statements:[{text:"",
          image:""}],
        urls: [{title:"Play the Game",
                link: "../assets/games/noog/index.html"},
          { title:"View on the App Store",
          image:"../assets/images/gallery/slides/noog-network/btn-download-on-the-appstore.png",
          link: "https://itunes.apple.com/us/app/the-noog-network/id1000772961"
        }],
        carousel:[{ title:"Noog Network", image:"../assets/images/gallery/slides/noog-network/noog-carousel-img1.jpg"},
          { title:"Noog Network", image:"../assets/images/gallery/slides/noog-network/noog-carousel-img2.jpg"}],
        quotes:[{cite:"by Splatterpainter01 - Jul 18, 2016, App Store user", title:"Nostalgia - ",
          text:"This game feels like an old computer game that I'd play for hours. A lot of the areas are closed but I assume they'll be open soon. I love the feel and the humor of this game and I am proud to support it.",
          image:"../assets/images/gallery/slides/spiritual-me/app-store-icon.jpg"}]
      },
      {
        id: 10,
        name: "Disney’s Story App",
        client: "Disney",
        type: "Rich Media Ads",
        bulletPoints:[{name:"role", value:"Front-end Developer"},
          {name:"agency", value:"MOcean"},
          {name:"year", value:"2013"}
        ],
        description:["Disney’s Story",
          "Developed rich media ads for Disney’s Story iPhone App, Responsible for storyboarding, creating animated transitions and optimizing the design for file size",
          "Technology",
          ["GreenSock Animation Platform (GSAP)", "HTML5", "CSS3"]],
        technology: ["GreenSock Animation Platform (GSAP)", "HTML5", "CSS3"],
        iframeFull: ["./assets/images/gallery/slides/mocean/ads/index.html",
          "app-iframe-300x250 drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/mocean/story-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:"",
        statements:[{text:"",
          image:""}],
        techIcon: [ {name:"HTML5", link:"devicon-html5-plain"},
            {name:"CSS3", link:"devicon-css3-plain"} ],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/mocean/story-carousel-img1.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/mocean/story-carousel-img2.jpg"}]
      },
      {
        id: 11,
        featured: 1,
        name: "Tron Legacy website",
        client: "Disney",
        type: "Website",
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"BLT Communication"},
          {name:"year", value:"2011"}
        ],
        description:["Tron Legacy",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/blt/tron-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/blt/tron-thumb.jpg",
        imageDescription: "",
        awards:"",
        urls: [{ title:"View Tron Project",
                  link: "http://disney.com.au/tron/"}],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/blt/tron-carousel-img1.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/blt/tron-carousel-img2.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/blt/tron-carousel-img3.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/blt/tron-carousel-img4.jpg"}]
      },
      {
        id: 12,
        name: "Twilight Saga: Eclipse",
        client: "Summit Entertainment",
        type: "Website",
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"The Cimarron Group"},
          {name:"year", value:"2010"}
        ],
        description: [ "Twilight Saga",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash", "jQuery", "PHP", "FLEX"]],
        technology: ["Flash", "jQuery", "PHP", "FLEX"],
        imageFull: ["../assets/images/gallery/slides/cimarrongroup/eclipse-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/cimarrongroup/eclipse-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:"",
        urls: [],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/cimarrongroup/eclipse-carousel-img1.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cimarrongroup/eclipse-carousel-img2.jpg"},
          { title:"Audi", image:"../assets/images/gallery/slides/cimarrongroup/eclipse-carousel-img3.jpg"},]
      },
      {
        id: 13,
        featured: 1,
        name: "The Simpsons Movie",
        client: "FOX",
        role: "Senior Flash Developer",
        type: "Website",
        year: 2007,
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"65 Media"},
          {name:"year", value:"2007"}
        ],
        description: [ "The Simpsons Movie",
                      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
                      ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/65media/simpsons-full.jpg",
          "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/65media/simpsons-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"The Simpsons Movie",
          link:"https://www.youtube.com/embed/pYOadl1agyQ?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        awards:["webby"],
        urls: [{ title:"webby awards",
          image:"../assets/images/gallery/slides/65media/Dual_2008.png",
          link: "http://webbyawards.com/winners/2008/web/general-website/movie-film/simpsons-movie/"}],
      },
      {
        id: 14,
        name: "Terminator Ambush",
        client: "FOX",
        role: "Senior Flash Developer",
        type: "Website",
        year: 2008,
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"65 Media"},
          {name:"year", value:"2007"}
        ],
        description: [ "Terminator Ambush",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/65media/ambush-full.jpg",
          "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/65media/ambush-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"Terminator Ambush",
          link:"https://www.youtube.com/embed/DVJy_uCmis0?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        carousel:[{ title:"Audi", image:"../assets/images/gallery/slides/65media/ambush-carousel-img1.jpg"}],
        awards:[],
        urls: []
      },
      {
        id: 15,
        name: "Jim Carrey",
        client: "Jim Carrey",
        role: "Senior Flash Developer",
        type: "Website",
        year: 2009,
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"65 Media"},
          {name:"year", value:"2007"}
        ],
        description: [ "Jim Carrey",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/65media/jim-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/65media/jim-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"Jim Carrey",
          link:"https://www.youtube.com/embed/puEDnjpANVY?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        awards:[],
        urls: [{ title:"webby awards",
                  image:"../assets/images/gallery/slides/65media/Dual_2010.png",
          link: "http://webbyawards.com/winners/2010/web/general-website-categories/celebrityfan/jim-carrey-official-site/"}],

      },
      {
        id: 16,
        name: "mummy",
        client: "mummy",
        role: "Senior Flash Developer",
        type: "Website",
        year: 2008,
        bulletPoints:[{name:"role", value:"Senior Flash Developer"},
          {name:"agency", value:"65 Media"},
          {name:"year", value:"2007"}
        ],
        description: [ "mummy",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/65media/mummy-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/65media/mummy-thumb.jpg",
        imageDescription: "",
        videos:[{ title:"Jim Carrey",
          link:"https://www.youtube.com/embed/pJTqZtVMofk?rel=0&amp;controls=0&amp;showinfo=0"
        }],
        awards:[],
      },
      {
        id: 17,
        name: "Modernica.com",
        client: "Modernica",
        type: "Website",
        bulletPoints:[{name:"role", value:"Owner/Developer"},
          {name:"agency", value:"Adrian Ramirez"},
          {name:"year", value:"2005"}
        ],
        description: ["Modernica",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/modernica/modernica-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/modernica/modernica-thumb.jpg",
        imageDescription: [ ,"", []],
        videos:"",
        awards:[],
        urls: []
      },
      {
        id: 18,
        name: "Go Portfolio",
        client: "",
        type: "Website",
        bulletPoints:[{name:"role", value:"Owner/Developer"},
          {name:"agency", value:"Adrian Ramirez"},
          {name:"year", value:"2004"}
        ],
        description: [ "Go Portfolio",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          "Technology",
          ["Flash"]],
        technology: ["Flash"],
        imageFull: ["../assets/images/gallery/slides/goportfolio/goportfolio-full.jpg",
                    "app-main-img-horiz-center drop-shadow"],
        imageThumb: "../assets/images/gallery/slides/goportfolio/goportfolio-thumb.jpg",
        imageDescription: "",
        videos:"",
        awards:[],
        urls: []
      },
    ];
    return {gallery};
  }

}
