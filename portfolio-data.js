// Full portfolio data from radiancedesign.org - with all images
const portfolioData = {
  production: [
    // 2025
    {
      id: 'patd-wwwy-2025',
      artist: 'Panic! at the Disco',
      show: 'When We Were Young Festival',
      year: 2025,
      role: 'Video Programmer / Screens Director',
      image: '',
      credits: [
        { company: 'Silent House' }
      ]
    },
    {
      id: 'lainey-wilson-whirlwind-2025',
      artist: 'Lainey Wilson',
      show: 'Whirlwind Tour',
      year: 2025,
      role: 'Video Programmer',
      image: '',
      credits: []
    },
    {
      id: 'lainey-wilson-summer-2025',
      artist: 'Lainey Wilson',
      show: 'Summer Festival Tour',
      year: 2025,
      role: 'Video Programmer / Screens Director',
      image: '',
      credits: [
        { company: 'Silent Partners Studios' }
      ]
    },
    {
      id: 'gnx-tour-2025',
      artist: 'Kendrick Lamar & SZA',
      show: 'The GNX Tour',
      year: 2025,
      role: 'Content Systems Manager',
      image: '',
      credits: [
        { role: 'Production Designer', name: 'Cory Fitzgerald', company: 'Silent House' }
      ]
    },
    // 2024
    {
      id: 'eras-tour-ttpd',
      artist: 'Taylor Swift',
      show: 'The Eras Tour',
      year: 2024,
      role: 'Video Programmer / Screens Director',
      image: 'images/eras-ttpd.png',
      credits: [
        { role: 'Creative Director', name: 'Ethan Tobman' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' },
        { role: 'Screens Producer', name: 'Zach Peletz', company: 'Turning Point Studios' },
        { role: 'Video Programmer', name: 'Kirk J Miller', company: 'Earlybird Visual' }
      ]
    },
    // 2023
    {
      id: 'eras-tour',
      artist: 'Taylor Swift',
      show: 'The Eras Tour',
      year: 2023,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/7777a46f-0d2f-4adf-a819-a2fd3e53e846/Screenshot+2023-06-02+at+12.41.40+AM.png',
      credits: [
        { role: 'Creative Director', name: 'Ethan Tobman' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' },
        { role: 'Screens Producer', name: 'Zach Peletz', company: 'Turning Point Studios' },
        { role: 'Video Programmer', name: 'Kirk J Miller', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'jt-fontainebleau-2023',
      artist: 'Justin Timberlake',
      show: 'Fontainebleau Casino Opening',
      year: 2023,
      role: 'Screens Director / Video Programmer',
      image: 'images/jt-fontainebleau.png',
      credits: []
    },
    // 2022
    {
      id: 'harry-lot-sa-2022',
      artist: 'Harry Styles',
      show: 'Love On Tour South America',
      year: 2022,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/92841284-defb-4756-ad1c-cf277013cd18/harry-e1665664635574-900x654.jpg',
      credits: [
        { role: 'Creative Director', name: 'Molly Hawkins' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'harry-lot-na-2022',
      artist: 'Harry Styles',
      show: 'Love On Tour North America',
      year: 2022,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/774829ec-a509-4394-914f-35b692bfad75/harry-styles-live-2022.jpg',
      credits: [
        { role: 'Creative Director', name: 'Molly Hawkins' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'harry-lot-eu-2022',
      artist: 'Harry Styles',
      show: 'Love On Tour UK & Europe',
      year: 2022,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/c2565547-a5e8-48b2-8485-faacefd66edb/maxresdefault.jpg',
      credits: [
        { role: 'Creative Director', name: 'Molly Hawkins' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'harry-coachella-2022',
      artist: 'Harry Styles',
      show: 'Coachella 2022',
      year: 2022,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/4179056b-fbc8-41a6-9f33-ee97042ff1d7/hs_coachella2022.png',
      credits: [
        { role: 'Creative Director', name: 'Molly Hawkins' },
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'imagine-dragons',
      artist: 'Imagine Dragons',
      show: 'The Mercury Tour',
      year: 2022,
      role: 'Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/8ee6896d-4224-434d-916a-14a41cf0ecc4/0-imagine-dragons-2-copy.jpg',
      credits: [
        { role: 'Creative Director', name: 'Mitch Schellenger', company: 'Station Six' },
        { role: 'Production Designer', name: 'Mitch Schellenger', company: 'Station Six' },
        { role: 'Lighting Programmer', name: 'Joey Troup' }
      ]
    },
    // 2021
    {
      id: 'harry-lot-2021',
      artist: 'Harry Styles',
      show: 'Love On Tour',
      year: 2021,
      role: 'Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/89bf7fb4-dc33-4933-a4a5-0e97ee568446/hs_fall2021.png',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' },
        { role: 'Video Programmer', name: 'Zach Peletz', company: 'Turning Point Studio' }
      ]
    },
    // 2020
    {
      id: 'the-cube',
      artist: 'The Cube ft. Dwyane Wade',
      show: 'TBS Original Series',
      year: 2020,
      role: 'Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/c1a7414b-9f59-434e-a85d-6c0c72173eda/6227ced29b964d3c96cd4666_The-Cube_2020_TBS_2.jpg',
      credits: [
        { role: 'Screens Producer', name: 'Craig Housenik', company: 'Darkfire Lighting Design' },
        { role: 'Lighting Programmer', name: 'Chris Smith', company: 'The DDP Company' }
      ]
    },
    {
      id: 'cher-hwga-us',
      artist: 'Cher',
      show: 'Here We Go Again US Tour',
      year: 2020,
      role: 'Lighting & Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/7f35ce53-9492-48b7-a04f-ccded186a241/cher_2020.jpg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'cher-residency-2020',
      artist: 'Cher',
      show: 'Here We Go Again Residency (Park MGM)',
      year: 2020,
      role: 'Lighting & Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/2353d0fd-6871-4f25-9a1b-072c5ee9aff9/cher_residency2019.jpg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    // 2019
    {
      id: 'cher-hwga-eu',
      artist: 'Cher',
      show: 'Here We Go Again Tour Europe',
      year: 2019,
      role: 'Lighting & Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/d4c52107-b1d7-4895-9fd5-21a4e9b75c2a/cher_europe2019_2020.png',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'taylor-prime-day',
      artist: 'Taylor Swift',
      show: 'Amazon Prime Day (Hammerstein Ballroom)',
      year: 2019,
      role: 'Screens Director & Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/5ecd65d8-6ec1-436f-b50d-d317a1b04be1/0ffa1459-79de-458e-953e-c73f62a3e823-AP_Amazon_Music_Prime_Day_2019_Concert_1.png',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'madonna-pride',
      artist: 'Madonna',
      show: 'Pride Island NYC',
      year: 2019,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/de4c5907-2b28-4181-aa8d-2763ca2da03b/a.png',
      credits: [
        { role: 'Lighting Designer', name: 'Al Gurdon', company: 'Incandescent Design' }
      ]
    },
    {
      id: 'robbie-williams',
      artist: 'Robbie Williams',
      show: 'Live In Las Vegas',
      year: 2019,
      role: 'disguise Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/cdea067b-cef8-42fb-b5cf-3d62657a1d50/ROBBIE-WILLIAMS-1111-%C2%A9-Steve-Jennings-scaled.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Sean Burke', company: 'Holes In The Dark' }
      ]
    },
    {
      id: 'cher-hwga-na',
      artist: 'Cher',
      show: 'Here We Go Again Tour North America',
      year: 2019,
      role: 'Lighting & Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/0d0801de-f164-41ed-8af1-c184824a6687/P6INBWHJNNCWDPOCR5CM2GGOMM.jpg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'formula-e',
      artist: 'Formula E',
      show: 'Riyadh, Saudi Arabia',
      year: 2019,
      role: 'Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/e6c5962e-311a-402c-acf3-65b4bb200f86/1400686-1265532596.jpg',
      credits: [
        { role: 'Technical Producer', name: 'Jim Digby', company: 'Live Nation' },
        { role: 'Technical Director', name: 'Drew Gnagey', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'kid-cudi-bape',
      artist: 'Kid Cudi',
      show: 'BAPE Heads Show (Hulu Theater NYC)',
      year: 2019,
      role: 'Lighting & Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/46a6f611-8840-4955-9306-5f817ddda1b4/cudi_bape.png',
      credits: [
        { role: 'Creative Director', name: 'Jonathan Goldstein', company: 'Outland Visual' }
      ]
    },
    // 2018
    {
      id: 'taylor-reputation',
      artist: 'Taylor Swift',
      show: 'Reputation Stadium Tour',
      year: 2018,
      role: 'Screens Director, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530947433854-KEW4GXVFPE47ERYMH9I1/TSReputation.jpeg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Production Designer', name: 'Tamlyn Wright', company: 'Silent House' },
        { role: 'Assoc. Lighting Designer, Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'kd-lang-us',
      artist: 'KD Lang',
      show: 'Ingenue Redux US Tour',
      year: 2018,
      role: 'Associate LD, Lighting Director, Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530951994122-10ADMHRG5ZU8CAUEJVSH/kdlang.jpg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Production Designer', name: 'Tamlyn Wright', company: 'Silent House' }
      ]
    },
    {
      id: 'mat-kearney',
      artist: 'Mat Kearney',
      show: 'Crazytalk Tour',
      year: 2018,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530953462395-I282SSHCWJD6P7PWMIER/matkearney.jpeg',
      credits: [
        { role: 'Production Designer', name: 'Eric Marchwinski', company: 'Earlybird Design' },
        { role: 'Lighting Director', name: 'Lauren Sego' }
      ]
    },
    // 2017
    {
      id: 'future-rolling-loud',
      artist: 'Future',
      show: 'Rolling Loud Festival',
      year: 2017,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530954560270-ML9LW88QD1ZHYJNNGJP8/future.jpg',
      credits: [
        { role: 'Lighting/Production Designer', name: 'Justin Collie', company: 'Nimblist' }
      ]
    },
    {
      id: 'taylor-jingleball',
      artist: 'Taylor Swift',
      show: 'iHeartRadio Jingleball Tour',
      year: 2017,
      role: 'Lighting Dir, Programmer, Screens Dir, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530956162675-MQP50Z5HIZZDKLU80GFZ/taylorjingle.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'tidal-x',
      artist: 'Tidal X',
      show: 'Brooklyn',
      year: 2017,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530956851581-22G7Y7Z1K0CUIHJK2M7D/tidal.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Jesse Blevins', company: 'Inc-Designs' }
      ]
    },
    {
      id: 'kid-cudi-ppds',
      artist: 'Kid Cudi',
      show: 'Passion, Pain, and Demon Slayin\' Tour',
      year: 2017,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530985444814-IGAQGEUMV58GUMDMWFX5/Kid_Cudi_%E2%80%A2_Passion__Pain___Demon_Slayin__Tour_%E2%80%A2_Photo_Gallery_%E2%80%94_The_Beautiful_Sounds.jpg',
      credits: [
        { role: 'Production Designer', name: 'Jonathan Goldstein', company: 'Outland Visual' }
      ]
    },
    {
      id: 'kd-lang-ca',
      artist: 'KD Lang',
      show: 'Ingenue Redux Canadian Tour',
      year: 2017,
      role: 'Associate LD, Lighting Director, Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530992631616-8AB9J26M25NSJBH774UY/kdlang2.jpg',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Production Designer', name: 'Tamlyn Wright', company: 'Silent House' }
      ]
    },
    {
      id: 'pink-summer',
      artist: 'P!nk',
      show: 'Summer Festival Tour',
      year: 2017,
      role: 'Video Programmer, Notch Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531005578949-5GF4FQL5D5EEZ6N076F5/Summerfest-Day-5-2017-01.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'robin-hood',
      artist: 'Robin Hood',
      show: '2017 Benefit Gala',
      year: 2017,
      role: 'CFS Programmer, d3 Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530996803434-3MX9DRIBAXXCU1P85MOD/RobinHoodBenefit_3_edited-1.jpg',
      credits: [
        { role: 'Technical Producer', name: 'Spike Brant', company: 'Nimblist' },
        { role: 'Creative Director', name: 'David Stark', company: 'DSI' },
        { role: 'Lighting/Production Designer', name: 'Nathan Wilson', company: 'Nimblist' },
        { role: 'Screens Director', name: 'Scott Peterman', company: 'Nimblist' }
      ]
    },
    {
      id: 'future-nobody-safe',
      artist: 'Future',
      show: 'Nobody Safe Tour',
      year: 2017,
      role: 'Lighting Director, Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530996374555-6IP1TVQB159M3R448EMU/nobodysafetour.jpg',
      credits: [
        { role: 'Lighting/Production Designer', name: 'Justin Collie', company: 'Nimblist' }
      ]
    },
    {
      id: 'future-coachella',
      artist: 'Future',
      show: 'Coachella',
      year: 2017,
      role: 'Lighting Director, Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530997995698-5ZUIH4PE93NPF5EFA8MC/futurecoachella.png',
      credits: [
        { role: 'Lighting/Production Designer', name: 'Justin Collie', company: 'Nimblist' }
      ]
    },
    {
      id: 'tonight-show-universal',
      artist: 'The Tonight Show',
      show: 'Race Through New York (Universal Studios)',
      year: 2017,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530999437220-6IP6U38V0U76643LYPBL/tonightshow.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Fred Bock' },
        { role: 'Lighting Director/Programmer', name: 'David Arch' }
      ]
    },
    {
      id: 'pitbull-nba-allstar',
      artist: 'Pitbull',
      show: 'NBA All Star 2017',
      year: 2017,
      role: 'Lighting Director, Screens Director',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1530999731492-6FYG1NKGVWHKZ3T1LR8X/pitbull_nba-all-star-2017_vibe-1486650266-640x458.jpg',
      credits: [
        { role: 'Screens Producer', name: 'Laura Frank' },
        { role: 'Lighting Programmer', name: 'Mike Appel' },
        { role: 'Video Programmer', name: 'Eric Marchwinski' }
      ]
    },
    {
      id: 'club-nomadic',
      artist: 'Club Nomadic',
      show: 'Super Bowl LI',
      year: 2017,
      role: 'Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531004710566-UGKLW0E4Q1C4OQZ858AI/bruno+mars+at+club+nomadic_1486216724008_8920793_ver1.0_1280_720.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    // 2016
    {
      id: 'pitbull-jingleball',
      artist: 'Pitbull',
      show: 'iHeart Radio Jingle Ball',
      year: 2016,
      role: 'Lighting Dir/Programmer, Screens Dir/Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531006551270-3L8H0NG9FF5MOPQRKQK2/pitbulliheart2016.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'mariah-xmas',
      artist: 'Mariah Carey',
      show: 'All I Want For Christmas (Beacon Theatre)',
      year: 2016,
      role: 'Screens Director, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531007241564-J7N62B1EUCCYKCT436CY/mariahcareyxmas.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Sean Burke', company: 'Holes In The Dark' }
      ]
    },
    {
      id: 'mariah-fantasy',
      artist: 'Mariah Carey',
      show: 'Sweet Sweet Fantasy Tour (Hawaii)',
      year: 2016,
      role: 'Screens Director, Video Operator',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531008019360-0P01BDRCB3T86HWTTHS3/mariahsweetfantasy.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Sean Burke', company: 'Holes In The Dark' }
      ]
    },
    {
      id: 'pitbull-fall',
      artist: 'Pitbull',
      show: 'Fall Tour 2016',
      year: 2016,
      role: 'Lighting Dir/Programmer, Screens Dir/Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531009521553-KSFA3P2B5ONAB2JRZZNB/pitbullbowl.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'alessia-cara-2',
      artist: 'Alessia Cara',
      show: 'Know It All Tour Pt II',
      year: 2016,
      role: 'Creative Director, Production Designer, Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531068882463-BLLQMCSJXMFZFGKM7XDK/alessiacara.jpg',
      credits: []
    },
    {
      id: 'selena-revival',
      artist: 'Selena Gomez',
      show: 'Revival Tour',
      year: 2016,
      role: 'Screens Director, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531090516297-S41KYFZ3J7Z4XKVQNROV/Selena-Gomez-2016-05-06-Revival-Tour-Las-Vegas-2.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'calvin-harris',
      artist: 'Calvin Harris',
      show: 'Coachella',
      year: 2016,
      role: 'Lighting Programmer, Laser Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531091903738-74MO9NINJLK2HYYVCSY6/13649410_1177954838910787_1142887148_n%281%29.jpg',
      credits: [
        { role: 'Production Designer', name: 'Baz Halpin', company: 'Silent House' }
      ]
    },
    {
      id: 'alessia-cara-1',
      artist: 'Alessia Cara',
      show: 'Know It All Tour Pt I',
      year: 2016,
      role: 'Creative Director, Production Designer, Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531098202311-CXJ0ZNV2U7IEJFC5G8P0/12627963_221629171511736_1156428146_n%281%29.jpg',
      credits: []
    },
    // 2015
    {
      id: 'taylor-1989',
      artist: 'Taylor Swift',
      show: 'The 1989 World Tour',
      year: 2015,
      role: 'Lighting Dir, Screens Dir, Video Programmer, CFS',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531291611756-XXVPP4R69E4A3OZSZCP5/IMG_1091.JPG',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Production Designer', name: 'Chris Nyfield', company: 'Silent House' },
        { role: 'Assoc. LD, Lighting Programmer', name: 'Eric Marchwinski', company: 'Earlybird Visual' }
      ]
    },
    {
      id: 'usher-urx',
      artist: 'Usher',
      show: 'URX Experience Tour',
      year: 2015,
      role: 'Screens Director, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531460181757-0JL2GJ5FRKSY9IX5FSTT/IMG_0689.JPG',
      credits: [
        { role: 'Creative Director', name: 'Baz Halpin', company: 'Silent House' },
        { role: 'Lighting Designer', name: 'Eric Wade' }
      ]
    },
    // 2014
    {
      id: 'jayz-beyonce',
      artist: 'Jay Z & Beyoncé',
      show: 'On The Run Tour',
      year: 2014,
      role: 'FOH Systems Tech',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531293577112-0GMOR39L9WR8XWNOCKDO/otr.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'LeRoy Bennett', company: 'Seven Design Works' },
        { role: 'Co Lighting Designer', name: 'Cory Fitzgerald' }
      ]
    },
    {
      id: 'jayz-magna-carta',
      artist: 'Jay Z',
      show: 'Magna Carter World Tour',
      year: 2014,
      role: 'Screens Director, FOH Systems Tech',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531294001841-9K9TKLWZMPFGLJAX2ZXJ/jayz.jpg',
      credits: [
        { role: 'Creative Director', name: 'Willo Perron', company: 'Willo Perron & Associates' },
        { role: 'Lighting Designer', name: 'Jesse Blevins' },
        { role: 'Screens Producer', name: 'Drew Findley' }
      ]
    },
    {
      id: 'miley-bangerz',
      artist: 'Miley Cyrus',
      show: 'Bangerz Tour',
      year: 2014,
      role: 'Screens Director, Video Operator',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531294075683-3YF1BGOXPHYIHE27T32L/miley+cyrus+tongue+2014+bangerz+tour+concert+review+bradley+center+milwaukee.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Sean Burke', company: 'Holes In The Dark' }
      ]
    },
    // 2013
    {
      id: 'made-in-america',
      artist: 'Budweiser',
      show: 'Made In America Music Festival',
      year: 2013,
      role: 'Lighting Programmer, CFS Server Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531295302459-IT9FUQ0LB1BNA291XIQ3/bmia-logo-whtonblk6.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Spike Brant' },
        { role: 'Co Lighting Designer', name: 'Kirk J Miller' }
      ]
    },
    {
      id: 'weird-al',
      artist: '"Weird Al" Yankovic',
      show: 'Alpocalypse Tour',
      year: 2013,
      role: 'Lighting Dir, Programmer, Screens Dir, Video Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531295569576-HI9IZ2HEOSX5ZOWBAENM/maxresdefault+%281%29.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Steve Mills' }
      ]
    },
    // 2012
    {
      id: 'nelly-furtado',
      artist: 'Nelly Furtado',
      show: 'The Spirit Indestructible Tour',
      year: 2012,
      role: 'Lighting Director, Lighting Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531297007242-5ABFG42GI8Q1HIIC3160/nelly+furtado.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Greg Goff' }
      ]
    },
    {
      id: 'alvin-risk',
      artist: 'Alvin Risk',
      show: 'Freaks Of Nature Tour',
      year: 2012,
      role: 'Lighting Dir, Lighting Programmer, Screens Dir',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531291568419-D0TVKLBK5OMGL9F0K8XB/maxresdefault.jpg',
      credits: [
        { role: 'Production Designer', name: 'Adam Weiner' }
      ]
    },
    // 2011
    {
      id: 'trio-of-oz',
      artist: 'The Trio of Oz',
      show: 'Tour',
      year: 2011,
      role: 'Stage Manager, Drum Tech',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531297095739-8ZVW00Q9QIAY83840F14/trio.jpg',
      credits: []
    },
    // 2010
    {
      id: 'trey-songz',
      artist: 'Trey Songz',
      show: 'Passion, Pain, Pleasure Tour',
      year: 2010,
      role: 'Lighting Technician',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531289539217-NBDBF7UFFGQ5V4ZNZ5IS/Trey+Songz+PPP.jpg',
      credits: [
        { role: 'Lighting Designer', name: 'Eric Marchwinski', company: 'Earlybird Design' }
      ]
    },
    {
      id: 'francis-lights',
      artist: 'Francis and the Lights',
      show: 'The White Room Project',
      year: 2010,
      role: 'Lighting Designer, Director, Programmer',
      image: 'https://images.squarespace-cdn.com/content/v1/5b3f06feb40b9d2ec951e09d/1531289186940-PL06XUM2AGPBB9PWZ1HO/Francis.jpg',
      credits: []
    }
  ],
  software: [
    {
      id: 'pocketcounsel',
      name: 'PocketCounsel',
      type: 'Family Law SaaS',
      image: null,
      desc: 'AI-powered document analysis and generation for family law practitioners. Scans message data to build case timelines and export court-ready documents.',
      tech: ['Next.js', 'React', 'OpenAI', 'PostgreSQL', 'Prisma']
    },
    {
      id: 'cueroll',
      name: 'CueRoll',
      type: 'Production Tool',
      image: null,
      desc: 'Real-time timecode-based note-taking app for live events. Capture moments during shows with frame-accurate timestamps.',
      tech: ['Electron', 'React', 'LTC Timecode', 'SQLite']
    },
    {
      id: 'cuepatch',
      name: 'CuePatch',
      type: 'LED Tool',
      image: null,
      desc: 'Complete LED pixel map builder with 48+ tile types, multi-output screen splitting, cable management, 3D preview, Disguise/MA3 exports. Free / Base $129 / Pro $249.',
      tech: ['React', 'Canvas API', 'WebGL']
    },
    {
      id: 'cuecheck',
      name: 'CueCheck',
      type: 'QC Tool',
      image: null,
      desc: 'Content validation tool for video playback. Automatically checks resolution, codec, frame rate compliance.',
      tech: ['Python', 'FFmpeg', 'OpenCV']
    }
  ],
  about: [
    {
      id: 'steve',
      name: 'Steve Foster',
      type: 'bio',
      image: null,
      title: 'Creative Technologist',
      bio: '15+ years in live production, from arena tours with Taylor Swift and Cher to festival stages and TV broadcasts. Now building software that solves real problems for the entertainment industry and beyond.'
    },
    {
      id: 'lighting',
      name: 'Lighting',
      type: 'resume',
      content: 'Lighting Director and Programmer for world tours including Taylor Swift (1989, Reputation, Eras), Cher (Here We Go Again), Harry Styles (Love On Tour), and countless festivals and corporate events. Specializing in disguise media server programming, grandMA3 lighting control, and real-time show control integration.'
    },
    {
      id: 'video',
      name: 'Video',
      type: 'resume',
      content: 'Screens Director and Video Programmer for stadium tours and arena shows. Expert in disguise, Notch, and real-time generative content. Built custom control systems integrating video, lighting, and automation for seamless show experiences.'
    },
    {
      id: 'coding',
      name: 'Software',
      type: 'resume',
      content: 'Full-stack developer specializing in React, Next.js, and Node.js. Building production tools, SaaS applications, and AI-powered solutions. From CLI utilities to complex web apps, focused on solving real-world problems with clean, maintainable code.'
    }
  ]
};
