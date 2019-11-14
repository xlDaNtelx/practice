const countries = [
  {
    id: 1,
    name: 'Norway',
    text: 'text1',
    title: 'Scandinavia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_scandinavia.png',
    info: {
      title: 'Go whale watching in Norway and Iceland',
      paragraph:
        'In Scandinavia, whale watching is very popular among tourists, and many travelers choose to go whale watching on a whale safari during their vacation in Norway or Iceland. Depending on where you go, you might spot Minke whales, humpback whales, blue whales, sperm whales, orcas, and more! Adventurous travelers can even sign up for special whale safaris offering to let you swim with the whales.',
      photo:
        'https://www.northsailing.is/wp-content/uploads/2017/12/gardar-breaching-humpback-1024x683.jpg'
    },
    info2: {
      title: 'Go Skiing in Norway',
      paragraph:
        "Winter attractions in Scandinavia? Yes, right here. For your winter vacation, this is a must. Famous from the 1994 Winter Olympics, Norway's Lillehammer area is known for the spectacular local ski terrain and the many local winter sports activities. Trysil, on Norway's Swedish border, is also one of the country's most popular ski destinations, with a rich history.",
      photo:
        'https://www.fjords.com/wp-content/uploads/2017/11/DSC_0441-2000x1200.jpg'
    }
  },
  {
    id: 2,
    name: 'Canada',
    text: 'text2',
    title: 'Canada',
    flag:
      'http://www.pngall.com/wp-content/uploads/2016/06/Canada-Flag-Free-Download-PNG.png',
    info: {
      title: 'Glacier skywalk',
      paragraph:
        'If you’re after an adrenaline rush, look no further than Banff’s Glacier Skywalk. Known as the location ‘where eagles soar’, the skywalk is suspended between sheer cliffs and a 918 foot drop into a glacier below.There are impressive vistas of the Sunwapta Valley, which shows evidence of thousands of years of the landscape being shaped. It’s an absolutely mesmerising panoramic view – made even more incredible by  the fact that you’re standing on a transparent platform!The Glacier Skywalk is only open in summer and is located within the Jasper National Park.',
      photo:
        'https://i.pinimg.com/originals/bd/29/7f/bd297f8c0ae91a9436e12f174584f47b.jpg'
    },
    info2: {
      title: 'West Coast Trail, Vancouver Island',
      paragraph:
        "Canada's West Coast shoreline is some of the country's most spectacular landscape. Thankfully much of it has been preserved as Pacific Rim National Park, including the famous West Coast Trail, a 75 km (47 miles) trek through forests, bogs, up and down ladders, across craggy and sandy shoreline and more. Some points require either a short boat trip or cable car ride. The week-long journey is not just an everyday hike but demands physical strength and stamina so don't embark on it lightly.",
      photo:
        'https://www.tripsavvy.com/thmb/HMpFEOSiqwsJM54H0mQKcDQC82c=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-152837645-5a00ab6a89eacc0037dda66f.jpg'
    }
  },
  {
    id: 3,
    name: 'Russia',
    text: 'text3',
    title: 'Russia',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png',
    info: {
      title: 'Diving in russian waters',
      paragraph:
        'Recently, diving has become one of the trendiest varieties of extreme tourism in Russia. As many as 15,000 Russians practice diving. They enjoy underwater scenery not only in warm seas - the Black Sea, for example, but also in cold waters of the Arctic Ocean. To practice the Black Sea diving you do not have to be rich. To do the same near the North Pole is quite a pricey affair. You should have at least a thousand dollars to pay for instruction lessons and special equipment. In comparison, salaries in many rural areas of Russia are often no more than a hundred dollars.',
      photo:
        'https://cdni.rbth.com/rbthmedia/images/2018.05/original/5afc142185600a2c0341889b.jpg'
    },
    info2: {
      title: 'Travel to the North Pole from Murmansk',
      paragraph:
        'Moscow and St. Petersburg might feel cold, but they’ve got nothing on Franz Josef Land, a distant Russian archipelago in the Arctic Ocean. Franz Josef Land was once the embarkation point for North Pole explorers and where many of those brave souls met their end. Today, it’s a stopover point for Russian ships traveling to the North Pole. Most ships bound for the North Pole leave from Murmansk, the world’s largest Arctic city and one of the best places in Russia to view the northern lights. Quark Expeditions leads a 14-day tour ($25,000) on an icebreaker from Murmansk to the North Pole.',
      photo:
        'https://35aqobgy79qkq7w3vokgfa6l-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Dietmat-Denger-photo.jpg'
    }
  },
  {
    id: 4,
    name: 'Greenland',
    text: 'text4',
    title: 'Greenland',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
    info: {
      title: 'Heliskiing',
      paragraph:
        'A helicopter will take you up to the peaks giving you views of glaciers, mountains and the sea.Greenland Extreme will bring ski enthusiasts up to the mountain tops.A skiing adventure with views that are quite out of the ordinary. There’s no ski-lift or creaking chair lifts and it may also be the first time anyone has skied on this particular section of mountain. On the other hand, the terrain is pristine and open and is perfect for extraordinary skiing adventures.',
      photo:
        'https://www.eaheliskiing.com/admin/resources/023greenlandheliskiingkevin-boekholt-w1500.jpg'
    },
    info2: {
      title: 'When the kayak arrived in Greenland',
      paragraph:
        'The kayak is a transportation and hunting tool that originated in the Arctic region and then spread east towards Greenland with the first wave of immigrants, who came to this country more than 4000 years ago. In Greenland, people embraced the kayak to such an extent that it became the focal point of everyday life in a community of hunters, and even to this day the kayak is one of the strongest cultural symbols of our adaptability to the land that distinguishes us as a people.',
      photo:
        'https://visitgreenland.com/wp-content/uploads/pgi-greenland-kayakers-on-a-coffee-break-among-icebergs-in-the-disko-bay-in-greenland.jpg'
    }
  },
  {
    id: 5,
    name: 'Antarctica',
    text: 'text5',
    title: 'Antarctica',
    flag:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/744px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png',
    info: {
      title: ' Kayak past icebergs and penguins',
      paragraph:
        'Breathtaking to witness the wonders of Antarctica from a ship, kayaking puts you directly in the middle of the action. Kayakers have the chance to see floating icebergs, leopard seals, penguins, and whales up close and personal. Depending on the weather, the water can be rough and choppy, so wait for a calm day to break out the kayak, and bring a waterproof and freeze-proof camera.',
      photo:
        'https://previews.agefotostock.com/previewimage/medibigoff/11806f0f709500561e4b2e2756e4e621/x8b-915417.jpg'
    },
    info2: {
      title: 'Camp under the stars',
      paragraph:
        'Antarctica offers a unique set of challenges—and dangers—to people who want to camp under the stars. Although campers must sleep on the snow in sub-zero weather, they’re not necessarily shivering all night. Campers in Antarctica wear layers of warm clothing and may sleep in a sleeping bag on top of a foam mattress, which provides an extra layer of insulation from the snow.',
      photo:
        'https://media.gadventures.com/media-server/cache/3b/f5/3bf5c4d4369b8af4d9e9c8f78feabb26.jpg'
    }
  },
  {
    id: 6,
    name: 'Australia',
    text: 'text6',
    title: 'Australia',
    flag:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/800px-Flag_of_Australia.svg.png',
    info: {
      title: 'Raft the Franklin River, Tasmania',
      paragraph:
        "Slicing through Tasmania's ravishing Word Heritage Area, the mighty Franklin River is the setting for one of the world's great rafting adventures. Trips typically range from 5-10 days and run the entire 125-kilometer length of the Franklin River to the Gordon River through a pristine wilderness of eucalyptus forests, tranquil pools, and roiling rapids. Wildlife in the region includes wallabies, platypus, and black cockatoos.No previous rafting experience is necessary, although rafters should be physically fit in order to help portage at the wilder sections of the river, some of which are Class VI rapids. Trips include equipment, meals (usually prepared with fresh local produce), and experienced guides.",
      photo:
        'https://www.franklinrivertasmania.com/wp-content/uploads/corkscrew-red-boat1.jpg'
    },
    info2: {
      title: 'Dive with great white shark',
      paragraph:
        'Adventure Bay Charters, Port Lincoln, South Australia. Coming face to face with a great white shark with nothing between you and its giant jaws but steel mesh is an incomparable adrenaline rush, and only in Australia can you do this and swim with wild sea lions on the same trip. The waters off the southern tip of the Eyre Peninsula in South Australia are home to a large colony of endangered sea lions that love interacting with swimmers, so much so they are known as the puppies of the sea. This is also the only place you can go shark cage diving in Australia. Intrepid divers often see sharks that are almost six metres (19.5 feet) long, though thankfully, not while they are swimming with sea lions.',
      photo: 'https://www.divediscovery.com/images/cover_pic_sharkdiving2.jpg'
    }
  }
];

module.exports = countries;
