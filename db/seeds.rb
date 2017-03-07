# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({
  first_name: "Esther",
  last_name: "Gibbs",
  username: "estgibbs",
  password: "letmein",
  profile_pic_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1488910435/est-profile_zyxawt.jpg"
})


User.create({
  first_name: "Jay",
  last_name: "Hwang",
  username: "jay",
  password: "password",
  profile_pic_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1488910435/est-profile_zyxawt.jpg"
})
