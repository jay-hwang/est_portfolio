# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS

User.create({
  first_name: "Esther",
  last_name: "Gibbs",
  username: "estgibbs",
  email: "esther.gibbs@fake.com",
  password: "letmein",
  profile_pic_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1488910435/est-profile_zyxawt.jpg"
})

User.create({
  first_name: "Jay",
  last_name: "Hwang",
  username: "jay",
  email: 'jayhwang@gmail.com',
  password: "password",
  profile_pic_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png"
})

User.create({
  first_name: "Comment",
  last_name: "Handler",
  username: "comment_handler",
  email: "comment@handle.com",
  password: "password",
  profile_pic_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png"
})

# TAGS

tags = [
  'Abortion',
  'Children',
  'Child Labor',
  'Child Trafficking',
  'Christian',
  'Collaboration',
  'Corruption',
  'Environment',
  'Economy',
  'Health',
  'Men',
  'Non Profit',
  'Politics',
  'Poverty',
  'Problematics',
  'Rescue',
  'Sex Trafficking',
  'Slavery',
  'Trafficking',
  'Unfair Wages',
  'Women'
]

tags.each do |tag|
  Tag.create({
    name: tag
  })
end

# DEVELOPMENT DB SEED
#
# blog_titles = [
#   'To be Great',
#   'Hello World',
#   'Even they said not to',
#   'Helping the Poor & Tired',
#   'Death, Life & Everything in Between',
#   'The Perfect Pair',
#   'To be or not to be',
#   'What is the Question',
#   'Mary had a Little Lamb',
#   'Whiteboarding Issues in the Tech Realm',
#   'A Breeze in a Warm, Summer Afternoon',
#   'Shoot For the Stars. Miss & walk on Clouds'
# ]
#
# blog_images = [
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1491079847/uyez1sa6mujyxjopivcm.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1491018003/bz088jffd4hayibtkgwn.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1491002475/pomvdhmioh82v5zov0rb.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1490822073/yxddhxe58pxdcit9m6fw.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1490822588/Screen_Shot_2017-03-29_at_2.10.18_PM_wk8b2c.png',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1490659985/tackling-trafficking-in-india-_december-2013_-lg_u0htds.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1490587822/mrzq7y1fsesgnsnap56m.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1490587822/mrzq7y1fsesgnsnap56m.jpg',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1484799234/main-img_zdjol1.png',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1481829551/couchbnb/san_fran.png',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1481831640/couchbnb/seattle.png',
#   'https://res.cloudinary.com/ddgtwtbre/image/upload/v1481832294/couchbnb/london.png'
# ]
#
# 12.times do |i|
#   Blog.create({
#     author_id: (rand(2) + 1),
#     title: blog_titles[i],
#     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
#     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
#
#     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
#
#     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
#     image_url: blog_images[i]
#   })
# end
#
# 12.times do |i|
#   blog_id = i + 1
#
#   (rand(5) + 1).times do |j|
#     tag_id = rand(tags.length) + 1
#     Tagging.create({
#       tag_id: tag_id,
#       blog_id: blog_id
#     })
#   end
#
# end
