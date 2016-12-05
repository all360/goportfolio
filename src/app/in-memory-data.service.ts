import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let gallery = [
      {
        id: 1,
        name: "Spiritual Me",
        client: "Spiritual Me",
        agency: "",
        role: "Creator",
        type: "Mobile App",
        year: 2016,
        description: "Developed Spiritual Me App (Lifestyle app) that guides users through a series of exercises allowing them to practice meditation, whilst being inspired by nature, art and spiritual quotes. The exercises range from drawing to games of physics. Launched in the Android and Apple AppStore which ranked #1 in its category - Responsible for all phases, from design, writing code, testing, debugging and deployment - Localized the app for seven languages - Implemented in-app-purchases and push notification",
        technology: ["Objective-C" , "Haxe", "openFL"],
        imageFull: "../assets/images/gallery/slideImages/startup-2.jpg",
        imageThumb: "../assets/images/gallery/slideImages/dreamer.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: [{ title:"View on the App Store",
                 link: "https://itunes.apple.com/us/app/spiritual-me-guided-meditations/id985365789?ls=1&mt=8"
              },
              { title:"View on Google Play",
                link: "https://play.google.com/store/apps/details?id=com.spiritualmeapp.masters"
              }]
      }, {
        id: 2,
        name: "Google vote",
        client: "Google",
        agency: "Axis Studios",
        role: "Rich Media Developer",
        type: "Rich Media Ads",
        year: 2016,
        description: "Deve22loped mobile ad units for the Google Elections 2016 campaign Responsible for coding, animating, QA and deployment with DoubleClick Creative SolutionsClients include: Google, Starbucks and Marriott.",
        technology: ["JavaScript", "HTML5", "CSS3", "SASS", "Gulp"],
        imageFull: "../assets/images/gallery/slideImages/goportfolio.png",
        imageThumb: "../assets/images/gallery/slideImages/goportfolio.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: [{ title:"View Agency",
          link:"https://www.axis-studios.com"}]
      }, {
        id: 3,
        name: "WaveRunners Walk Around",
        client: "Yamaha",
        agency: "Crane Morley",
        role: "Senior Developer",
        type: "Website",
        year: 2015,
        description: "Developed interactive On-Boarding and Coaching Applications for learning management systems. Clients include GM, Yamaha, Hyundai and Mercedes-Benz. Responsible for UX, prototyping, front end development, mobile testing, debugging and deployment",
        technology: ["jQuery", "AngularJS", "JavaScript", "Node.js", "Bootstrap", "HTML5", "CSS3", "LESS", "Git"],
        imageFull: "../assets/images/gallery/slideImages/simpson5.png",
        imageThumb: "../assets/images/gallery/slideImages/simpson5.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: [{ title:"View Agency",
          link:"www.CraneMorley.com"}]
      }, {
        id: 4,
        name: "Disney’s Story iPhone App",
        client: "Disney",
        agency: "MOcean",
        role: "Rich Media Developer",
        type: "Rich Media Ads",
        year: 2013,
        description: "Developed rich media ads for Disney’s Story iPhone App, Responsible for storyboarding, creating animated transitions and optimizing the design for file size",
        technology: ["GreenSock Animation Platform (GSAP)", "HTML5", "CSS3"],
        imageFull: "../assets/images/gallery/slideImages/simpson1.png",
        imageThumb: "../assets/images/gallery/slideImages/simpson1.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: [{ title:"View Agency",
                 link:"www.MOceanLA.com"}]
      }, {
        id: 5,
        name: "Tron Legacy theatrical website",
        client: "Disney",
        agency: "BLT Communication",
        role: "Senior Developer",
        type: "Website",
        year: 2013,
        description: "Worked as a team to develop websites, Facebook applications, games, and rich media ad campaigns, Worked with Adobe Flash Media Server for recording/ sharing streaming videos within the Facebook app",
        technology: ["Flash", "HTML", "PHP"],
        imageFull: "../assets/images/gallery/slideImages/modernica.png",
        imageThumb: "../assets/images/gallery/slideImages/modernica.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: [{ title:"View Agency",
          link:"www.BLTCommunications.com"}]
      }, {
        id: 6,
        name: "Twilight Saga: Eclipse theatrical",
        client: "Disney",
        agency: "The Cimarron Group",
        role: "Senior Developer",
        type: "Website",
        year: 2010,
        description: "Developed theatrical websites using AS3, Flash/Flex, jQuery and JavaScript, Served as a Lead Developer on The Twilight Saga: Eclipse theatrical, Used with Agile practices, Iterative development, UML Activity diagrams and modeling., Established a new AS3 Class code library for the interactive department.",
        technology: ["Flash", "jQuery", "PHP", "FLEX"],
        imageFull: "../assets/images/gallery/slideImages/goportfolio.png",
        imageThumb: "../assets/images/gallery/slideImages/goportfolio2.png",
        imageDescription: "",
        video:"",
        awards:"",
        urls: []
      }, {
        id: 7,
        name: "The Simpsons Movie website",
        client: "FOX",
        agency: "65 Media",
        role: "Senior Developer",
        type: "Website",
        year: 2009,
        description: "Developed websites and games with AS3 libraries including Papervision 3d and Box2D Physics Engine. Object-Oriented Analysis and Design, Implemented SVN source control, design patterns, and shared AS3 code libraries for the interactive department.",
        technology: ["Flash"],
        imageFull: "../assets/images/gallery/slideImages/fullThrottle.png",
        imageThumb: "../assets/images/gallery/slideImages/fullThrottle.png",
        imageDescription: "",
        video:"",
        awards:["webby"],
        urls: []
      }, {
        id: 8,
        name: "The Curse of the Were-Rabbit (Wallace & Gromit) theatrical website",
        client: "DreamWorks",
        agency: "The Cannery Agency",
        role: "Senior Flash Developer",
        type: "Website",
        year: 2006,
        description: "Developed flash theatrical websites and games",
        technology: ["Flash"],
        imageFull: "../assets/images/gallery/slideImages/kiteRunner3.png",
        imageThumb: "../assets/images/gallery/slideImages/kiteRunner3.png",
        imageDescription: "",
        video:"",
        awards:[],
        urls: []
      }, {
        id: 9,
        name: "KISSFMi",
        client: "KISSFM",
        agency: "FMiTV Networks",
        role: "Flash Developer",
        type: "Website",
        year: 2001,
        description: "",
        technology: ["Flash"],
        imageFull: "../assets/images/gallery/slideImages/goportfolio2.png",
        imageThumb: "../assets/images/gallery/slideImages/goportfolio2.png",
        imageDescription: "",
        video:"",
        awards:[],
        urls: []
      }, {
        id: 10,
        name: "GoPortfolio",
        client: "",
        agency: "",
        role: "Owner",
        type: "Website",
        year: 2005,
        description: "",
        technology: ["Flash"],
        imageFull: "../assets/images/gallery/slideImages/kiteRunner.png",
        imageThumb: "../assets/images/gallery/slideImages/kiteRunner.png",
        imageDescription: "",
        video:"",
        awards:[],
        urls: []
      }, {
        id: 11,
        name: "Modernica.com",
        client: "Modernica",
        agency: "",
        role: "Owner",
        type: "Website",
        year: 2005,
        description: "",
        technology: ["Flash"],
        imageFull: "../assets/images/gallery/slideImages/goportfolio3.png",
        imageThumb: "../assets/images/gallery/slideImages/goportfolio3.png",
        imageDescription: "",
        video:"",
        awards:[],
        urls: []
      }, {
        id: 12,
        name: "NoogNetwork.com",
        client: "NoogNetwork",
        agency: "",
        role: "App Developer",
        type: "App",
        year: 2015,
        description: "",
        technology: ["OpenFl","XCode"],
        imageFull: "../assets/images/gallery/slideImages/kiteRunner.png",
        imageThumb: "../assets/images/gallery/slideImages/kiteRunner.png",
        imageDescription: "",
        video:"",
        awards:[],
        urls: [{ title:"View Agency",
          link:"https://itunes.apple.com/us/app/the-noog-network/id1000772961"}]
      }
    ];
    return {gallery};
  }

}
