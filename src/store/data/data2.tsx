export type ProductType = {
  id: number;
  title: string;
  description: string;
  description2: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  Manufacturer: string;
  discountPercentage?: number;
  link?: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    title: 'Cold Pursuit',
    description:
      'In this high-speed cat and mouse game through cold canyon walls, the viewer gets icy chills and flashbacks to X-wing™ acrobatics that Star Wars™ fans know and love, but this time it`s the Razor Crest™ trying to evade capture! Grogu™, The Mandalorian™, and his mysterious passenger do their best to carve through the frozen obstacles as the seasoned X-wing pilots of the Republic give chase, and only time will tell what the outcome will be in this highflying Cold Pursuit!',
    description2:
      'Thomas Kinkade Studios Limited Edition Paper Prints are made with the greatest attention to detail and color accuracy; rest assured that these are the finest, most desirable Thomas Kinkade Studios paper prints available.',
    price: 196.54,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 101,
    brand: 'Star Wars',
    category: 'Decor',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/11/main.jpg',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/11/1.png',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/11/2.jpg',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/11/3.jpg',
    ],
    link: 'https://art.sideshow.com/art-prints/star-wars-cold-pursuit-501857us#',
    Manufacturer: 'Thomas Kinkade Studios',
  },

  {
    id: 2,
    title: 'The Child',
    description:
      'The surprise debut of the Child, a mysterious alien pursued by bounty hunters on behalf of Imperial interests, was revealed in the premiere episode of The Mandalorian series and instantly became one of the favorite characters among many Star Wars fans around the world!',
    description2:
      'Sideshow and Hot Toys present the astonishingly detailed life-size collectible figure of the Child AKA Grogu, who fans affectionately refer to as “Baby Yoda.” ',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 2,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/2/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/2/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/2/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/2/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-the-child-hot-toys-905871',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 3,
    title: 'Tusken Raider',
    description:
      'Fearsome desert savages inhabiting the rocky deserts, Tusken Raiders™ are the foremost reason Tatooine™ colonists do not wander far from their isolated communities. Extremely territorial and xenophobic, Tusken Raiders will attack with very little provocation. Covered from head-to-foot in tattered rags and robes, Tusken Raiders -- or Sand People as they are also known -- brandish a deadly bladed club known as a gaderffii.',
    description2:
      'Sideshow and Hot Toys are delighted to expand this Star Wars collectible series by officially introducing the new Tusken Raider Sixth Scale Collectible Figure inspired by the acclaimed Star Wars™ series The Mandalorian™',
    price: 257.94,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 25,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/3/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/3/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/3/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/3/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-tusken-raider-hot-toys-907370',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 4,
    title: 'R2-D2',
    description:
      'Everyone`s favorite droid from the galaxy far, far away is ready for adventure with intricate articulation and fantastic detailing. The feisty blue and white astromech rolls right off the big screen, with sequencing lights and a swiveling dome that features various moveable ports and hinged panels. ',
    description2:
      'Full of fun and surprises, this R2-D2 Star Wars figure from Sideshow Collectibles is sure to delight Star Wars fans and collectors of all ages.',
    price: 169.93,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 16,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/4/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/4/1.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/4/2.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/4/3.webp',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-r2-d2-deluxe-sideshow-collectibles-2172',
    Manufacturer: 'Sideshow Collectibles',
  },
  {
    id: 5,
    title: 'The Armorer',
    description:
      'The Armorer plays a vital role in keeping the culture of the Mandalorians alive. She forges beskar armor in the ancient tradition of her people. Star Wars fans were captivated by her character and story.',
    description2:
      'In the further continuation of The Mandalorian collectible series, Sideshow and Hot Toys present The Armorer Sixth Scale Collectible Figure.',
    price: 253.05,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 19,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/5/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/5/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/5/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/5/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-the-armorer-hot-toys-908149',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 6,
    title: 'Luke Skywalker',
    description:
      'The finale of the latest season of The Mandalorian™ has excited Star Wars™ fans everywhere with the shocking appearance of Luke Skywalker and combating the platoon of Dark Troopers™ with ease! We can truly see how Luke, who rose from humble beginnings as a farmboy on Tatooine™ to become one of the greatest Jedi the galaxy has ever known.',
    description2:
      'Sideshow and Hot Toys is elated to expand The Mandalorian collectible series and introduce the highly anticipated Luke Skywalker (Deluxe Version) (Special Edition) Sixth Scale Collectible Figure as the latest addition to our premium DX Series!',
    price: 341.68,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 6,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/6/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/6/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/6/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/6/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-luke-skywalker-hot-toys-909047?var=9090481',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 7,
    title: 'Darth Vader Mythos',
    description:
      'The Darth Vader Mythos Statue features a fully sculpted costume recreating both the intricate hardware of his cybernetic life support systems and the dynamic, flowing movement of his windswept robes and cape. Detailed tatters and tears in his black uniform reveal the burns he sustained during his most fateful duel as well as the mechanical limbs he was gifted with by his new master, Darth Sidious. ',
    description2:
      'As a collection, Sideshow’s Mythos series are fine art collectibles that allow the collector to imagine what could have been, but maybe never was. Myths meant to be initiated by the eye and completed by the mind. ',
    price: 672.94,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 5,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/7/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/7/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/7/2.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/7/3.webp',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-darth-vader-mythos-sideshow-collectibles-200369?var=2003691',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 8,
    title: 'Darth Vader Industrial Empire',
    description:
      'Standing triumphantly, Darth Vader takes on a unique steampunk appearance in the work entitled “Industrial Empire”. World-renowned artist Adi Granov created this exclusive illustration in collaboration with Lucasfilm just for Kotobukiya!',
    description2:
      'Masterfully recreated in 3D form, the sculptors at Kotobukiya have captured every nuance of this illustration down to the fine details of the lightsaber hilt and environmental base.',
    price: 227.94,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 13,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/8/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/8/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/8/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/8/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-darth-vader-industrial-empire-kotobukiya-907951',
    Manufacturer: 'Kotobukiya ',
  },
  {
    id: 9,
    title: 'Blurrg',
    description:
      'Blurrgs are two-legged beasts of burden found on a number of worlds in the galaxy. Stoic and strong, they are used for everything from agricultural labor to war, foraging lazily in paddocks or carrying Twi`lek guerrillas and clone troopers into battle. Although they appear harmless and docile, their toothy mouths can betray a fierce demeanor; females are known to devour the males of the species during mating season.',
    description2:
      'Continuing to expand the highly popular, The Mandalorian collectible series, Sideshow and Hot Toys is delighted to introduce the Blurrg Sixth Scale Figure as seen on the planet of Arvala-7.',
    price: 325.96,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 33,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/9/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/9/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/9/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/9/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-blurrg-hot-toys-908286',
    Manufacturer: 'Hot Toys ',
  },
  {
    id: 10,
    title: 'Yoda™: Luminous Beings',
    description:
      'udge him not by his size, because this diminutive Jedi Master™ has strength and wisdom that surpasses most others in the galaxy. In hiding from the Empire, he takes refuge in the misty swamps of Dagobah™ and contemplates the mysterious nature of the Force. This portrait captures Yoda`s tranquility and perceptiveness as light filters through the gnarled tree canopies.',
    description2:
      'Sideshow Art Prints and Vanderstelt Studio present the Yoda™: Luminous Beings Fine Art Print, a contemplative Star Wars™ art print by celebrated fantasy artist Jerry Vanderstelt.',
    price: 672.94,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 54,
    brand: 'Star Wars',
    category: 'Decor',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/10/1.png',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/10/main.jpg',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/10/2.jpg',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/10/3.jpg',
    ],
    link: 'https://art.sideshow.com/art-prints/star-wars-yoda-luminous-beings-sideshow-collectibles-501906U',
    Manufacturer: 'Jerry Vanderstelt',
  },
  {
    id: 11,
    title: 'The Mandalorian™ and The Child',
    description:
      'It is time to witness the Mandalorian and his little sidekick, the Child’s extraordinary journey in the dangerous galaxy with the launch of the new season of the highly acclaimed Star Wars series The Mandalorian!   ',
    description2: 'Sideshow and Hot Toys present the Mandalorian and the Child (Deluxe) Quarter Scale Collectible Set!',
    price: 683.37,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 14,
    brand: 'Star Wars',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/1/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/1/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/1/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/1/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/star-wars-the-mandalorian-and-the-child-hot-toys-907267?var=907266',
    Manufacturer: 'Hot Toys',
  },
  {
    id: 12,
    title: 'Male V',
    description:
      'Sideshow and Dark Horse Comics present the Male V Figure! This non-articulated video game figure stands approximately 12.5" tall and features the `Samurai` emblem of the fictional Night City band.',
    description2: 'Add Male V to your Cyberpunk 2077 collection today!',
    price: 51.34,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 77,
    brand: 'Cyberpunk 2077',
    category: 'Figure',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/12/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/12/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/12/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/12/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/cyberpunk-2077-male-v-dark-horse-comics-906312',
    Manufacturer: 'Dark Horse Comics',
  },
  {
    id: 13,
    title: 'Judy Alvarez',
    description:
      'As Night City`s premier braindance technician, Judy could have lived the life of luxury working for any corporation she wanted. Instead, she valued her independence too much to sell out, she instead set up shop in Lizzie`s Bar and became a member of the Mox Gang. Her anarchist spirit drew her to Mox in the hope that they could improve the lives of people in Night City. ',
    description2: 'Don`t miss your chance to add this beautiful figure to your collection!',
    price: 61.12,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 23,
    brand: 'Cyberpunk 2077',
    category: 'Figure',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/13/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/13/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/13/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/13/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/cyberpunk-2077-judy-alvarez-dark-horse-comics-910535',
    Manufacturer: 'Dark Horse Comics',
  },
  {
    id: 14,
    title: 'Adam Smasher',
    description:
      'Smasher is a towering cyborg, with little empathy or humanity left to be seen. After being blasted by an RPG, the Arasaka Corporation retrieved what was left of him and replaced what was missing with machinery. Now working as their muscle, he lives to repay them by killing any and all enemies of the corporation.',
    description2: 'Don`t miss your chance to add this cyborg figure to your collection!',
    price: 92.91,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 63,
    brand: 'Cyberpunk 2077',
    category: 'Figure',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/14/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/14/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/14/2.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/14/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/cyberpunk-2077-adam-smasher-dark-horse-comics-910536',
    Manufacturer: 'Dark Horse Comics',
  },
  {
    id: 15,
    title: 'Magni Bronzebeard',
    description:
      'This statue consists of Magni Bronzebeard and the anvil base at his feet. Be it the weapon, armor, movement, demeanor, or even the tiny details on the anvil, they are all extremely accurate! Magni Bronzebeard wears a crown on his head and is dressed in splendid attire. For the costume, real fur and genuine leather are combined in production to display rich patterns and textures.',
    description2:
      'DAMTOYS is proud to announce their 9th release from Legendary Pictures and Blizzard Entertainment classic video game adaptation, Warcraft movie! The outstanding and kind sovereign of Iron forge - Magni Bronzebeard Premium Statue!',
    price: 1190,
    discountPercentage: 1222.84,
    rating: 4.44,
    stock: 3,
    brand: 'Warcraft',
    category: 'Premium Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/15/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/15/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/15/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/15/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/warcraft-magni-bronzebeard-damtoys-903382',
    Manufacturer: 'Damtoys',
  },
  {
    id: 16,
    title: 'Arthas',
    description:
      'Returning to the World of Warcraft, Sideshow Collectibles is proud to announce the Arthas Statue. Crafted in high quality polystone, every facet of the dreaded Lich King is captured in detailed 1:5 scale.',
    description2:
      'Wielding the Runeblade Frostmourne and measuring 19 inches tall atop the icy terrain of Northrend, the Arthas Statue is an impressive addition to any collection.',
    price: 361.86,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 1,
    brand: 'Warcraft',
    category: 'Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/16/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/16/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/16/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/16/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/world-of-warcraft-arthas-sideshow-collectibles-300069',
    Manufacturer: 'Sideshow Collectibles',
  },
  {
    id: 17,
    title: 'Grom Hellscream Version',
    description:
      'In the closed-off camp at Azeroth, Hellscream organizes the Orc soldiers for the next offensive. The Gorehowl in his hand appears to cry out to the land of Azeroth, FOR THE HORDE! ',
    description2:
      'DAMTOYS is proud to announce the latest statue in the Legendary Pictures Warcraft movie, adaptation of the classic video game from Blizzard Entertainment – Grom Hellscream 2.0 Premium Statue! ',
    price: 1512.21,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 4,
    brand: 'Warcraft',
    category: 'Premium Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/17/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/17/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/17/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/17/3.avif',
    ],
    link: 'https://www.sideshow.com/collectibles/warcraft-grom-hellscream-version-2-damtoys-903515',
    Manufacturer: 'Damtoys',
  },
  {
    id: 18,
    title: 'Blackhand Riding Wolf',
    description:
      'The dynamics of the wolf howling and charging, combined with Blackhand`s pose riding on it, bending forward, hammer raised, roaring - the production of this concept displays the chieftain`s imposing presence. Blackhand`s beard, hair, skin texture as well as the wolf`s hair are hand-sculpted, greatly enhancing the details of the entire piece, in hopes of earning the approval of Warcraft fans and collectors.',
    description2:
      'Sideshow and Damtoys is proud to officially announce the 10-inch Blackhand Riding Wolf Statue - from Legendary Pictures` Warcraft movie, adapted from the classic Blizzard Entertainment video game!',
    price: 669.58,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 3,
    brand: 'Warcraft',
    category: 'Premium Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/18/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/18/1.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/18/2.webp',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/18/3.webp',
    ],
    link: 'https://www.sideshow.com/collectibles/warcraft-blackhand-damtoys-903311',
    Manufacturer: 'Damtoys',
  },
  {
    id: 19,
    title: 'Blackhand Riding Wolf',
    description:
      'With an iron fist, Blackhand organized the orc clans into a Horde. The clans once again "unite" and were prepared to attack Azeroth again under command. Based on the movie settings and props, the best team of Damtoys, equipped with top production technology, has produced an exquisite Blackhand statue that is approx.',
    description2:
      'Damtoys has officially launched the 4th prop grade Premium Statue - Blackhand, Warchief of the Orcish Horde from the Warcraft movie produced by Legendary Pictures and adapted from the classic video game of Blizzard Entertainment!',
    price: 1465.21,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 3,
    brand: 'Warcraft',
    category: 'Premium Statue',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/19/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/19/1.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/19/2.avif',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/19/3.avif',
    ],
    link: 'https://art.sideshow.com/art-prints/the-lord-of-the-rings-the-two-towers-vanderstelt-studio-501349ul#',
    Manufacturer: 'Damtoys',
  },
  {
    id: 20,
    title: 'The Two Towers',
    description:
      'The Two Towers" features the cast of the Lord of the Rings film in a montage style layout. Officially licensed with Warner Bros, this fine art paper giclee utilizes Fine Art archival paper and comes signed and numbered by the artist with a Certificate of Authenticity.',
    description2:
      'Jerry has been drawing since he was a young boy at the age of eight. His interest in Sci-Fi and Fantasy was sparked when he first read C.S. Lewis` "The Chronicles of Narnia" books. Later, he discovered J.R.R. Tolkien`s "The Lord of the Rings". C.S. Lewis and J.R.R. Tolkien put their Christian perspective to work that made for beautiful storytelling, and imparted some profound truths that Jerry found in their work.',
    price: 105.61,
    discountPercentage: 97.84,
    rating: 4.44,
    stock: 85,
    brand: 'Lord of the Rings',
    category: 'Decor',
    thumbnail: 'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/20/main.avif',
    images: [
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/20/1.jpg',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/20/2.png',
      'https://aleksnik404.github.io/for-Testing.github.io/online-store/data/products/20/3.avif',
    ],
    link: 'https://art.sideshow.com/art-prints/the-lord-of-the-rings-the-two-towers-vanderstelt-studio-501349ul#',
    Manufacturer: 'Paper Giclee',
  },
];
