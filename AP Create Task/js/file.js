const books = [
    {
        title: 'The Kingdom of Fantasy',
        year: 2003,
        description: "Join Geronimo for his biggest, most fabumouse adventure yet! Dragons, mermaids, and much, much more await readers in this very special edition!I knew from the start that it was no ordinary day, but I certainly did not expect to find a golden staircase in my attic. Up at the top, there was a door. And beyond the door was a world I never could have imagined -- the Kingdom of Fantasy! Along with my guide, a frog named Scribblehopper, I set off on an incredible adventure to save the Queen of the Fairies. But along the way, I had to face giant scorpions, witches, sea serpents, pixies, and dozens of other creatures that I had only ever heard stories about. Holey cheese, what a journey! Could I save the Queen and my own tail?",
        img: "https://books.google.com/books/content?id=AvBvB2Ux7UUC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U15p_tj2rCNfXuNwBz7iHfwRWO2Nw&w=1280",
        buy: "https://www.amazon.com/Kingdom-Fantasy-Geronimo-Stilton/dp/0545980259"    
    },
    {
        title: 'The Journey Through Time',
        year: 2004,
        description: "Journey back in time with Geronimo in this fabumouse hardcover special edition! I, Geronimo Stilton, never expected to set paw inside a time machine. But when Professor Paws von Volt invited me to travel with him, I had to accept! My family came along to help us discover how the dinosaurs became extinct, how the Great Pyramid of Giza was built, and what life was like at King Arthur's court. Along the way I was chased by a Tyrannosaurus rex, almost eaten by a crocodile in the Nile, and asked to save a maiden from an evil knight's castle. Holey cheese! It was an adventure through history!",
        img: 'https://books.google.com/books/publisher/content?id=ZUgHAQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3PpIIOzpd0KlOI0_rVIT8LXyqqxA&w=1280',
        buy: "https://www.amazon.com/Journey-Through-Geronimo-Stilton-Special/dp/0545556236"
    },
    {
        title: 'The Enchanted Charms',
        year: 2016,
        description: "I, Geronimo Stilton, was so excited to find myself in the Kingdom of Fantasy for a seventh time. Blossom, Queen of the Fairies, needed me to find the seven enchanted charms before the Wizard of the Black Pearl could get to them! Seven guardians across the realm protected each charm. When combined, the charms would bring enormouse power -- which the evil wizard was after. Squeak! Could I survive the dangers of new kingdoms and mysterious creatures to find the charms and save the Kingdom of Fantasy? I was up for the challenge!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,9364/32348-3.jpg',
        buy: "https://www.amazon.com/Geronimo-Stilton-Kingdom-Fantasy-Enchanted/dp/0545746159"
    },
    {
        title: 'The Curse of the Cheese Pyramid',
        year: 2000,
        description: "Grandfather sends Geronimo to Egypt to get a story on a professor who has discovered an energy source using camel dung. Though Geronimo's Dirt Cheap Airlines flight nearly crashes and he gets trapped in an ancient pyramid, he ends up enjoying his adventure and writing a book about it.",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,747/2735-3.jpg',
        buy: "https://www.amazon.com/Curse-Cheese-Pyramid-Geronimo-Stilton/dp/0439559642"
    },
    {
        title: 'The Phoenix of Destiny',
        year: 2013,
        description: "An adventure of epic proportions! I, Geronimo Stilton, had returned to the Kingdom of Fantasy on the wings of the Phoenix of Destiny! Blossom, Queen of the Fairies, needed my help once again. But Blossom was behaving strangely. She sent me off on quest after magical quest, each one more bizarre and dangerous than the last. It felt like my missions were building up to something truly terrible right under my snout. Could my friends and I put things right again? It's a story full of twists and turns, mazes and puzzles, and tons of fantastical creatures!",
        img: 'https://books.google.com/books/publisher/content?id=iHJzBgAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2GFpS8jPgLAC8P_TGZYZJY6FDFwQ&w=1280',
        buy: "https://www.amazon.com/Phoenix-Destiny-Geronimo-Stilton-Kingdom/dp/0545829070"
    },
    {
        title: 'Cat and Mouse in a Haunted House',
        year: 2000,
        description: "When Geronimo Stilton encounters the ghost of Slicepaw Cannycat, he decides to investigate. With the help of his mouse family, he sets out to solve the castle's mystery, but there are those who would rather he kept his whiskers out.",
        img: 'https://books.google.com/books/content?id=OF3t6pOfbbUC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1l8v8OP65PSBvtBCTwhn8DWn5VKg&w=1280',
        buy: "https://www.amazon.com/Mouse-Haunted-House-Geronimo-Stilton/dp/0439559650"
    },
    {
        title: 'The Amazing Voyage',
        year: 2007,
        description: "Holey cheese! Join Geronimo as he returns to the Kingdom of Fantasy for a third amazing adventure!In this 320-page, full-color hardcover adventure, Geronimo returns to the Kingdom of Fantasy when he learns that the Kingdom has fallen under an endless, freezing winter and the Queen of the Fairies is in danger. Once there, Geronimo explores fantastical new lands and travels on a magical talking ship. Can Geronimo extinguish a threatening volcano in time to restore peace and springtime to the Kingdom of Fantasy? He is put to the test on this extraordinary quest!",
        img: 'https://books.google.com/books/content?id=RP1OIkqXtNwC&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U0Dss9BGLcd1zLoSRoE8r-20QhiDg&w=1280',
        buy: "https://www.amazon.com/Geronimo-Stilton-Kingdom-Fantasy-Amazing/dp/0545307716"
    },
    {
        title: 'Back in Time',
        year: 2006,
        description: "Imagine my surprise when I, Geronimo Stilton, was offered the chance to travel back in time again! Professor Paws von Volt entrusted me to lead my family on a secret journey in his new time machine. This voyage took us to ancient Rome, to the great Maya Empire, and to the Palace of Versailles during the age of the Sun King! Along the way I competed in a scary chariot race, saved some mouselings from a hungry jaguar, and was forced to organize a huge party for the king who had everything. What a wild trip through history!",
        img: 'https://books.google.com/books/publisher/content?id=nPgYBAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U3_dfaeV53yoMwzeDxBJ4EpBbcZ2A&w=1280',
        buy: "https://www.amazon.com/Geronimo-Stilton-Special-Journey-Through/dp/0545746183"
    },
    {
        title: 'The Huanted Castle',
        year: 2007,
        description: "I was just minding my business at home when I got a telephone call. It was my uncle Samuel S. Stingysnout, inviting the whole Stilton family to creepy, faraway Penny Pincher Castle for a big surprise. Moldy mozzarella-I'm not much of a traveling mouse, and I hate surprises. But Thea, Trap, and Benjamin were going, so I couldn't say no. I could tell this was going to be one super-spooky trip!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3838/10443-0.jpg',
        buy: "https://www.amazon.com/Haunted-Castle-Geronimo-Stilton-No/dp/0545103746"
    },
    {
        title: 'Cavemice',
        year: 2013,
        description: "Geronimo Stiltonoot wakes up to a terrible morning. Meteors are falling from the sky, and it seems like everyone in Old Mouse City has an awful stomachache! Geronimo must travel to the Cave of Memories to find the ancient shaman cure for his fellow cavemice. But dangers lurk on his journey -- can he make it back home safely?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,5765/14974-0.jpg',
        buy: "https://www.amazon.com/Geronimo-Stilton-Cavemice-Watch-Your/dp/0545447755"
    },
    {
        title: 'The Golden Key',
        year: 2021,
        description: "Fairies, dragons, wizards, and more await Geronimo on every magical Kingdom of Fantasy adventure! Geronimo’s fifteenth adventure in the Kingdom of Fantasy! I, Geronimo Stilton, had been called to the Kingdom of Fantasy many times before. I’d visited the magical lands to ride dragons, meet fairies, and defeat evil witches. But not this time! This time, the Kingdom of Fantasy came to New Mouse City. Could I help Queen Imaginaria and put everyone back where they belong?",
        img: 'https://m.media-amazon.com/images/I/71RBgckGF3L._AC_UF1000,1000_QL80_.jpg',
        buy: "https://www.amazon.com/Golden-Geronimo-Stilton-Kingdom-Fantasy/dp/1338848003"
    },
    {
        title: 'My Name Is Stilton, Geronimo Stilton',
        year: 2000,
        description: "Have you met my very young assistant editor, Pinky Pick? She is only thirteen years old, but she is one of the cleverest mice I've ever known. If you've ever wondered how Pinky came to work for me at The Rodent's Gazette, this is the book for you! It's a looooong story... and one that's full of adventure, laughs, and of course, like all of my books, lots of embarrassing moments for yours truly!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,785/2772-3.jpg',
        buy: "https://www.amazon.com/My-Name-Stilton-Geronimo-No/dp/0439691427"
    },
    {
        title: 'Valentine Day Disaster',
        year: 2006,
        description: "It was Valentine's Day in New Mouse City, and I couldn't wait to celebrate! I had sent valentine cards to all my friends and family members. But when I opened my mailbox on the morning of February 14th, it was empty! Had everyone forgotten about me? Was I destined to spend Valentine's Day alone in my mousehole, sobbing, with only my pet fish to console me? It was starting to look like a true Valentine's Day disaster!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,792/2779-0.jpg',
        buy: "https://www.amazon.com/Valentines-Day-Disaster-Geronimo-Stilton/dp/0439691478",
    },
    {
        title: 'Wedding Crasher',
        year: 1999,
        description: "Oh, how I hate traveling! So when I got an invitation to visit a long-lost relative who lives far, far away, I wasn't squeaking with joy. But Thea, Trap, and Benjamin thought it sounded fabumouse. They dragged me along to the crazy castle on Penny-Pincher Peak. Rat-munching rattlesnakes! I never should have agreed to go with them....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,801/2789-3.jpg',
        buy: "https://www.amazon.com/Wedding-Crasher-Geronimo-Stilton-No/dp/0439841194"
    },
    {
        title: 'The Keepers of the Empire',
        year: 2021,
        description: "Geronimo’s fourteenth adventure in the Kingdom of Fantasy!I, Geronimo Stilton, was once again called to the Kingdom of fantasy!Blossom had been crowned Empress and harmony was restored to the land. But a dark shadow looms and threatens the empire! Blossom asked me to join her team and fight to keep the darkness from spreading. I am just a ‘fraidy mouse, but I couldn’t let my friend down. We joined forces with an unlikely bunch and set out on our mission. Can we outrun the shadow and bring peace to the Empire?",
        img: 'https://books.google.com/books/publisher/content?id=ExE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72u4REn-dMYKlmZxak08NUeKEJp6ni49Yh5iZptQ7Z4gD7hGtEqXLqq1fJaiHjugymvOskgzfUjvRLv-3akut7r4mXT-qeee_8xJhBZCMU3YQw3ESPB8-DTiVCkgdzCVYR0b44l',
        buy: "https://www.amazon.com/Kingdom-Fantasy-14-Keepers-Geronimo/dp/1338756923"
    },
    {
        title: 'Bollywood Burglary',
        year: 2015,
        description: "My detective friend Hercule Poirat and I were headed to India. A Bollywood star we're friends with had received a valuable ruby and wanted us to help her protect it... which meant that I ended up acting in the movie she was filming! Rancid ricotta --",
        img: 'https://books.google.com/books/content?id=ZKVszQEACAAJ&printsec=frontcover&img=1&zoom=1imgtk=AFLRE723X4R36csGAba-HQ7imYhSCma3YRXUzSr6iwWaE3JrxX1jxHF6xTUoBfKvTuzz5iBB8PFxP39b07HAd1buEF_abypysw4_lugvyObq95NtzvvLVjMPUi6KOj-viLlugLP0HfMB',
        buy: "https://www.amazon.com/Bollywood-Burglary-Geronimo-Stilton-65/dp/1338087754"
    },
    {
        title: 'The Dragon of Fortune',
        year: 2015,
        description: "I, Geronimo Stilton, traveled on the wings of the Dragon of Fortune back to the Kingdom of Fantasy! I was called there by my friend Blossom, Queen of the Fairies, who needed my help. The enchanted Winged Ring had gone missing! This was terrible news. The ring allows its owner to travel between the Kingdom of Fantasy and the real world-which would be a dangerous power if it fell into evil hands. Could I find the ring before it was too late?",
        img: 'https://books.google.com/books/publisher/content?id=daz8DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72MvwyRKTXVFyF3vqHHIq_09xagcCSPY37j1l93zU0zzPtRY8zteqDQuTwNz05Yse-B1elVOpbop73GpJGBfJzez-erMSXTBGyoFhZIFIPKH83iy6m6VJ3Yp5HdDN1da5FSHTJZ',
        buy: "https://www.amazon.com/Fortune-Geronimo-Stilton-Kingdom-Fantasy/dp/1338159399"
    },
    {
        title: 'The Dragon Prophecy',
        year: 2008,
        description: "I, Geronimo Stilton, was astonished to find myself in the Kingdom of Fantasy for the fourth time. Sterling, the Princess of the Silver Dragons, needed my help! An ancient prophecy said that a Knight would save all the dragons... and it looked like I might be that Knight. The last existing dragon egg had been stolen from Sterling. If that egg was destroyed, dragons would become extinct forever! I couldn't let that happen. So my friends and I set out across enchanted lands to defy dangers and restore peace to the Kingdom of Fantasy!",
        img: 'https://books.google.com/books/content?id=A9WingEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73GehXdtIiNCJU5UBBJeDYcvSTzWQVpviIQONyhuzdZl9AVP8LpjFdjoFtBC_uxpvXU0rjmU1FevRQAzaIXvrHwZPfEUZRBbtZrIqcS3vbg4y8QjZM0plBSXtR_Ud1cYnY90J2W',
        buy: "https://www.amazon.com/Prophecy-Geronimo-Stilton-Kingdom-Fantasy/dp/0545393515"
    },
    {
        title: 'I Am Too Fond of My Fur',
        year: 2000,
        description: "I was on my way 'round the world to Mouse Everest! The trip was long and dangerous. I almost froze my tail off on the way. And then I was kidnapped by the Abominable Snowman! Yes, it was truly an amazing adventure...",
        img: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780439559669/primary/renditions/700',
        buy: "https://www.amazon.com/Too-Fond-Fur-Geronimo-Stilton/dp/0439559669"
    },
    {
        title: 'Lost Treasure of the Emerald Eye',
        year: 1997,
        description: "It all started when my sister, Thea, discovered a mysterious map. It showed a secret treasure on a faraway island. And before I could let out a squeak of protest, Thea dragged me into her treasure hunt! In no time at all, we'd set sail for the island. It was an adventure I'd never forget....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,746/2734-3.jpg',
        buy: "https://www.amazon.com/Lost-Treasure-Emerald-Geronimo-Stilton/dp/0439559634"
    },
    {
        title: 'Four Mice Deep in the Jungle',
        year: 2000,
        description: "I have never been a brave mouse... but lately, my fears were taking over my life! Soon I was too afraid even to leave my mousehole. That's when Thea and Trap decided to cure me. They dragged me away on an airplane (I'm afraid of flying!) all the way to the jungle. There I was forced to eat bug soup, climb trees as high as skyscrapers, swim in raging rivers, and even wrangle snakes! How would a 'fraidy mouse like me ever survive?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,750/2738-3.jpg',
        buy: "https://www.amazon.com/Four-Mice-Jungle-Geronimo-Stilton/dp/0439559677"
    },
    {
        title: 'Paws Off, Cheddarface',
        year: 2000,
        description: "It was the strangest thing... all across New Mouse City, rodents kept telling me I'd done things I had no memory of! I soon discovered why... there was a Geronimo look-alike out there, pretending to be me. He'd even fooled my sister Thea! And worst of all, he was trying to take over my newspaper. I had to find a way to strike back -- but how??",
        img: 'https://books.google.com/books/content?id=RGpxFhub9J4C&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ApLqSuq3uZYsofspTav04eAe4Ig&w=1280',
        buy: "https://www.amazon.com/Paws-Off-Cheddarface-Geronimo-Stilton/dp/0439559685"
    },
    {
        title: 'Red Pizzas for a Blue Count',
        year: 1997,
        description: "When Trap got mouse-napped in Transratania, it was up to Thea and me to rescue him. Little did I know that Transratania is the land of vampire mice! Oh, would I ever make it back to my nice, safe mousehole alive?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,752/2740-3.jpg',
        buy: "https://www.amazon.com/Pizzas-Blue-Count-Geronimo-Stilton/dp/0439559693"
    },
    {
        title: 'Attack of the Bandit Cats',
        year: 1997,
        description: "Oh, what a day! I had just published New Mouse City's first phone book -- and almost every single number was wrong! My customers were out for my fur. So when Thea, Trap, and Benjamin asked me to join their quest for a legendary island covered in silver, I agreed. But no sooner had we set out than we were attacked by a ship of pirate cats! They mousenapped us and threatened to make us their dinner. Would we escape with our lives... or find ourselves in the soup?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,753/2741-3.jpg',
        buy: "https://www.amazon.com/Attack-Bandit-Cats-Geronimo-Stilton/dp/0439559707"
    },
    {
        title: 'A Fabumouse Vacation for Geronimo',
        year: 2002,
        description: "Sometimes a busy businessmouse like me needs a nice, relaxing vacation. But of all the rotten rats' luck -- every time I tried to get away, disaster struck. My aunt Dizzy Fur's mouse hole caught on fire, my office was flooded, and our printing press broke down! When I was finally ready to depart, all the good trips were booked up. I was stuck in a flea-ridden old hotel, sharing a room with a bunch of Gerbil Scouts! I couldn't wait to get back to my comfy home in New Mouse City...",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,754/2742-3.jpg',
        buy: "https://www.amazon.com/Fabumouse-Vacation-Geronimo-Stilton/dp/0756930030"
    },
    {
        title: 'All Because of a Cup of Coffee',
        year: 1999,
        description: "I, Geronimo Stilton, was in love! I went out for a cup of coffee one morning and laid eyes on the most beautiful rodent I'd ever seen. Unfortunately, I immediately tripped over my paws and ended up with my tail in a toaster! I was one mortified mouse. But I was determined to prove that I wasn't a complete stumblemouse. So I decided to join my family on their most daring adventure yet -- a journey to the eighth wonder of the world! There I made a discovery so truly amazing, I knew I could win the heart of my darling ratlette....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,755/2743-0.jpg',
        buy: "https://www.amazon.com/All-Because-Coffee-Geronimo-Stilton/dp/0439559723"
    },
    {
        title: 'It is Halloween, You Fraidy Mouse!',
        year: 2001,
        description: "It's Halloween on Mouse Island, and it seemed like everyone was out to get me, Geronimo Stilton! My cousin Trap kept pulling scary pranks on me. And then my sister Thea told me I had to write a book about Halloween in less than one day! Before you could say boo, my nephew Benjamin had dragged me to a graveyard to do research. There I met a very spooky mouse who -- yikes! -- tried to lock me up in her coffin! Oh, how would a 'fraidy mouse like me ever survive the year's scariest holiday?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,762/2750-0.jpg',
        buy: "https://www.amazon.com/Halloween-Fraidy-Mouse-Geronimo-Stilton/dp/0439559731"
    },
    {
        title: 'Merry Christmas, Geronimo!',
        year: 2000,
        description: "I was so excited about Christmas, I could squeak! My favorite nephew Benjamin was going to come over, and we were planning to trim the tree and eat lots of delicious holiday Cheesy Chews. But before you could say 'cat alert,'' disaster struck! I slipped over my tail and ended up in the hospital. And then my mouse hole caught on fire! Holey cheese, this was turning out to be the worst Christmas ever....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,764/2752-3.jpg',
        buy: "https://www.amazon.com/Merry-Christmas-Geronimo-Stilton-No/dp/043955974X",
    },
    {
        title: 'Phantom of the Subway',
        year: 2000,
        description: "When my sister Thea told me a ghost was haunting New Mouse City's subway tunnels, I knew I had to get the scoop for The Rodents Gazette! So I set off with Thea, Trap, and my assistant editor Pinky Pick. We soon discovered that Sally Ratmousen, the editor of The Daily Rat, was also on the trail of the mysterious ghost. But we were all in for the fright of our wee mouse lives... because the ghost turned out to be a CAT!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,775/2762-3.jpg',
        buy: "https://www.amazon.com/Phantom-Subway-Geronimo-Stilton-No/dp/0439661625"
    },
    {
        title: 'The Temple of the Ruby of Fire',
        year: 2003,
        description: "It was my most thrilling adventure yet! My old friend Professor von Volt had discovered the location of the famous Ruby of Fire. And before I could let out a squeak of protest, my sister Thea had dragged me into race to be the first to find the legendary gem. The jewel was protected by thousands of ancient booby-traps -- a 'fraidy mouse's worst nightmare? Would I make it through with my fur?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,776/2763-3.jpg',
        buy: "https://www.amazon.com/Temple-Ruby-Fire-Geronimo-Stilton/dp/0439661633"
    },
    {
        title: 'Mona Mousa Code',
        year: 1997,
        description: "Do you like art? I do! So when Thea heard that there was a secret map hidden beneath Mouse Island's most famous painting, the Monamouse, I knew we had to get the scoop! Together we began to investigate, and soon we discovered secret clues that led us to the most fabumouse secret. And it all lay beneath the streets of New Mouse City!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,777/2764-3.jpg',
        buy: "https://www.amazon.com/Mona-Mousa-Code-Geronimo-Stilton/dp/0439661641"
    },
    {
        title: 'Cheese-colored Camper',
        year: 2000,
        description: "My grandfather William Shortpaws -- also known as Cheap Mouse Willy -- was back at The Rodent's Gazette, and he was determined to torture me. He wanted to publish a guide book to Ratzikistan, the Siberia of Mouse Island. And he ordered *me* to go there to write it! But as you know, dear reader, I hate traveling!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,780/2767-3.jpg',
        buy: "https://www.amazon.com/Cheese-Colored-Camper-Geronimo-Stilton-No/dp/0439691397"
    },
    {
        title: 'Watch Your Whiskers, Stilton!',
        year: 2001,
        description: "Cheesecake! A mysterious one-eyed rat was trying to steal The Rodent's Gazette from under my snout! I had to stop him -- but how? My business manager, Shif T. Paws, came up with a plan. He arranged for me to appear on a TV quiz show. If I won, the Gazette was safe. But if I lost -- SQUEAK! -- I had to give up my tail!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,781/2768-3.jpg',
        buy: "https://www.amazon.com/Watch-Your-Whiskers-Stilton-Geronimo/dp/0439691400"
    },
    {
        title: 'Shipwreck on the Pirate Islands',
        year: 2003,
        description: "My sister had come up with a new way to torment me. She'd combined my two least favorite things - travel and ghosts! Thea had heard rumors of a haunted pirate treasure buried on a desert island. And before I could say 'avast ye scurvy rats,' she'd dragged me into her treasure hunt!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,782/2769-3.jpg',
        buy: "https://www.amazon.com/Shipwreck-Pirate-Islands-Geronimo-Stilton/dp/0439691419"
    },
    {
        title: 'Surf is Up, Geronimo!',
        year: 2000,
        description: "Ah, there's nothing like a relaxing vacation on the beach! I would spread out by the crystal-clear water with a good book. What more could a mouse want? At least, that was the plan. But somehow, my vacations never seem to go according to plan. Instead of a beautiful seaside resort, I found myself in a fleabag hotel that was falling down around my ears! Oh, would I ever be able to relax and enjoy my vacation??",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,786/2773-3.jpg',
        buy: "https://www.amazon.com/Surfs-Up-Geronimo-Stilton-No/dp/0439691435"
    },
    {
        title: 'The Wild, Wild West',
        year: 2005,
        description: "Jumpin' gerbil babies, I was so excited! I was heading to America for the first time ever. Thea, Trap, and Benjamin were all coming with me. And we were going to visit a real ranch and go riding and herding cattle cowboy-style! It was sure to be my most whisker-licking-good adventure yet.",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,789/2776-3.jpg',
        buy: "https://www.amazon.com/Wild-West-Geronimo-Stilton-No/dp/0439691443"
    },
    {
        title: 'The Secret of Cacklefur Castle',
        year: 2002,
        description: "Moldy mozzarella, it was every mouse's worst nightmare! My old friend Creepella von Cacklefur called me one night and ordered me to join her for the weekend at her family's spooky castle. And before I could say 'boo!' she'd mouse-napped me! Now I was stuck in the gloomiest, eeriest castle I'd ever seen. Even worse, I was surrounded by Creepella's creepy family! Oh, would I ever escape back to my safe, cozy mouse hole in New Mouse City?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,790/2777-3.jpg',
        buy: "https://www.amazon.com/Secret-Cacklefur-Castle-Geronimo-Stilton/dp/0439691451"
    },
    {
        title: 'Field Trip To Niagara Falls',
        year: 2005,
        description: "Holey cheese, what an adventure! I was off to Niagara Falls with my nephew Benjamin's class. It was a beautiful place -- truly one of the most amazing sights I'd ever seen. But unfortunately, I was surrounded by mischievous young mouselets who were determined to send me over the Falls in a barrel! Oh, would I ever make it back to Mouse Island alive?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,794/2781-3.jpg',
        buy: "https://www.amazon.com/Field-Niagara-Falls-Geronimo-Stilton/dp/043969146X"
    },
    {
        title: 'Search for Sunken Treasure',
        year: 2000,
        description: "Holey cheese, what an adventure! I was off to the Ratlápagos Islands with my family in search of a long-lost buried treasure. But oh, how I hate traveling! Being on a ship in the middle of the sea wasn't my idea of a fabumouse time. And I was beginning to suspect that we weren't the only ones searching for the treasure....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,795/2782-3.jpg',
        buy: "https://www.amazon.com/Search-Sunken-Treasure-Geronimo-Stilton/dp/043984116X"
    },
    {
        title: 'The Mummy with No Name',
        year: 2006,
        description: "Halloween and Egypt and mummies . . . oh, my! I admit it, I am a 'fraidy mouse. Halloween scares me out of my fur! But this Halloween, I was heading off on an adventure in one of my very favorite places: Egypt. I couldn't wait to see the sights and soak up some sun far away from New Mouse City. What I didn't realize was that Halloween is popular in Egypt, too -- with the mummies, that is! Oh, what's a 'fraidy mouse to do?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,797/2784-3.jpg',
        buy: "https://www.amazon.com/Mummy-No-Name-Geronimo-Stilton/dp/0439841178"
    },
    {
        title: 'The Christmas Toy Factory',
        year: 2006,
        description: "Ho, ho, ho! I love Christmas in New Mouse City. But this year, Grandfather William wanted me to research a new story. He asked me to dress up like Santa Claus and let lots of little mouselets sit on my lap. Cheese niblets! If only I had my own team of reindeer and could fly far, far away....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,800/2788-3.jpg',
        buy: "https://www.amazon.com/Christmas-Toy-Factory-Geronimo-Stilton/dp/0439841186"
    },
    {
        title: 'Down And Out Down Under',
        year: 2006,
        description: "G'day, mate! I was searching for ideas for my new book, and my friend Petunia Pretty Paws knew just where to find them--in Australia. Holey cheese, it sounded like a fabumouse adventure! But between surfing with sharks, being chased by poisonous snakes, and getting lost in the outback, I was beginning to wonder if this trip down under was really a good idea. Kangaroos and koalas and crocs--oh, my! Would I ever see New Mouse City again?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,804/2792-3.jpg',
        buy: "https://www.amazon.com/Down-Out-Under-Geronimo-Stilton/dp/0439841208"
    },
    {
        title: 'The Mouse Island Marathon',
        year: 2004,
        description: "I admit it. I'm not much of a muscle mouse. So when I accidentally got signed up for the Mouse Island Marathon, I was so shocked that I lost my squeak! Me, run a marathon? But my friends and family were determined to help me cross that finish line. Holey cheese, I was never going to make it!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,805/2794-3.jpg',
        buy: "https://www.amazon.com/Mouse-Island-Marathon-Geronimo-Stilton/dp/0439841216"
    },
    {
        title: 'Mysterious Cheese Thief',
        year: 2005,
        description: "I, Geronimo Stilton, am not a big fan of spooky things. But when the Stilton cheese began disappearing all around me, I had to do something! Could I find the mysterious cheese thief, or was I in for a big scare? Putrid cheese puffs, what an adventure!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,807/2796-3.jpg',
        buy: "https://www.amazon.com/Mysterious-Cheese-Thief-Geronimo-Stilton/dp/0439023122"
    },
    {
        title: 'Valley of the Giant Skeletons',
        year: 2006,
        description: "Tuslaarai! Tuslaarai! That's Mongolian for 'Help!' and holey cheese did I need some! I was lost in the Gobi Desert, looking for a hidden treasure. So far, all I had found were sandstorms, camels, and giant dinosaur bones? Rat-munching rattlesnakes - how do I get myself into these situations?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,809/2798-3.jpg',
        buy: "https://www.amazon.com/Valley-Giant-Skeletons-Geronimo-Stilton/dp/0545021324"
    },
    {
        title: 'Geronimo and the Gold Medal Mystery',
        year: 2004,
        description: "I, Geronimo Stilton, am not a sportsmouse. Running? Sweating? Not for me. I prefer relaxing in an armchair with a nice bowl of chocolate cheesy chews. But with the Olympics coming up, sports were all anyone in New Mouse City could talk about. Rat-munching rattlesnakes!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,810/2799-3.jpg',
        buy: "https://www.amazon.com/Geronimo-Gold-Medal-Mystery-Stilton/dp/0545021332"
    },
    {
        title: 'Geronimo Stilton, Secret Agent',
        year: 2007,
        description: "My sister, Thea, is the mystery-loving rodent, not me! But somehow I found myself going undercover to get to the bottom of a case. Slimy Swiss balls--I hardly knew where to start! Geronimo Stilton, Secret Agent Mouse? Maybe I could get used to that...",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,811/2800-3.jpg',
        buy: "https://www.amazon.com/Geronimo-Stilton-Secret-Agent-No/dp/0545021340"
    },
    {
        title: 'A Very Merry Christmas',
        year: 2007,
        description: "'Tis the season to be jolly--and holey cheese was I trying! But on my way to New York City to meet my family for the holidays, my luggage got switched with another mouse's...Oh, rats! Now I had to scurry all over the Big Apple trying to track down that mouse...and all my Christmas presents! And I, Geronimo Stilton, am not a big cheese when it comes to getting around the Big Apple!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,812/2801-3.jpg',
        buy: "https://www.amazon.com/Very-Merry-Christmas-Geronimo-Stilton/dp/0545021359"
    },
    {
        title: 'Geronimo Valentine',
        year: 2007,
        description: "Okay, I'll admit it: I'm a bit of a cheesy mouse from time to time. What can I say? I'm a romantic! That's why Valentine's Day is one of my favorite holidays. This year I had a date with a very special rodent--Petunia Pretty Paws! But then I got a call from my private investigator friend Hercule Poirat. He had a mystery to solve, and he desperately needed my help. The most beloved, romantic, and famous painting in New Mouse City had been stolen! Now I had to help Hercule AND impress Petunia at the same time. Holey swiss cheese, what was a gentlemouse to do?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,815/2804-3.jpg',
        buy: "https://www.amazon.com/Geronimos-Valentine-Geronimo-Stilton-No/dp/0545021367"
    },
    {
        title: 'The Race Across America',
        year: 2006,
        description: "I, Geronimo Stilton, am not a big fan of races. I like to take my time and smell the cheese! But when my friend Bruce Hyena invited me to race across America on my bicycle, I just couldn't resist. And holey cheese, what a fabumouse adventure we had!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,816/2805-3.jpg',
        buy: "https://www.amazon.com/Race-Across-America-Geronimo-Stilton/dp/0545021375"
    },
    {
        title: 'A Fabumouse School Adventure',
        year: 2008,
        description: "When my nephew, Benjamin, invited me to Career Day at his school, things did not turn out the way I expected. I caused a volcanic explosion, got tangled in the tunnel slide on the playground, and accidentally let the class's pet gecko out of its cage! Rat munching rattlesnakes-how was I going to get myself out of this mess?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,817/2806-3.jpg',
        buy: "https://www.amazon.com/Fabumouse-School-Adventure-Geronimo-Stilton-ebook/dp/B00S7GP8YM"
    },
    {
        title: 'Singing Sensation',
        year: 2004,
        description: "After being enrolled in the Song Festival, Geronimo Stilton's song, 'Welcome to New Mouse City,' goes to the top of the charts and makes Geronimo a star, but very few CDs are sold after the festival. Will Geronimo and his detective friend, Hercule Poirat, be able to solve the mystery?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,819/2808-3.jpg',
        buy: "https://www.amazon.com/Singing-Sensation-Geronimo-Stilton-No/dp/0545103681"
    },
    {
        title: 'The Karate Mouse',
        year: 2005,
        description: "Geronimo Stilton gets caught up in the World Karate Championships, thanks to the efforts of Bruce Hyena and Piccolo Tao, Bruce's super-sporty cousin. Geronimo only has a week to become real champion material! Will Geronimo manage to overcome his fears in order to win the competition?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,821/2810-3.jpg',
        buy: "https://www.amazon.com/Karate-Mouse-Geronimo-Stilton-No/dp/054510369X"
    },
    {
        title: 'Mighty Mount Kilimanjaro',
        year: 2004,
        description: "Rat-munching rattlesnakes! I can't believe it. I, Geronimo Stilton, just let my super-sporty friend Bruce Hyena convince me to go on another one of his extreme adventures. You know me--I just can't say no to a friend! This time, we're going to be climbing to the top of the famouse Mount Kilimanjaro in Africa. Moldy mozzarella! I'm in no shape for a mountain climb. How will I ever make it to the top?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,822/2811-3.jpg',
        buy: "https://www.amazon.com/Mighty-Mount-Kilimanjaro-Geronimo-Stilton/dp/0545103711"
    },
    {
        title: 'The Peculiar Pumpkin Thief',
        year: 2003,
        description: "Halloween is a few days away when all of the pumpkins in New Mouse City disappear! There's a thief on the loose, and the thief wants to stop Halloween. At the same time, all of the mice in New Mouse City receive an invitation for a free trip to the brand new Mystery Mouse Theme Park. Geronimo knows something strange is going on, but will he and his detective friend Hercule Poirat be able to solve the mystery in time to save Halloween?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,823/2813-3.jpg',
        buy: "https://www.amazon.com/Peculiar-Pumpkin-Thief-Geronimo-Stilton/dp/054510372X"
    },
    {
        title: 'I am Not a Supermouse!',
        year: 2008,
        description: "Geronimo has always been a 'fraidy mouse, and his super-sporty friend Bruce Hyena decides that he needs to help Geronimo learn to keep calm in extreme situations. Bruce puts Geronimo to the test through encounters with scary animals and weather in conditions ranging from the desert to the North Pole. After Bruce's crazy training, a natural weather disaster occurs on Mouse Island. Will Geronimo prove that he truly is a super mouse?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,824/2814-3.jpg',
        buy: "https://www.amazon.com/Not-Supermouse-Geronimo-Stilton-No/dp/0545103754"
    },
    {
        title: 'The Giant Diamond Robbery',
        year: 2008,
        description: "I, Geronimo Stilton, am no sportsmouse. But that didn't stop Grandfather William from dragging me to a golf tournament so I could be his caddie! Once I arrived, who should I bump into but my friend Kornelius Von Kickpaw, a.k.a. Special Agent 00K. Someone was plotting to steal the Super Mouse Cup, and it was up to me and Kornelius to crack the case!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,825/2815-3.jpg',
        buy: "https://www.amazon.com/Giant-Diamond-Robbery-Geronimo-Stilton/dp/0545103762"
    },
    {
        title: 'Save The White Whale',
        year: 2007,
        description: "Holey cheese, did I need a vacation! I had been working my tail off at The Rodent's Gazette, so when Petunia Pretty Paws invited me to visit Whale Bay with her, of course I said yes. But our trip got off on the wrong paw, and my relaxing vacation turned into a real nightmare. That is, until Petunia and I came across a great white whale that needed our help. This would be one adventure I'd never forget!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,827/2817-3.jpg',
        buy: "https://www.amazon.com/Turtleback-Library-Binding-Geronimo-Stilton/dp/0606152962"
    },
    {
        title: 'Run for the Hills, Geronimo!',
        year: 2009,
        description: "Finally, I was about to leave for a relaxing vacation all by myself. I was ready to kick back and connect with nature. But somehow, my peaceful trip turned into a crazy treasure hunt in the beautiful Black Hills of South Dakota with the entire Stilton clan in tow! Our journey even included a hot-air balloon ride to Mount Rushmore. Holey cheese! This was one adventure I'd truly remember.",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3843/10448-3.jpg',
        buy: "https://www.amazon.com/Run-Hills-Geronimo-Stilton-No/dp/0545331323"
    },
    {
        title: 'The Mystery in Venice',
        year: 2009,
        description: "When my friend Petunia Pretty Paws gave me a crystal figurine of a boat as a gift, I had to accept it. After all, I have the biggest crush on Petunia! But oh, was that crystal boat ugly! So I wasn't too sad when my cousin Trap accidentally broke it, especially when I discovered a piece of paper inside with a mysterious message from someone in Venice, Italy, asking for help! A gentlemouse never ignores a request for assistance. So I, Geronimo Stilton, would do whatever it took to save the day!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3845/10450-3.jpg',
        buy: "https://www.amazon.com/Mystery-Venice-Geronimo-Stilton-No/dp/0545340977"
    },
    {
        title: 'The Way of the Samurai',
        year: 2010,
        description: "When Wild Willie showed up at my door and invited me to travel with him to Japan, I jumped at the chance. We were in search of an ancient, legendary samurai scroll that holds the secret to a long-lost fighting technique. The scroll had fallen into the wrong hands, and it was up to me and Wild Willie to track it down and save the day. But first, we would have to fight a group of talented ninjas. Holey cheese -- this would be one adventure I would never forget!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3848/10453-3.jpg',
        buy: "https://www.amazon.com/Way-Samurai-Geronimo-Stilton-No/dp/0545341019"
    },
    {
        title: 'This Hotel is Haunted!',
        year: 2005,
        description: "My good friend Hercule Poirat and I were called to investigate mysterious events in the famouse Grand Hotel in New Mouse City. There was a ghost haunting the hotel and scaring guests! It was wearing armor and carrying a ball and chain. I know that ghosts don't exist, but this was pretty spooky. Would Poirat and I be able to solve this spine-tingling mystery?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3852/10468-3.jpg',
        buy: "https://www.amazon.com/This-Hotel-Haunted-Geronimo-Stilton/dp/0545341027"
    },
    {
        title: 'The Enormouse Pearl Heist',
        year: 2009,
        description: "One day, Petunia Pretty Paws, Bugsy Wugsy, Benjamin and I, Geronimo Stilton, made an amazing discovery. We found a huge clam--with an enormouse pearl inside! I was so excited about this extremely rare, precious pearl that I wrote a special feature about it in The Rodent's Gazette. That article attracted lots of attention--both good and bad! The enormouse pearl was in danger of being stolen. Would my friends and I be able to protect it?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3857/10473-3.jpg',
        buy: "https://www.amazon.com/Enormouse-Pearl-Heist-Geronimo-Stilton/dp/0545341035"
    },
    {
        title: 'Mouse in Space!',
        year: 2011,
        description: "New Mouse City was in danger! An evil professor was threatening us all with his terrible inventions. The authorities called upon me, Geronimo Stilton, to thwart his plans by traveling on a top secret mission--to outer space! I was totally unprepared to go. But moldy mozzarella, my trip was out of this world!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,5760/14967-3.jpg',
        buy: "https://www.amazon.com/Mouse-Space-Geronimo-Stilton-52/dp/0545481910"
    },
    {
        title: 'Rumble in the Jungle',
        year: 2003,
        description: "I, Geronimo Stilton, was off to the wildest part of Brazil -- the Amazon jungle! I ended up on a hunt for a rare crystal treasure, which was stolen from a native tribe in the heart of the forest. I'd encounter alligators, snakes, piranhas, and other dangers on my way. Holey cheese! What an adventure!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,5761/14968-3.jpg',
        buy: "https://www.amazon.com/Rumble-Jungle-Geronimo-Stilton-53/dp/0545481937"
    },
    {
        title: 'Get Into Gear, Stilton!',
        year: 2011,
        description: "I, Geronimo Stilton, was selected by the mayor to give a special driving demonstration, but my drivers' license had expired! I had only a week to relearn everything to pass the test for a new one. Little did I know that my lessons would introduce me to a talking robot car! It was up to us to stop a thief and make the roads safer for everyone.",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,6520/16679-0.jpg',
        buy: "https://www.amazon.com/Get-Into-Gear-Stilton-Geronimo/dp/0545481945"
    },
    {
        title: 'The Golden Statue Plot',
        year: 2009,
        description: "Rancid rat hairs, the cat pirates are coming to town! They're planning on stealing New Mouse City's Statue of Liberty and taking it back to Cat Island. They think it's completely made of gold! My friends and I are determined to protect our city's precious symbol. But can we stop these fearsome felines?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,6524/16687-3.jpg',
        buy: "https://www.amazon.com/Golden-Statue-Plot-Geronimo-Stilton/dp/0545556295"
    },
    {
        title: 'Flight of the Red Bandit',
        year: 2014,
        description: "One hot summer afternoon, I was trying to write, but I just couldn't get inspired. I needed a break! Who would've thought that soon I'd be in Arizona, hanging from cliffs and white-water rafting? Grandfather Shortpaws had sent me on a hunt for his old friend -- the Red Bandit. What a fabumouse adventure!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,8091/22333-3.jpg',
        buy: "https://www.amazon.com/Flight-Red-Bandit-Geronimo-Stilton/dp/0545556309"
    },
    {
        title: 'The Stinky Cheese Vacation',
        year: 2012,
        description: "I , Geronimo Stilton, was finishing up work one evening when I opened a letter from Uncle Stingysnout. He needed to see me immediately! I headed straight to Penny Pincher Castle for what I thought would be a nice visit...but my uncle put me straight to work. Moldy mozzarella, what a terrible vacation!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,8563/29229-3.jpg',
        buy: "https://www.amazon.com/Geronimo-Stilton-57-Stinky-Vacation/dp/0545556317"
    },
    {
        title: 'The Super Chef Contest',
        year: 2012,
        description: "There was a major event coming up: The Super Chef Contest! The winner is declared the best chef on Mouse Island. My cousin Trap decided to enter the competition--and he brought me along as an assistant! Slimy Swiss cheese, I don't know the first thing about cooking. I was in for a delicious adventure!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,8968/31447-3.jpg',
        buy: "https://www.amazon.com/Super-Chef-Contest-Geronimo-Stilton/dp/0545656001"
    },
    {
        title: 'Welcome to Moldy Manor',
        year: 2013,
        description: "Rancid rat hairs! I'd been spending so much money lately, I had none left in the bank! Even worse, when my grandfather found out, he sent me off to Moldy Manor. There, miserly Uncle Stingysnout would teach me to be better at saving. How terrible! Could I learn to be less wasteful without going crazy?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,9339/32301-3.jpg',
        buy: "https://www.amazon.com/Welcome-Moldy-Manor-Geronimo-Stilton/dp/0545746132"
    },
    {
        title: 'The Treasure of Easter Island',
        year: 2013,
        description: "Holey cheese! My sister, Thea, was in danger. She had traveled to Easter Island in search of a mysterious treasure, but we hadn't heard from her for more than a week! There was no time to lose--my friends and I hopped on a plane to begin looking for her. What an exciting adventure!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,10273/35266-3.jpg',
        buy: "https://www.amazon.com/Geronimo-Stilton-60-Treasure-Easter/dp/0545746140"
    },
        {
            title: 'Mouse House Hunter',
            year: 2012,
            description: "I love my comfy, cozy house, so when Grandfather William announced that I had to sell it to help support The Rodent's Gazette, I was very upset! But I'll do anything to help my newspaper. That's how I ended up on a wild, desperate house hunt, all over New Mouse City. Could I find a new home in time?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,10274/35267-3.jpg',
            buy: "https://www.amazon.com/Mouse-House-Hunter-Geronimo-Stilton-ebook/dp/B00TYTPLP2"
        },
        {
            title: 'Mouse Overboard!',
            year: 2014,
            description: "My family and I, Geronimo Stilton, were invited to Lisbon, Portugal, to retrace the journey of the great explorer Vasco da Gama. He was the first European to reach India by sea--and was apparently an ancestor of the Stiltons! But once we got on the boat, I learned that someone was trying to sabotage the voyage. Could I figure out who?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,10285/35283-3.jpg',
            buy: "https://www.amazon.com/Mouse-Overboard-Geronimo-Stilton-62/dp/0545872510"
        },
        {
            title: 'The Cheese Experiment',
            year: 2013,
            description: "New Mouse City was in a panic! A strange epidemic had broken out. Mice everywhere -- including me, Geronimo Stilton -- were covered in weird blue pimples! I immediately called upon Mouse Island's most famouse doctor and researcher for help. He set to work with his team to find the cure . . . but someone was trying to stop him. Moldy mozzarella, I didn't want to be blue forever!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,10286/35284-3.jpg',
            buy: "https://www.amazon.com/Cheese-Experiment-Geronimo-Stilton-63/dp/0545872529"
        },
        {
            title: 'The Magical Mission',
            year: 2011,
            description: "My secret agent friend 00K called me to London, England! He needed my help in an investigation. Trap came along, too, so he could take part in a huge magic show. Then, to solve 00K's mystery, I ended up needing to perform a magic trick myself -- I had to make Big Ben disappear for five minutes! Could I do it? Squeak!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,10613/36259-3.jpg',
            buy: "https://www.amazon.com/Magical-Mission-Geronimo-Stilton-64-ebook/dp/B01EXN5ASG"
        },
        {
            title: 'Operation: Secret Recipe',
            year: 2015,
            description: "My family and I traveled to Milan, Italy, for a special event: the unveiling of the precious ancient parchment containing the secret, original recipe for panettone, a traditional sweet holiday bread. But right before the big moment, the recipe was stolen! And the thief was masquerading as me! Could I catch the thief and clear my name?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,12609/43160-3.jpg',
            buy: "https://www.amazon.com/Operation-Secret-Recipe-Geronimo-Stilton/dp/1338087827"
        },
        {
            title: 'The Chocolate Chase',
            year: 2016,
            description: "It was spring in New Mouse City! I love to celebrate the season with my fellow mice by exchanging chocolate eggs and competing in a confectionary challenge. This year, there was also a special exhibition of priceless jeweled Mousebergé eggs in town. Then one of the Mousebergé eggs was stolen... and it was up to me to find it! Squeak! Could I chase it down?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,12610/43162-3.jpg',
            buy: "https://www.amazon.com/Chocolate-Chase-Geronimo-Stilton-67/dp/1338159151"
        },
        {
            title: 'Cyber-Thief Showdown',
            year: 2010,
            description: "I am not the kind of mouse who spends money on useless things. But one day I kept getting packages of things I did not order or need. Someone on the Internet had stolen my identity! Professor Margo Bitmouse, a well-­known computer expert, helped me track down the hacker. Could I find the thief before my reputation was ruined?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,12637/43209-3.jpg',
            buy: "https://www.amazon.com/Cyber-Thief-Showdown-Geronimo-Stilton-68/dp/1338215191"
        },
        {
            title: 'Hug a Tree, Geronimo',
            year: 2015,
            description: "Geronimo decides to buy his aunt's old farm where he used to spend the holidays. It's filled with memories from his childhood! There is a large oak tree in the yard that holds legendary secrets to unlock.",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,13043/44553-3.jpg',
            buy: "https://www.amazon.com/Hug-Tree-Geronimo-Stilton-69/dp/1338215248"
        },
        {
            title: 'The Phantom Bandit',
            year: 2016,
            description: "The staff of the Rodent's Gazette sent me on a vacation to Cacklefur Castle. But who could relax in such a spooky place? On my first night there I stumbled on a mystery. A phantom was threatening the special pumpkins that grow in the Von Cacklefurs' garden. Could I trick the ghost thief into revealing its identity?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,13044/44555-3.jpg',
            buy: "https://www.amazon.com/Phantom-Bandit-Geronimo-Stilton-70/dp/1338268538"
        },
        {
            title: 'Geronimo On Ice',
            year: 2016,
            description: "Mouse Island was getting ready for the winter Ice Skating Championships! The prize for this year's champions was a pair of antique silver skates that were said to contain clues to a hidden treasure! Just before the championships, we learn someone wants to steal the Silver Skates to search for the treasure! I had to join the competition to help keep the skates safe. But I didn't know how to ice skate! Would I be able to learn enough tricks on the ice to save the Silver Skates?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,13239/44984-3.jpg',
            buy: "https://www.amazon.com/Geronimo-Ice-Stilton-71/dp/1338306219"
        },
        {
            title: 'The Hawaiian Heist',
            year: 2017,
            description: "The most famouse goldsmith in Hawaii created a necklace for a famous actress, but someone wants to steal it! Can Geronimo figure out who the thief is before they run away with the jewels?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,13666/45534-3.jpg',
            buy: "https://www.amazon.com/Hawaiian-Heist-Geronimo-Stilton-72/dp/1338306235"
        },
        {
            title: 'The Missing Movie',
            year: 2018,
            description: "New Mouse City was having its first film festival! Famouse directors around the world had submitted their very best movies for a chance at the big prize. But at the big screening, Mousen Scorsese's newest film goes missing! Who could have stolen it, and why? Hercule and Geronimo spring into action to solve the case!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,13981/46097-3.jpg',
            buy: "https://www.amazon.com/Missing-Movie-Geronimo-Stilton-73/dp/1338546961"
        },
        {
            title: 'Happy Birthday, Geronimo!',
            year: 2017,
            description: "Geronimo is celebrating his birthday! He is out with his family when he realizes someone has replaced all of his money with counterfeit bills. Geronimo and Hercule set out to find the thieves!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,14040/46193-3.jpg',
            buy: "https://www.amazon.com/Happy-Birthday-Geronimo-Stilton-74/dp/1338587536"
        },
        {
            title: 'The Sticky Situation',
            year: 2010,
            description: "Geronimo and Trap decide to start making organic honey with the help of some beekeepers. When the honey is ready, they face up against the evil Madam No.",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,14096/46360-3.jpg',
            buy: "https://www.amazon.com/GERONIMO-STILTON-75-STICKY-SITUATION/dp/1338587560"
        },
        {
            title: 'Superstore Surprise',
            year: 2020,
            description: "It's the grand opening of Traps new super store, but nothing is working. The lights won't turn on, the doors won't open, and the loudspeaker is broken. Geronimo must figure out who is trying to sabotage the grand opening.",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,14579/54183-3.jpg',
            buy: "https://www.amazon.com/Geronimo-Stilton-76-Superstore-Surprise/dp/9390189144"
        },
        {
            title: 'The Last Resort Oasis',
            year: 2021,
            description: "When you're with Geronimo Stilton, it's always a fabumouse adventure! This time it's a vacation to the Camel Oasis!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,14970/73774-3.jpg',
            buy: "https://www.amazon.com/Geronimo-Stilton-77-Resort-Oasis/dp/9390590388"
        },
        {
            title: 'Mysterious Eye of the Dragon',
            year: 2021,
            description: "My sister Thea and my cousin Trap were not getting along! When grandfather found them arguing over who would get to join me on a trip to Brazil, he forced us all to go together. My friend Isabela needed my help finding a mysterious emerald. Could Trap and Thea stop shouting their snouts off long enough to help find the stone?",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,15298/94286-3.jpg',
            buy: "https://www.amazon.com/Mysterious-Eye-Dragon-Geronimo-Stilton/dp/1338687204"
        },
        {
            title: 'Garbage Dump Disaster',
            year: 2021,
            description: "Hercule and Geronimo investigate a strange new case. There is a garbage thief in New Mouse City. They aren't stealing just any trash, it's all organic waste. They enlist the help of the head of the Recycling Center to help. In the end they find the thief is a colleague of Floras who has built a machine that turns organic waste into an energy source.",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,15438/104857-3.jpg',
            buy: "https://www.amazon.com/Garbage-Thief-Geronimo-Stilton-79/dp/1338756842"
        },
        {
            title: 'Have a Heart, Geronimo',
            year: 2022,
            description: "Creepella opens Mouse Island's first dating agency and hires Geronimo as her assistant!",
            img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,15516/112334-3.jpg',
            buy: "https://www.amazon.com/Geronimo-Stilton-80/dp/1338802240"
        },
        {
            title: 'The Super Cup Face-Off',
            year: 2022,
            description: "Everymouse on Mouse Island is squeaking about The Super Cup! My two favorite soccer teams, the Squeakers and the Turbo Cheese, had made it to the finals. But something suspicious was happening on the field. The Mighty Mice and the Sewer Rats seemed to be scoring without even trying! Could I get to the bottom of it before my two favorite teams are cheated out of their trophies?",
            img: 'https://books.google.com/books/publisher/content?id=8x5DEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70pV8DIxWUDpyFER3VUBwUmauFuzgXCt3x22hI-gew1J-X-J3uGv96js48lGwYW21FWtglPM_2CL0CdlmcUFpz6hoVtF6K-pLpM60kfh0Cod9cZ0qQkx4CvixiGJmaQbALNMRTU',
            buy: "https://www.amazon.com/Super-Cup-Face-Off-Geronimo-Stilton/dp/1338802267"
        },
        {
            title: 'Mouse VS Wild',
            year: 2020,
            description: "Trap had finally talked me into taking a relaxing vacation. But it turned out it wouldn’t just be given to me. We were going to have to win it! I was on my way to Port Stinky to win a race against the wild. Could I stand the smell long enough to win?",
            img: 'https://books.google.com/books/publisher/content?id=m95sEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70EzClVSYHX7U7tYctN7cvfRnTC5xMuNM10OWL3xb4oibdawEb9VcKM_QHnn0MAY4IjLoYuUqX2CTeyHqGQ5v6Ai7twMFE_x-f6NcHq8PU4K6yN2PoC0cOXVbpfxFusOIcyb4Lz',
            buy: "https://www.amazon.com/Mouse-VS-Wild-Geronimo-Stilton/dp/133884802X"
        },
];
export {books};