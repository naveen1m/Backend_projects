const data = [
    {
        "likeCount": 10,
        "authorInfo": {
            "name": "John Doe",
            "profilePhoto": "https://i.pravatar.cc/200?img=1"
        },
        "comments": [
            {
                "name": "Alice",
                "visibility": "public",
                "comment": "Great post!",
                "image": "https://i.pravatar.cc/200?img=2"
            },
            {
                "name": "Bob",
                "visibility": "friends",
                "comment": "I agree!",
                "image": "https://i.pravatar.cc/200?img=3"
            },
            {
                "name": "Charlie",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=4"
            },
            {
                "name": "Emma",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=5"
            },
            {
                "name": "Oliver",
                "visibility": "friends",
                "comment": "Awesome!",
                "image": "https://i.pravatar.cc/200?img=6"
            }
        ],
        "timeStamp": 1689041670479,
        "post": {
            "textContent": "Just had an amazing day!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 5,
        "authorInfo": {
            "name": "Jane Smith",
            "profilePhoto": "https://i.pravatar.cc/200?img=7"
        },
        "comments": [
            {
                "name": "Eve",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=8"
            },
            {
                "name": "Tom",
                "visibility": "public",
                "comment": "Beautiful picture!",
                "image": "https://i.pravatar.cc/200?img=9"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to visit!",
                "image": "https://i.pravatar.cc/200?img=10"
            },
            {
                "name": "Jack",
                "visibility": "friends",
                "comment": "Awesome shot!",
                "image": "https://i.pravatar.cc/200?img=11"
            },
            {
                "name": "Liam",
                "visibility": "friends",
                "comment": "Great composition!",
                "image": "https://i.pravatar.cc/200?img=12"
            }
        ],
        "timeStamp": 1689043263974,
        "post": {
            "textContent": "Enjoying the sunny weather!",
            "images": [
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 2,
        "authorInfo": {
            "name": "David Brown",
            "profilePhoto": "https://i.pravatar.cc/200?img=13"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Yummy!",
                "image": "https://i.pravatar.cc/200?img=14"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Delicious!",
                "image": "https://i.pravatar.cc/200?img=15"
            },
            {
                "name": "Lucas",
                "visibility": "public",
                "comment": "I want to try it!",
                "image": "https://i.pravatar.cc/200?img=16"
            },
            {
                "name": "Mia",
                "visibility": "friends",
                "comment": "Looks mouth-watering!",
                "image": "https://i.pravatar.cc/200?img=17"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "Yum!",
                "image": "https://i.pravatar.cc/200?img=18"
            }
        ],
        "timeStamp": 1689042876157,
        "post": {
            "textContent": "New recipe: Chocolate cake!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 8,
        "authorInfo": {
            "name": "Sarah Johnson",
            "profilePhoto": "https://i.pravatar.cc/200?img=19"
        },
        "comments": [
            {
                "name": "Henry",
                "visibility": "public",
                "comment": "Looks refreshing!",
                "image": "https://i.pravatar.cc/200?img=20"
            },
            {
                "name": "Grace",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=21"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=22"
            },
            {
                "name": "Emily",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=23"
            },
            {
                "name": "Michael",
                "visibility": "friends",
                "comment": "Lovely colors!",
                "image": "https://i.pravatar.cc/200?img=24"
            },
            {
                "name": "Harper",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=25"
            }
        ],
        "timeStamp": 1689037849983,
        "post": {
            "textContent": "Having a delicious brunch!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 15,
        "authorInfo": {
            "name": "Michael Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=26"
        },
        "comments": [
            {
                "name": "Liam",
                "visibility": "public",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=27"
            },
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Wow!",
                "image": "https://i.pravatar.cc/200?img=28"
            },
            {
                "name": "Noah",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=29"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Impressive shot!",
                "image": "https://i.pravatar.cc/200?img=30"
            }
        ],
        "timeStamp": 1689035461693,
        "post": {
            "textContent": "Exploring the mountains!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "EdTech"
    },
    {
        "likeCount": 3,
        "authorInfo": {
            "name": "Lisa Thompson",
            "profilePhoto": "https://i.pravatar.cc/200?img=31"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Great book!",
                "image": "https://i.pravatar.cc/200?img=32"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I love that book too!",
                "image": "https://i.pravatar.cc/200?img=33"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Interesting read!",
                "image": "https://i.pravatar.cc/200?img=34"
            },
            {
                "name": "Amelia",
                "visibility": "friends",
                "comment": "One of my favorites!",
                "image": "https://i.pravatar.cc/200?img=35"
            },
            {
                "name": "Benjamin",
                "visibility": "friends",
                "comment": "I recommend it!",
                "image": "https://i.pravatar.cc/200?img=36"
            }
        ],
        "timeStamp": 1689012217631,
        "post": {
            "textContent": "Reading my favorite book!",
            "images": [
                "https://loremflickr.com/640/480/cars",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 12,
        "authorInfo": {
            "name": "Robert Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=37"
        },
        "comments": [
            {
                "name": "Emily",
                "visibility": "public",
                "comment": "Where is this?",
                "image": "https://i.pravatar.cc/200?img=38"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=39"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=40"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=41"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Absolutely stunning!",
                "image": "https://i.pravatar.cc/200?img=42"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=43"
            }
        ],
        "timeStamp": 1689025868092,
        "post": {
            "textContent": "Nature's wonders!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 7,
        "authorInfo": {
            "name": "Emily Davis",
            "profilePhoto": "https://i.pravatar.cc/200?img=44"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Nice shot!",
                "image": "https://i.pravatar.cc/200?img=45"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Beautiful composition!",
                "image": "https://i.pravatar.cc/200?img=46"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=47"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Love the colors!",
                "image": "https://i.pravatar.cc/200?img=48"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=49"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=50"
            }
        ],
        "timeStamp": 1689007062278,
        "post": {
            "textContent": "Capturing memories!",
            "images": [
                "https://loremflickr.com/640/480/world",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 6,
        "authorInfo": {
            "name": "Alexandra Martin",
            "profilePhoto": "https://i.pravatar.cc/200?img=51"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "So relaxing!",
                "image": "https://i.pravatar.cc/200?img=52"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=53"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing!",
                "image": "https://i.pravatar.cc/200?img=54"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Beautiful shot!",
                "image": "https://i.pravatar.cc/200?img=55"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=56"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=57"
            }
        ],
        "timeStamp": 1689004239084,
        "post": {
            "textContent": "A day at the beach!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 4,
        "authorInfo": {
            "name": "William Taylor",
            "profilePhoto": "https://i.pravatar.cc/200?img=58"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=59"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=60"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=61"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Stunning shot!",
                "image": "https://i.pravatar.cc/200?img=62"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Impressive!",
                "image": "https://i.pravatar.cc/200?img=63"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=64"
            }
        ],
        "timeStamp": 1689149122688,
        "post": {
            "textContent": "Enjoying the sunset!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/nature"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 9,
        "authorInfo": {
            "name": "Oliver Anderson",
            "profilePhoto": "https://i.pravatar.cc/200?img=65"
        },
        "comments": [
            {
                "name": "Mia",
                "visibility": "public",
                "comment": "So cute!",
                "image": "https://i.pravatar.cc/200?img=66"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Adorable!",
                "image": "https://i.pravatar.cc/200?img=67"
            },
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Lovely picture!",
                "image": "https://i.pravatar.cc/200?img=68"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Super cute!",
                "image": "https://i.pravatar.cc/200?img=69"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Aww, adorable!",
                "image": "https://i.pravatar.cc/200?img=70"
            }
        ],
        "timeStamp": 1689149562688,
        "post": {
            "textContent": "My furry friend!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 10,
        "authorInfo": {
            "name": "John Doe",
            "profilePhoto": "https://i.pravatar.cc/200?img=1"
        },
        "comments": [
            {
                "name": "Alice",
                "visibility": "public",
                "comment": "Great post!",
                "image": "https://i.pravatar.cc/200?img=2"
            },
            {
                "name": "Bob",
                "visibility": "friends",
                "comment": "I agree!",
                "image": "https://i.pravatar.cc/200?img=3"
            },
            {
                "name": "Charlie",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=4"
            },
            {
                "name": "Emma",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=5"
            },
            {
                "name": "Oliver",
                "visibility": "friends",
                "comment": "Awesome!",
                "image": "https://i.pravatar.cc/200?img=6"
            }
        ],
        "timeStamp": 1689041670479,
        "post": {
            "textContent": "Just had an amazing day!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 5,
        "authorInfo": {
            "name": "Jane Smith",
            "profilePhoto": "https://i.pravatar.cc/200?img=7"
        },
        "comments": [
            {
                "name": "Eve",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=8"
            },
            {
                "name": "Tom",
                "visibility": "public",
                "comment": "Beautiful picture!",
                "image": "https://i.pravatar.cc/200?img=9"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to visit!",
                "image": "https://i.pravatar.cc/200?img=10"
            },
            {
                "name": "Jack",
                "visibility": "friends",
                "comment": "Awesome shot!",
                "image": "https://i.pravatar.cc/200?img=11"
            },
            {
                "name": "Liam",
                "visibility": "friends",
                "comment": "Great composition!",
                "image": "https://i.pravatar.cc/200?img=12"
            }
        ],
        "timeStamp": 1689043263974,
        "post": {
            "textContent": "Enjoying the sunny weather!",
            "images": [
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 2,
        "authorInfo": {
            "name": "David Brown",
            "profilePhoto": "https://i.pravatar.cc/200?img=13"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Yummy!",
                "image": "https://i.pravatar.cc/200?img=14"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Delicious!",
                "image": "https://i.pravatar.cc/200?img=15"
            },
            {
                "name": "Lucas",
                "visibility": "public",
                "comment": "I want to try it!",
                "image": "https://i.pravatar.cc/200?img=16"
            },
            {
                "name": "Mia",
                "visibility": "friends",
                "comment": "Looks mouth-watering!",
                "image": "https://i.pravatar.cc/200?img=17"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "Yum!",
                "image": "https://i.pravatar.cc/200?img=18"
            }
        ],
        "timeStamp": 1689042876157,
        "post": {
            "textContent": "New recipe: Chocolate cake!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 8,
        "authorInfo": {
            "name": "Sarah Johnson",
            "profilePhoto": "https://i.pravatar.cc/200?img=19"
        },
        "comments": [
            {
                "name": "Henry",
                "visibility": "public",
                "comment": "Looks refreshing!",
                "image": "https://i.pravatar.cc/200?img=20"
            },
            {
                "name": "Grace",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=21"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=22"
            },
            {
                "name": "Emily",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=23"
            },
            {
                "name": "Michael",
                "visibility": "friends",
                "comment": "Lovely colors!",
                "image": "https://i.pravatar.cc/200?img=24"
            },
            {
                "name": "Harper",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=25"
            }
        ],
        "timeStamp": 1689037849983,
        "post": {
            "textContent": "Having a delicious brunch!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 15,
        "authorInfo": {
            "name": "Michael Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=26"
        },
        "comments": [
            {
                "name": "Liam",
                "visibility": "public",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=27"
            },
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Wow!",
                "image": "https://i.pravatar.cc/200?img=28"
            },
            {
                "name": "Noah",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=29"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Impressive shot!",
                "image": "https://i.pravatar.cc/200?img=30"
            }
        ],
        "timeStamp": 1689035461693,
        "post": {
            "textContent": "Exploring the mountains!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "EdTech"
    },
    {
        "likeCount": 3,
        "authorInfo": {
            "name": "Lisa Thompson",
            "profilePhoto": "https://i.pravatar.cc/200?img=31"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Great book!",
                "image": "https://i.pravatar.cc/200?img=32"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I love that book too!",
                "image": "https://i.pravatar.cc/200?img=33"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Interesting read!",
                "image": "https://i.pravatar.cc/200?img=34"
            },
            {
                "name": "Amelia",
                "visibility": "friends",
                "comment": "One of my favorites!",
                "image": "https://i.pravatar.cc/200?img=35"
            },
            {
                "name": "Benjamin",
                "visibility": "friends",
                "comment": "I recommend it!",
                "image": "https://i.pravatar.cc/200?img=36"
            }
        ],
        "timeStamp": 1689012217631,
        "post": {
            "textContent": "Reading my favorite book!",
            "images": [
                "https://loremflickr.com/640/480/cars",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 12,
        "authorInfo": {
            "name": "Robert Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=37"
        },
        "comments": [
            {
                "name": "Emily",
                "visibility": "public",
                "comment": "Where is this?",
                "image": "https://i.pravatar.cc/200?img=38"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=39"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=40"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=41"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Absolutely stunning!",
                "image": "https://i.pravatar.cc/200?img=42"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=43"
            }
        ],
        "timeStamp": 1689025868092,
        "post": {
            "textContent": "Nature's wonders!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 7,
        "authorInfo": {
            "name": "Emily Davis",
            "profilePhoto": "https://i.pravatar.cc/200?img=44"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Nice shot!",
                "image": "https://i.pravatar.cc/200?img=45"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Beautiful composition!",
                "image": "https://i.pravatar.cc/200?img=46"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=47"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Love the colors!",
                "image": "https://i.pravatar.cc/200?img=48"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=49"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=50"
            }
        ],
        "timeStamp": 1689007062278,
        "post": {
            "textContent": "Capturing memories!",
            "images": [
                "https://loremflickr.com/640/480/world",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 6,
        "authorInfo": {
            "name": "Alexandra Martin",
            "profilePhoto": "https://i.pravatar.cc/200?img=51"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "So relaxing!",
                "image": "https://i.pravatar.cc/200?img=52"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=53"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing!",
                "image": "https://i.pravatar.cc/200?img=54"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Beautiful shot!",
                "image": "https://i.pravatar.cc/200?img=55"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=56"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=57"
            }
        ],
        "timeStamp": 1689004239084,
        "post": {
            "textContent": "A day at the beach!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 4,
        "authorInfo": {
            "name": "William Taylor",
            "profilePhoto": "https://i.pravatar.cc/200?img=58"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=59"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=60"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=61"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Stunning shot!",
                "image": "https://i.pravatar.cc/200?img=62"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Impressive!",
                "image": "https://i.pravatar.cc/200?img=63"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=64"
            }
        ],
        "timeStamp": 1689149122688,
        "post": {
            "textContent": "Enjoying the sunset!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/nature"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 9,
        "authorInfo": {
            "name": "Oliver Anderson",
            "profilePhoto": "https://i.pravatar.cc/200?img=65"
        },
        "comments": [
            {
                "name": "Mia",
                "visibility": "public",
                "comment": "So cute!",
                "image": "https://i.pravatar.cc/200?img=66"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Adorable!",
                "image": "https://i.pravatar.cc/200?img=67"
            },
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Lovely picture!",
                "image": "https://i.pravatar.cc/200?img=68"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Super cute!",
                "image": "https://i.pravatar.cc/200?img=69"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Aww, adorable!",
                "image": "https://i.pravatar.cc/200?img=70"
            }
        ],
        "timeStamp": 1689149562688,
        "post": {
            "textContent": "My furry friend!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 10,
        "authorInfo": {
            "name": "John Doe",
            "profilePhoto": "https://i.pravatar.cc/200?img=1"
        },
        "comments": [
            {
                "name": "Alice",
                "visibility": "public",
                "comment": "Great post!",
                "image": "https://i.pravatar.cc/200?img=2"
            },
            {
                "name": "Bob",
                "visibility": "friends",
                "comment": "I agree!",
                "image": "https://i.pravatar.cc/200?img=3"
            },
            {
                "name": "Charlie",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=4"
            },
            {
                "name": "Emma",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=5"
            },
            {
                "name": "Oliver",
                "visibility": "friends",
                "comment": "Awesome!",
                "image": "https://i.pravatar.cc/200?img=6"
            }
        ],
        "timeStamp": 1689041670479,
        "post": {
            "textContent": "Just had an amazing day!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 5,
        "authorInfo": {
            "name": "Jane Smith",
            "profilePhoto": "https://i.pravatar.cc/200?img=7"
        },
        "comments": [
            {
                "name": "Eve",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=8"
            },
            {
                "name": "Tom",
                "visibility": "public",
                "comment": "Beautiful picture!",
                "image": "https://i.pravatar.cc/200?img=9"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to visit!",
                "image": "https://i.pravatar.cc/200?img=10"
            },
            {
                "name": "Jack",
                "visibility": "friends",
                "comment": "Awesome shot!",
                "image": "https://i.pravatar.cc/200?img=11"
            },
            {
                "name": "Liam",
                "visibility": "friends",
                "comment": "Great composition!",
                "image": "https://i.pravatar.cc/200?img=12"
            }
        ],
        "timeStamp": 1689043263974,
        "post": {
            "textContent": "Enjoying the sunny weather!",
            "images": [
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 2,
        "authorInfo": {
            "name": "David Brown",
            "profilePhoto": "https://i.pravatar.cc/200?img=13"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Yummy!",
                "image": "https://i.pravatar.cc/200?img=14"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Delicious!",
                "image": "https://i.pravatar.cc/200?img=15"
            },
            {
                "name": "Lucas",
                "visibility": "public",
                "comment": "I want to try it!",
                "image": "https://i.pravatar.cc/200?img=16"
            },
            {
                "name": "Mia",
                "visibility": "friends",
                "comment": "Looks mouth-watering!",
                "image": "https://i.pravatar.cc/200?img=17"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "Yum!",
                "image": "https://i.pravatar.cc/200?img=18"
            }
        ],
        "timeStamp": 1689042876157,
        "post": {
            "textContent": "New recipe: Chocolate cake!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 8,
        "authorInfo": {
            "name": "Sarah Johnson",
            "profilePhoto": "https://i.pravatar.cc/200?img=19"
        },
        "comments": [
            {
                "name": "Henry",
                "visibility": "public",
                "comment": "Looks refreshing!",
                "image": "https://i.pravatar.cc/200?img=20"
            },
            {
                "name": "Grace",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=21"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=22"
            },
            {
                "name": "Emily",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=23"
            },
            {
                "name": "Michael",
                "visibility": "friends",
                "comment": "Lovely colors!",
                "image": "https://i.pravatar.cc/200?img=24"
            },
            {
                "name": "Harper",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=25"
            }
        ],
        "timeStamp": 1689037849983,
        "post": {
            "textContent": "Having a delicious brunch!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 15,
        "authorInfo": {
            "name": "Michael Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=26"
        },
        "comments": [
            {
                "name": "Liam",
                "visibility": "public",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=27"
            },
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Wow!",
                "image": "https://i.pravatar.cc/200?img=28"
            },
            {
                "name": "Noah",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=29"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Impressive shot!",
                "image": "https://i.pravatar.cc/200?img=30"
            }
        ],
        "timeStamp": 1689035461693,
        "post": {
            "textContent": "Exploring the mountains!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "EdTech"
    },
    {
        "likeCount": 3,
        "authorInfo": {
            "name": "Lisa Thompson",
            "profilePhoto": "https://i.pravatar.cc/200?img=31"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Great book!",
                "image": "https://i.pravatar.cc/200?img=32"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I love that book too!",
                "image": "https://i.pravatar.cc/200?img=33"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Interesting read!",
                "image": "https://i.pravatar.cc/200?img=34"
            },
            {
                "name": "Amelia",
                "visibility": "friends",
                "comment": "One of my favorites!",
                "image": "https://i.pravatar.cc/200?img=35"
            },
            {
                "name": "Benjamin",
                "visibility": "friends",
                "comment": "I recommend it!",
                "image": "https://i.pravatar.cc/200?img=36"
            }
        ],
        "timeStamp": 1689012217631,
        "post": {
            "textContent": "Reading my favorite book!",
            "images": [
                "https://loremflickr.com/640/480/cars",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 12,
        "authorInfo": {
            "name": "Robert Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=37"
        },
        "comments": [
            {
                "name": "Emily",
                "visibility": "public",
                "comment": "Where is this?",
                "image": "https://i.pravatar.cc/200?img=38"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=39"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=40"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=41"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Absolutely stunning!",
                "image": "https://i.pravatar.cc/200?img=42"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=43"
            }
        ],
        "timeStamp": 1689025868092,
        "post": {
            "textContent": "Nature's wonders!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 7,
        "authorInfo": {
            "name": "Emily Davis",
            "profilePhoto": "https://i.pravatar.cc/200?img=44"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Nice shot!",
                "image": "https://i.pravatar.cc/200?img=45"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Beautiful composition!",
                "image": "https://i.pravatar.cc/200?img=46"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=47"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Love the colors!",
                "image": "https://i.pravatar.cc/200?img=48"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=49"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=50"
            }
        ],
        "timeStamp": 1689007062278,
        "post": {
            "textContent": "Capturing memories!",
            "images": [
                "https://loremflickr.com/640/480/world",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 6,
        "authorInfo": {
            "name": "Alexandra Martin",
            "profilePhoto": "https://i.pravatar.cc/200?img=51"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "So relaxing!",
                "image": "https://i.pravatar.cc/200?img=52"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=53"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing!",
                "image": "https://i.pravatar.cc/200?img=54"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Beautiful shot!",
                "image": "https://i.pravatar.cc/200?img=55"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=56"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=57"
            }
        ],
        "timeStamp": 1689004239084,
        "post": {
            "textContent": "A day at the beach!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 4,
        "authorInfo": {
            "name": "William Taylor",
            "profilePhoto": "https://i.pravatar.cc/200?img=58"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=59"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=60"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=61"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Stunning shot!",
                "image": "https://i.pravatar.cc/200?img=62"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Impressive!",
                "image": "https://i.pravatar.cc/200?img=63"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=64"
            }
        ],
        "timeStamp": 1689149122688,
        "post": {
            "textContent": "Enjoying the sunset!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/nature"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 9,
        "authorInfo": {
            "name": "Oliver Anderson",
            "profilePhoto": "https://i.pravatar.cc/200?img=65"
        },
        "comments": [
            {
                "name": "Mia",
                "visibility": "public",
                "comment": "So cute!",
                "image": "https://i.pravatar.cc/200?img=66"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Adorable!",
                "image": "https://i.pravatar.cc/200?img=67"
            },
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Lovely picture!",
                "image": "https://i.pravatar.cc/200?img=68"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Super cute!",
                "image": "https://i.pravatar.cc/200?img=69"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Aww, adorable!",
                "image": "https://i.pravatar.cc/200?img=70"
            }
        ],
        "timeStamp": 1689149562688,
        "post": {
            "textContent": "My furry friend!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 10,
        "authorInfo": {
            "name": "John Doe",
            "profilePhoto": "https://i.pravatar.cc/200?img=1"
        },
        "comments": [
            {
                "name": "Alice",
                "visibility": "public",
                "comment": "Great post!",
                "image": "https://i.pravatar.cc/200?img=2"
            },
            {
                "name": "Bob",
                "visibility": "friends",
                "comment": "I agree!",
                "image": "https://i.pravatar.cc/200?img=3"
            },
            {
                "name": "Charlie",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=4"
            },
            {
                "name": "Emma",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=5"
            },
            {
                "name": "Oliver",
                "visibility": "friends",
                "comment": "Awesome!",
                "image": "https://i.pravatar.cc/200?img=6"
            }
        ],
        "timeStamp": 1689041670479,
        "post": {
            "textContent": "Just had an amazing day!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 5,
        "authorInfo": {
            "name": "Jane Smith",
            "profilePhoto": "https://i.pravatar.cc/200?img=7"
        },
        "comments": [
            {
                "name": "Eve",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=8"
            },
            {
                "name": "Tom",
                "visibility": "public",
                "comment": "Beautiful picture!",
                "image": "https://i.pravatar.cc/200?img=9"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to visit!",
                "image": "https://i.pravatar.cc/200?img=10"
            },
            {
                "name": "Jack",
                "visibility": "friends",
                "comment": "Awesome shot!",
                "image": "https://i.pravatar.cc/200?img=11"
            },
            {
                "name": "Liam",
                "visibility": "friends",
                "comment": "Great composition!",
                "image": "https://i.pravatar.cc/200?img=12"
            }
        ],
        "timeStamp": 1689043263974,
        "post": {
            "textContent": "Enjoying the sunny weather!",
            "images": [
                "https://loremflickr.com/640/480/nature",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 2,
        "authorInfo": {
            "name": "David Brown",
            "profilePhoto": "https://i.pravatar.cc/200?img=13"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Yummy!",
                "image": "https://i.pravatar.cc/200?img=14"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Delicious!",
                "image": "https://i.pravatar.cc/200?img=15"
            },
            {
                "name": "Lucas",
                "visibility": "public",
                "comment": "I want to try it!",
                "image": "https://i.pravatar.cc/200?img=16"
            },
            {
                "name": "Mia",
                "visibility": "friends",
                "comment": "Looks mouth-watering!",
                "image": "https://i.pravatar.cc/200?img=17"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "Yum!",
                "image": "https://i.pravatar.cc/200?img=18"
            }
        ],
        "timeStamp": 1689042876157,
        "post": {
            "textContent": "New recipe: Chocolate cake!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 8,
        "authorInfo": {
            "name": "Sarah Johnson",
            "profilePhoto": "https://i.pravatar.cc/200?img=19"
        },
        "comments": [
            {
                "name": "Henry",
                "visibility": "public",
                "comment": "Looks refreshing!",
                "image": "https://i.pravatar.cc/200?img=20"
            },
            {
                "name": "Grace",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=21"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=22"
            },
            {
                "name": "Emily",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=23"
            },
            {
                "name": "Michael",
                "visibility": "friends",
                "comment": "Lovely colors!",
                "image": "https://i.pravatar.cc/200?img=24"
            },
            {
                "name": "Harper",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=25"
            }
        ],
        "timeStamp": 1689037849983,
        "post": {
            "textContent": "Having a delicious brunch!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 15,
        "authorInfo": {
            "name": "Michael Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=26"
        },
        "comments": [
            {
                "name": "Liam",
                "visibility": "public",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=27"
            },
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Wow!",
                "image": "https://i.pravatar.cc/200?img=28"
            },
            {
                "name": "Noah",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=29"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Impressive shot!",
                "image": "https://i.pravatar.cc/200?img=30"
            }
        ],
        "timeStamp": 1689035461693,
        "post": {
            "textContent": "Exploring the mountains!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "EdTech"
    },
    {
        "likeCount": 3,
        "authorInfo": {
            "name": "Lisa Thompson",
            "profilePhoto": "https://i.pravatar.cc/200?img=31"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Great book!",
                "image": "https://i.pravatar.cc/200?img=32"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I love that book too!",
                "image": "https://i.pravatar.cc/200?img=33"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Interesting read!",
                "image": "https://i.pravatar.cc/200?img=34"
            },
            {
                "name": "Amelia",
                "visibility": "friends",
                "comment": "One of my favorites!",
                "image": "https://i.pravatar.cc/200?img=35"
            },
            {
                "name": "Benjamin",
                "visibility": "friends",
                "comment": "I recommend it!",
                "image": "https://i.pravatar.cc/200?img=36"
            }
        ],
        "timeStamp": 1689012217631,
        "post": {
            "textContent": "Reading my favorite book!",
            "images": [
                "https://loremflickr.com/640/480/cars",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 12,
        "authorInfo": {
            "name": "Robert Wilson",
            "profilePhoto": "https://i.pravatar.cc/200?img=37"
        },
        "comments": [
            {
                "name": "Emily",
                "visibility": "public",
                "comment": "Where is this?",
                "image": "https://i.pravatar.cc/200?img=38"
            },
            {
                "name": "Daniel",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=39"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=40"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=41"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Absolutely stunning!",
                "image": "https://i.pravatar.cc/200?img=42"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=43"
            }
        ],
        "timeStamp": 1689025868092,
        "post": {
            "textContent": "Nature's wonders!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "SQL"
    },
    {
        "likeCount": 7,
        "authorInfo": {
            "name": "Emily Davis",
            "profilePhoto": "https://i.pravatar.cc/200?img=44"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Nice shot!",
                "image": "https://i.pravatar.cc/200?img=45"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Beautiful composition!",
                "image": "https://i.pravatar.cc/200?img=46"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Incredible!",
                "image": "https://i.pravatar.cc/200?img=47"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Love the colors!",
                "image": "https://i.pravatar.cc/200?img=48"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Stunning view!",
                "image": "https://i.pravatar.cc/200?img=49"
            },
            {
                "name": "Ava",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=50"
            }
        ],
        "timeStamp": 1689007062278,
        "post": {
            "textContent": "Capturing memories!",
            "images": [
                "https://loremflickr.com/640/480/world",
                "https://loremflickr.com/640/480/cars"
            ]
        },
        "postType": "Marketing"
    },
    {
        "likeCount": 6,
        "authorInfo": {
            "name": "Alexandra Martin",
            "profilePhoto": "https://i.pravatar.cc/200?img=51"
        },
        "comments": [
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "So relaxing!",
                "image": "https://i.pravatar.cc/200?img=52"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "I want to be there!",
                "image": "https://i.pravatar.cc/200?img=53"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing!",
                "image": "https://i.pravatar.cc/200?img=54"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Beautiful shot!",
                "image": "https://i.pravatar.cc/200?img=55"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "I wish I could be there!",
                "image": "https://i.pravatar.cc/200?img=56"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "Stunning!",
                "image": "https://i.pravatar.cc/200?img=57"
            }
        ],
        "timeStamp": 1689004239084,
        "post": {
            "textContent": "A day at the beach!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky"
            ]
        },
        "postType": "Management"
    },
    {
        "likeCount": 4,
        "authorInfo": {
            "name": "William Taylor",
            "profilePhoto": "https://i.pravatar.cc/200?img=58"
        },
        "comments": [
            {
                "name": "Olivia",
                "visibility": "public",
                "comment": "Beautiful!",
                "image": "https://i.pravatar.cc/200?img=59"
            },
            {
                "name": "Sophia",
                "visibility": "public",
                "comment": "Lovely!",
                "image": "https://i.pravatar.cc/200?img=60"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Amazing view!",
                "image": "https://i.pravatar.cc/200?img=61"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Stunning shot!",
                "image": "https://i.pravatar.cc/200?img=62"
            },
            {
                "name": "Henry",
                "visibility": "friends",
                "comment": "Impressive!",
                "image": "https://i.pravatar.cc/200?img=63"
            },
            {
                "name": "Emma",
                "visibility": "friends",
                "comment": "This place looks magical!",
                "image": "https://i.pravatar.cc/200?img=64"
            }
        ],
        "timeStamp": 1689149122688,
        "post": {
            "textContent": "Enjoying the sunset!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/sky",
                "https://loremflickr.com/640/480/nature"
            ]
        },
        "postType": "Question"
    },
    {
        "likeCount": 9,
        "authorInfo": {
            "name": "Oliver Anderson",
            "profilePhoto": "https://i.pravatar.cc/200?img=65"
        },
        "comments": [
            {
                "name": "Mia",
                "visibility": "public",
                "comment": "So cute!",
                "image": "https://i.pravatar.cc/200?img=66"
            },
            {
                "name": "William",
                "visibility": "public",
                "comment": "Adorable!",
                "image": "https://i.pravatar.cc/200?img=67"
            },
            {
                "name": "Oliver",
                "visibility": "public",
                "comment": "Lovely picture!",
                "image": "https://i.pravatar.cc/200?img=68"
            },
            {
                "name": "Charlotte",
                "visibility": "friends",
                "comment": "Super cute!",
                "image": "https://i.pravatar.cc/200?img=69"
            },
            {
                "name": "James",
                "visibility": "friends",
                "comment": "Aww, adorable!",
                "image": "https://i.pravatar.cc/200?img=70"
            }
        ],
        "timeStamp": 1689149562688,
        "post": {
            "textContent": "My furry friend!",
            "images": [
                "https://loremflickr.com/640/480/building",
                "https://loremflickr.com/640/480/world"
            ]
        },
        "postType": "Marketing"
    }
]

export default data