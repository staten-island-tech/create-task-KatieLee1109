const books = [
    {
        title: 'The Kingdom of Fantasy',
        year: 2003,
        description: "Join Geronimo for his biggest, most fabumouse adventure yet! Dragons, mermaids, and much, much more await readers in this very special edition!I knew from the start that it was no ordinary day, but I certainly did not expect to find a golden staircase in my attic. Up at the top, there was a door. And beyond the door was a world I never could have imagined -- the Kingdom of Fantasy! Along with my guide, a frog named Scribblehopper, I set off on an incredible adventure to save the Queen of the Fairies. But along the way, I had to face giant scorpions, witches, sea serpents, pixies, and dozens of other creatures that I had only ever heard stories about. Holey cheese, what a journey! Could I save the Queen and my own tail?",
        img: "https://books.google.com/books/content?id=AvBvB2Ux7UUC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U15p_tj2rCNfXuNwBz7iHfwRWO2Nw&w=1280",
        link: 
    },
    {
        title: 'The Journey Through Time',
        year: 2004,
        description: "Journey back in time with Geronimo in this fabumouse hardcover special edition! I, Geronimo Stilton, never expected to set paw inside a time machine. But when Professor Paws von Volt invited me to travel with him, I had to accept! My family came along to help us discover how the dinosaurs became extinct, how the Great Pyramid of Giza was built, and what life was like at King Arthur's court. Along the way I was chased by a Tyrannosaurus rex, almost eaten by a crocodile in the Nile, and asked to save a maiden from an evil knight's castle. Holey cheese! It was an adventure through history!",
        img: 'https://books.google.com/books/publisher/content?id=ZUgHAQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3PpIIOzpd0KlOI0_rVIT8LXyqqxA&w=1280'
    },
    {
        title: 'The Enchanted Charms',
        year: 2016,
        description: "I, Geronimo Stilton, was so excited to find myself in the Kingdom of Fantasy for a seventh time. Blossom, Queen of the Fairies, needed me to find the seven enchanted charms before the Wizard of the Black Pearl could get to them! Seven guardians across the realm protected each charm. When combined, the charms would bring enormouse power -- which the evil wizard was after. Squeak! Could I survive the dangers of new kingdoms and mysterious creatures to find the charms and save the Kingdom of Fantasy? I was up for the challenge!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,9364/32348-3.jpg'
    },
    {
        title: 'The Curse of the Cheese Pyramid',
        year: 2000,
        description: "Grandfather sends Geronimo to Egypt to get a story on a professor who has discovered an energy source using camel dung. Though Geronimo's Dirt Cheap Airlines flight nearly crashes and he gets trapped in an ancient pyramid, he ends up enjoying his adventure and writing a book about it.",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,747/2735-3.jpg'
    },
    {
        title: 'The Phoenix of Destiny',
        year: 2013,
        description: "An adventure of epic proportions! I, Geronimo Stilton, had returned to the Kingdom of Fantasy on the wings of the Phoenix of Destiny! Blossom, Queen of the Fairies, needed my help once again. But Blossom was behaving strangely. She sent me off on quest after magical quest, each one more bizarre and dangerous than the last. It felt like my missions were building up to something truly terrible right under my snout. Could my friends and I put things right again? It's a story full of twists and turns, mazes and puzzles, and tons of fantastical creatures!",
        img: 'https://books.google.com/books/publisher/content?id=iHJzBgAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2GFpS8jPgLAC8P_TGZYZJY6FDFwQ&w=1280'
    },
    {
        title: 'Cat and Mouse in a Haunted House',
        year: 2000,
        description: "When Geronimo Stilton encounters the ghost of Slicepaw Cannycat, he decides to investigate. With the help of his mouse family, he sets out to solve the castle's mystery, but there are those who would rather he kept his whiskers out.",
        img: 'https://books.google.com/books/content?id=OF3t6pOfbbUC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1l8v8OP65PSBvtBCTwhn8DWn5VKg&w=1280'
    },
    {
        title: 'The Amazing Voyage',
        year: 2007,
        description: "Holey cheese! Join Geronimo as he returns to the Kingdom of Fantasy for a third amazing adventure!In this 320-page, full-color hardcover adventure, Geronimo returns to the Kingdom of Fantasy when he learns that the Kingdom has fallen under an endless, freezing winter and the Queen of the Fairies is in danger. Once there, Geronimo explores fantastical new lands and travels on a magical talking ship. Can Geronimo extinguish a threatening volcano in time to restore peace and springtime to the Kingdom of Fantasy? He is put to the test on this extraordinary quest!",
        img: 'https://books.google.com/books/content?id=RP1OIkqXtNwC&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U0Dss9BGLcd1zLoSRoE8r-20QhiDg&w=1280'
    },
    {
        title: 'Back in Time',
        year: 2006,
        description: "Imagine my surprise when I, Geronimo Stilton, was offered the chance to travel back in time again! Professor Paws von Volt entrusted me to lead my family on a secret journey in his new time machine. This voyage took us to ancient Rome, to the great Maya Empire, and to the Palace of Versailles during the age of the Sun King! Along the way I competed in a scary chariot race, saved some mouselings from a hungry jaguar, and was forced to organize a huge party for the king who had everything. What a wild trip through history!",
        img: 'https://books.google.com/books/publisher/content?id=nPgYBAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U3_dfaeV53yoMwzeDxBJ4EpBbcZ2A&w=1280'
    },
    {
        title: 'The Huanted Castle',
        year: 2007,
        description: "I was just minding my business at home when I got a telephone call. It was my uncle Samuel S. Stingysnout, inviting the whole Stilton family to creepy, faraway Penny Pincher Castle for a big surprise. Moldy mozzarella-I'm not much of a traveling mouse, and I hate surprises. But Thea, Trap, and Benjamin were going, so I couldn't say no. I could tell this was going to be one super-spooky trip!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,3838/10443-0.jpg'
    },
    {
        title: 'Cavemice',
        year: 2013,
        description: "Geronimo Stiltonoot wakes up to a terrible morning. Meteors are falling from the sky, and it seems like everyone in Old Mouse City has an awful stomachache! Geronimo must travel to the Cave of Memories to find the ancient shaman cure for his fellow cavemice. But dangers lurk on his journey -- can he make it back home safely?",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,5765/14974-0.jpg'
    },
    {
        title: 'The Golden Key',
        year: 2021,
        description: "Fairies, dragons, wizards, and more await Geronimo on every magical Kingdom of Fantasy adventure! Geronimo’s fifteenth adventure in the Kingdom of Fantasy! I, Geronimo Stilton, had been called to the Kingdom of Fantasy many times before. I’d visited the magical lands to ride dragons, meet fairies, and defeat evil witches. But not this time! This time, the Kingdom of Fantasy came to New Mouse City. Could I help Queen Imaginaria and put everyone back where they belong?",
        img: 'https://m.media-amazon.com/images/I/71RBgckGF3L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        title: 'My Name Is Stilton, Geronimo Stilton',
        year: 2000,
        description: "Have you met my very young assistant editor, Pinky Pick? She is only thirteen years old, but she is one of the cleverest mice I've ever known. If you've ever wondered how Pinky came to work for me at The Rodent's Gazette, this is the book for you! It's a looooong story... and one that's full of adventure, laughs, and of course, like all of my books, lots of embarrassing moments for yours truly!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,785/2772-3.jpg'
    },
    {
        title: 'Valentine Day Disaster',
        year: 2006,
        description: "It was Valentine's Day in New Mouse City, and I couldn't wait to celebrate! I had sent valentine cards to all my friends and family members. But when I opened my mailbox on the morning of February 14th, it was empty! Had everyone forgotten about me? Was I destined to spend Valentine's Day alone in my mousehole, sobbing, with only my pet fish to console me? It was starting to look like a true Valentine's Day disaster!",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,792/2779-0.jpg',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=792",
    },
    {
        title: 'Wedding Crasher',
        year: 1999,
        description: "Oh, how I hate traveling! So when I got an invitation to visit a long-lost relative who lives far, far away, I wasn't squeaking with joy. But Thea, Trap, and Benjamin thought it sounded fabumouse. They dragged me along to the crazy castle on Penny-Pincher Peak. Rat-munching rattlesnakes! I never should have agreed to go with them....",
        img: 'https://geronimostilton.com/upload/assets/files/US,116,-1,801/2789-3.jpg',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=801"
    },
    {
        title: 'The Keepers of the Empire',
        year: 2021,
        description: "Geronimo’s fourteenth adventure in the Kingdom of Fantasy!I, Geronimo Stilton, was once again called to the Kingdom of fantasy!Blossom had been crowned Empress and harmony was restored to the land. But a dark shadow looms and threatens the empire! Blossom asked me to join her team and fight to keep the darkness from spreading. I am just a ‘fraidy mouse, but I couldn’t let my friend down. We joined forces with an unlikely bunch and set out on our mission. Can we outrun the shadow and bring peace to the Empire?",
        img: 'https://books.google.com/books/publisher/content?id=ExE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72u4REn-dMYKlmZxak08NUeKEJp6ni49Yh5iZptQ7Z4gD7hGtEqXLqq1fJaiHjugymvOskgzfUjvRLv-3akut7r4mXT-qeee_8xJhBZCMU3YQw3ESPB8-DTiVCkgdzCVYR0b44l',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=15342"
    },
    {
        title: 'Bollywood Burglary',
        year: 2015,
        description: "My detective friend Hercule Poirat and I were headed to India. A Bollywood star we're friends with had received a valuable ruby and wanted us to help her protect it... which meant that I ended up acting in the movie she was filming! Rancid ricotta --",
        img: 'https://books.google.com/books/content?id=ZKVszQEACAAJ&printsec=frontcover&img=1&zoom=1imgtk=AFLRE723X4R36csGAba-HQ7imYhSCma3YRXUzSr6iwWaE3JrxX1jxHF6xTUoBfKvTuzz5iBB8PFxP39b07HAd1buEF_abypysw4_lugvyObq95NtzvvLVjMPUi6KOj-viLlugLP0HfMB',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=11456"
    },
    {
        title: 'The Dragon of Fortune',
        year: 2015,
        description: "I, Geronimo Stilton, traveled on the wings of the Dragon of Fortune back to the Kingdom of Fantasy! I was called there by my friend Blossom, Queen of the Fairies, who needed my help. The enchanted Winged Ring had gone missing! This was terrible news. The ring allows its owner to travel between the Kingdom of Fantasy and the real world-which would be a dangerous power if it fell into evil hands. Could I find the ring before it was too late?",
        img: 'https://books.google.com/books/publisher/content?id=daz8DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72MvwyRKTXVFyF3vqHHIq_09xagcCSPY37j1l93zU0zzPtRY8zteqDQuTwNz05Yse-B1elVOpbop73GpJGBfJzez-erMSXTBGyoFhZIFIPKH83iy6m6VJ3Yp5HdDN1da5FSHTJZ',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=12630"
    },
    {
        title: 'The Dragon Prophecy',
        year: 2008,
        description: "I, Geronimo Stilton, was astonished to find myself in the Kingdom of Fantasy for the fourth time. Sterling, the Princess of the Silver Dragons, needed my help! An ancient prophecy said that a Knight would save all the dragons... and it looked like I might be that Knight. The last existing dragon egg had been stolen from Sterling. If that egg was destroyed, dragons would become extinct forever! I couldn't let that happen. So my friends and I set out across enchanted lands to defy dangers and restore peace to the Kingdom of Fantasy!",
        img: 'https://books.google.com/books/content?id=A9WingEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73GehXdtIiNCJU5UBBJeDYcvSTzWQVpviIQONyhuzdZl9AVP8LpjFdjoFtBC_uxpvXU0rjmU1FevRQAzaIXvrHwZPfEUZRBbtZrIqcS3vbg4y8QjZM0plBSXtR_Ud1cYnY90J2W',
        buy: "https://geronimostilton.com/US-en/libri_top/scheda.php?id=3856"
    },
    {
        title:
            year:
        description:
    }
    {
        title:
            year:
        description:
    }
    {
        title:
            year:
        description:
    }


]